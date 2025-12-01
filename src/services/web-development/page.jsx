'use client'

import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Link } from "react-router-dom"
import { Code2, Rocket, Shield, Zap, Globe, Cpu, ArrowRight, Terminal } from "lucide-react"

export default function WebDevelopmentPage() {
  const strengths = [
    { icon: Rocket, title: "Blazing Fast", desc: "Sub-1s load times. Core Web Vitals? Crushed." },
    { icon: Shield, title: "Fortress Security", desc: "Bank-grade encryption. Zero trust architecture." },
    { icon: Globe, title: "Global Scale", desc: "From 100 to 100M users — without breaking" },
    { icon: Cpu, title: "Future-Proof Code", desc: "TypeScript, modular, clean, maintainable" },
    { icon: Zap, title: "Real-Time Everything", desc: "WebSockets, live updates, instant sync" },
    { icon: Code2, title: "Developer Heaven", desc: "Clean APIs, docs, tests — devs love working with us" },
  ]

  const stack = ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Docker", "AWS", "Vercel"]

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Hero – Power & Precision */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-black to-teal-900" />
        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />

        <motion.div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
          <motion.div initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }}>
            <Terminal className="w-32 h-32 mx-auto mb-8 text-cyan-400" />
          </motion.div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8 leading-none">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-teal-400 bg-clip-text text-transparent">
              We Build
            </span>
            <br />
            <span className="text-white">Digital Empires</span>
          </h1>

          <p className="text-2xl md:text-4xl text-gray-300 font-light max-w-4xl mx-auto mb-16">
            Production-grade apps that scale, perform, and dominate.
          </p>

          <div className="flex flex-col sm:flex-row gap-8 justify-center">
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-400 hover:to-teal-400 text-black text-2xl font-bold px-20 py-12 rounded-full shadow-2xl hover:shadow-cyan-500/50 transform hover:scale-110 transition-all">
                Launch Your Empire <Rocket className="ml-4 h-8 w-8" />
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button variant="outline" className="border-cyan-500/50 text-cyan-400 bg-black/50 backdrop-blur-xl hover:bg-cyan-950/50 text-xl px-16 py-12 rounded-full">
                See Our Weapons
              </Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Strengths Grid */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-gray-950">
        <div className="max-w-screen-2xl mx-auto text-center mb-20">
          <h2 className="text-6xl md:text-8xl font-black mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Built Like The Future
            </span>
          </h2>
          <p className="text-2xl text-gray-400">No shortcuts. No legacy. Only excellence.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {strengths.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -20 }}>
              <Card className="h-full bg-white/5 backdrop-blur-2xl border-white/10 hover:bg-white/10 rounded-3xl shadow-2xl hover:shadow-cyan-500/40 transition-all group p-10 text-center">
                <div className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <s.icon className="w-14 h-14 text-white" />
                </div>
                <h3 className="text-3xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{s.title}</h3>
                <p className="text-xl text-gray-300 leading-relaxed">{s.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Battle-Tested Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {stack.map((tech, i) => (
              <Badge key={i} className="bg-cyan-900/50 text-cyan-300 border-cyan-700/50 text-lg px-8 py-4 rounded-full hover:bg-cyan-800/70 transition-all">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 bg-gradient-to-r from-cyan-600 via-teal-600 to-cyan-600">
        <motion.div className="text-center max-w-5xl mx-auto" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <h2 className="text-7xl md:text-9xl font-black mb-10 text-white">
            Ready to<br />
            <span className="text-white">Dominate Online?</span>
          </h2>

          <Link to="/contact">
            <Button className="bg-white text-black text-3xl font-bold px-32 py-16 rounded-full shadow-2xl hover:shadow-cyan-500/60 transform hover:scale-110 transition-all">
              Build Something Unstoppable
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  )
}