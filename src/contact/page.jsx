

import { useState } from 'react'
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Mail, Phone, MapPin, Clock, Send, MessageSquare, Sparkles, CheckCircle } from "lucide-react"
import { motion } from "framer-motion"
import { supabase } from "@/lib/supabase/client"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const { data, error } = await supabase
        .from('contact_messages')
        .insert([
          {
            first_name: formData.firstName,
            last_name: formData.lastName,
            email: formData.email,
            company: formData.company,
            subject: formData.subject,
            message: formData.message,
            created_at: new Date().toISOString()
          }
        ])

      if (error) throw error

      setSubmitStatus('success')
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        subject: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us an email and we'll respond within 24 hours",
      contact: "hello@yourapp.com",
      action: "mailto:hello@yourapp.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our team during business hours",
      contact: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: MessageSquare,
      title: "Live Chat",
      description: "Get instant help through our live chat support",
      contact: "Available 24/7",
      action: "#",
    },
    {
      icon: MapPin,  
      title: "Visit Us",
      description: "Schedule a meeting at our headquarters",
      contact: "123 Tech Street, San Francisco, CA",
      action: "#",
    },
  ]

  const offices = [
    { city: "San Francisco", address: "123 Tech Street, Suite 100\nSan Francisco, CA 94105", phone: "+1 (555) 123-4567", email: "sf@yourapp.com" },
    { city: "New York", address: "456 Innovation Ave, Floor 15\nNew York, NY 10001", phone: "+1 (555) 234-5678", email: "ny@yourapp.com" },
    { city: "London", address: "789 Digital Square, Level 8\nLondon, EC2A 1PQ", phone: "+44 20 7123 4567", email: "london@yourapp.com" },
  ]

  const faqs = [
    { question: "How quickly do you respond to inquiries?", answer: "We typically respond to all inquiries within 24 hours during business days. For urgent matters, we aim to respond within 4 hours." },
    { question: "Do you offer custom solutions?", answer: "Yes, we specialize in custom user management solutions tailored to your specific business needs and requirements." },
    { question: "What industries do you serve?", answer: "We serve businesses across all industries, from startups to enterprises in healthcare, finance, e-commerce, and more." },
    { question: "Do you provide ongoing support?", answer: "Absolutely. We offer comprehensive support packages including 24/7 monitoring, regular updates, and dedicated account management." },
  ]

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>

      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-pink-600/10 backdrop-blur-3xl" />
        <div className="relative px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Badge className="mb-8 bg-white/10 backdrop-blur border-white/20 text-lg px-6 py-3">
              <Sparkles className="w-5 h-5 mr-2" /> Let's Talk
            </Badge>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent mb-8 leading-tight">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-white/80 max-w-5xl mx-auto mb-12">
              Ready to transform your user management? Let's discuss how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="#contact-form">
                <Button size="lg" className="bg-white text-black hover:bg-white/90 px-12 py-8 text-xl rounded-full shadow-2xl">
                  Send Message <ArrowRight className="ml-3" />
                </Button>
              </a>
              <a href="tel:+15551234567">
                <Button size="lg" variant="outline" className="border-white/30 bg-white/10 backdrop-blur text-white hover:bg-white/20 px-12 py-8 text-xl rounded-full">
                  Call Now
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-950">
        <div className="px-6 lg:px-12">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">How Can We Help?</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">Choose the best way to reach us based on your needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-screen-2xl mx-auto">
            {contactMethods.map((method, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-xl border-white/10 hover:bg-white/10 transition-all duration-500 p-8 text-center h-full rounded-3xl group">
                  <method.icon className="w-16 h-16 mx-auto mb-6 text-indigo-400 group-hover:scale-110 transition-transform" />
                  <h3 className="text-2xl font-bold mb-3">{method.title}</h3>
                  <p className="text-gray-400 mb-6">{method.description}</p>
                  <p className="text-xl font-semibold text-white mb-6">{method.contact}</p>
                  <a href={method.action}>
                    <Button variant="outline" className="w-full rounded-full border-white/30 bg-white/10 hover:bg-white/20">
                      Contact Us <ArrowRight className="ml-2" />
                    </Button>
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Offices */}
      <section id="contact-form" className="py-32 bg-gray-950">
        <div className="px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 max-w-screen-2xl mx-auto">
            {/* Form */}
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }}>
              <Card className="bg-white/5 backdrop-blur-xl border-white/10 rounded-3xl overflow-hidden">
                <CardHeader className="pb-8">
                  <CardTitle className="text-4xl font-bold">Send Us a Message</CardTitle>
                  <CardDescription className="text-xl text-gray-400">We'll get back to you within 24 hours</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <Input
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 rounded-2xl h-14 text-lg"
                        required
                      />
                      <Input
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="bg-white/10 border-white/20 text-white placeholder-white/50 rounded-2xl h-14 text-lg"
                        required
                      />
                    </div>
                    <Input
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      type="email"
                      placeholder="Email"
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 rounded-2xl h-14 text-lg"
                      required
                    />
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Company"
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 rounded-2xl h-14 text-lg"
                    />
                    <Input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="Subject"
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 rounded-2xl h-14 text-lg"
                      required
                    />
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows={6}
                      className="bg-white/10 border-white/20 text-white placeholder-white/50 rounded-2xl text-lg resize-none"
                      required
                    />
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-white text-black hover:bg-white/90 rounded-full py-8 text-xl font-bold shadow-2xl disabled:opacity-50"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'} <Send className="ml-3" />
                    </Button>
                    {submitStatus === 'success' && (
                      <p className="text-green-400 text-center">Message sent successfully!</p>
                    )}
                    {submitStatus === 'error' && (
                      <p className="text-red-400 text-center">Error sending message. Please try again.</p>
                    )}
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Offices */}
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold mb-10">Our Global Offices</h3>
              {offices.map((office, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
                  <Card className="bg-white/5 backdrop-blur-xl border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all">
                    <h4 className="text-2xl font-bold mb-6 text-indigo-400">{office.city}</h4>
                    <div className="space-y-4 text-lg text-gray-300">
                      <p className="whitespace-pre-line leading-relaxed">{office.address}</p>
                      <a href={`tel:${office.phone}`} className="block hover:text-white transition">{office.phone}</a>
                      <a href={`mailto:${office.email}`} className="block hover:text-white transition">{office.email}</a>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 relative overflow-hidden">
        <div className="absolute inset-0 backdrop-blur-3xl" />
        <div className="relative px-6 lg:px-12 text-center">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to Get Started?</h2>
            <p className="text-2xl md:text-3xl mb-12 opacity-90">
              Join hundreds of businesses already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/auth/sign-up">
                <Button size="lg" variant="secondary" className="bg-white text-black hover:bg-white/90 px-16 py-8 text-2xl rounded-full shadow-2xl">
                  Start Free Trial <ArrowRight className="ml-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="border-white bg-transparent text-white hover:bg-white hover:text-purple-600 px-16 py-8 text-2xl rounded-full">
                  Explore Services
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}