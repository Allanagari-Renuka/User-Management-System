"use client"

import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "@/lib/supabase/client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Save, Loader2, User, Mail, Phone, MapPin, Calendar } from "lucide-react"

export default function EditProfilePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    bio: "",
    city: "",
    state: "",
    country: ""
  })
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    let isMounted = true

    const loadData = async () => {
      console.log('🔄 Starting loadData...')
      try {
        console.log('🔍 Getting current session...')
        // Get current session
        const { data: sessionData, error: sessionError } = await supabase.auth.getSession()
        console.log('📊 Session result:', { hasSession: !!sessionData?.session, hasUser: !!sessionData?.session?.user, error: sessionError })

        if (sessionError) {
          console.error('❌ Session error:', sessionError)
          if (isMounted) {
            navigate("/auth/login")
            setLoading(false)
          }
          return
        }

        if (!sessionData?.session?.user) {
          console.log('⚠️ No authenticated user found')
          if (isMounted) {
            navigate("/auth/login")
            setLoading(false)
          }
          return
        }

        const authUser = sessionData.session.user
        console.log('✅ User authenticated:', authUser.id, authUser.email)

        // Create a basic profile from user data (similar to dashboard approach)
        console.log('🔄 Creating basic profile from auth data...')
        const basicProfile = {
          id: authUser.id,
          name: authUser.user_metadata?.name || authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'User',
          email: authUser.email,
          avatar: authUser.user_metadata?.avatar_url || null,
          role: 'User',
          joined: authUser.created_at ? new Date(authUser.created_at).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : "Recently",
          projects: 0,
          streak: 0,
          level: "Beginner",
          bio: "Welcome to my profile!",
          phone: "",
          city: "",
          state: "",
          country: ""
        }

        console.log('🔄 Setting user data...')
        if (isMounted) {
          setUser(authUser)
          setFormData({
            name: basicProfile.name,
            email: authUser.email || '',
            phone: basicProfile.phone,
            bio: basicProfile.bio,
            city: basicProfile.city,
            state: basicProfile.state,
            country: basicProfile.country
          })
          console.log('✅ Setting loading to false')
          setLoading(false)
        }
      } catch (err) {
        console.error('💥 Unexpected error in loadData:', err)
        if (isMounted) {
          navigate("/auth/login")
          setLoading(false)
        }
      }
    }

    loadData()

    return () => {
      isMounted = false
    }
  }, [navigate])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)

    // Update auth user metadata
    const { error: authError } = await supabase.auth.updateUser({
      data: { name: formData.name }
    })

    if (authError) {
      console.error("Auth update error:", authError)
      alert("Failed to update profile. Please try again.")
      setSaving(false)
      return
    }

    // Update or insert profile data
    const { error: profileError } = await supabase
      .from('profiles')
      .upsert({
        id: user.id,
        full_name: formData.name,
        phone: formData.phone,
        bio: formData.bio,
        city: formData.city,
        state: formData.state,
        country: formData.country,
        updated_at: new Date().toISOString()
      })

    if (profileError) {
      console.error("Profile update error:", profileError)
      alert("Failed to update profile. Please try again.")
    } else {
      alert("Profile updated successfully!")
      navigate("/profile")
    }

    setSaving(false)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black">
        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }} className="w-16 h-16 border-4 border-purple-500/20 border-t-purple-500 rounded-full" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-500/30 rounded-full"
            style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%` }}
            animate={{ y: [0, -30, 0] }}
            transition={{ duration: 4 + Math.random() * 3, repeat: Infinity }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate("/profile")}
            className="text-white hover:text-purple-400 hover:bg-white/10 rounded-full px-6 py-3"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Profile
          </Button>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-7xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Edit Profile
            </h1>
            <p className="text-xl text-gray-300">Personalize your digital identity</p>
          </motion.div>

          <Card className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl overflow-hidden">
            <CardContent className="p-8">
              <form onSubmit={handleSave} className="space-y-8">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <User className="w-5 h-5" />
                      Full Name
                    </Label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-14 focus:ring-purple-500/50"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <Mail className="w-5 h-5" />
                      Email
                    </Label>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-14 focus:ring-purple-500/50"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone & Location */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Phone
                    </Label>
                    <Input
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-14 focus:ring-purple-500/50"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-lg font-semibold flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Location
                    </Label>
                    <Input
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-14 focus:ring-purple-500/50"
                      placeholder="City"
                    />
                  </div>
                </div>

                {/* Bio */}
                <div className="space-y-2">
                  <Label className="text-lg font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    About You
                  </Label>
                  <Textarea
                    name="bio"
                    value={formData.bio}
                    onChange={handleInputChange}
                    className="bg-white/10 border-white/20 text-white placeholder-gray-400 rounded-2xl h-32 focus:ring-purple-500/50 resize-none"
                    placeholder="Tell us about yourself..."
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex justify-end pt-6"
                >
                  <Button
                    type="submit"
                    disabled={saving}
                    className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold px-16 py-8 rounded-2xl shadow-2xl hover:shadow-purple-500/30 transition-all text-lg"
                  >
                    {saving ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5 mr-2" />
                        Save Changes
                      </>
                    )}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}