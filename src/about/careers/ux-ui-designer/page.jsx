// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Users, Palette, Eye, MousePointer, Layers, CheckCircle, Star, Award, TrendingUp, Mail, Loader2 } from "lucide-react"
// import { Link } from "react-router-dom"
// import { useState } from "react"

// export default function UXUIDesignerPage() {
//   const [showApplicationModal, setShowApplicationModal] = useState(false)
//   const [isApplying, setIsApplying] = useState(false)

//   const handleApplyNow = () => {
//     setIsApplying(true)
//     // For now, open email client. In a real app, this would open an application form
//     window.location.href = 'mailto:careers@User Management System.com?subject=Application for UX/UI Designer&body=Please attach your portfolio and tell us why you\'re interested in this position.'
//     // Reset loading state after a short delay
//     setTimeout(() => setIsApplying(false), 1000)
//   }

//   const jobDetails = {
//     title: "UX/UI Designer",
//     department: "Design",
//     location: "Remote",
//     type: "Full-time",
//     salary: "$90k - $130k",
//     experience: "3+ years",
//     posted: "1 day ago",
//     applications: "18 applicants"
//   }

//   const requirements = [
//     "3+ years of experience in UX/UI design",
//     "Proficiency in Figma, Sketch, or Adobe Creative Suite",
//     "Strong portfolio demonstrating user-centered design process",
//     "Experience with user research and usability testing",
//     "Knowledge of design systems and component libraries",
//     "Understanding of responsive design principles",
//     "Familiarity with prototyping tools (InVision, Framer)",
//     "Basic knowledge of HTML/CSS is a plus"
//   ]

//   const responsibilities = [
//     "Create intuitive and engaging user experiences for web and mobile applications",
//     "Design user interfaces that balance aesthetics with functionality",
//     "Conduct user research and usability testing to inform design decisions",
//     "Develop and maintain design systems and component libraries",
//     "Collaborate with product managers and developers throughout the design process",
//     "Create wireframes, prototypes, and high-fidelity mockups",
//     "Present design concepts and rationale to stakeholders",
//     "Stay current with design trends and best practices"
//   ]

//   const benefits = [
//     {
//       icon: DollarSign,
//       title: "Competitive Salary",
//       description: "$90k - $130k annually, plus equity package"
//     },
//     {
//       icon: Clock,
//       title: "Flexible Hours",
//       description: "Work when you're most productive"
//     },
//     {
//       icon: MapPin,
//       title: "Remote Work",
//       description: "Work from anywhere in the world"
//     },
//     {
//       icon: Palette,
//       title: "Design Tools",
//       description: "Latest design software and hardware budget"
//     },
//     {
//       icon: TrendingUp,
//       title: "Growth Opportunities",
//       description: "Professional development and career advancement"
//     },
//     {
//       icon: Award,
//       title: "Recognition",
//       description: "Design awards and portfolio features"
//     }
//   ]

//   const techStack = [
//     { name: "Figma", level: "Expert" },
//     { name: "Sketch", level: "Advanced" },
//     { name: "Adobe XD", level: "Advanced" },
//     { name: "InVision", level: "Intermediate" },
//     { name: "Principle", level: "Intermediate" },
//     { name: "HTML/CSS", level: "Basic" }
//   ]

//   const milestones = [
//     {
//       title: "Portfolio Review",
//       description: "We review your portfolio and design work",
//       duration: "1-2 days"
//     },
//     {
//       title: "Design Challenge",
//       description: "Complete a small design project",
//       duration: "2-3 days"
//     },
//     {
//       title: "Team Interview",
//       description: "Discuss your experience and design process",
//       duration: "45 minutes"
//     },
//     {
//       title: "Portfolio Presentation",
//       description: "Present your work and design thinking",
//       duration: "60 minutes"
//     },
//     {
//       title: "Final Interview",
//       description: "Discuss culture fit and compensation",
//       duration: "30 minutes"
//     }
//   ]

