import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, Users, Lock, Zap, ArrowRight, Code2, Users as UsersIcon, Zap as ZapIcon, Sparkles, Briefcase, MapPin, Clock, DollarSign, Code, Database, Cloud, CheckCircle, Star, Award, TrendingUp, Mail, ExternalLink, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react"

export default function FullStackDeveloperPage() {
  const [showApplicationModal, setShowApplicationModal] = useState(false)

  const handleApplyNow = () => {
    // For now, open email client. In a real app, this would open an application form
    window.location.href = 'mailto:careers@User Management System.com?subject=Application for Senior Full-Stack Developer&body=Please attach your resume and tell us why you\'re interested in this position.'
  }

  const jobDetails = {
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$120k - $160k",
    experience: "5+ years",
    posted: "2 days ago",
    applications: "24 applicants"
  }

  const requirements = [
    "5+ years of experience in full-stack development",
    "Strong proficiency in React, Node.js, and TypeScript",
    "Experience with modern databases (PostgreSQL, MongoDB)",
    "Knowledge of cloud platforms (AWS, Vercel, or similar)",
    "Understanding of RESTful APIs and GraphQL",
    "Experience with version control (Git) and CI/CD pipelines",
    "Familiarity with testing frameworks (Jest, Cypress)",
    "Knowledge of containerization (Docker) is a plus"
  ]

  const responsibilities = [
    "Design and develop scalable web applications using modern technologies",
    "Collaborate with cross-functional teams to deliver high-quality products",
    "Write clean, maintainable, and well-documented code",
    "Participate in code reviews and mentor junior developers",
    "Optimize applications for maximum speed and scalability",
    "Stay up-to-date with emerging technologies and industry trends",
    "Contribute to architectural decisions and technical planning"
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "$120k - $160k annually, plus equity package"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work when you're most productive"
    },
    {
      icon: MapPin,
      title: "Remote Work",
      description: "Work from anywhere in the world"
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Collaborate with talented engineers"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Professional development and career advancement"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance bonuses and awards"
    }
  ]

  const techStack = [
    { name: "React", level: "Expert" },
    { name: "Node.js", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "PostgreSQL", level: "Advanced" },
    { name: "AWS", level: "Intermediate" },
    { name: "Docker", level: "Intermediate" }
  ]

  const milestones = [
    {
      title: "Application Review",
      description: "We review your application and resume",
      duration: "1-2 days"
    },
    {
      title: "Technical Interview",
      description: "Discuss your experience and technical skills",
      duration: "45 minutes"
    },
    {
      title: "Coding Challenge",
      description: "Complete a small coding project",
      duration: "2-3 days"
    },
    {
      title: "Team Interview",
      description: "Meet with potential colleagues",
      duration: "60 minutes"
    },
    {
      title: "Final Interview",
      description: "Discuss culture fit and compensation",
      duration: "30 minutes"
    }
  ]

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="secondary">{jobDetails.department}</Badge>
                  <Badge variant="outline">{jobDetails.type}</Badge>
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  {jobDetails.title}
                </h1>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <MapPin className="h-4 w-4" />
                    {jobDetails.location}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <DollarSign className="h-4 w-4" />
                    {jobDetails.salary}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                    <Briefcase className="h-4 w-4" />
                    {jobDetails.experience}
                  </div>
                </div>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                  Join our engineering team to build scalable user management solutions using modern web technologies.
                  You'll work on challenging problems and have the opportunity to make a significant impact.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2" onClick={handleApplyNow} disabled={isApplying}>
                    {isApplying ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Mail className="h-4 w-4" />
                    )}
                    {isApplying ? 'Opening Email...' : 'Apply Now'}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Link to="/careers">
                    <Button variant="outline" size="lg">
                      View All Positions
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="lg:w-80">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Job Summary</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Posted</span>
                      <span>{jobDetails.posted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Applications</span>
                      <span>{jobDetails.applications}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Location</span>
                      <span>{jobDetails.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-300">Type</span>
                      <span>{jobDetails.type}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Description */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-8">
                {/* Responsibilities */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      What You'll Do
                    </CardTitle>
                    <CardDescription>
                      Your key responsibilities and contributions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {responsibilities.map((responsibility, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{responsibility}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Requirements */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Star className="h-5 w-5 text-yellow-600" />
                      What We're Looking For
                    </CardTitle>
                    <CardDescription>
                      Required skills and experience
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {requirements.map((requirement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <Star className="h-5 w-5 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600 dark:text-gray-300">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Tech Stack */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-blue-600" />
                      Tech Stack
                    </CardTitle>
                    <CardDescription>
                      Technologies you'll work with
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {techStack.map((tech, index) => (
                        <div key={index} className="text-center">
                          <div className="font-semibold">{tech.name}</div>
                          <Badge variant="outline" className="mt-1">
                            {tech.level}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                {/* Benefits */}
                <Card>
                  <CardHeader>
                    <CardTitle>Benefits & Perks</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex gap-3">
                        <benefit.icon className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold">{benefit.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{benefit.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Application Process */}
                <Card>
                  <CardHeader>
                    <CardTitle>Hiring Process</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {milestones.map((milestone, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <div className="font-semibold">{milestone.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">{milestone.description}</div>
                          <div className="text-xs text-gray-500 mt-1">{milestone.duration}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Team?</h2>
            <p className="text-xl mb-8 opacity-90">
              Take the next step in your career and help us build the future of user management
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="gap-2" onClick={handleApplyNow} disabled={isApplying}>
                {isApplying ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Mail className="h-4 w-4" />
                )}
                {isApplying ? 'Opening Email...' : 'Apply for This Position'}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Link to="/careers">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  View Other Positions
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
