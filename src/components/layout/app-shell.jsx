import type React from "react"
import { createClient } from "@/lib/supabase/server"
import { Navbar } from "./navbar"

export async function AppShell({ children }: { children: React.ReactNode }) {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  let profile = null
  if (user) {
    const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single()
    profile = data
  }

  return (
    <div className="w-full flex flex-col">
      <Navbar user={user} profile={profile} />
      <main className="flex-1 container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
