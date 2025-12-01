'use client'

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { Sparkles, Palette, Eye, Heart, Brain, Zap, Lightbulb, ArrowRight, Figma, Framer } from "lucide-react"

export default function UiUxDesignPage() {
  const principles = [
    { icon: Heart, title: "Emotion First", desc: "We design how users feel — before they think" },
    { icon: Eye, title: "Beauty That Stops Time", desc: "Interfaces so stunning, users screenshot them" },
    { icon: Brain, title: "Psychology-Powered UX", desc: "Every pixel backed by behavioral science" },
    { icon: Zap, title: "Delight in Every Tap", desc: "Micro-interactions that spark joy" },
    { icon: Lightbulb, title: "Intuitive by Nature", desc: "No tutorials needed. Just magic." },
    { icon: Sparkles, title: "Alive, Not Static", desc: "Designs that breathe, move, and evolve" },
  ]

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero – Pure Magic */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/80 via-purple-900 to-indigo-900/80" />
        <div className="absolute inset-0">
          {[...Array(7)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 rounded-full blur-3xl opacity-60"
              style={{
                background: i % 2 ? "radial-gradient(circle, #ff006e, transparent)" : "radial-gradient(circle, #8b5cf6, transparent)",
                left: `${10 + i * 15}%`,
                top: `${5 + i * 12}%`,
              }}
              animate={{ x: [0, 150, -100, 0], y: [0, -120, 100, 0], scale: [1, 1.4, 0.8, 1] }}
              transition={{ duration: 25 + i * 5, repeat: Infinity }}
            />
          ))}
        </div>

        <motion.div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.3 }}>
            <Sparkles className="w-32 h-32 mx-auto mb-8 text-yellow-400 animate-pulse" />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Design
            </span>
            <br />
            <span className="text-white/95">That Moves Souls</span>
          </h1>

          <p className="text-2xl md:text-4xl text-gray-300 font-light max-w-4xl mx-auto mb-16">
            We don’t follow trends.<br />We create experiences users fall in love with.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact">
              <Button className="bg-white text-black hover:bg-white/90 text-2xl font-bold px-20 py-12 rounded-full shadow-2xl hover:shadow-pink-600/50 transform hover:scale-110 transition-all">
                Make My Product Irresistible <ArrowRight className="ml-4 h-8 w-8" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Principles */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-screen-2xl mx-auto text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
              We Design Feelings
            </span>
          </h2>
          <p className="text-2xl text-gray-400">Not just screens</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {principles.map((p, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -20 }}>
              <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:bg-white/10 rounded-3xl shadow-2xl hover:shadow-pink-500/40 transition-all group p-10 text-center">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <p.icon className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-pink-400 transition-colors">{p.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">{p.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
        <motion.div className="text-center max-w-5xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-7xl md:text-9xl font-black mb-10">
            Your Users<br />
            <span className="text-white">Deserve Magic</span>
          </h2>
          <Link to="/contact">
            <Button className="bg-white text-black text-3xl font-bold px-32 py-16 rounded-full shadow-2xl hover:shadow-pink-600/60 transform hover:scale-110 transition-all">
              Let’s Create Something Unforgettable
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}