
"use client"

import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle2, Mail, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function SignUpSuccessPage() {
  return (
    <div className="w-full bg-black text-white flex items-center justify-center p-6 relative overflow-hidden">
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-pink-900/10 to-indigo-900/20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-center"
      >
        <Card className="bg-white/5 backdrop-blur-2xl border-white/10 rounded-3xl shadow-2xl p-12 max-w-lg mx-auto">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="mx-auto w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-8 shadow-2xl"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
            Welcome Aboard!
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Your account has been created successfully
          </p>
          <div className="flex items-center justify-center gap-3 text-lg text-gray-400 mb-10">
            <Mail className="w-6 h-6 text-green-400" />
            <span>Check your email to verify your account</span>
          </div>

          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-2xl shadow-2xl">
            <Link to="/auth/login" className="flex items-center gap-3">
              Go to Login
              <ArrowRight className="w-6 h-6" />
            </Link>
          </Button>
        </Card>
      </motion.div>
    </div>
  )
}
