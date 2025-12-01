// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Target, Palette, Megaphone, Users, TrendingUp, Star, Award, Lightbulb } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function BrandingPage() {
//   const services = [
//     {
//       icon: Target,
//       title: "Brand Strategy",
//       description: "Develop comprehensive brand strategies that align with your business goals and resonate with your audience.",
//     },
//     {
//       icon: Palette,
//       title: "Visual Identity",
//       description: "Create memorable logos, color palettes, typography, and visual guidelines that define your brand.",
//     },
//     {
//       icon: Megaphone,
//       title: "Brand Messaging",
//       description: "Craft compelling brand stories, voice guidelines, and messaging that connects with your customers.",
//     },
//     {
//       icon: Users,
//       title: "Brand Experience",
//       description: "Design cohesive brand experiences across all touchpoints, from digital to physical interactions.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Brand Launch",
//       description: "Execute successful brand launches with integrated marketing campaigns and stakeholder engagement.",
//     },
//     {
//       icon: Award,
//       title: "Brand Guidelines",
//       description: "Create comprehensive brand guidelines to ensure consistency across all brand applications.",
//     },
//   ]

//   const process = [
//     {
//       step: "01",
//       title: "Brand Discovery",
//       description: "Deep dive into your business, values, target audience, and competitive landscape.",
//     },
//     {
//       step: "02",
//       title: "Strategy Development",
//       description: "Craft a brand strategy that positions you uniquely in the market.",
//     },
//     {
//       step: "03",
//       title: "Creative Development",
//       description: "Design visual identity, messaging, and brand experiences that bring the strategy to life.",
//     },
//     {
//       step: "04",
//       title: "Brand Testing",
//       description: "Test brand elements with your target audience for optimal resonance.",
//     },
//     {
//       step: "05",
//       title: "Implementation",
//       description: "Roll out your new brand across all touchpoints with clear guidelines.",
//     },
//     {
//       step: "06",
//       title: "Brand Monitoring",
//       description: "Track brand performance and make adjustments as your business evolves.",
//     },
//   ]

//   const deliverables = [
//     "Brand Strategy Document",
//     "Logo & Visual Identity",
//     "Brand Guidelines Manual",
//     "Brand Messaging Framework",
//     "Brand Voice & Tone Guide",
//     "Brand Asset Library",
//   ]

//   const caseStudies = [
//     {
//       client: "TechStart Inc.",
//       challenge: "Undefined brand identity in competitive market",
//       solution: "Complete brand overhaul with new positioning",
//       results: ["200% increase in brand recognition", "150% growth in qualified leads", "40% improvement in customer loyalty"],
//     },
//     {
//       client: "GreenLife Organics",
//       challenge: "Brand not connecting with eco-conscious consumers",
//       solution: "Sustainable brand identity and messaging",
//       results: ["300% increase in social media engagement", "250% growth in organic traffic", "60% higher conversion rates"],
//     },
//     {
//       client: "InnovateCorp",
//       challenge: "Outdated brand not attracting top talent",
//       solution: "Modern, innovative brand refresh",
//       results: ["400% increase in job applications", "180% improvement in employee satisfaction", "50% reduction in hiring time"],
//     },
//   ]

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-indigo-50 to-blue-100 dark:from-indigo-950 dark:to-blue-900 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               Branding
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//               Build a brand that stands out, connects with your audience, and drives business growth.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/contact">
//                 <Button size="lg" className="gap-2">
//                   Build Your Brand
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link to="/portfolio">
//                 <Button variant="outline" size="lg">
//                   View Brand Work
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Services */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Branding Services</h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               Comprehensive branding solutions to establish your identity and connect with your audience
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index}>
//                 <CardHeader>
//                   <service.icon className="h-12 w-12 mb-4 text-indigo-600" />
//                   <CardTitle className="text-xl">{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process */}
//       <section className="bg-gray-50 dark:bg-gray-900 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Our Branding Process</h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               A strategic approach that ensures your brand resonates with your audience and achieves your goals
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {process.map((step, index) => (
//               <Card key={index}>
//                 <CardHeader>
//                   <div className="text-3xl font-bold text-indigo-600 mb-2">{step.step}</div>
//                   <CardTitle className="text-lg">{step.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Deliverables */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">What You Get</h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               Comprehensive brand assets and documentation to implement your new brand successfully
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
//             {deliverables.map((deliverable, index) => (
//               <Card key={index}>
//                 <CardContent className="pt-6">
//                   <div className="flex items-center gap-3">
//                     <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
//                     <span className="font-medium">{deliverable}</span>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="bg-gray-50 dark:bg-gray-900 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Brand Transformation Stories</h2>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Real results from our branding projects
//               </p>
//             </div>
//             <div className="grid md:grid-cols-3 gap-8">
//               {caseStudies.map((study, index) => (
//                 <Card key={index}>
//                   <CardHeader>
//                     <CardTitle className="text-lg">{study.client}</CardTitle>
//                     <CardDescription className="font-medium text-indigo-600">Challenge: {study.challenge}</CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <p className="text-gray-600 dark:text-gray-300 mb-4">
//                       <strong>Solution:</strong> {study.solution}
//                     </p>
//                     <div className="space-y-2">
//                       <div className="font-semibold text-sm mb-2">Results:</div>
//                       {study.results.map((result, resultIndex) => (
//                         <div key={resultIndex} className="flex items-center gap-2">
//                           <div className="w-2 h-2 bg-green-600 rounded-full"></div>
//                           <span className="text-sm">{result}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Why Choose Our Branding Services?</h2>
//               <p className="text-gray-600 dark:text-gray-300">
//                 What makes us different in the branding world
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Lightbulb className="h-5 w-5 text-yellow-600" />
//                     Strategic Thinking
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     We don't just create pretty logos – we develop brand strategies that drive business results.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Users className="h-5 w-5 text-blue-600" />
//                     Audience-Centric
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Every brand we create is designed to deeply connect with your target audience.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <TrendingUp className="h-5 w-5 text-green-600" />
//                     Results-Driven
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Our brands are built to perform, with measurable impact on your business metrics.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Award className="h-5 w-5 text-purple-600" />
//                     Award-Winning Work
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Our branding work has been recognized by industry leaders and design competitions.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-indigo-600 to-blue-600 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center text-white">
//             <h2 className="text-3xl font-bold mb-4">Ready to Build a Powerful Brand?</h2>
//             <p className="text-xl mb-8 opacity-90">
//               Let's create a brand that not only looks great but drives real business results
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/contact">
//                 <Button size="lg" variant="secondary" className="gap-2">
//                   Start Branding
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link href="/services">
//                 <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-indigo-600">
//                   View All Services
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


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
      <section className="relative w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
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
      <section className="py-24 bg-black/60 backdrop-blur-3xl -mt-32 relative z-20">
        <div className="container mx-auto px-6">
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