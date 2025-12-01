import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Lock, Zap, ArrowRight, Code2, Users as UsersIcon, Zap as ZapIcon, Sparkles, Building2, Target, Award, TrendingUp, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutPage() {
  const achievements = [
    {
      icon: Users,
      title: "500+ Businesses Served",
      description: "Trusted by companies worldwide to manage their users securely and efficiently.",
    },
    {
      icon: Shield,
      title: "SOC 2 Type II Compliant",
      description: "Certified for security, availability, and confidentiality of customer data.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Supporting businesses in 50+ countries with localized compliance and support.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Winner of multiple awards for innovation and customer satisfaction.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Customer First",
      description: "Everything we do starts with understanding and serving our customers' needs.",
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "We continuously push boundaries to deliver cutting-edge user management solutions.",
    },
    {
      icon: Shield,
      title: "Security",
      description: "Data protection and privacy are at the core of everything we build.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of teamwork, both internally and with our clients.",
    },
  ];

  const timeline = [
    {
      year: "2020",
      title: "Company Founded",
      description: "User Management System was born with a vision to simplify user management for businesses worldwide.",
    },
    {
      year: "2021",
      title: "First Major Release",
      description: "Launched our core platform with advanced authentication and user management features.",
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Expanded to serve customers in 30+ countries with localized compliance support.",
    },
    {
      year: "2023",
      title: "SOC 2 Certification",
      description: "Achieved SOC 2 Type II compliance, setting new standards for security in our industry.",
    },
    {
      year: "2024",
      title: "500+ Customers",
      description: "Reached a milestone of serving over 500 businesses, from startups to enterprises.",
    },
  ];

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>
      {/* Hero Section - Harvee-style Immersive Banner */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-slate-50 to-transparent" />
        <div className="container mx-auto max-w-6xl px-6 relative z-10">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-600 to-indigo-600 shadow-2xl ring-4 ring-violet-500/20">
                  <Shield className="h-48 w-48 text-white drop-shadow-sm" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight mb-6">
              About User Management System
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto leading-relaxed mb-12">
              Empowering businesses worldwide with secure, intuitive user management solutions since 2020.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/about/team">
                <Button size="lg" className="text-lg px-10 py-6 rounded-2xl border-2 border-primary/20 bg-white/50 text-black backdrop-blur-sm font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 transform hover:scale-[1.02]">
                  Our Team
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
              </Link>
              <Link to="/about/mission">
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 rounded-2xl border-2 border-primary/20 bg-white/50 text-black backdrop-blur-sm font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 transform hover:scale-[1.02]">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story - Harvee-style Two-Column with Enhanced Card */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white">
                Our Story
              </h2>
              <p className="text-lg text-white/80 leading-relaxed">
                Founded in 2020, User Management System emerged from a simple observation: businesses were struggling with user management. What should be a straightforward process had become complex, expensive, and insecure.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Our founders, a team of experienced engineers and product leaders, set out to change this. They believed that every business, regardless of size, deserved access to enterprise-grade user management tools without the traditional barriers of cost, complexity, and compromise.
              </p>
              <p className="text-lg text-white/80 leading-relaxed">
                Today, User Management System serves over 500 businesses worldwide, from innovative startups to established enterprises. We've grown from a small team in a garage to a global platform trusted by companies in 50+ countries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/about/mission">
                  <Button variant="outline" className="group rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur text-white hover:bg-white/20 px-8 py-4 transform hover:scale-[1.02]">
                    Learn About Our Mission
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link to="/about/team">
                  <Button variant="outline" className="group rounded-2xl border-2 border-white/30 bg-white/10 backdrop-blur text-white hover:bg-white/20 px-8 py-4 transform hover:scale-[1.02]">
                    Meet Our Team
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
            </div>
                <Card className="overflow-hidden border-0 shadow-2xl bg-white/10 backdrop-blur-md ring-1 ring-white/30 rounded-3xl p-0">
              <div className="bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 p-8">
                <CardHeader className="text-center pb-0">
                  <Building2 className="h-16 w-16 mx-auto mb-4 text-indigo-400 drop-shadow-sm" />
                  <CardTitle className="text-3xl font-bold text-white">Company Facts</CardTitle>
                </CardHeader>
                <CardContent className="pt-8 space-y-6">
                  {[
                    { label: "Founded", value: "2020" },
                    { label: "Team Size", value: "50+ Employees" },
                    { label: "Customers", value: "500+" },
                    { label: "Countries", value: "50+" },
                    { label: "Compliance", value: "SOC 2 Type II" },
                  ].map((fact, index) => (
                    <div key={index} className="group flex justify-between items-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all">
                      <span className="text-base font-medium text-white/70 group-hover:text-white">{fact.label}</span>
                      <Badge variant="secondary" className="px-4 py-2 font-semibold bg-gradient-to-r from-indigo-500/20 to-purple-600/20 border border-indigo-500/30 text-white">
                        {fact.value}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievements - Harvee-style Glassy Grid */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 to-indigo-50/20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that showcase our commitment to excellence and growth
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-xl bg-white/60 backdrop-blur-md ring-1 ring-white/30 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/80">
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6 p-4 bg-gradient-to-br from-primary/10 to-purple-600/10 rounded-2xl group-hover:from-primary/20 transition-colors">
                    <achievement.icon className="h-12 w-12 text-primary transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-foreground mb-4">{achievement.title}</CardTitle>
                  <p className="text-base text-gray-700 leading-relaxed">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values - Similar Spacious Blocks */}
      <section className="py-20">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do at User Management System
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="group overflow-hidden border-0 shadow-xl bg-white/60 backdrop-blur-md ring-1 ring-white/30 rounded-3xl hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:bg-white/80">
                <div className="p-8 text-center">
                  <div className="flex justify-center mb-6 p-4 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-2xl group-hover:from-green-500/20 transition-colors">
                    <value.icon className="h-12 w-12 text-green-600 transition-transform group-hover:scale-110" />
                  </div>
                  <CardTitle className="text-xl font-bold text-foreground mb-4">{value.title}</CardTitle>
                  <p className="text-sm text-muted-foreground/80 leading-relaxed">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline - Sleek Vertical Flow */}
      <section className="py-20 bg-gradient-to-br from-gray-50/50 to-indigo-50/20">
        <div className="container mx-auto max-w-4xl px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-black mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Key milestones in User Management System's growth and evolution
            </p>
          </div>
          <div className="relative space-y-12">
            {timeline.map((event, index) => (
              <div key={index} className="group flex gap-8 items-start relative">
                <div className="flex flex-col items-center flex-shrink-0 z-10">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-full flex items-center justify-center text-black font-bold text-lg shadow-lg group-hover:scale-110 transition-all">
                    {event.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-20 bg-gradient-to-b from-primary/20 to-purple-600/20 mt-4 group-hover:h-24 transition-all" />
                  )}
                </div>
                <div className="flex-1 pb-8 bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-white/30 shadow-lg group-hover:shadow-xl transition-all">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{event.title}</h3>
                    <Badge variant="outline" className="bg-gradient-to-r from-primary/10 to-purple-600/10 border-primary/20 font-semibold">
                      {event.year}
                    </Badge>
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Bold Gradient Footer */}
      <section className="py-20 bg-gradient-to-r from-primary via-indigo-600 to-purple-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
        <div className="container mx-auto max-w-4xl px-6 relative z-10">
          <div className="text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Join Our Growing Community
            </h2>
            <p className="text-2xl opacity-90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Be part of the businesses transforming how they manage users with User Management System
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link href="/auth/sign-up">
                <Button size="lg" variant="secondary" className="group text-lg px-10 py-6 rounded-2xl font-semibold shadow-xl hover:shadow-2xl bg-white text-black hover:bg-white/90 transition-all duration-300 transform hover:scale-[1.02]">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 ml-2" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline" className="group text-lg px-10 py-6 rounded-2xl border-2 border-white/50 bg-transparent/50 backdrop-blur-sm font-semibold text-white hover:bg-white/20 hover:border-white hover:text-black transition-all duration-300 transform hover:scale-[1.02]">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}