//   return (
//     <div className="w-full bg-black text-white overflow-x-hidden">
//       {/* Floating Orbs */}
//       <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
//         <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
//         <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
//         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
//       </div>
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-950 dark:to-pink-900 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="flex flex-col lg:flex-row gap-8 items-start">
//               <div className="flex-1">
//                 <div className="flex items-center gap-2 mb-4">
//                   <Badge variant="secondary">{jobDetails.department}</Badge>
//                   <Badge variant="outline">{jobDetails.type}</Badge>
//                 </div>
//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
//                   {jobDetails.title}
//                 </h1>
//                 <div className="flex flex-wrap gap-4 mb-6">
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                     <MapPin className="h-4 w-4" />
//                     {jobDetails.location}
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                     <DollarSign className="h-4 w-4" />
//                     {jobDetails.salary}
//                   </div>
//                   <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
//                     <Briefcase className="h-4 w-4" />
//                     {jobDetails.experience}
//                   </div>
//                 </div>
//                 <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
//                   Join our design team to create intuitive user experiences for our user management platform.
//                   You'll work on complex design challenges and have the opportunity to shape how users interact with our product.
//                 </p>
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button size="lg" className="gap-2" onClick={handleApplyNow} disabled={isApplying}>
//                     {isApplying ? (
//                       <Loader2 className="h-4 w-4 animate-spin" />
//                     ) : (
//                       <Mail className="h-4 w-4" />
//                     )}
//                     {isApplying ? 'Opening Email...' : 'Apply Now'}
//                     <ArrowRight className="h-4 w-4" />
//                   </Button>
//                   <Link to="/careers">
//                     <Button variant="outline" size="lg">
//                       View All Positions
//                     </Button>
//                   </Link>
//                 </div>
//               </div>
//               <div className="lg:w-80">
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="text-lg">Job Summary</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 dark:text-gray-300">Posted</span>
//                       <span>{jobDetails.posted}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 dark:text-gray-300">Applications</span>
//                       <span>{jobDetails.applications}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 dark:text-gray-300">Location</span>
//                       <span>{jobDetails.location}</span>
//                     </div>
//                     <div className="flex justify-between">
//                       <span className="text-gray-600 dark:text-gray-300">Type</span>
//                       <span>{jobDetails.type}</span>
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Job Description */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto">
//             <div className="grid lg:grid-cols-3 gap-8">
//               <div className="lg:col-span-2 space-y-8">
//                 {/* Responsibilities */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <CheckCircle className="h-5 w-5 text-green-600" />
//                       What You'll Do
//                     </CardTitle>
//                     <CardDescription>
//                       Your key responsibilities and contributions
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <ul className="space-y-3">
//                       {responsibilities.map((responsibility, index) => (
//                         <li key={index} className="flex items-start gap-3">
//                           <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
//                           <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>

//                 {/* Requirements */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Star className="h-5 w-5 text-yellow-600" />
//                       What We're Looking For
//                     </CardTitle>
//                     <CardDescription>
//                       Required skills and experience
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <ul className="space-y-3">
//                       {requirements.map((requirement, index) => (
//                         <li key={index} className="flex items-start gap-3">
//                           <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
//                           <span className="text-gray-600 dark:text-gray-300">{requirement}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </CardContent>
//                 </Card>

//                 {/* Tech Stack */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle className="flex items-center gap-2">
//                       <Palette className="h-5 w-5 text-purple-600" />
//                       Design Tools
//                     </CardTitle>
//                     <CardDescription>
//                       Tools and technologies you'll work with
//                     </CardDescription>
//                   </CardHeader>
//                   <CardContent>
//                     <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
//                       {techStack.map((tech, index) => (
//                         <div key={index} className="text-center">
//                           <div className="font-semibold">{tech.name}</div>
//                           <Badge variant="outline" className="mt-1">
//                             {tech.level}
//                           </Badge>
//                         </div>
//                       ))}
//                     </div>
//                   </CardContent>
//                 </Card>
//               </div>

//               <div className="space-y-6">
//                 {/* Benefits */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Benefits & Perks</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     {benefits.map((benefit, index) => (
//                       <div key={index} className="flex gap-3">
//                         <benefit.icon className="h-5 w-5 text-purple-600 mt-0.5 flex-shrink-0" />
//                         <div>
//                           <div className="font-semibold">{benefit.title}</div>
//                           <div className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </CardContent>
//                 </Card>

//                 {/* Application Process */}
//                 <Card>
//                   <CardHeader>
//                     <CardTitle>Hiring Process</CardTitle>
//                   </CardHeader>
//                   <CardContent className="space-y-4">
//                     {milestones.map((milestone, index) => (
//                       <div key={index} className="flex gap-3">
//                         <div className="flex-shrink-0 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
//                           {index + 1}
//                         </div>
//                         <div>
//                           <div className="font-semibold">{milestone.title}</div>
//                           <div className="text-sm text-gray-600 dark:text-gray-300">{milestone.description}</div>
//                           <div className="text-xs text-gray-500 mt-1">{milestone.duration}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-purple-600 to-pink-600 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center text-white">
//             <h2 className="text-3xl font-bold mb-4">Ready to Design the Future?</h2>
//             <p className="text-xl mb-8 opacity-90">
//               Join our design team and help create exceptional user experiences that millions will love
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button size="lg" variant="secondary" className="gap-2" onClick={handleApplyNow} disabled={isApplying}>
//                 {isApplying ? (
//                   <Loader2 className="h-4 w-4 animate-spin" />
//                 ) : (
//                   <Mail className="h-4 w-4" />
//                 )}
//                 {isApplying ? 'Opening Email...' : 'Apply for This Position'}
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//               <Link to="/careers">
//                 <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-purple-600">
//                   View Other Positions
//                 </Button>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }


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