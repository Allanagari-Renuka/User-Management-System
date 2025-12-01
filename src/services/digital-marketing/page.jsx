// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { ArrowRight, TrendingUp, Target, Users, BarChart3, Megaphone, Search, Share2, Star } from "lucide-react"
// import { Link } from "react-router-dom"

// export default function DigitalMarketingPage() {
//   const services = [
//     {
//       icon: Search,
//       title: "SEO Optimization",
//       description: "Improve your search rankings and drive organic traffic to your website.",
//     },
//     {
//       icon: Megaphone,
//       title: "Social Media Marketing",
//       description: "Build brand awareness and engage with your audience across all platforms.",
//     },
//     {
//       icon: Target,
//       title: "PPC Advertising",
//       description: "Targeted paid campaigns that deliver measurable ROI and conversions.",
//     },
//     {
//       icon: BarChart3,
//       title: "Analytics & Reporting",
//       description: "Data-driven insights to optimize your marketing performance and strategy.",
//     },
//     {
//       icon: Share2,
//       title: "Content Marketing",
//       description: "Create valuable content that attracts, engages, and converts your audience.",
//     },
//     {
//       icon: TrendingUp,
//       title: "Conversion Optimization",
//       description: "Optimize your website and funnel to increase conversions and revenue.",
//     },
//   ]

//   const strategies = [
//     {
//       title: "Multi-Channel Approach",
//       description: "Integrated campaigns across search, social, email, and display advertising.",
//       metrics: ["40% increase in leads", "25% higher engagement", "60% more conversions"],
//     },
//     {
//       title: "Data-Driven Decisions",
//       description: "Every strategy backed by analytics and A/B testing for optimal results.",
//       metrics: ["ROI tracking", "Conversion analytics", "Performance monitoring"],
//     },
//     {
//       title: "Audience Segmentation",
//       description: "Target the right people with personalized messaging and content.",
//       metrics: ["300% better targeting", "50% higher open rates", "2x conversion rates"],
//     },
//   ]

//   const platforms = [
//     "Google Ads", "Facebook Ads", "Instagram", "LinkedIn", "Twitter", "TikTok", "YouTube", "Pinterest"
//   ]

//   const caseStudies = [
//     {
//       client: "TechStart Inc.",
//       challenge: "Low online visibility and lead generation",
//       solution: "Comprehensive SEO and PPC campaign",
//       results: ["300% increase in organic traffic", "150% more qualified leads", "40% higher conversion rate"],
//     },
//     {
//       client: "FashionForward",
//       challenge: "Building brand awareness in competitive market",
//       solution: "Social media and influencer marketing strategy",
//       results: ["500k new followers", "200% increase in engagement", "85% brand recognition lift"],
//     },
//     {
//       client: "HealthTech Solutions",
//       challenge: "Converting website visitors to customers",
//       solution: "Conversion rate optimization and retargeting",
//       results: ["120% increase in conversions", "60% lower cost per acquisition", "3x higher customer lifetime value"],
//     },
//   ]

