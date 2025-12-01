"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { createClient } from "@/lib/supabase/client"

export default function AuthCallbackPage() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleAuthCallback = async () => {
      const supabase = createClient()

      const { data, error } = await supabase.auth.getSession()

      if (error) {
        console.error("Auth callback error:", error)
        navigate("/auth/login")
        return
      }

      if (data.session) {
        navigate("/profile")
      } else {
        navigate("/auth/login")
      }
    }

    handleAuthCallback()
  }, [navigate])

  return (
    <div className="w-full flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
        <p className="mt-4 text-lg">Completing sign in...</p>
      </div>
    </div>
  )
}
