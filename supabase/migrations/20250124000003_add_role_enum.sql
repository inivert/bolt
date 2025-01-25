-- Create role enum type
DO $$ BEGIN
    CREATE TYPE user_role AS ENUM ('user', 'admin');
EXCEPTION
    WHEN duplicate_object THEN null;
END $$;

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view their own data and admins can view all" ON users;
DROP POLICY IF EXISTS "Users can update their own data and admins can update all" ON users;
DROP POLICY IF EXISTS "Only admins can delete users" ON users;

-- Create temporary table to store data
CREATE TEMP TABLE users_backup AS SELECT * FROM users;

-- Drop and recreate users table with enum
DROP TABLE users;

CREATE TABLE users (
  id UUID DEFAULT auth.uid() PRIMARY KEY,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()) NOT NULL,
  email TEXT NOT NULL UNIQUE,
  full_name TEXT,
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE,
  last_sign_in TIMESTAMP WITH TIME ZONE,
  is_active BOOLEAN DEFAULT true NOT NULL,
  role user_role DEFAULT 'user' NOT NULL
);

-- Restore data
INSERT INTO users 
SELECT 
  id,
  created_at,
  email,
  full_name,
  avatar_url,
  updated_at,
  last_sign_in,
  is_active,
  role::user_role
FROM users_backup;

-- Drop temporary table
DROP TABLE users_backup;

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Recreate policies
CREATE POLICY "Users can view their own data and admins can view all" ON users
  FOR SELECT USING (
    auth.uid() = id OR 
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Users can update their own data and admins can update all" ON users
  FOR UPDATE USING (
    auth.uid() = id OR 
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

CREATE POLICY "Only admins can delete users" ON users
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM users 
      WHERE id = auth.uid() AND role = 'admin'
    )
  ); 