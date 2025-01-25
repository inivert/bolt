-- Function to set a user as admin by email
CREATE OR REPLACE FUNCTION set_user_as_admin(user_email TEXT)
RETURNS void AS $$
BEGIN
  -- Update auth.users metadata
  UPDATE auth.users 
  SET raw_user_meta_data = jsonb_set(
    COALESCE(raw_user_meta_data, '{}'::jsonb),
    '{role}',
    '"admin"'
  )
  WHERE email = user_email;

  -- Update users table
  UPDATE users
  SET role = 'admin'
  WHERE email = user_email;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create admin user function that can be called later
CREATE OR REPLACE FUNCTION create_admin_user()
RETURNS void AS $$
BEGIN
  -- First ensure the role exists in the users table
  UPDATE users
  SET role = 'admin'
  WHERE email IN (
    SELECT email 
    FROM users 
    LIMIT 1
  );

  -- Then update the auth metadata
  UPDATE auth.users
  SET raw_user_meta_data = jsonb_set(
    COALESCE(raw_user_meta_data, '{}'::jsonb),
    '{role}',
    '"admin"'
  )
  WHERE email IN (
    SELECT email 
    FROM users 
    LIMIT 1
  );
END;
$$ LANGUAGE plpgsql SECURITY DEFINER; 