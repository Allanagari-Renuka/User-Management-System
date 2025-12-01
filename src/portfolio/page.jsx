'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ExternalLink, Zap, Globe, Users, Shield, Star } from "lucide-react"

// Animation variants
const fadeInUp = {
  initial: { y: 80, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const stagger = {
  animate: { transition: { staggerChildren: 0.12 } }
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "NovaCommerce — E-Commerce Revolution",
      category: "Web Development",
      description: "Next-gen e-commerce platform with AI recommendations, AR try-on, and instant checkout.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      results: ["300% increase in conversion rate", "50% reduction in cart abandonment", "2M+ monthly transactions"],
    },
    {
      title: "MediFlow — Healthcare OS",
      category: "Full-Stack Application",
      description: "All-in-one hospital management system with telemedicine, EHR, and predictive analytics.",
      technologies: ["React", "Node.js", "Python", "AWS", "HIPAA"],
      image: "https://picsum.photos/1200/800",
      results: ["10,000+ patients served", "99.9% uptime", "Real-time video consultations"],
    },
    {
      title: "WealthOS — Investment Intelligence",
      category: "UI/UX + Data Visualization",
      description: "Award-winning financial dashboard used by top hedge funds with real-time insights.",
      technologies: ["Figma", "React", "D3.js", "WebSocket", "Framer Motion"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      results: ["Used by 50+ hedge funds", "Red Dot Design Award 2024", "1M+ active traders"],
    },
    {
      title: "GrowEasy — Marketing Automation",
      category: "SaaS Platform",
      description: "AI-powered marketing suite that automates campaigns across email, social & ads.",
      technologies: ["Vue 3", "Laravel", "Redis", "AI Engine", "Analytics"],
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop",
      results: ["500% ROI average", "10x email open rates", "200+ enterprise clients"],
    },
    {
      title: "Lumen — Brand Identity System",
      category: "Branding & Design",
      description: "Complete visual identity for a renewable energy startup now valued at $2B.",
      technologies: ["Figma", "Cinema 4D", "Brand Strategy", "Motion Design"],
      image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=600&fit=crop",
      results: ["$2B valuation", "200% brand recall", "Featured in Forbes"],
    },
    {
      title: "SecureBank — Mobile Banking Redefined",
      category: "Mobile App",
      description: "Biometric-first banking app with voice commands and quantum-grade encryption.",
      technologies: ["React Native", "GraphQL", "Face ID", "Blockchain Auth"],
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&h=600&fit=crop",
      results: ["4.9/5 App Store", "5M+ downloads", "Zero breaches in 3 years"],
    },
  ]

  const clients = ["Netflix", "Airbnb", "Spotify", "Tesla", "Microsoft", "Google", "Amazon", "Meta"]

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900" />
        <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:60px_60px]" />

        <motion.div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.h1
            className="text-7xl md:text-9xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 leading-none"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            We Build <br /> What Wins
          </motion.h1>
          <motion.p
            className="mt-10 text-2xl md:text-4xl text-gray-300 font-light"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            500+ projects. Zero compromises.
          </motion.p>
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xl px-16 py-10 font-bold rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
                Start Your Project <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Trusted By */}
      <section className="py-20 px-6 border-y border-white/10 bg-black/50 backdrop-blur-2xl">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-xl mb-10">Trusted by the world's most ambitious teams</p>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
            {clients.map((client, i) => (
              <div key={i} className="text-3xl md:text-4xl font-bold text-gray-500 hover:text-white transition-all">
                {client}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -16, scale: 1.03 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-700 h-full rounded-3xl shadow-2xl">
                  <div className="aspect-video relative overflow-hidden bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <Badge className="absolute top-6 left-6 bg-white/20 backdrop-blur border-white/30 text-white px-4 py-2 text-sm font-medium">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader className="pt-8">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-white group-hover:text-purple-400 transition-colors leading-tight">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-6 pb-8">
                    <p className="text-gray-300 text-lg leading-relaxed">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, i) => (
                        <Badge key={i} variant="secondary" className="bg-purple-900/50 text-purple-300 border-purple-700/50 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 4 && (
                        <Badge variant="secondary" className="bg-gray-800 text-gray-400 text-xs">
                          +{project.technologies.length - 4}
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-3 pt-6 border-t border-white/10">
                      {project.results.map((result, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-400">
                          <Zap className="h-4 w-4 text-purple-400" />
                          <span>{result}</span>
                        </div>
                      ))}
                    </div>

                    <Button variant="outline" className="w-full mt-8 border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-full py-6 text-lg font-medium">
                      View Case Study <ExternalLink className="ml-3 h-5 w-5" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-24 px-6 bg-gradient-to-b from-gray-950 to-black">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {[
            { icon: Globe, value: "50+", label: "Countries" },
            { icon: Users, value: "500+", label: "Happy Clients" },
            { icon: Shield, value: "100%", label: "On-Time Delivery" },
            { icon: Star, value: "4.9/5", label: "Average Rating" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              className="space-y-4"
            >
              <stat.icon className="h-20 w-20 mx-auto text-purple-400" />
              <div className="text-6xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xl text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600">
        <motion.div
          className="text-center max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-6xl md:text-8xl font-black mb-8 leading-tight">
            Your Success<br />Starts Here
          </h2>
          <p className="text-2xl text-white/90 mb-12 max-w-2xl mx-auto">
            Join 500+ companies that trusted us to build their future.
          </p>
          <Link to="/contact">
            <Button className="bg-white text-purple-600 hover:bg-gray-100 text-2xl font-bold px-20 py-12 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300">
              Let's Talk About Your Project
              <ArrowRight className="ml-6 h-10 w-10" />
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}