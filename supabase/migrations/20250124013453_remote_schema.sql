-- Drop existing trigger and function if they exist
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
DROP FUNCTION IF EXISTS public.handle_new_user();

-- Ensure proper schema usage
SET search_path TO public;

-- Create consolidated trigger function with better error handling
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER 
SECURITY DEFINER
SET search_path = public
LANGUAGE plpgsql
AS $$
DECLARE
  _role user_role;
BEGIN
  -- Convert role with explicit error handling
  BEGIN
    _role := COALESCE(NEW.raw_user_meta_data->>'role', 'user')::user_role;
  EXCEPTION WHEN OTHERS THEN
    _role := 'user'::user_role;
  END;

  -- Attempt insert with explicit error handling
  BEGIN
    -- Disable RLS for this transaction
    SET LOCAL rls.force_admin_role = 'on';
    
    INSERT INTO public.users (id, email, role, full_name)
    VALUES (
      NEW.id,
      NEW.email,
      _role,
      COALESCE(NEW.raw_user_meta_data->>'name', '')
    );
  EXCEPTION WHEN unique_violation THEN
    -- Ignore duplicate key violations
    NULL;
  WHEN OTHERS THEN
    RAISE LOG 'Error in handle_new_user: % %', SQLERRM, SQLSTATE;
    RAISE EXCEPTION 'Error in handle_new_user: % %', SQLERRM, SQLSTATE;
  END;
  
  RETURN NEW;
END;
$$;

-- Set ownership and permissions
ALTER FUNCTION public.handle_new_user() OWNER TO postgres;

-- Grant necessary permissions
GRANT USAGE ON SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL TABLES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL SEQUENCES IN SCHEMA public TO postgres, anon, authenticated, service_role;
GRANT ALL ON ALL FUNCTIONS IN SCHEMA public TO postgres, anon, authenticated, service_role;

-- Ensure auth schema permissions
GRANT USAGE ON SCHEMA auth TO postgres, authenticated, service_role;
GRANT SELECT ON auth.users TO postgres, authenticated, service_role;

-- Temporarily disable RLS to allow policy creation
ALTER TABLE public.users DISABLE ROW LEVEL SECURITY;

-- Drop existing policies
DROP POLICY IF EXISTS "Enable insert for auth trigger" ON users;

-- Create insert policy
CREATE POLICY "Enable insert for auth trigger" ON public.users
FOR INSERT TO postgres, service_role
WITH CHECK (true);

-- Re-enable RLS
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Recreate trigger
CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
