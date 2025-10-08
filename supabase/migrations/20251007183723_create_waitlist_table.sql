/*
  # Create Waitlist Table

  1. New Tables
    - `waitlist`
      - `id` (uuid, primary key) - Unique identifier for each waitlist entry
      - `email` (text, unique) - Email address of the user joining the waitlist
      - `created_at` (timestamptz) - Timestamp when the user joined
      - `metadata` (jsonb) - Optional field for storing additional data (referral source, location, etc.)

  2. Security
    - Enable RLS on `waitlist` table
    - Add policy for anonymous users to insert their own waitlist entries
    - Add policy for authenticated admins to view all waitlist entries

  3. Indexes
    - Add index on email for faster lookups
    - Add index on created_at for sorting by join date

  4. Notes
    - Email is unique to prevent duplicate submissions
    - Default timestamp captures exact join time
    - JSONB metadata field allows flexible data capture without schema changes
*/

CREATE TABLE IF NOT EXISTS waitlist (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now(),
  metadata jsonb DEFAULT '{}'::jsonb
);

-- Add indexes for performance
CREATE INDEX IF NOT EXISTS idx_waitlist_email ON waitlist(email);
CREATE INDEX IF NOT EXISTS idx_waitlist_created_at ON waitlist(created_at DESC);

-- Enable Row Level Security
ALTER TABLE waitlist ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert their email (for public waitlist)
CREATE POLICY "Anyone can join waitlist"
  ON waitlist
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Only authenticated users (admins) can view all waitlist entries
CREATE POLICY "Authenticated users can view waitlist"
  ON waitlist
  FOR SELECT
  TO authenticated
  USING (true);