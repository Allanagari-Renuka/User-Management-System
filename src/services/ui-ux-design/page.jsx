// // import { Button } from "@/components/ui/button"
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// // import { Badge } from "@/components/ui/badge"
// // import { ArrowRight, Smartphone, Monitor, Palette, Users, Zap, CheckCircle, Star, Lightbulb } from "lucide-react"
// // import { Link } from "react-router-dom"

// // export default function UiUxDesignPage() {
// //   const services = [
// //     {
// //       icon: Smartphone,
// //       title: "Mobile App Design",
// //       description: "Create intuitive mobile experiences that users love, optimized for iOS and Android platforms.",
// //     },
// //     {
// //       icon: Monitor,
// //       title: "Web Design",
// //       description: "Design responsive websites that work seamlessly across all devices and screen sizes.",
// //     },
// //     {
// //       icon: Palette,
// //       title: "UI/UX Design",
// //       description: "Craft beautiful, functional interfaces that balance aesthetics with usability.",
// //     },
// //     {
// //       icon: Users,
// //       title: "User Research",
// //       description: "Understand your users through research, interviews, and data analysis to inform design decisions.",
// //     },
// //     {
// //       icon: Zap,
// //       title: "Prototyping",
// //       description: "Build interactive prototypes to test and validate design concepts before development.",
// //     },
// //     {
// //       icon: Lightbulb,
// //       title: "Design Systems",
// //       description: "Create scalable design systems that ensure consistency across all products and platforms.",
// //     },
// //   ]

// //   const process = [
// //     {
// //       step: "01",
// //       title: "Research & Discovery",
// //       description: "Understand your users, business goals, and current challenges through research and analysis.",
// //     },
// //     {
// //       step: "02",
// //       title: "Information Architecture",
// //       description: "Organize content and features in a logical, user-friendly structure.",
// //     },
// //     {
// //       step: "03",
// //       title: "Wireframing",
// //       description: "Create low-fidelity wireframes to establish layout and functionality.",
// //     },
// //     {
// //       step: "04",
// //       title: "Visual Design",
// //       description: "Develop high-fidelity designs with colors, typography, and visual elements.",
// //     },
// //     {
// //       step: "05",
// //       title: "Prototyping & Testing",
// //       description: "Build interactive prototypes and test with users to validate design decisions.",
// //     },
// //     {
// //       step: "06",
// //       title: "Handoff & Implementation",
// //       description: "Deliver design specifications and assets for seamless development.",
// //     },
// //   ]

// //   const tools = [
// //     "Figma", "Sketch", "Adobe XD", "InVision", "Principle", "Framer", "Maze", "Hotjar"
// //   ]

// //   const testimonials = [
// //     {
// //       name: "Sarah Johnson",
// //       company: "TechCorp",
// //       quote: "The UI/UX design transformed our user engagement completely. Our conversion rates increased by 40% after the redesign.",
// //       rating: 5,
// //     },
// //     {
// //       name: "Michael Chen",
// //       company: "InnovateLabs",
// //       quote: "Working with this design team was exceptional. They understood our vision and delivered beyond expectations.",
// //       rating: 5,
// //     },
// //     {
// //       name: "Emily Rodriguez",
// //       company: "GrowthCo",
// //       quote: "The user research and testing approach ensured our new design actually solved real user problems.",
// //       rating: 5,
// //     },
// //   ]

