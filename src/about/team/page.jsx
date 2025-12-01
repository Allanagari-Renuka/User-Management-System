import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Star, Zap, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";

export default function TeamPage() {
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder", img: "", color: "from-purple-500 to-pink-500" },
    { name: "Michael Chen", role: "CTO", img: "", color: "from-blue-500 to-cyan-500" },
    { name: "Emily Rodriguez", role: "Head of Design", img: "", color: "from-emerald-500 to-teal-500" },
    { name: "David Kim", role: "VP Engineering", img: "", color: "from-orange-500 to-red-500" },
    // Add rest as needed
  ];

  return (
    <div className="w-full bg-black text-white overflow-x-hidden">
      {/* Floating Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-20 animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />
      </div>
      {/* Hero */}
      <section className="relative py-32">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
        <div className="container mx-auto max-w-7xl px-6 text-center relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Meet the Visionaries
          </h1>
          <p className="text-xl md:text-2xl opacity-80 max-w-4xl mx-auto leading-relaxed">
            The brilliant minds building the future of secure, seamless user management.
          </p>
        </div>
      </section>

      {/* Team Grid – Floating Glass Cards */}
      <section className="py-20">
        <div className="container mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {team.map((member, i) => (
              <div
                key={i}
                className="group relative"
                style={{ transform: "translateZ(0)" }}
              >
                {/* Glow Background */}
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-3xl blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                <Card className="relative overflow-hidden border-0 bg-white/5 backdrop-blur-2xl ring-1 ring-white/10 rounded-3xl p-8 hover:ring-white/30 transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl hover:shadow-purple-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                  
                  <div className="relative z-10 text-center">
                    <div className="mb-6 relative mx-auto">
                      <Avatar className="h-32 w-32 ring-4 ring-white/20 shadow-2xl mx-auto">
                        <AvatarImage src={member.img} />
                        <AvatarFallback className={`text-3xl font-bold bg-gradient-to-br ${member.color} text-white`}>
                          {member.name.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-3 -right-3 p-3 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full shadow-xl animate-pulse">
                        <Star className="h-6 w-6 text-white" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                      {member.name}
                    </h3>
                    <p className="text-lg opacity-90 mb-6">{member.role}</p>

                    <div className="flex justify-center gap-3">
                      <Badge className="bg-white/10 backdrop-blur-md border-white/20">Leadership</Badge>
                      <Badge className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-purple-500/30">
                        Visionary
                      </Badge>
                    </div>
                  </div>

                  {/* Hover Glow Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-700" />
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-t from-purple-900/50 to-transparent">
        <div className="container mx-auto max-w-4xl px-6 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Want to Join This Team?
          </h2>
          <Link to="/about/careers">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white text-xl px-12 py-8 rounded-2xl font-bold shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-110">
              We’re Hiring <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}