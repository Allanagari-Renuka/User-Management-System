import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Users, Code, Database, Cloud, CheckCircle, Star, Award, TrendingUp, Mail, Loader2 } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function CustomerSuccessManagerPage() {
  const jobDetails = {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote",
    type: "Full-time",
    salary: "$80k - $110k",
    experience: "2+ years",
    posted: "1 day ago",
    applications: "15 applicants"
  }

  const requirements = [
    "2+ years of experience in customer success or account management",
    "Strong understanding of SaaS business models and customer lifecycle",
    "Excellent communication and interpersonal skills",
    "Experience with CRM tools (e.g., Salesforce, HubSpot)",
    "Ability to analyze customer data and identify trends",
    "Problem-solving mindset with a customer-first approach",
    "Knowledge of user management platforms is a plus"
  ]

  const responsibilities = [
    "Onboard new clients and ensure smooth implementation of User Management System",
    "Act as the primary point of contact for key accounts",
    "Monitor client usage and engagement metrics",
    "Identify upsell and cross-sell opportunities",
    "Provide ongoing support and training to clients",
    "Collaborate with product and engineering teams on feature requests",
    "Develop and maintain strong client relationships",
    "Create case studies and success stories"
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "$80k - $110k annually, plus commission structure"
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
      title: "Team Collaboration",
      description: "Work closely with sales, product, and engineering teams"
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description: "Professional development and career advancement"
    },
    {
      icon: Award,
      title: "Recognition",
      description: "Performance bonuses and client success awards"
    }
  ]

  const techStack = [
    { name: "Salesforce", level: "Advanced" },
    { name: "HubSpot", level: "Intermediate" },
    { name: "Google Analytics", level: "Intermediate" },
    { name: "Slack", level: "Advanced" },
    { name: "Zoom", level: "Advanced" },
    { name: "Microsoft Office", level: "Advanced" }
  ]

  const milestones = [
    {
      title: "Application Review",
      description: "We review your application and resume",
      duration: "1-2 days"
    },
    {
      title: "Initial Interview",
      description: "Discuss your experience and customer success background",
      duration: "30 minutes"
    },
    {
      title: "Case Study Review",
      description: "Present a customer success case study or scenario",
      duration: "45 minutes"
    },
    {
      title: "Team Interview",
      description: "Meet with potential colleagues from customer success team",
      duration: "60 minutes"
    },
    {
      title: "Final Interview",
      description: "Discuss culture fit, compensation, and next steps",
      duration: "30 minutes"
    }
  ]

  const [isApplying, setIsApplying] = useState(false)

  const handleApplyNow = () => {
    setIsApplying(true)
    window.open('mailto:careers@User Management System.com?subject=Application for Customer Success Manager Position', '_blank')
    setTimeout(() => setIsApplying(false), 2000)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-100 dark:from-green-950 dark:to-blue-900 py-20">
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
                  Help our clients maximize value from User Management System through exceptional onboarding and ongoing support.
                  You'll be the voice of our customers and drive their success with our platform.
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
                      Tools & Technologies
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
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Drive Customer Success?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our customer success team and help businesses thrive with User Management System
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
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-green-600">
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
