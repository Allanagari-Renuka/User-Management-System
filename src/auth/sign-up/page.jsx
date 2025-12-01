// "use client"

// import React, { useState } from "react"
// import { createClient } from "@/lib/supabase/client"
// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import { Link, useNavigate } from "react-router-dom"
// import { Eye, EyeOff, Loader2 } from "lucide-react"

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   })
//   const [showPassword, setShowPassword] = useState(false)
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false)
//   const [error, setError] = useState("")
//   const [isLoading, setIsLoading] = useState(false)
//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const validateForm = () => {
//     if (!formData.name.trim()) return "Name is required"
//     if (formData.name.length < 2) return "Name must be at least 2 characters"
//     if (!formData.email.trim()) return "Email is required"
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return "Invalid email address"
//     if (!formData.password) return "Password is required"
//     if (formData.password.length < 6) return "Password must be at least 6 characters"
//     if (formData.password !== formData.confirmPassword) return "Passwords do not match"
//     return null
//   }

//   const handleSignUp = async (e) => {
//     e.preventDefault()
//     setError("")

//     const validationError = validateForm()
//     if (validationError) {
//       setError(validationError)
//       return
//     }

//     setIsLoading(true)

//     try {
//       const supabase = createClient()
//       const { error } = await supabase.auth.signUp({
//         email: formData.email,
//         password: formData.password,
//         options: {
//           emailRedirectTo: `${
//             window.location.origin
//           }/auth/callback`, // adjust if needed
//           data: {
//             name: formData.name,
//             role: "user",
//           },
//         },
//       })

//       if (error) throw error

//       // Success! Show success page or message
//       navigate("/auth/sign-up-success") // create this page or show toast
//     } catch (err) {
//       setError(err.message || "Something went wrong. Please try again.")
//     } finally {
//       setIsLoading(false)
//     }
//   }

//   return (
//     <div className="flex w-full w-full items-center justify-center bg-muted/40 p-4">
//       <div className="w-full max-w-md">
//         <Card className="border-0 shadow-xl">
//           <CardHeader className="space-y-1 text-center pb-8">
//             <CardTitle className="text-3xl font-bold">Create an account</CardTitle>
//             <CardDescription className="text-base">
//               Enter your details below to get started
//             </CardDescription>
//           </CardHeader>

//           <CardContent>
//             <form onSubmit={handleSignUp} className="space-y-5">
//               <div className="space-y-2">
//                 <Label htmlFor="name">Full Name</Label>
//                 <Input
//                   id="name"
//                   name="name"
//                   type="text"
//                   placeholder="John Doe"
//                   value={formData.name}
//                   onChange={handleChange}
//                   disabled={isLoading}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="email">Email</Label>
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="you@example.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                   disabled={isLoading}
//                   required
//                 />
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="password">Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="password"
//                     name="password"
//                     type={showPassword ? "text" : "password"}
//                     placeholder="Create a strong password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     disabled={isLoading}
//                     className="pr-10"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
//                   >
//                     {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>

//               <div className="space-y-2">
//                 <Label htmlFor="confirmPassword">Confirm Password</Label>
//                 <div className="relative">
//                   <Input
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     type={showConfirmPassword ? "text" : "password"}
//                     placeholder="Repeat your password"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     disabled={isLoading}
//                     className="pr-10"
//                     required
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                     className="absolute right-3 top-3 text-muted-foreground hover:text-foreground"
//                   >
//                     {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                   </button>
//                 </div>
//               </div>

//               {error && (
//                 <div className="bg-destructive/10 text-destructive text-sm p-3 rounded-md text-center">
//                   {error}
//                 </div>
//               )}

//               <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
//                 {isLoading ? (
//                   <>
//                     <Loader2 className="mr-2 h-4 w-4 animate-spin" />
//                     Creating account...
//                   </>
//                 ) : (
//                   "Create Account"
//                 )}
//               </Button>
//             </form>

//             <p className="mt-6 text-center text-sm text-muted-foreground">
//               Already have an account?{" "}
//               <Link to="/auth/login" className="font-medium text-primary hover:underline">
//                 Sign in
//               </Link>
//             </p>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   )
// }

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
          data: { name: formData.name },
        },
      })
      if (error) throw error

      // Create profile record in profiles table
      if (data.user) {
        const { error: profileError } = await supabase
          .from('profiles')
          .insert({
            id: data.user.id,
            full_name: formData.name,
            bio: formData.bio || "Welcome to my profile!",
            phone: formData.phone,
            city: formData.city,
            state: formData.state,
            country: formData.country,
            role: "User",
            level: "Beginner",
            projects_count: 0,
            streak: 0,
          })

        if (profileError) {
          console.error("Profile creation error:", profileError)
          // Don't allow signup to complete if profile creation fails
          setError(`Failed to create profile: ${profileError.message}. Please try again.`)
          // Delete the created user if profile creation failed
          await supabase.auth.admin.deleteUser(data.user.id)
          return
        }
      }

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
                    <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-4 top-11 text-gray-400 hover:text-white">
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
                    <button type="button" onClick={() => setShowConfirm(!showConfirm)} className="absolute right-4 top-11 text-gray-400 hover:text-white">
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