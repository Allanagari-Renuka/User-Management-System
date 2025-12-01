import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Lock, Zap, ArrowRight, Code2, Users as UsersIcon, Zap as ZapIcon, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/10 backdrop-blur-3xl" />
        <div className="relative px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Badge className="mb-8 bg-white/10 backdrop-blur border-white/20 text-lg px-6 py-3">
              <Sparkles className="w-5 h-5 mr-2" /> Welcome to User Management
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-8 leading-tight">
              User Management Made Simple
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-5xl mx-auto mb-12">
              A complete full-stack solution for managing users with seamless authentication, role-based access control, and a powerful admin dashboard built for scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/auth/sign-up">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-full shadow-2xl">
                  Get Started <ArrowRight className="ml-3" />
                </Button>
              </a>
              <a href="/auth/login">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur text-white hover:bg-white/20 px-12 py-8 text-xl rounded-full">
                  Sign In
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Everything you need to manage users securely and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1: Secure Authentication */}
            <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex justify-center mb-6 p-4 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl group-hover:from-indigo-500/30 transition-colors">
                  <Lock className="h-10 w-10 text-indigo-400 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Secure Authentication</h3>
                <p className="text-white/70 leading-relaxed text-center">
                  JWT-based authentication with secure password hashing, multi-factor support, and robust session management to keep your data locked down.
                </p>
              </div>
            </div>

            {/* Feature 2: User Management */}
            <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/10 to-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex justify-center mb-6 p-4 bg-gradient-to-br from-emerald-500/20 to-teal-500/20 rounded-2xl group-hover:from-emerald-500/30 transition-colors">
                  <UsersIcon className="h-10 w-10 text-emerald-400 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">User Management</h3>
                <p className="text-white/70 leading-relaxed text-center">
                  Full CRUD operations with intuitive role-based access control, allowing admins and users to collaborate securely at scale.
                </p>
              </div>
            </div>

            {/* Feature 3: Modern Stack */}
            <div className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-lg border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-[1.02] overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="flex justify-center mb-6 p-4 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-2xl group-hover:from-amber-500/30 transition-colors">
                  <ZapIcon className="h-10 w-10 text-amber-400 transition-transform group-hover:scale-110" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 text-center">Modern Stack</h3>
                <p className="text-white/70 leading-relaxed text-center">
                  Built with React, Supabase, and Tailwind CSS for lightning-fast performance, pixel-perfect responsiveness, and effortless scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* CTA */}
        <section className="py-32 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/70 mb-12">
              Join thousands of developers building secure apps with our user management solution.
            </p>
          {/* <Button 
            asChild 
            size="lg" 
            className="px-10 py-6 rounded-2xl font-semibold shadow-xl bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-black bg-white transition-all duration-300"
          >
            <Link to="/auth/sign-up">Start Building Today</Link>
          </Button> */}
          <Button
            asChild
            size="lg"
            className="
    relative overflow-hidden
    px-12 py-6 rounded-3xl font-semibold shadow-[0_10px_30px_rgba(128,0,255,0.3)]
    bg-gradient-to-r from-purple-500 to-indigo-600
    text-white
    transition-all duration-300
    hover:scale-[1.05] active:scale-[0.97]
    hover:shadow-[0_12px_40px_rgba(128,0,255,0.5)]
  "
          >
            <Link to="/auth/sign-up" className="relative z-10 select-none">
              Start Building Today
            </Link>
          </Button>

          </div>
        </section>
    </div>
  );
}
