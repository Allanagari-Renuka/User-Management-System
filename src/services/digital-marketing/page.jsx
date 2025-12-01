import React from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Search, Megaphone, Target, BarChart3, Share2, TrendingUp } from "lucide-react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"

const AnimatedCounter = ({ end, suffix = "" }) => {
  const [ref, inView] = useInView({ triggerOnce: true })
  return (
    <motion.span ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
      {inView && <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }}>{end}{suffix}</motion.span>}
    </motion.span>
  )
}

export default function DigitalMarketingPage() {
  const services = [
    { icon: Search, title: "SEO Mastery", desc: "Dominate search results organically" },
    { icon: Megaphone, title: "Social Media", desc: "Engage & convert across platforms" },
    { icon: Target, title: "PPC Ads", desc: "Precision targeting, maximum ROI" },
    { icon: BarChart3, title: "Analytics", desc: "Data-driven decisions that win" },
    { icon: Share2, title: "Content", desc: "Stories that spread like wildfire" },
    { icon: TrendingUp, title: "CRO", desc: "Turn visitors into loyal customers" },
  ]

  return (
    <>
      <section className="relative w-full flex items-center mb-8 justify-center bg-gradient-to-br from-lime-400 via-lime-500 to-lime-600 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-96 h-96 bg-teal-600/30 rounded-full blur-3xl"
              animate={{ x: [0, -120, 0], y: [0, 120, 0] }} transition={{ duration: 18 + i * 3, repeat: Infinity }}
              style={{ right: `${10 * i}%`, bottom: `${15 * i}%` }}
            />
          ))}
        </div>

        <div className="relative z-10 container mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
              <span className="bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">Growth</span><br />
              <span className="text-white/90">Unleashed</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-16">
              We don’t run campaigns. We engineer growth machines.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-5">
              <Link to="/contact"><Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-10 py-8 rounded-full shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all">Scale Now <ArrowRight className="ml-2" /></Button></Link>
              <Link to="/portfolio"><Button variant="outline" size="lg" className="border-white/40 text-white bg-white/10 backdrop-blur-xl hover:bg-white/20 px-10 py-8 rounded-full">See Results</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-18 bg-black/60 backdrop-blur-xl -mt-15 mb-0 relative z-25">
        <div className="container mx-auto px-8 grid md:grid-cols-3 gap-12 text-center">
          <div><AnimatedCounter end={300} suffix="%" /><p className="text-white/70 text-xl mt-4">Traffic Growth</p></div>
          <div><AnimatedCounter end={150} suffix="%" /><p className="text-white/70 text-xl mt-4">Leads</p></div>
          <div><AnimatedCounter end={60} suffix="%" /><p className="text-white/70 text-xl mt-4">Lower CPA</p></div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-white to-white bg-clip-text text-transparent">Our Growth Engine</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -15 }}>
                <Card className="h-full bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:shadow-teal-500/30 transition-all group">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-lime-500 to-teal-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <s.icon className="w-9 h-9 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-400 transition-colors">{s.title}</h3>
                    <p className="text-gray-300">{s.desc}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}