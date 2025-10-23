import { BlurFade } from "@/components/magicui/blur-fade";
import { Card, CardContent } from "@/components/ui/card";
import {
  Calendar,
  Clock,
  Users,
  Mic,
  Presentation,
  MessageCircle,
  MapPin,
  PlayCircle,
  Star,
  Award,
} from "lucide-react";
import React from "react";

export default function Workshop() {
  const agendaItems = [
    {
      time: "10:00 AM",
      title: "Brief Event Introduction",
      description: "Overview of the Digital Innovathon Symposium 2025",
      icon: <Mic className="h-5 w-5 text-blue-400" />,
      duration: "15 mins",
      type: "intro",
    },
    {
      time: "10:15 AM",
      title: "Opening Remarks by PROF. MADYA Dr. MUHAINI BINTI OTHMAN",
      subtitle: "Timbalan Dekan (Hal Ehwal Pelajar dan Alumni)",
      description: "Official opening and welcome address",
      icon: <Users className="h-5 w-5 text-emerald-400" />,
      duration: "15 mins",
      type: "opening",
    },
    {
      time: "10:30 AM",
      title: "Panelist 1: Khairul Yusri Zamri",
      subtitle: "Tech Strategist | Educator",
      description: "The Startup Journey in Cybersecurity: From Idea to Company",
      icon: <Presentation className="h-5 w-5 text-violet-400" />,
      duration: "40 mins",
      highlight: true,
      type: "keynote",
    },
    {
      time: "11:10 AM",
      title: "Panelist 2: Nur Alya Batrisya",
      subtitle: "Intern Eftech Energy Solutions",
      icon: <Presentation className="h-5 w-5 text-amber-400" />,
      duration: "35 mins",
      highlight: true,
      type: "keynote",
    },
    {
      time: "11:45 AM",
      title: "Panelist 3: Zulhafif Bin Zulkifle",
      subtitle: "Intern at UiTM Jengka",
      icon: <Presentation className="h-5 w-5 text-cyan-400" />,
      duration: "35 mins",
      highlight: true,
      type: "keynote",
    },
    {
      time: "12:20 PM",
      title: "Symposium Day Briefing and Q&A Session",
      description:
        "Detailed overview of symposium activities and interactive Q&A",
      icon: <MessageCircle className="h-5 w-5 text-rose-400" />,
      duration: "15 mins",
      type: "interactive",
    },
  ];

  return (
    <>
      <BlurFade delay={0.25} inView>
        <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Enhanced Header Section */}
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full border border-purple-500/30 mb-4">
              <Star className="h-4 w-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">
                Digital Innovathon 2025
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent leading-tight">
              Launch <br />
              Ceremony
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Be among the first to experience the beginning of an extraordinary
              cybersecurity journey
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              <div className="flex items-center gap-2 text-gray-300">
                <PlayCircle className="h-5 w-5 text-green-400" />
                <span className="font-semibold">Live Streaming</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Users className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold">3 Industry Experts</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <Award className="h-5 w-5 text-yellow-400" />
                <span className="font-semibold">Expert Insights</span>
              </div>
            </div>
          </div>

          {/* Enhanced Event Details Card */}
          <div className="bg-gradient-to-br from-gray-900/80 via-blue-900/40 to-purple-900/40 p-8 rounded-3xl border border-gray-700/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative z-10">
              <div className="flex flex-col items-center space-y-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-4 rounded-2xl shadow-lg">
                  <Calendar className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-200 mb-2">
                    Date
                  </h3>
                  <p className="text-2xl font-bold text-white">
                    24 October 2025
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-4 rounded-2xl shadow-lg">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-purple-200 mb-2">
                    Time
                  </h3>
                  <p className="text-2xl font-bold text-white">
                    10:00 AM - 12:35 PM
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center space-y-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 p-4 rounded-2xl shadow-lg">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-emerald-200 mb-2">
                    Venue
                  </h3>
                  <p className="text-2xl font-bold text-white">Online Event</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Agenda Timeline */}
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                Event Agenda
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Follow our carefully curated timeline for an immersive
                experience
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500/50 via-purple-500/50 to-cyan-500/50 hidden md:block"></div>

              <div className="space-y-6">
                {agendaItems.map((item, index) => (
                  <BlurFade key={index} delay={0.1 * (index + 1)} inView>
                    <div className="relative flex items-start gap-6 group">
                      {/* Timeline dot */}
                      <div className="hidden md:flex relative z-10 flex-shrink-0 w-16 h-16 items-center justify-center">
                        <div
                          className={`w-4 h-4 rounded-full border-4 ${
                            item.highlight
                              ? item.time === "10:30 AM"
                                ? "bg-violet-500 border-violet-400 shadow-lg shadow-violet-500/25"
                                : item.time === "11:10 AM"
                                  ? "bg-amber-500 border-amber-400 shadow-lg shadow-amber-500/25"
                                  : "bg-cyan-500 border-cyan-400 shadow-lg shadow-cyan-500/25"
                              : "bg-blue-500 border-blue-400"
                          } transition-all group-hover:scale-125`}
                        ></div>
                      </div>

                      <Card
                        className={`flex-1 border-0 shadow-2xl transition-all duration-300 group-hover:shadow-xl ${
                          item.highlight
                            ? item.time === "10:30 AM"
                              ? "bg-gradient-to-r from-violet-900/40 via-violet-800/30 to-blue-900/40 border-l-4 border-violet-400"
                              : item.time === "11:10 AM"
                                ? "bg-gradient-to-r from-amber-900/40 via-amber-800/30 to-orange-900/40 border-l-4 border-amber-400"
                                : "bg-gradient-to-r from-cyan-900/40 via-cyan-800/30 to-blue-900/40 border-l-4 border-cyan-400"
                            : "bg-gradient-to-r from-gray-800/60 to-gray-900/60 border-l-4 border-blue-400"
                        } backdrop-blur-sm rounded-2xl overflow-hidden`}
                      >
                        <CardContent className="p-0">
                          <div className="p-6">
                            <div className="flex flex-col sm:flex-row sm:items-start gap-4">
                              <div className="flex items-center gap-4 sm:flex-shrink-0">
                                <div className="text-center space-y-2">
                                  <div className="bg-white/10 px-4 py-3 rounded-xl border border-white/20">
                                    <p className="text-lg font-bold text-white">
                                      {item.time}
                                    </p>
                                  </div>
                                  <p className="text-sm text-gray-400 font-medium">
                                    {item.duration}
                                  </p>
                                </div>
                              </div>

                              <div className="flex-1 space-y-3">
                                <div className="flex items-start gap-4">
                                  <div
                                    className={`p-3 rounded-xl border ${
                                      item.highlight
                                        ? item.time === "10:30 AM"
                                          ? "bg-violet-500/20 border-violet-400/30"
                                          : item.time === "11:10 AM"
                                            ? "bg-amber-500/20 border-amber-400/30"
                                            : "bg-cyan-500/20 border-cyan-400/30"
                                        : "bg-white/10 border-white/20"
                                    }`}
                                  >
                                    {item.icon}
                                  </div>
                                  <div className="flex-1">
                                    <h3 className="text-xl font-bold text-white leading-tight">
                                      {item.title}
                                    </h3>
                                    {item.subtitle && (
                                      <p
                                        className={`font-semibold mt-2 text-lg ${
                                          item.highlight
                                            ? item.time === "10:30 AM"
                                              ? "text-violet-300"
                                              : item.time === "11:10 AM"
                                                ? "text-amber-300"
                                                : "text-cyan-300"
                                            : "text-blue-300"
                                        }`}
                                      >
                                        {item.subtitle}
                                      </p>
                                    )}
                                  </div>
                                </div>
                                <p className="text-gray-300 text-lg leading-relaxed pl-16">
                                  {item.description}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Subtle hover effect */}
                          <div className="h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </CardContent>
                      </Card>
                    </div>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </>
  );
}