//   return (
//     <div className="w-full">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950 dark:to-red-900 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center">
//             <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
//               Digital Marketing
//             </h1>
//             <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
//               Data-driven marketing strategies that drive growth, engagement, and measurable results.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/contact">
//                 <Button size="lg" className="gap-2">
//                   Grow Your Business
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link href="/portfolio">
//                 <Button variant="outline" size="lg">
//                   View Case Studies
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
//             <h2 className="text-3xl font-bold mb-4">Marketing Services</h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               Comprehensive digital marketing solutions to accelerate your business growth
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {services.map((service, index) => (
//               <Card key={index}>
//                 <CardHeader>
//                   <service.icon className="h-12 w-12 mb-4 text-orange-600" />
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

//       {/* Strategies */}
//       <section className="bg-gray-50 dark:bg-gray-900 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Our Marketing Strategies</h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               Proven approaches that deliver real results for businesses like yours
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
//             {strategies.map((strategy, index) => (
//               <Card key={index}>
//                 <CardHeader>
//                   <CardTitle className="text-xl">{strategy.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300 mb-4">{strategy.description}</p>
//                   <div className="space-y-2">
//                     {strategy.metrics.map((metric, metricIndex) => (
//                       <div key={metricIndex} className="flex items-center gap-2">
//                         <div className="w-2 h-2 bg-orange-600 rounded-full"></div>
//                         <span className="text-sm font-medium">{metric}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Platforms */}
//       <section className="py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center mb-12">
//             <h2 className="text-3xl font-bold mb-4">Platforms We Master</h2>
//             <p className="text-gray-600 dark:text-gray-300">
//               Expert management across all major digital marketing platforms
//             </p>
//           </div>
//           <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
//             {platforms.map((platform, index) => (
//               <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
//                 {platform}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Case Studies */}
//       <section className="bg-gray-50 dark:bg-gray-900 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
//               <p className="text-gray-600 dark:text-gray-300">
//                 Real results from our digital marketing campaigns
//               </p>
//             </div>
//             <div className="grid md:grid-cols-3 gap-8">
//               {caseStudies.map((study, index) => (
//                 <Card key={index}>
//                   <CardHeader>
//                     <CardTitle className="text-lg">{study.client}</CardTitle>
//                     <CardDescription className="font-medium text-orange-600">Challenge: {study.challenge}</CardDescription>
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
//               <h2 className="text-3xl font-bold mb-4">Why Choose Our Marketing Services?</h2>
//               <p className="text-gray-600 dark:text-gray-300">
//                 What makes us different in the crowded digital marketing landscape
//               </p>
//             </div>
//             <div className="grid md:grid-cols-2 gap-8">
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <BarChart3 className="h-5 w-5 text-blue-600" />
//                     Data-Driven Approach
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Every campaign is backed by analytics, testing, and optimization to ensure maximum ROI.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Target className="h-5 w-5 text-green-600" />
//                     Targeted Strategies
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     We identify and target your ideal customers with precision, maximizing campaign effectiveness.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <TrendingUp className="h-5 w-5 text-purple-600" />
//                     Scalable Solutions
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Our strategies grow with your business, adapting to changing markets and opportunities.
//                   </p>
//                 </CardContent>
//               </Card>
//               <Card>
//                 <CardHeader>
//                   <CardTitle className="flex items-center gap-2">
//                     <Users className="h-5 w-5 text-orange-600" />
//                     Transparent Reporting
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-600 dark:text-gray-300">
//                     Regular, detailed reports keep you informed of progress and ROI throughout the campaign.
//                   </p>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="bg-gradient-to-r from-orange-600 to-red-600 py-20">
//         <div className="container mx-auto px-4">
//           <div className="max-w-4xl mx-auto text-center text-white">
//             <h2 className="text-3xl font-bold mb-4">Ready to Accelerate Your Growth?</h2>
//             <p className="text-xl mb-8 opacity-90">
//               Let's create a digital marketing strategy that drives real results for your business
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link href="/contact">
//                 <Button size="lg" variant="secondary" className="gap-2">
//                   Get Started Today
//                   <ArrowRight className="h-4 w-4" />
//                 </Button>
//               </Link>
//               <Link href="/services">
//                 <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-orange-600">
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
      <section className="relative w-full flex items-center justify-center bg-gradient-to-br from-orange-900 via-red-900 to-pink-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-3xl" />
        <div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute w-96 h-96 bg-orange-600/30 rounded-full blur-3xl"
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
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-12">
              We don’t run campaigns. We engineer growth machines.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact"><Button size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-10 py-8 rounded-full shadow-2xl hover:shadow-orange-500/40 hover:scale-105 transition-all">Scale Now <ArrowRight className="ml-2" /></Button></Link>
              <Link to="/portfolio"><Button variant="outline" size="lg" className="border-white/40 text-white bg-white/10 backdrop-blur-xl hover:bg-white/20 px-10 py-8 rounded-full">See Results</Button></Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-black/60 backdrop-blur-3xl -mt-32 relative z-20">
        <div className="container mx-auto px-6 grid md:grid-cols-3 gap-12 text-center">
          <div><AnimatedCounter end={300} suffix="%" /><p className="text-white/70 text-xl mt-4">Traffic Growth</p></div>
          <div><AnimatedCounter end={150} suffix="%" /><p className="text-white/70 text-xl mt-4">Leads</p></div>
          <div><AnimatedCounter end={60} suffix="%" /><p className="text-white/70 text-xl mt-4">Lower CPA</p></div>
        </div>
      </section>

      <section className="py-32">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl md:text-6xl font-bold text-center mb-20 bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Our Growth Engine</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
            {services.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -15 }}>
                <Card className="h-full bg-white/5 backdrop-blur-xl border-white/10 shadow-2xl hover:shadow-orange-500/30 transition-all group">
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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