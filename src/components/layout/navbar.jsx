"use client";

import { createClient } from "@/lib/supabase/client";
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

export function Navbar({ user, profile }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    navigate("/", { replace: true });
    window.location.reload(); 
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

  const userNavItems = [
    { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
    { href: "/profile", label: "Profile", icon: User },
    ...(isAdmin ? [{ href: "/admin", label: "User Management", icon: Users }] : []),
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <Link to={user ? "/dashboard" : "/"} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-lg">
            <Shield className="h-6 w-6 text-primary-foreground" />
          </div>
          <span className="hidden text-xl font-bold tracking-tight sm:block">
            User Management System
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2">
          {publicNavItems.map((item) =>
            item.dropdown ? (
              <DropdownMenu key={item.label}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-2 text-foreground/80 hover:text-foreground">
                    <item.icon className="h-4 w-4" />
                    {item.label}
                    <ChevronDown className="h-3 w-3 opacity-50" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.dropdown.map((sub) => (
                    <DropdownMenuItem key={sub.href} asChild>
                      <Link to={sub.href} className="flex items-center gap-3">
                        <sub.icon className="h-4 w-4" />
                        {sub.label}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link key={item.href} to={item.href}>
                <Button
                  variant={isActive(item.href) ? "secondary" : "ghost"}
                  className={isActive(item.href) ? "bg-primary/10" : ""}
                >
                  <item.icon className="h-4 w-4 mr-2" />
                  {item.label}
                </Button>
              </Link>
            )
          )}
        </nav>

        {/* Right Side */}
        {user ? (
          <div className="flex items-center gap-4">
            {/* Desktop User Links */}
            <div className="hidden md:flex items-center gap-2">
              {userNavItems.map((item) => (
                <Link key={item.href} to={item.href}>
                  <Button
                    variant={isActive(item.href) ? "secondary" : "ghost"}
                    size="sm"
                    className="gap-2"
                  >
                    <item.icon className="h-4 w-4" />
                    {item.label}
                  </Button>
                </Link>
              ))}
            </div>

            {/* Phone Button */}
            <a href="tel:+919876543210" className="hidden lg:flex">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </Button>
            </a>

            {/* User Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={profile?.profile_image} />
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {getInitials(profile?.name || user.email)}
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">
                      {profile?.name || "User"}
                    </p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/profile" className="flex items-center gap-2">
                    <Settings className="h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                {isAdmin && (
                  <DropdownMenuItem asChild>
                    <Link to="/admin" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Admin Panel
                    </Link>
                  </DropdownMenuItem>
                )}
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={handleLogout}
                  className="text-destructive focus:text-destructive"
                >
                  <LogOut className="h-4 w-4 mr-2" />
                  Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-80">
                <div className="mt-6 flex flex-col gap-4">
                  {publicNavItems.map((item) =>
                    item.dropdown ? (
                      <div key={item.label}>
                        <p className="text-sm font-medium text-muted-foreground mb-2 flex items-center gap-2">
                          <item.icon className="h-4 w-4" />
                          {item.label}
                        </p>
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.href}
                            to={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="block pl-8 py-1 text-sm hover:text-primary"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    ) : (
                      <Link
                        key={item.href}
                        to={item.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 py-2 text-foreground hover:text-primary"
                      >
                        <item.icon className="h-5 w-5" />
                        {item.label}
                      </Link>
                    )
                  )}
                  <div className="border-t pt-4">
                    <Button
                      variant="destructive"
                      className="w-full"
                      onClick={handleLogout}
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        ) : (
          /* Guest User View */
          <div className="flex items-center gap-4">
            <a href="tel:+919876543210" className="hidden md:block">
              <Button variant="outline" size="sm" className="gap-2">
                <Phone className="h-4 w-4" />
                Call Us
              </Button>
            </a>

            <Link to="/auth/login" className="hidden lg:block">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/auth/sign-up" className="hidden lg:block">
              <Button>Get Started</Button>
            </Link>

            {/* Mobile Menu for Guests */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <div className="mt-6 space-y-4">
                  {publicNavItems.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href || "#"}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 text-lg font-medium"
                    >
                      <item.icon className="h-5 w-5" />
                      {item.label}
                    </Link>
                  ))}
                  <div className="pt-4 space-y-3">
                    <Link to="/auth/login">
                      <Button variant="outline" className="w-full">
                        Sign In
                      </Button>
                    </Link>
                    <Link to="/auth/sign-up">
                      <Button className="w-full">Get Started</Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </header>
  );
}