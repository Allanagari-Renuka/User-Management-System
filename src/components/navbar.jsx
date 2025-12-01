"use client";

import { supabase, forceClearAuth } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
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
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useUser } from "@/contexts/UserContext";

export function Navbar() {
  const { user, profile, forceSignOut } = useUser();
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    console.log('🚪 SIGN-OUT: Using context signout function...');

    try {
      // Use the context's forceSignOut function which handles everything
      forceSignOut();
      console.log('✅ Sign-out completed via context');

    } catch (error) {
      console.error('❌ Sign-out error:', error);
      // Fallback: force navigation
      window.location.href = '/';
    }
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const isAdmin = profile?.role === "admin";

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
  ];



  const isActive = (href) => location.pathname.startsWith(href) || location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-gradient-to-b from-black/80 via-black/60 to-transparent backdrop-blur-xl">
      <div className="container mx-auto flex h-20 items-center justify-between px-6 lg:px-12">
        {/* Logo */}
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-3 group mr-3 -ml-6 lg:-ml-12">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl ring-4 ring-violet-500/20 transition-all group-hover:scale-110 group-hover:ring-violet-500/40">
            <Shield className="h-6 w-6 text-white" />
          </div>
          <span className="hidden text-lg font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent tracking-tight sm:block lg:text-xl whitespace-nowrap">
            User Management System
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {publicNavItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="group flex items-center gap-2.5 text-white/80 hover:text-white text-sm font-medium tracking-wide transition-all duration-300 hover:bg-white/5 px-4 py-6 rounded-xl data-[state=open]:bg-white/10 data-[state=open]:text-white"
                  >
                    <item.icon className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
                    {item.label}
                    <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="start"
                  className="w-72 mt-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl p-3"
                >
                  {item.dropdown.map((sub) => (
                    <DropdownMenuItem
                      key={sub.href}
                      asChild
                      className="rounded-xl cursor-pointer transition-all hover:bg-white/10 focus:bg-white/15 p-3"
                    >
                      <Link
                        to={sub.href}
                        className="flex items-center gap-4 text-white/80 hover:text-white font-medium"
                      >
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600/20 to-indigo-600/20">
                          <sub.icon className="h-5 w-5 text-violet-400" />
                        </div>
                        <span>{sub.label}</span>
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.href} to={item.href}>
                <Button
                  variant="ghost"
                  className={`group relative px-5 py-6 text-sm font-medium tracking-wide transition-all duration-300 rounded-xl overflow-hidden ${
                    isActive(item.href)
                      ? "text-white bg-white/10 shadow-lg"
                      : "text-white/70 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <item.icon className="h-4.5 w-4.5 mr-2 transition-transform group-hover:scale-110" />
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-violet-500 to-indigo-500" />
                  )}
                </Button>
              </Link>
            )
          )}
        </nav>

        {/* Right Side */}
        {user ? (
          <div className="flex items-center gap-4">
            
            {/* Phone Button */}
            <a href="tel:+919876543210" className="hidden 2xl:flex">
              <Button className="gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium shadow-lg">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </Button>
            </a>

            {/* User Avatar Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="ghost"
                  className="relative h-11 w-11 rounded-full overflow-hidden bg-gradient-to-br from-violet-600 to-indigo-600 ring-4 ring-white/10 hover:ring-violet-500/40 transition-all duration-300 shadow-xl"
                >
                  <Avatar className="h-full w-full">
                    <AvatarImage src={profile?.profile_image} alt={profile?.name} />
                    <AvatarFallback className="text-white font-bold text-lg">
                      {getInitials(profile?.name || user.email)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-72 mt-4 rounded-2xl border border-white/10 bg-black/95 backdrop-blur-2xl shadow-2xl p-4">
                <DropdownMenuLabel className="text-white/90">
                  <div className="flex flex-col space-y-3">
                    <p className="text-lg font-bold">{profile?.name || "User"}</p>
                    <p className="text-sm text-white/60">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-4 py-3 text-white/80 hover:text-white cursor-pointer">
                    <User className="h-5 w-5 text-violet-400" />
                    <span className="font-medium">Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/edit-profile" className="flex items-center gap-4 py-3 text-white/80 hover:text-white cursor-pointer">
                    <Settings className="h-5 w-5 text-violet-400" />
                    <span className="font-medium">Edit Profile</span>
                  </Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-4 py-3 text-white/80 hover:text-white cursor-pointer">
                      <Shield className="h-5 w-5 text-violet-400" />
                      <span className="font-medium">Admin Panel</span>
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="flex items-center gap-4 py-3 text-red-400 hover:text-red-300 cursor-pointer font-medium"
                >
                  <LogOut className="h-5 w-5" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-white hover:bg-white/10">
                  <Menu className="h-7 w-7" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-96 border-white/10 bg-gradient-to-b from-black/95 to-black/90 backdrop-blur-2xl">
                <div className="mt-10 space-y-8">
                  <div className="space-y-4">
                    {publicNavItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href || "#"}
                        className="flex items-center gap-4 text-xl font-medium text-white/80 hover:text-white transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        <item.icon className="h-6 w-6 text-violet-400" />
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          <div className="flex items-center gap-4 ml-5">
            <a href="tel:+919876543210" className="hidden md:block">
              <Button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-medium shadow-xl">
                <Phone className="h-4 w-4 mr-2" />
                Call Us
              </Button>
            </a>
            <Link to="/auth/login" className="hidden lg:block">
              <Button variant="ghost" className="text-white/80 hover:text-white hover:bg-white/10 rounded-xl font-medium">
                Sign In
              </Button>
            </Link>
            <Link to="/auth/sign-up" className="hidden lg:block">
              <Button className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white font-semibold shadow-xl px-8">
                Get Started
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-white hover:bg-white/10"
              onClick={() => setIsOpen(true)}
            >
              <Menu className="h-7 w-7" />
            </Button>
          </div>
        )}
      </div>
    </header>
  );
}