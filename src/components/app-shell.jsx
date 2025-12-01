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
