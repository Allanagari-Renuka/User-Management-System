"use client"

import React, { useState } from "react"
import { createClient } from "@/lib/supabase/client"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Link, useNavigate } from "react-router-dom"
import { Eye, EyeOff, Loader2, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError("")
    if (!email || !password) return setError("All fields are required")

    setIsLoading(true)
    try {
      const supabase = createClient()
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) throw error
      // Navigate to profile page after successful login
      navigate("/profile")
    } catch (err) {
      setError(err.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full bg-black text-white overflow-hidden relative flex items-center justify-center p-6">
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
      </div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-md">
        <Card className="bg-white/5 backdrop-blur-2xl border-white/10 rounded-3xl shadow-2xl overflow-hidden">
          <CardContent className="p-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 text-indigo-400 mb-6">
                <Sparkles className="w-6 h-6" />
                <span className="text-lg font-medium">Welcome back</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                Sign In
              </h1>
              <p className="mt-4 text-xl text-gray-400">Access your account</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label className="text-gray-300">Email</Label>
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder-white/50 h-14 rounded-2xl text-lg"
                  disabled={isLoading}
                />
              </div>

              <div className="space-y-2">
                <Label className="text-gray-300">Password</Label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/50 h-14 rounded-2xl pr-12 text-lg"
                    disabled={isLoading}
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-4 text-gray-400 hover:text-white">
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-xl text-center">
                  {error}
                </motion.div>
              )}

              <Button type="submit" className="w-full h-14 text-lg font-semibold bg-white text-black hover:bg-white/90 rounded-2xl shadow-xl" disabled={isLoading}>
                {isLoading ? <> <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Signing in... </> : "Sign In"}
              </Button>
            </form>

            <p className="mt-8 text-center text-gray-400">
              Don't have an account? <Link to="/auth/sign-up" className="text-white font-semibold hover:underline">Create one</Link>
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}