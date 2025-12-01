

"use client"

import React, { useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Calendar, Mail, MapPin, Phone, Settings, Shield, Users, ArrowRight, Loader2 } from "lucide-react"
import { useUser } from "@/contexts/UserContext"

export default function DashboardPage() {
  const { user, profile, loading: contextLoading } = useUser()
  const navigate = useNavigate()

  // Redirect if not authenticated
  useEffect(() => {
    if (!contextLoading && !user) {
      console.log('No authenticated user - redirecting to login')
      navigate("/auth/login")
    }
  }, [user, contextLoading, navigate])

  const loading = contextLoading || !user

  const getInitials = (name) => {
    if (!name) return "?"
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown"
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const isAdmin = profile?.role === "admin"

  return (
    <div className="w-full bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20">
      {/* Hero Banner */}
      <div className="relative overflow-hidden bg-gradient-to-r from-primary/20 via-indigo-500/10 to-purple-600/10 pt-20 pb-16 md:pt-32 md:pb-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto max-w-7xl px-6 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-gray-900 via-primary to-purple-600 bg-clip-text text-transparent leading-tight">
              Welcome Back
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed">
              {profile?.name || "User"}, here's your personalized dashboard overview.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-7xl px-6 -mt-8">
        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Profile Card */}
          <Card className="lg:col-span-1 overflow-hidden border-0 shadow-2xl bg-white/60 backdrop-blur-md ring-1 ring-white/30 rounded-3xl">
            <div className="bg-gradient-to-br from-primary/5 via-indigo-500/5 to-purple-600/5 p-8 pb-0 relative overflow-hidden">
              <div className="relative flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <Avatar className="h-36 w-36 border-4 border-white/50 shadow-2xl ring-8 ring-primary/15">
                    <AvatarImage src={profile?.profile_image} alt={profile?.name} />
                    <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary via-indigo-500 to-purple-600 text-white">
                      {getInitials(profile?.name)}
                    </AvatarFallback>
                  </Avatar>
                  {isAdmin && (
                    <div className="absolute -top-2 -right-2 p-2 bg-gradient-to-r from-primary to-purple-600 rounded-full shadow-xl ring-2 ring-white/50">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  )}
                </div>

                <h3 className="text-3xl font-bold text-foreground mb-2">{profile?.name || "User"}</h3>
                <p className="text-lg text-muted-foreground mb-6">{user?.email}</p>

                <Badge className="px-6 py-3 text-base font-bold rounded-full">
                  {isAdmin ? "Administrator" : "Premium Member"}
                </Badge>
              </div>
            </div>

            <CardContent className="pt-8 pb-10 px-0">
              <Button asChild size="lg" className="w-full mx-6 rounded-2xl">
                <Link to="/profile" className="flex items-center justify-center gap-2">
                  <Settings className="h-5 w-5" />
                  Edit Profile
                  <ArrowRight className="h-4 w-4 ml-auto" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card className="shadow-2xl border-0 bg-white/60 backdrop-blur-md ring-1 ring-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center gap-4">
                <Mail className="h-7 w-7 text-primary" />
                Contact Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50">
                <Mail className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{user?.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50">
                <Phone className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{profile?.phone || "Not set"}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50">
                <MapPin className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">
                    {[profile?.city, profile?.state, profile?.country].filter(Boolean).join(", ") || "Not set"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/50">
                <Calendar className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Member Since</p>
                  <p className="font-medium">{formatDate(profile?.created_at)}</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="shadow-2xl border-0 bg-white/60 backdrop-blur-md ring-1 ring-white/30 rounded-3xl">
            <CardHeader>
              <CardTitle className="text-3xl font-bold flex items-center gap-4">
                <Settings className="h-7 w-7 text-primary" />
                Quick Actions
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button asChild variant="outline" className="w-full justify-start">
                <Link to="/profile">
                  <Settings className="mr-2 h-4 w-4" />
                  Update Profile
                </Link>
              </Button>
              {isAdmin && (
                <Button asChild variant="outline" className="w-full justify-start">
                  <Link to="/admin">
                    <Users className="mr-2 h-4 w-4" />
                    Manage Users
                  </Link>
                </Button>
              )}
              <div className="pt-4 border-t">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4" />
                  <span>{isAdmin ? "Administrator access" : "Standard user account"}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
