'use client'

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Link } from "react-router-dom"
import { 
  Sparkles, 
  HeartHandshake, 
  Wand2, 
  Flower2, 
  Zap, 
  Eye, 
  Brain, 
  Palette, 
  ArrowRight,
  Wind,
  Feather,
  Moon,
  Sun,
  Stars
} from "lucide-react"

export default function UiUxDesignPage() {
  const philosophy = [
    { icon: Heart, title: "We Design for Humans", desc: "Not users. Not metrics. Real people with emotions, bad days, and dreams." },
    { icon: Wand2, title: "Magic in the Details", desc: "One perfectly timed animation can make someone smile for the rest of their day." },
    { icon: Eye, title: "Beauty is a Requirement", desc: "Ugly design is disrespectful. We refuse to ship anything less than breathtaking." },
    { icon: Brain, title: "Invisible UX", desc: "The best interface is the one you don’t notice — until it’s gone." },
    { icon: Flower2, title: "Growth Through Design", desc: "Great design doesn’t just look good. It changes behavior. It grows companies. It moves culture." },
    { icon: Stars, title: "We Obsess So You Don’t Have To", desc: "While you sleep, we’re tweaking bezier curves and testing 47 shades of purple." },
  ]

  return (
    <div className="bg-black text-white overflow-x-hidden">
      {/* Hero — Pure Emotion */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900 via-purple-900 to-violet-900" />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-pink-400/20"
              animate={{
                y: [0, -1000],
                x: [0, Math.random() * 400 - 200],
                rotate: [0, 360],
              }}
              transition={{
                duration: 15 + i * 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{ left: `${10 + i * 12}%`, bottom: "-50px" }}
            >
              {i % 3 === 0 ? <Heart className="w-12 h-12" /> : <Sparkles className="w-10 h-10" />}
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 text-center px-6 py-24 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-7xl md:text-9xl font-black tracking-tight mb-10 leading-none">
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent">
                Design
              </span>
              <br />
              <span className="text-white">is Poetry</span>
            </h1>

            <p className="text-2xl md:text-4xl font-light text-gray-300 max-w-5xl mx-auto leading-relaxed">
              We don’t make apps.<br />
              We craft digital experiences that feel like falling in love for the first time.
            </p>

            <div className="mt-16 flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact">
                <Button className="group relative overflow-hidden bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-2xl font-bold px-20 py-12 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-500">
                  <span className="relative z-10 flex items-center gap-4">
                    Let’s Write Poetry Together
                    <Wand2 className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Philosophy — This is what makes it unique */}
      <section className="py-40 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-6xl md:text-8xl font-black text-center mb-20"
          >
            <span className="bg-gradient-to-r from-amber-400 to-pink-500 bg-clip-text text-transparent">
              We Believe
            </span>
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {philosophy.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                whileHover={{ y: -20 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-2xl border-white/10 hover:border-pink-500/50 transition-all duration-700 rounded-3xl p-10 shadow-2xl hover:shadow-pink-500/25">
                  <item.icon className="w-16 h-16 mb-8 text-pink-400 group-hover:scale-125 transition-transform duration-500" />
                  <h3 className="text-3xl font-bold mb-6 group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    {item.desc}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Feeling Section */}
      <section className="py-40 px-6 bg-gradient-to-b from-transparent via-purple-900/20 to-transparent">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <Feather className="w-32 h-32 mx-auto mb-12 text-purple-400" />
            <h2 className="text-6xl md:text-8xl font-black mb-10">
              Design Should<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
                Feel Like This
              </span>
            </h2>
            <p className="text-3xl font-light text-gray-300 leading-relaxed">
              Light. Effortless. Joyful.<br />
              Like breathing. Like dancing. Like coming home.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Final CTA — Soul-Level */}
      <section className="py-40 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-purple-600/20 to-indigo-600/20 blur-3xl" />
        
        <motion.div
          className="relative text-center max-w-6xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-7xl md:text-9xl font-black mb-12 leading-tight">
            Ready to Make<br />
            Something<br />
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Unforgettable?
            </span>
          </h2>

          <p className="text-2xl md:text-4xl text-gray-300 mb-16 font-light">
            Let’s turn your product into someone’s favorite thing in the world.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-400 hover:to-purple-500 text-white text-3xl font-bold px-24 py-16 rounded-3xl shadow-2xl hover:shadow-purple-500/50 transform hover:scale-110 transition-all duration-500">
                <span className="flex items-center gap-6">
                  I Want Magic
                  <Sparkles className="w-12 h-12 animate-pulse" />
                </span>
              </Button>
            </Link>

            <Link to="/portfolio">
              <Button variant="outline" className="border-2 border-white/30 bg-transparent text-white text-2xl px-20 py-16 rounded-3xl hover:bg-white/10 backdrop-blur transition-all">
                Show Me the Magic First
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}