import { createClient as createSupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://zkojpqiojdbdncmwruer.supabase.co"
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseKey) {
  console.error("Missing VITE_SUPABASE_ANON_KEY environment variable")
  throw new Error("Missing VITE_SUPABASE_ANON_KEY environment variable")
}

console.log('Supabase URL:', supabaseUrl)
console.log('Supabase Key exists:', !!supabaseKey)

// Create a singleton instance to avoid multiple GoTrueClient instances
let supabaseInstance = null

export const supabase = (() => {
  if (!supabaseInstance) {
    console.log('Creating Supabase client instance...')
    supabaseInstance = createSupabaseClient(supabaseUrl, supabaseKey, {
      auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true,
        flowType: 'pkce',
        storage: window.localStorage,
        storageKey: 'supabase.auth.token',
        debug: false // Disable debug logging
      },
      global: {
        headers: {
          'apikey': supabaseKey,
          'Authorization': `Bearer ${supabaseKey}`
        }
      }
    })
    console.log('Supabase client created successfully')
  }
  return supabaseInstance
})()

export const createClient = () => {
  console.log('Warning: createClient() called - consider using the singleton supabase export instead')
  return createSupabaseClient(supabaseUrl, supabaseKey, {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
      flowType: 'pkce',
      storage: window.localStorage,
      storageKey: 'supabase.auth.token',
      debug: true
    },
    global: {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`
      }
    }
  })
}
