"use client"

import React, { useEffect, useState } from "react"
import { supabase } from "@/lib/supabase/client"

export default function DebugPage() {
  const [debugInfo, setDebugInfo] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const runDebug = async () => {
      const info = {}
      info.env = {
        VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
        VITE_SUPABASE_ANON_KEY: !!import.meta.env.VITE_SUPABASE_ANON_KEY,
        VITE_SUPABASE_ANON_KEY_LENGTH: import.meta.env.VITE_SUPABASE_ANON_KEY?.length
      }
      info.supabaseClient = !!supabase
      try {
        const { data, error } = await supabase.auth.getSession()
        info.session = {
          hasSession: !!data?.session,
          hasUser: !!data?.session?.user,
          error: error?.message,
          userId: data?.session?.user?.id,
          userEmail: data?.session?.user?.email
        }
      } catch (err) {
        info.session = { error: err.message }
      }

      setDebugInfo(info)
      setLoading(false)
    }

    runDebug()
  }, [])

  if (loading) {
    return <div className="p-8">Loading debug info...</div>
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Debug Information</h1>

      <div className="space-y-6">
        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Environment Variables</h2>
          <pre className="text-sm">{JSON.stringify(debugInfo.env, null, 2)}</pre>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Supabase Client</h2>
          <pre className="text-sm">{JSON.stringify(debugInfo.supabaseClient, null, 2)}</pre>
        </div>

        <div className="bg-gray-100 p-4 rounded">
          <h2 className="font-bold mb-2">Session Info</h2>
          <pre className="text-sm">{JSON.stringify(debugInfo.session, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
