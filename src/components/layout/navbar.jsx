"use client"

import type { Profile } from "@/types/database"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  Shield,
  User,
  Users,
  ChevronDown,
  Home,
  Building2,
  Briefcase,
  FolderOpen,
  BookOpen,
  Mail,
  Phone,
  Target,
  Award,
  Code,
  Palette,
  TrendingUp,
  Megaphone,
} from "lucide-react"
import React from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useState } from "react"

type NavbarProps = {
  user: { id: string; email?: string } | null
  profile: Profile | null
}

export function Navbar({ user, profile }: NavbarProps) {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push("/")
    router.refresh()
  }

  const getInitials = (name: string | null) => {
    if (!name) return "?"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const isAdmin = profile?.role === "admin"

  const publicNavItems = [
    { href: "/", label: "Home", icon: Home },
    {
      label: "About Us",
      icon: Building2,
      dropdown: [
        { href: "/about", label: "Our Company", icon: Building2 },
        { href: "/about/mission", label: "Mission & Vision", icon: Target },
        { href: "/about/team", label: "Our Team", icon: Users },
        { href: "/about/careers", label: "Careers", icon: Award },
      ],
    },
    {
      label: "Services",
      icon: Briefcase,
      dropdown: [
        { href: "/services/web-development", label: "Web Development", icon: Code },
        { href: "/services/ui-ux-design", label: "UI/UX Design", icon: Palette },
        { href: "/services/digital-marketing", label: "Digital Marketing", icon: TrendingUp },
        { href: "/services/branding", label: "Branding", icon: Megaphone },
      ],
    },
    { href: "/portfolio", label: "Portfolio", icon: FolderOpen },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/contact", label: "Contact Us", icon: Mail },
  ]

  const userNavItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/profile", label: "Profile", icon: User },
    ...(isAdmin ? [{ href: "/admin", label: "User Management", icon: Users }] : []),
  ]

  const isActive = (href: string) => location.pathname === href

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Shield className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="font-bold text-xl hidden sm:block">User Management System</span>
        </Link>

        {/* Public Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {publicNavItems.map((item) =>
            "dropdown" in item ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="gap-1">
                    {item.label}
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  {item.dropdown.map((subItem) => (
                    <DropdownMenuItem key={subItem.href} asChild>
                      <Link to={subItem.href} className="flex items-center gap-2">
                        <subItem.icon className="h-4 w-4" />
                        {subItem.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.href} href={item.href}>
                <Button variant={isActive(item.href) ? "secondary" : "ghost"} size="sm">
                  {item.label}
                </Button>
              </Link>
            ),
          )}
        </nav>

        {user ? (
          <>
            {/* Desktop User Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {userNavItems.map((item) => (
                <Link key={item.href} to={item.href}>
                  <Button variant={isActive(item.href) ? "secondary" : "ghost"} size="sm" className="gap-2">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            {/* User Menu */}
            <div className="flex items-center gap-2">
              {/* Phone Button */}
              <a href="tel:+919876543210" className="hidden md:flex">
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                >
                  <Phone className="h-4 w-4" />
                  +91 98765 43210
                </Button>
              </a>

              {/* Mobile Menu */}
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild className="lg:hidden">
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-72 overflow-y-auto">
                  <div className="flex flex-col gap-2 mt-8">
                    {/* Public Nav Items */}
                    <p className="text-xs font-semibold text-muted-foreground px-2 mb-1">Navigation</p>
                    {publicNavItems.map((item) =>
                      "dropdown" in item ? (
                        <div key={item.label} className="space-y-1">
                          <p className="text-sm font-medium px-2 py-1 flex items-center gap-2">
                            <item.icon className="h-4 w-4" />
                            {item.label}
                          </p>
                          <div className="pl-6 space-y-1">
                            {item.dropdown.map((subItem) => (
                              <Link key={subItem.href} href={subItem.href} onClick={() => setIsOpen(false)}>
                                <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                                  <subItem.icon className="h-4 w-4" />
                                  {subItem.label}
                                </Button>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <Link key={item.href} to={item.href} onClick={() => setIsOpen(false)}>
                          <Button
                            variant={isActive(item.href) ? "secondary" : "ghost"}
                            className="w-full justify-start gap-2"
                          >
                            <item.icon className="h-4 w-4" />
                            {item.label}
                          </Button>
                        </Link>
                      ),
                    )}

                    <div className="my-2 border-t" />
                    <p className="text-xs font-semibold text-muted-foreground px-2 mb-1">Account</p>
                    {userNavItems.map((item) => (
                      <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                        <Button
                          variant={isActive(item.href) ? "secondary" : "ghost"}
                          className="w-full justify-start gap-2"
                        >
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </Button>
                      </Link>
                    ))}
                    <Button
                      variant="ghost"
                      className="w-full justify-start gap-2 text-destructive"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>

                    {/* Phone Button */}
                    <div className="mt-4 pt-4 border-t">
                      <a href="tel:+919876543210">
                        <Button variant="outline" className="w-full gap-2 text-primary border-primary bg-transparent">
                          <Phone className="h-4 w-4" />
                          +91 98765 43210
                        </Button>
                      </a>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>

              {/* User Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={profile?.profile_image || undefined} />
                      <AvatarFallback>{getInitials(profile?.name || user.email || null)}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium">{profile?.name || "User"}</p>
                      <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link to="/profile" className="flex items-center">
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  {isAdmin && (
                    <DropdownMenuItem asChild>
                      <Link to="/admin" className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Admin Panel
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleLogout} className="text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2">
            {/* Phone Button */}
            <a href="tel:+919876543210" className="hidden md:flex">
              <Button
                variant="outline"
                size="sm"
                className="gap-2 text-primary border-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </Button>
            </a>

            {/* Mobile Menu for logged out users */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-72 overflow-y-auto">
                <div className="flex flex-col gap-2 mt-8">
                  {publicNavItems.map((item) =>
                    "dropdown" in item ? (
                      <div key={item.label} className="space-y-1">
                        <p className="text-sm font-medium px-2 py-1 flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </p>
                        <div className="pl-6 space-y-1">
                          {item.dropdown.map((subItem) => (
                            <Link key={subItem.href} href={subItem.href} onClick={() => setIsOpen(false)}>
                              <Button variant="ghost" size="sm" className="w-full justify-start gap-2">
                                <subItem.icon className="h-4 w-4" />
                                {subItem.label}
                              </Button>
                            </Link>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                        <Button
                          variant={isActive(item.href) ? "secondary" : "ghost"}
                          className="w-full justify-start gap-2"
                        >
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </Button>
                      </Link>
                    ),
                  )}

                  <div className="mt-4 pt-4 border-t space-y-2">
                    <Link href="/auth/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" className="w-full bg-transparent">
                        Sign In
                      </Button>
                    </Link>
                    <Link href="/auth/sign-up" onClick={() => setIsOpen(false)}>
                      <Button className="w-full">Get Started</Button>
                    </Link>
                    <a href="tel:+919876543210">
                      <Button
                        variant="outline"
                        className="w-full gap-2 text-primary border-primary mt-2 bg-transparent"
                      >
                        <Phone className="h-4 w-4" />
                        +91 98765 43210
                      </Button>
                    </a>
                  </div>
                </div>
              </SheetContent>
            </Sheet>

            {/* Sign In and Get Started Buttons */}
            <Link to="/auth/login" className="hidden lg:block">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth/sign-up" className="hidden lg:block">
              <Button>Get Started</Button>
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
