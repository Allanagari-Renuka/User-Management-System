'use client'

import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Calendar, Clock, User, BookOpen, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

// Real Unsplash images 
const blogPosts = [
  {
    title: "The Future of Web Development: Trends to Watch in 2024",
    excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to serverless architecture.",
    author: "John Smith",
    date: "2024-01-15",
    readTime: "5 min read",
    category: "Web Development",
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=1200&h=800&fit=crop",
    slug: "future-web-development-2024"
  },
  {
    title: "Building Scalable React Applications: Best Practices",
    excerpt: "Learn how to structure your React apps for scalability and maintainability with proven patterns and techniques.",
    author: "Sarah Johnson",
    date: "2024-01-10",
    readTime: "8 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=800&fit=crop",
    slug: "scalable-react-applications"
  },
  {
    title: "The Complete Guide to User Authentication",
    excerpt: "Implement secure authentication systems with modern best practices and industry standards.",
    author: "Mike Chen",
    date: "2024-01-05",
    readTime: "12 min read",
    category: "Security",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=1200&h=800&fit=crop",
    slug: "user-authentication-guide"
  },
  {
    title: "Optimizing Database Performance: Tips and Tricks",
    excerpt: "Discover techniques to improve your database performance and reduce query times significantly.",
    author: "Emma Davis",
    date: "2023-12-28",
    readTime: "6 min read",
    category: "Database",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    slug: "database-performance-optimization"
  },
  {
    title: "Mastering CSS Grid and Flexbox",
    excerpt: "A comprehensive guide to modern CSS layout techniques that will revolutionize your design workflow.",
    author: "Alex Rodriguez",
    date: "2023-12-20",
    readTime: "10 min read",
    category: "CSS",
    image: "https://images.unsplash.com/photo-1593720219276-0b1eacd0aef4?w=1200&h=800&fit=crop",
    slug: "css-grid-flexbox-mastery"
  },
  {
    title: "Introduction to TypeScript: Why You Should Use It",
    excerpt: "Explore the benefits of TypeScript and how it can improve your JavaScript development experience.",
    author: "Lisa Wang",
    date: "2023-12-15",
    readTime: "7 min read",
    category: "TypeScript",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    slug: "typescript-introduction"
  }
]

const categories = [
  { name: "All", count: 24 },
  { name: "Web Development", count: 8 },
  { name: "React", count: 6 },
  { name: "JavaScript", count: 4 },
  { name: "CSS", count: 3 },
  { name: "TypeScript", count: 2 },
  { name: "Security", count: 1 }
]

export default function BlogPage() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = () => {
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!email) {
      alert('Please enter an email address')
      return
    }

    if (!emailRegex.test(email)) {
      alert('Please enter a correct email format (e.g., user@gmail.com)')
      return
    }

    // Simulate subscription (you can replace this with actual API call)
    console.log('✅ User has subscribed successfully!')
    console.log('📧 Email:', email)
    console.log('📰 Newsletter subscription completed')

    alert('Thank you for subscribing! You will receive our latest insights and tutorials.')

    // Reset form
    setEmail('')
    setIsSubscribed(true)
  }

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Hero - Full Width */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/10" />
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />

        <div className="relative px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <Badge className="mb-6 bg-white/10 backdrop-blur border-white/20 text-lg px-6 py-3">
              <Sparkles className="w-5 h-5 mr-2" /> Insights & Tutorials
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-white/90 to-white/60 bg-clip-text text-transparent mb-8 leading-tight">
              Our Blog
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-5xl mx-auto mb-12 leading-relaxed">
              Insights, tutorials, and industry trends from our team of experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-full shadow-2xl">
                  Get in Touch <ArrowRight className="ml-3" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur text-white hover:bg-white/20 px-12 py-8 text-xl rounded-full">
                  Our Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories - Full Width */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-950">
        <div className="px-6 lg:px-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="flex flex-wrap justify-center gap-5 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <motion.div key={index} whileHover={{ scale: 1.08 }} transition={{ type: "spring", stiffness: 400 }}>
                <Button variant="outline" className="gap-3 bg-white/5 border-white/20 text-white hover:bg-white/10 px-8 py-5 text-lg rounded-full backdrop-blur">
                  {category.name}
                  <Badge variant="secondary" className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-0 px-3 py-1">
                    {category.count}
                  </Badge>
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Grid - Full Width */}
      <section className="py-24 bg-gray-950">
        <div className="px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-screen-2xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.7 }}
                className="group"
              >
                <Card className="overflow-hidden bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-700 h-full rounded-3xl shadow-2xl">
                  <div className="aspect-video relative overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                    <div className="absolute top-6 left-6">
                      <Badge className="bg-white/20 backdrop-blur border-white/30 text-white px-4 py-2 text-sm font-medium">
                        {post.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-8 lg:p-10">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-5">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>

                    <CardTitle className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-indigo-400 transition-colors line-clamp-2 leading-tight">
                      {post.title}
                    </CardTitle>

                    <CardDescription className="text-gray-300 text-base lg:text-lg mb-8 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>

                    <Button variant="outline" className="w-full gap-3 border-white/30 bg-white/10 hover:bg-white/20 text-white rounded-full py-6 text-lg font-medium">
                      Read Article
                      <BookOpen className="h-5 w-5" />
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter - Full Width */}
      <section className="py-32 bg-gradient-to-r from-indigo-900/30 via-purple-900/20 to-pink-900/30 relative overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="relative px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Stay Updated</h2>
            <p className="text-2xl text-white/80 mb-12 max-w-3xl mx-auto">
              Subscribe to our newsletter for the latest insights and tutorials
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center max-w-2xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-8 py-6 bg-white/10 backdrop-blur border border-white/20 rounded-full text-white placeholder-white/60 text-lg focus:outline-none focus:ring-4 focus:ring-indigo-500/50"
              />
              <Button
                onClick={handleSubscribe}
                className="px-12 py-6 bg-white text-black hover:bg-white/90 rounded-full text-xl font-bold shadow-2xl mt-5"
              >
                Subscribe Now
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats - Full Width */}
      <section className="py-32 bg-gradient-to-b from-gray-950 to-black">
        <div className="px-6 lg:px-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-bold mb-6">Our Blog in Numbers</h2>
            <p className="text-2xl text-gray-400">The impact of our content and community</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-screen-2xl mx-auto">
            {[
              { num: "500+", label: "Articles Published", color: "from-indigo-500 to-purple-600" },
              { num: "50K+", label: "Monthly Readers", color: "from-green-500 to-emerald-600" },
              { num: "98%", label: "Reader Satisfaction", color: "from-purple-500 to-pink-600" },
              { num: "24/7", label: "Content Updates", color: "from-orange-500 to-red-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, type: "spring" }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 text-center p-12 rounded-3xl hover:bg-white/10 transition-all h-full">
                  <div className={`text-6xl lg:text-7xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-6`}>
                    {stat.num}
                  </div>
                  <div className="text-xl lg:text-2xl text-gray-300 font-medium">{stat.label}</div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}