-- Update the specified user to admin role
UPDATE auth.users 
SET raw_user_meta_data = jsonb_set(
  COALESCE(raw_user_meta_data, '{}'::jsonb),
  '{role}',
  '"admin"'
)
WHERE email = '3d42bace-4eee-442f-9ecf-a38090e4435c';

-- Update the users table to match
UPDATE users
SET role = 'admin'
WHERE id = '3d42bace-4eee-442f-9ecf-a38090e4435c'; 