// //   return (
// //     <div className="w-full">
// //       {/* Hero Section */}
// //       <section className="bg-gradient-to-br from-pink-50 to-purple-100 dark:from-pink-950 dark:to-purple-900 py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center">
// //             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
// //               UI/UX Design
// //             </h1>
// //             <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
// //               Create exceptional user experiences that drive engagement, satisfaction, and business results.
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Link href="/contact">
// //                 <Button size="lg" className="gap-2">
// //                   Start Your Design Project
// //                   <ArrowRight className="h-4 w-4" />
// //                 </Button>
// //               </Link>
// //               <Link href="/portfolio">
// //                 <Button variant="outline" size="lg">
// //                   View Design Work
// //                 </Button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Services */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-12">
// //             <h2 className="text-3xl font-bold mb-4">Design Services</h2>
// //             <p className="text-gray-600 dark:text-gray-300">
// //               Comprehensive design solutions to create user-centered digital experiences
// //             </p>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //             {services.map((service, index) => (
// //               <Card key={index}>
// //                 <CardHeader>
// //                   <service.icon className="h-12 w-12 mb-4 text-pink-600" />
// //                   <CardTitle className="text-xl">{service.title}</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Design Process */}
// //       <section className="bg-gray-50 dark:bg-gray-900 py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-12">
// //             <h2 className="text-3xl font-bold mb-4">Our Design Process</h2>
// //             <p className="text-gray-600 dark:text-gray-300">
// //               A human-centered approach that ensures every design decision is backed by research and user needs
// //             </p>
// //           </div>
// //           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //             {process.map((step, index) => (
// //               <Card key={index}>
// //                 <CardHeader>
// //                   <div className="text-3xl font-bold text-pink-600 mb-2">{step.step}</div>
// //                   <CardTitle className="text-lg">{step.title}</CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-gray-600 dark:text-gray-300 text-sm">{step.description}</p>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Tools We Use */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-12">
// //             <h2 className="text-3xl font-bold mb-4">Tools We Use</h2>
// //             <p className="text-gray-600 dark:text-gray-300">
// //               Industry-leading design tools and software for creating exceptional user experiences
// //             </p>
// //           </div>
// //           <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
// //             {tools.map((tool, index) => (
// //               <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
// //                 {tool}
// //               </Badge>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* Why Choose Us */}
// //       <section className="bg-gray-50 dark:bg-gray-900 py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-6xl mx-auto">
// //             <div className="text-center mb-12">
// //               <h2 className="text-3xl font-bold mb-4">Why Choose Our Design Services?</h2>
// //               <p className="text-gray-600 dark:text-gray-300">
// //                 What sets us apart in the world of UI/UX design
// //               </p>
// //             </div>
// //             <div className="grid md:grid-cols-2 gap-8">
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center gap-2">
// //                     <Users className="h-5 w-5 text-blue-600" />
// //                     User-Centered Approach
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-gray-600 dark:text-gray-300">
// //                     Every design decision starts with understanding your users' needs, behaviors, and pain points.
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center gap-2">
// //                     <CheckCircle className="h-5 w-5 text-green-600" />
// //                     Research-Driven
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-gray-600 dark:text-gray-300">
// //                     Our designs are backed by user research, data analysis, and usability testing.
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center gap-2">
// //                     <Zap className="h-5 w-5 text-yellow-600" />
// //                     Agile Methodology
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-gray-600 dark:text-gray-300">
// //                     We work in iterative cycles, allowing for flexibility and continuous improvement.
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //               <Card>
// //                 <CardHeader>
// //                   <CardTitle className="flex items-center gap-2">
// //                     <Lightbulb className="h-5 w-5 text-purple-600" />
// //                     Innovative Solutions
// //                   </CardTitle>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <p className="text-gray-600 dark:text-gray-300">
// //                     We combine creativity with technology to deliver innovative design solutions.
// //                   </p>
// //                 </CardContent>
// //               </Card>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Testimonials */}
// //       <section className="py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center mb-12">
// //             <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
// //             <p className="text-gray-600 dark:text-gray-300">
// //               What our clients say about our design work
// //             </p>
// //           </div>
// //           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
// //             {testimonials.map((testimonial, index) => (
// //               <Card key={index}>
// //                 <CardHeader>
// //                   <div className="flex items-center gap-1 mb-2">
// //                     {[...Array(testimonial.rating)].map((_, i) => (
// //                       <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
// //                     ))}
// //                   </div>
// //                   <CardDescription className="italic">"{testimonial.quote}"</CardDescription>
// //                 </CardHeader>
// //                 <CardContent>
// //                   <div className="font-semibold">{testimonial.name}</div>
// //                   <div className="text-sm text-gray-600 dark:text-gray-300">{testimonial.company}</div>
// //                 </CardContent>
// //               </Card>
// //             ))}
// //           </div>
// //         </div>
// //       </section>

