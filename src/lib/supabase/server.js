import { createClient } from "@supabase/supabase-js"

export function createSupabaseClient() {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

  // Optional: add a safety check (recommended for production)
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error("Missing Supabase URL or Anon Key. Check your .env file.")
  }

  return createClient(supabaseUrl, supabaseAnonKey)
}