import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Target, Palette, Megaphone, Users, TrendingUp, Award, Sparkles } from "lucide-react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"

const AnimatedCounter = ({ end, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent"
    >
      {inView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          {end}{suffix}
        </motion.span>
      )}
    </motion.span>
  )
}

export default function BrandingPage() {
  const services = [
    { icon: Target, title: "Brand Strategy", desc: "Strategic positioning that sets you apart" },
    { icon: Palette, title: "Visual Identity", desc: "Memorable logos & complete design systems" },
    { icon: Megaphone, title: "Brand Messaging", desc: "Voice that resonates deeply with your audience" },
    { icon: Users, title: "Brand Experience", desc: "Cohesive touchpoints across every channel" },
    { icon: TrendingUp, title: "Brand Launch", desc: "High-impact rollout and growth campaigns" },
    { icon: Award, title: "Brand Guidelines", desc: "Ensuring consistency at every level" },
  ]

  return (
    <>
      {/* Hero */}
      <section className="relative w-full flex items-center justify-center overflow-hidden mb-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-96 h-96 bg-purple-600/30 rounded-full blur-3xl"
              animate={{ x: [0, 150, 0], y: [0, -150, 0] }}
              transition={{ duration: 20 + i * 4, repeat: Infinity, ease: "linear" }}
              style={{ left: `${15 * i}%`, top: `${20 * i}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Branding
              </span>
              <br />
              <span className="text-white/90">That Dominates</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12">
              We don’t follow trends. We create brands that become cultural landmarks.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-3">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-10 py-8 rounded-full shadow-2xl hover:shadow-purple-500/40 transition-all hover:scale-105">
                  Start Your Brand <ArrowRight className="ml-2" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg" className="border-white/40 text-white bg-white/10 backdrop-blur-xl hover:bg-white/20 px-10 py-8 rounded-full">
                  View Our Work
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-15 bg-black/60 backdrop-blur-xl -mt-15 relative z-20">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div><AnimatedCounter end={200} suffix="%" /><p className="text-white/70 text-xl mt-4">Brand Recognition</p></div>
            <div><AnimatedCounter end={150} suffix="%" /><p className="text-white/70 text-xl mt-4">Lead Growth</p></div>
            <div><AnimatedCounter end={40} suffix="%" /><p className="text-white/70 text-xl mt-4">Loyalty Increase</p></div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32">
        <div className="container mx-auto px-6">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              What We Deliver
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -15 }}
              >
                <Card className="h-full bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:shadow-purple-500/30 transition-all group">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <s.icon className="w-9 h-9 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-indigo-400 transition-colors">{s.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{s.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
        <div className="container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
            <Sparkles className="w-20 h-20 mx-auto mb-8 text-yellow-400 animate-pulse" />
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Ready to Build a Legendary Brand?</h2>
            <Link to="/contact">
              <Button size="lg" className="bg-white text-black hover:bg-white/90 text-xl px-14 py-9 rounded-full shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all">
                Let’s Make History <ArrowRight className="ml-3" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}