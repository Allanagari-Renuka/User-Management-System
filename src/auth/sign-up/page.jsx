import React, { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Loader2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function SignUpPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    city: "",
    state: "",
    country: "",
    bio: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError("")

    if (!formData.name) return setError("Name is required")
    if (formData.password.length < 6) return setError("Password must be 6+ characters")
    if (formData.password !== formData.confirmPassword) return setError("Passwords don't match")

    setIsLoading(true)
    try {
      const supabase = createClient()
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
          data: {
            name: formData.name,
            phone: formData.phone,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            bio: formData.bio || "Welcome to my profile!",
          },
        },
      })
      if (error) throw error

      navigate("/auth/sign-up-success")
    } catch (err) {
      setError(err.message || "Sign up failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full bg-black text-white overflow-hidden relative flex items-center justify-center p-6">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-10 right-20 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-20 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
      </div>

      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="w-full max-w-lg">
        <Card className="bg-white/5 backdrop-blur-2xl border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-purple-400 mb-6">
                <Sparkles className="w-7 h-7" />
                <span className="text-xl font-medium">Get Started</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Create Account
              </h1>
              <p className="mt-4 text-xl text-gray-400">Join thousands of users today</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-gray-300">Full Name</Label>
                <Input
                  name="name"
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 h-14 rounded-2xl text-lg"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Email</Label>
                <Input
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 h-14 rounded-2xl text-lg"
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-300">Password</Label>
                  <div className="relative">
                    <Input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 h-14 rounded-2xl pr-12 text-lg"
                      disabled={isLoading}
                    />
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-5 text-gray-400 hover:text-white">
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Confirm</Label>
                  <div className="relative">
                    <Input
                      type={showConfirm ? "text" : "password"}
                      name="confirmPassword"
                      placeholder="Repeat password"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="bg-white/10 border-white/20 h-14 rounded-2xl pr-12 text-lg"
                      disabled={isLoading}
                    />
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-5 text-gray-400 hover:text-white">
                      {showConfirm ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Phone (Optional)</Label>
                <Input
                  name="phone"
                  placeholder="+1 (555) 123-4567"
                  value={formData.phone}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 h-14 rounded-2xl text-lg"
                  disabled={isLoading}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label className="text-gray-300">City (Optional)</Label>
                  <Input
                    name="city"
                    placeholder="New York"
                    value={formData.city}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 h-14 rounded-2xl text-lg"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">State (Optional)</Label>
                  <Input
                    name="state"
                    placeholder="NY"
                    value={formData.state}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 h-14 rounded-2xl text-lg"
                    disabled={isLoading}
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-gray-300">Country (Optional)</Label>
                  <Input
                    name="country"
                    placeholder="USA"
                    value={formData.country}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 h-14 rounded-2xl text-lg"
                    disabled={isLoading}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Bio (Optional)</Label>
                <Input
                  name="bio"
                  placeholder="Tell us about yourself..."
                  value={formData.bio}
                  onChange={handleChange}
                  className="bg-white/10 border-white/20 h-14 rounded-2xl text-lg"
                  disabled={isLoading}
                />
              </div>

              {error && (
                <div className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-center">
                  {error}
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-16 text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 rounded-2xl shadow-2xl"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>

            <p className="mt-8 text-center text-gray-400">
              Already have an account?{" "}
              <Link to="/auth/login" className="text-white font-bold hover:underline">
                Sign in
              </Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}