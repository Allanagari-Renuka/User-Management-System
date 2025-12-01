"use client"

import React, { useEffect, useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "@/lib/supabase/client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowRight, Settings, Mail, Calendar, Zap, Trophy, Star, Shield, Sparkles, CheckCircle2, Camera, Upload, Loader2, MapPin, Phone } from "lucide-react"
import { useUser } from "@/contexts/UserContext"

export default function ProfilePage() {
  const { user: authUser, profile: userProfile, loading: contextLoading } = useUser()
  const [uploading, setUploading] = useState(false)
  const navigate = useNavigate()
  const fileInputRef = useRef(null)

  // Redirect if not authenticated
  useEffect(() => {
    if (!contextLoading && !authUser) {
      console.log('⚠️ No authenticated user - redirecting to login')
      navigate("/auth/login")
    }
  }, [authUser, contextLoading, navigate])

  // Create user object from context data
  const user = authUser && userProfile ? {
    id: authUser.id,
    name: userProfile?.full_name || userProfile?.name || authUser.user_metadata?.name || authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User',
    email: authUser.email,
    avatar: userProfile?.avatar_url || authUser.user_metadata?.avatar_url || null,
    role: userProfile?.role || 'User',
    joined: authUser.created_at ? new Date(authUser.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : "Recently",
    projects: userProfile?.projects_count || userProfile?.projects || 0,
    streak: userProfile?.streak || 0,
    level: userProfile?.level || "Beginner",
    bio: userProfile?.bio || "Welcome to my profile!",
    phone: userProfile?.phone || "",
    city: userProfile?.city || "",
    state: userProfile?.state || "",
    country: userProfile?.country || ""
  } : null

  const loading = contextLoading || !user

  const handleImageUpload = async (event) => {
    const file = event.target.files[0]
    if (!file) return

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please select an image file')
      return
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size must be less than 5MB')
      return
    }

    setUploading(true)

    try {
      const fileExt = file.name.split('.').pop()
      const fileName = `${user.id}_${Date.now()}.${fileExt}`
      const filePath = `avatars/${fileName}`

      // Upload file to Supabase Storage
      const { error: uploadError } = await supabase.storage
        .from('avatars')
        .upload(filePath, file)

      if (uploadError) {
        throw uploadError
      }

      // Get public URL
      const { data: { publicUrl } } = supabase.storage
        .from('avatars')
        .getPublicUrl(filePath)

      // Update profile with new avatar URL
      const { error: updateError } = await supabase
        .from('profiles')
        .update({ avatar_url: publicUrl })
        .eq('id', user.id)

      if (updateError) {
        throw updateError
      }

      alert('Avatar updated successfully! Refresh the page to see changes.')
    } catch (error) {
      console.error('Error uploading image:', error)
      alert('Failed to upload image. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-20 h-20 border-4 border-purple-500/30 border-t-purple-500 rounded-full"
        />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
      {/* Animated Gradient Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20" />
        <motion.div
          animate={{ backgroundPosition: ["0% 0%", "100% 100%"] }}
          transition={{ duration: 20, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/30 via-transparent to-cyan-900/30"
        />
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-16 max-w-7xl relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 mb-8"
            whileHover={{ scale: 1.05 }}
          >
            <Shield className="w-5 h-5 text-green-400" />
            <span className="text-sm font-medium">Verified Account</span>
          </motion.div>

          <motion.h1
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {user?.name || "Your Name"}
          </motion.h1>
          <motion.p
            className="text-2xl text-gray-400 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {user?.bio}
          </motion.p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Left: Avatar + Stats */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <Card className="bg-white/5 backdrop-blur-2xl border-white/10 rounded-3xl p-8 text-center hover:bg-white/10 transition-all duration-500 group">
              <div className="relative inline-block mb-6">
                <Avatar className="w-40 h-40 ring-4 ring-purple-500/50 ring-offset-4 ring-offset-black group-hover:ring-purple-400/70 transition-all">
                  <AvatarImage src={user?.avatar} />
                  <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-purple-600 to-pink-600">
                    {user?.name?.charAt(0) || "A"}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-2 right-2 bg-green-500 w-12 h-12 rounded-full flex items-center justify-center ring-4 ring-black">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <motion.button
                  onClick={() => fileInputRef.current?.click()}
                  disabled={uploading}
                  className="absolute top-2 right-2 bg-purple-600 hover:bg-purple-700 w-12 h-12 rounded-full flex items-center justify-center ring-4 ring-black transition-all disabled:opacity-50"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {uploading ? (
                    <Loader2 className="w-6 h-6 animate-spin" />
                  ) : (
                    <Camera className="w-6 h-6" />
                  )}
                </motion.button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>

              <h2 className="text-3xl font-bold mb-2">{user?.name}</h2>
              <p className="text-gray-400 mb-6">{user?.role}</p>

              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-lg px-6 py-3 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all">
                {user?.level} <Star className="w-5 h-5 ml-2" />
              </Badge>
            </Card>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { icon: Trophy, value: user?.projects || 0, label: "Projects" },
                { icon: Zap, value: user?.streak || 0, label: "Day Streak" },
                { icon: Star, value: "4.9", label: "Rating" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 hover:border-purple-500/30 transition-all group"
                  whileHover={{ y: -5 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-3 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <div className="text-3xl font-black text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Center: Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-8 lg:col-span-2"
          >
            <Card className="bg-white/5 backdrop-blur-2xl border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-purple-500/30 transition-all">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-6 h-6 text-purple-400" />
                Contact Information
              </h3>
              <div className="space-y-5">
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">Email</span>
                  <span className="font-medium">{user?.email}</span>
                </div>
                {user?.phone && (
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="text-gray-400">Phone</span>
                    <span className="font-medium flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {user.phone}
                    </span>
                  </div>
                )}
                {(user?.city || user?.state || user?.country) && (
                  <div className="flex items-center justify-between py-4 border-b border-white/10">
                    <span className="text-gray-400">Location</span>
                    <span className="font-medium flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      {[user?.city, user?.state, user?.country].filter(Boolean).join(', ')}
                    </span>
                  </div>
                )}
                <div className="flex items-center justify-between py-4 border-b border-white/10">
                  <span className="text-gray-400">Member Since</span>
                  <span className="font-medium flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {user?.joined}
                  </span>
                </div>
                <div className="flex items-center justify-between py-4">
                  <span className="text-gray-400">Account Status</span>
                  <Badge className="bg-green-500/20 text-green-400 border-green-500/50">
                    Active & Verified
                  </Badge>
                </div>
              </div>
            </Card>

            <Card className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-2xl border-white/10 rounded-3xl p-8 hover:from-purple-700/20 hover:to-pink-700/20 transition-all">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Sparkles className="w-8 h-8 text-yellow-400" />
                Achievements
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "First Project", unlocked: user?.projects > 0 },
                  { name: "Speed Demon", unlocked: user?.streak > 30 },
                  { name: "Night Owl", unlocked: true },
                  { name: "Perfectionist", unlocked: true }
                ].map((ach, i) => (
                  <motion.div
                    key={i}
                    className={`rounded-2xl p-4 text-center transition-all ${
                      ach.unlocked
                        ? 'bg-white/10 hover:bg-white/20'
                        : 'bg-gray-800/50 opacity-50'
                    }`}
                    whileHover={ach.unlocked ? { scale: 1.05 } : {}}
                  >
                    <Trophy className={`w-10 h-10 mx-auto mb-2 ${ach.unlocked ? 'text-yellow-400' : 'text-gray-500'}`} />
                    <p className="font-medium">{ach.name}</p>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-20"
        >
          <Button
            onClick={() => navigate("/edit-profile")}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-16 py-8 rounded-full font-bold shadow-2xl hover:shadow-purple-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <Settings className="w-6 h-6 mr-3" />
            Edit Profile
            <ArrowRight className="w-6 h-6 ml-3" />
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