// //       {/* CTA Section */}
// //       <section className="bg-gradient-to-r from-pink-600 to-purple-600 py-20">
// //         <div className="container mx-auto px-4">
// //           <div className="max-w-4xl mx-auto text-center text-white">
// //             <h2 className="text-3xl font-bold mb-4">Ready to Create Amazing User Experiences?</h2>
// //             <p className="text-xl mb-8 opacity-90">
// //               Let's design interfaces that your users will love and your business will benefit from
// //             </p>
// //             <div className="flex flex-col sm:flex-row gap-4 justify-center">
// //               <Link href="/contact">
// //                 <Button size="lg" variant="secondary" className="gap-2">
// //                   Start Design Project
// //                   <ArrowRight className="h-4 w-4" />
// //                 </Button>
// //               </Link>
// //               <Link href="/services">
// //                 <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-pink-600">
// //                   View All Services
// //                 </Button>
// //               </Link>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     </div>
// //   )
// // }

// import React from "react"
// import { motion } from "framer-motion"
// import { Button } from "@/components/ui/button"
// import { Card } from "@/components/ui/card"
// import { ArrowRight, Smartphone, Palette, Users, Zap, Lightbulb, Sparkles } from "lucide-react"
// import { Link } from "react-router-dom"
// import { useInView } from "react-intersection-observer"

// export default function UiUxDesignPage() {
//   const services = [
//     { icon: Smartphone, title: "Mobile Design", desc: "Native-like experiences on every device" },
//     { icon: Palette, title: "Visual Magic", desc: "Aesthetics that captivate instantly" },
//     { icon: Users, title: "User Research", desc: "Designs backed by real human insights" },
//     { icon: Zap, title: "Prototyping", desc: "Interactive prototypes that feel alive" },
//     { icon: Lightbulb, title: "Design Systems", desc: "Scalable, consistent, beautiful" },
//   ]

//   return (
//     <>
//       <section className="relative w-full flex items-center justify-center bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900 overflow-hidden">
//         <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />
//         <div className="absolute inset-0">
//           {[...Array(5)].map((_, i) => (
//             <motion.div key={i} className="absolute w-96 h-96 bg-pink-600/30 rounded-full blur-3xl"
//               animate={{ x: [0, 100, 0], y: [0, -100, 0] }} transition={{ duration: 22 + i * 3, repeat: Infinity }}
//               style={{ left: `${20 * i}%`, top: `${10 * i}%` }}
//             />
//           ))}
//         </div>

//         <div className="relative z-10 container mx-auto px-6 text-center">
//           <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}>
//             <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
//               <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Design</span><br />
//               <span className="text-white/90">That Feels Alive</span>
//             </h1>
//             <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12">
//               Pixel-perfect interfaces that don’t just look good — they move people.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <Link to="/contact"><Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-10 py-8 rounded-full shadow-2xl hover:shadow-pink-500/40 hover:scale-105 transition-all">Design My Product <ArrowRight className="ml-2" /></Button></Link>
//               <Link to="/portfolio"><Button variant="outline" size="lg" className="border-white/40 text-white bg-white/10 backdrop-blur-xl hover:bg-white/20 px-10 py-8 rounded-full">See Designs</Button></Link>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       <section className="py-32">
//         <div className="container mx-auto px-6">
//           <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Crafting Digital Masterpieces</h2>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
//             {services.map((s, i) => (
//               <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -15 }}>
//                 <Card className="h-full bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:shadow-pink-500/30 transition-all group">
//                   <div className="p-8">
//                     <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
//                       <s.icon className="w-9 h-9 text-white" />
//                     </div>
//                     <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-pink-400 transition-colors">{s.title}</h3>
//                     <p className="text-gray-300">{s.desc}</p>
//                   </div>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="py-32 bg-gradient-to-br from-pink-900 via-purple-900 to-indigo-900">
//         <div className="container mx-auto px-6 text-center">
//           <Sparkles className="w-20 h-20 mx-auto mb-8 text-yellow-400 animate-pulse" />
//           <h2 className="text-5xl md:text-7xl font-bold text-white mb-8">Your Vision, Perfected in Pixels</h2>
//           <Link to="/contact">
//             <Button size="lg" className="bg-white text-black hover:bg-white/90 text-xl px-14 py-9 rounded-full shadow-2xl hover:shadow-pink-500/50 hover:scale-105 transition-all">
//               Start Designing <ArrowRight className="ml-3" />
//             </Button>
//           </Link>
//         </div>
//       </section>
//     </>
//   )
// }

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