// "use client"

// import { useState, useEffect } from "react"
// import { supabase } from "@/lib/supabase/client"
// import { Navbar } from "./navbar"

// export function AppShell({ children }) {
//   const [user, setUser] = useState(null)
//   const [profile, setProfile] = useState(null)

//   useEffect(() => {
//     let isMounted = true;

//     const loadUser = async () => {
//       // 1️⃣ Safe session check
//       const { data } = await supabase.auth.getSession()

//       if (!data?.session) {
//         console.log("No auth session found.")
//         if (isMounted) {
//           setUser(null)
//           setProfile(null)
//         }
//         return
//       }

//       // 2️⃣ Safe user fetch
//       const { data: userData, error } = await supabase.auth.getUser()

//       if (error) {
//         console.error("Error fetching user:", error)
//         return
//       }

//       if (isMounted) {
//         setUser(userData.user)
//         localStorage.setItem('user', JSON.stringify(userData.user))
//       }

//       // 3️⃣ Fetch profile only when user exists
//       if (userData?.user?.id) {
//         const { data: profileData } = await supabase
//           .from("profiles")
//           .select("*")
//           .eq("id", userData.user.id)
//           .single()

//         if (isMounted) {
//           setProfile(profileData)
//           localStorage.setItem('profile', JSON.stringify(profileData))
//         }
//       }
//     }

//     loadUser()

//     // 4️⃣ Auth listener updates UI instantly
//     const { data: listener } = supabase.auth.onAuthStateChange(async (_, session) => {
//       if (!session) {
//         setUser(null)
//         setProfile(null)
//         localStorage.removeItem('user')
//         localStorage.removeItem('profile')
//         return
//       }

//       setUser(session.user)
//       localStorage.setItem('user', JSON.stringify(session.user))

//       // Fetch profile again on login
//       const { data: profileData } = await supabase
//         .from("profiles")
//         .select("*")
//         .eq("id", session.user.id)
//         .single()

//       setProfile(profileData)
//       localStorage.setItem('profile', JSON.stringify(profileData))
//     })

//     return () => {
//       isMounted = false
//       listener?.subscription?.unsubscribe()
//     }
//   }, [])

//   return (
//     <div className="w-full flex flex-col">
//       <Navbar user={user} profile={profile} />
//       {/* <main className="flex-1 container mx-auto px-4 py-8">
//         {children}
//       </main> */}
//       <main className={`flex-1 ${location.pathname === "/portfolio"
//         ? "px-0 mx-0 w-full"
//         : "container mx-auto px-4"} py-8`}>
//         {children}
//       </main>

//     </div>
//   )
// }

"use client"

import { Navbar } from "./navbar"
import { useLocation } from "react-router-dom"

export function AppShell({ children }) {
  const location = useLocation()

  return (
    <div className="w-full flex flex-col">
      <Navbar />

      <main
        className={`flex-1 ${location.pathname === "/" || location.pathname.startsWith("/portfolio") || location.pathname.startsWith("/about") || location.pathname.startsWith("/services") || location.pathname.startsWith("/blog") || location.pathname === "/contact" || location.pathname === "/profile" || location.pathname.startsWith("/auth")
            ? "w-full p-0 m-0"
            : "container mx-auto px-4"
          }`}
      >
        {children}
      </main>

    </div>
  )
}
