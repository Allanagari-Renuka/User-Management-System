import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Lock, Zap, ArrowRight, Code2, Users as UsersIcon, Zap as ZapIcon, Sparkles, Target, Eye, Heart, Globe, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function MissionPage() {
  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>
      {/* Hero - Harvee Style */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10" />
        <div className="container mx-auto max-w-6xl px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 mb-8 border border-white/20">
            <Sparkles className="h-5 w-5 text-emerald-400" />
            <span className="text-emerald-700 font-medium">Our Purpose</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Mission & Vision
          </h1>
          <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            We exist to make user management invisible — so businesses can focus on what truly matters: innovation, growth, and impact.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl text-muted-foreground/90 leading-relaxed">
                To empower every business — from startups to enterprises — with secure, intuitive, and scalable user management tools that just work.
              </p>
              <div className="space-y-5">
                {["Unparalleled security", "Invisible complexity", "Scalable by default", "Built for humans"].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <Card className="overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-emerald-500/10 to-teal-600/10 backdrop-blur-md ring-1 ring-emerald-500/20 rounded-3xl">
              <CardHeader className="text-center pb-8">
                <Target className="h-20 w-20 mx-auto text-emerald-600 mb-6" />
                <CardTitle className="text-3xl font-bold">We Build Trust</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-10 pb-10">
                <blockquote className="text-2xl italic text-foreground/90">
                  “Simple. Secure. Scalable. That’s our promise.”
                </blockquote>
                <Badge className="mt-6 bg-emerald-600 text-white">User Management System</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gradient-to-br from-cyan-50/50 to-emerald-50/30">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <Card className="order-2 md:order-1 overflow-hidden border-0 shadow-2xl bg-gradient-to-br from-cyan-500/10 to-blue-600/10 backdrop-blur-md ring-1 ring-cyan-500/20 rounded-3xl">
              <CardHeader className="text-center pb-8">
                <Eye className="h-20 w-20 mx-auto text-cyan-600 mb-6" />
                <CardTitle className="text-3xl font-bold">The Future We See</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-10 pb-10">
                <blockquote className="text-2xl italic text-foreground/90">
                  “A world where user management is seamless, invisible, and trusted by all.”
                </blockquote>
                <Badge className="mt-6 bg-cyan-600 text-white">Our Vision</Badge>
              </CardContent>
            </Card>
            <div className="order-1 md:order-2 space-y-8">
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-lg">
                  <Eye className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold">Our Vision</h2>
              </div>
              <p className="text-xl text-white/80 leading-relaxed">
                To become the invisible backbone of digital trust — the global standard that every modern application relies on.
              </p>
              <div className="space-y-5">
                {["AI-powered insights", "Zero-trust by default", "Global compliance", "Instant scalability"].map((item) => (
                  <div key={item} className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-cyan-500 rounded-full" />
                    <span className="text-lg font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-700">
        <div className="container mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">This Is Just the Beginning</h2>
          <p className="text-xl opacity-90 mb-10">Join us in building the future of digital trust.</p>
          <Link to="/about/careers">
            <Button size="lg" variant="secondary" className="text-lg px-10 py-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
              See Open Roles <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}