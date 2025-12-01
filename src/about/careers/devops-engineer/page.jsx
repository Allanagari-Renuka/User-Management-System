import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Briefcase, MapPin, Clock, DollarSign, Users, Cloud, Server, Shield, Settings, CheckCircle, Star, Award, TrendingUp, Mail, Loader2 } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

export default function DevOpsEngineerPage() {
  const jobDetails = {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    salary: "$110k - $150k",
    experience: "4+ years",
    posted: "3 days ago",
    applications: "12 applicants"
  }

  const requirements = [
    "4+ years of experience in DevOps or SRE roles",
    "Strong experience with AWS, Azure, or GCP cloud platforms",
    "Proficiency in infrastructure as code (Terraform, CloudFormation)",
    "Experience with containerization (Docker, Kubernetes)",
    "Knowledge of CI/CD pipelines and automation tools",
    "Familiarity with monitoring and logging tools (ELK, Prometheus)",
    "Understanding of security best practices and compliance",
    "Experience with configuration management (Ansible, Puppet)"
  ]

  const responsibilities = [
    "Design and maintain scalable cloud infrastructure",
    "Implement and manage CI/CD pipelines for automated deployments",
    "Monitor system performance and implement reliability improvements",
    "Ensure security and compliance of infrastructure and applications",
    "Collaborate with development teams to optimize deployment processes",
    "Automate infrastructure provisioning and configuration management",
    "Troubleshoot and resolve production issues quickly",
    "Stay current with emerging technologies and industry best practices"
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "$110k - $150k annually, plus equity package"
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
      icon: Cloud,
      title: "Cloud Certifications",
      description: "Budget for AWS/Azure certifications"
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
    { name: "AWS", level: "Expert" },
    { name: "Kubernetes", level: "Advanced" },
    { name: "Terraform", level: "Advanced" },
    { name: "Docker", level: "Expert" },
    { name: "Jenkins", level: "Advanced" },
    { name: "Prometheus", level: "Intermediate" }
  ]

  const milestones = [
    {
      title: "Technical Screening",
      description: "Discuss your DevOps experience and technical skills",
      duration: "45 minutes"
    },
    {
      title: "Infrastructure Challenge",
      description: "Complete a small infrastructure automation task",
      duration: "2-3 days"
    },
    {
      title: "System Design Interview",
      description: "Discuss scalable architecture and reliability",
      duration: "60 minutes"
    },
    {
      title: "Team Interview",
      description: "Meet with potential colleagues",
      duration: "45 minutes"
    },
    {
      title: "Final Interview",
      description: "Discuss culture fit and compensation",
      duration: "30 minutes"
    }
  ]

  const [isApplying, setIsApplying] = useState(false)

  const handleApplyNow = () => {
    setIsApplying(true)
    window.open('mailto:careers@User Management System.com?subject=Application for DevOps Engineer Position', '_blank')
    setTimeout(() => setIsApplying(false), 2000)
  }

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-950 dark:to-cyan-900 py-20">
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
                  Join our infrastructure team to build and maintain scalable cloud systems that power our user management platform.
                  You'll work on cutting-edge technologies and ensure our systems are reliable, secure, and efficient.
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
                      <Server className="h-5 w-5 text-blue-600" />
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
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Ready to Scale Infrastructure?</h2>
            <p className="text-xl mb-8 opacity-90">
              Join our DevOps team and help build the reliable foundation that powers our platform
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
