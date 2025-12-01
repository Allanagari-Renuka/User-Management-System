import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Zap, Heart, Users, Target, MapPin, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

export default function CareersPage() {
  const jobs = [
    { title: "Senior Full-Stack Developer", dept: "Engineering", salary: "$140k–$180k", remote: true },
    { title: "Head of Product Design", dept: "Design", salary: "$130k–$170k", remote: true },
    { title: "Security Engineer", dept: "Security", salary: "$150k–$200k", remote: true },
  ];

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>
      {/* Hero – Pure Harvee Magic */}
      <section className="relative py-40">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-pink-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(168,85,247,0.4)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(236,72,153,0.3)_0%,transparent_50%)]" />

        <div className="container mx-auto max-w-7xl px-6 relative z-10 text-center">
          <div className="inline-block mb-8">
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl rounded-full px-8 py-4 border border-white/20">
              <Sparkles className="h-7 w-7 text-yellow-400 animate-pulse" />
              <span className="text-2xl font-bold">We’re Hiring Visionaries</span>
            </div>
          </div>

          <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Build What
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Matters
            </span>
          </h1>

          <p className="text-2xl opacity-80 max-w-4xl mx-auto leading-relaxed mb-12">
            Join a team obsessed with simplicity, security, and scale.
          </p>

          <Link to="#jobs">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xl px-16 py-10 rounded-full font-bold shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110 hover:-rotate-1">
              See Open Roles <ArrowRight className="ml-4 h-7 w-7" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Floating Job Cards */}
      <section id="jobs" className="py-32">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="space-y-12">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="group relative"
                style={{ transform: "translateZ(0)" }}
              >
                <div className="absolute -inset-6 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-white/5 to-white/2 backdrop-blur-2xl ring-1 ring-white/10 rounded-3xl p-10 hover:ring-white/30 transition-all duration-700 hover:-translate-y-6 hover:shadow-3xl hover:shadow-purple-500/30">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                    <div>
                      <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-6 text-lg opacity-80">
                        <span className="flex items-center gap-2">
                          <Zap className="h-5 w-5 text-yellow-400" />
                          {job.dept}
                        </span>
                        <span className="flex items-center gap-2">
                          <MapPin className="h-5 w-5 text-green-400" />
                          Fully Remote
                        </span>
                        <span className="flex items-center gap-2">
                          <DollarSign className="h-5 w-5 text-emerald-400" />
                          {job.salary}
                        </span>
                      </div>
                    </div>

                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-7 rounded-2xl text-xl font-bold shadow-xl hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110">
                      Apply Now <ArrowRight className="ml-3 h-6 w-6" />
                    </Button>
                  </div>

                  <div className="absolute bottom-0 left-0 h-2 w-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 text-center">
        <h2 className="text-6xl md:text-7xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Your Future Starts Here
        </h2>
        <Link to="/contact">
          <Button className="bg-white text-black hover:bg-gray-200 text-2xl px-20 py-12 rounded-full font-bold shadow-2xl hover:shadow-white/50 transition-all hover:scale-110">
            Let’s Talk <Heart className="ml-4 h-10 w-10" />
          </Button>
        </Link>
      </section>
    </div>
  );
}