import React from "react";
import { Timeline } from "@/components/timeline";
import {
    CalendarDays,
    Clock,
    AlertCircle,
    PartyPopper,
    Download,
    MapPin,
    CalendarPlus,
    AlertTriangle,
    FileText,
    File,
    Info,
    UploadCloud,
    CalendarCheck,
    Users,
    Mail,
    HelpCircle,
    CreditCard,
    Zap,
} from "lucide-react";
import Image from "next/image";
import t1 from "@/public/images/timeline/t1.png";
import t2 from "@/public/images/timeline/t2.png";
import Link from "next/link";
import { Badge } from "../ui/badge";
import CountdownProgress from "../countdown";

export function TimelineEvent() {
    const data = [
        {
            title: "15 Aug – 30 Sept",
            icon: <CalendarDays className="h-5 w-5 text-emerald-400" />,
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/30 p-5 rounded-xl border border-gray-700/80 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <div className="bg-blue-500/10 p-2 rounded-lg border border-blue-500/20">
                                <CalendarCheck className="h-5 w-5 text-blue-400" />
                            </div>
                            <div className="flex flex-col gap-2">
                                <h3 className="text-base sm:text-lg font-medium text-neutral-100">
                                    Registration & Payment Period
                                </h3>

                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-1.5 text-sm text-blue-300">
                                        <Clock className="h-4 w-4" />
                                        <CountdownProgress endDate="2025-08-15" />
                                    </div>

                                    <Badge variant="secondary">
                                        All Participants
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/60 p-5 rounded-xl border border-gray-700 shadow-xl overflow-hidden">
                        <div className="relative w-full h-[250px] sm:aspect-square sm:h-auto rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                            <Image
                                src={t1}
                                alt="Registration period"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/30 to-transparent pointer-events-none" />
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <button className="group w-full py-3 bg-gradient-to-r from-emerald-600/40 to-emerald-700/30 hover:from-emerald-600/50 hover:to-emerald-700/40 rounded-lg text-emerald-100 border border-emerald-500/30 flex items-center justify-center gap-2 transition-all hover:shadow-emerald-500/20 hover:shadow-md">
                                <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                                <span className="font-medium">
                                    Registration Guide
                                </span>
                            </button>
                            <button className="group w-full py-3 bg-gradient-to-r from-blue-600/40 to-blue-700/30 hover:from-blue-600/50 hover:to-blue-700/40 rounded-lg text-blue-100 border border-blue-500/30 flex items-center justify-center gap-2 transition-all hover:shadow-blue-500/20 hover:shadow-md">
                                <FileText className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                                <span className="font-medium">
                                    View Eligibility
                                </span>
                            </button>
                        </div>

                        {/* Quick Links */}
                        <div className="mt-6 pt-4 border-t border-gray-700/50">
                            <h4 className="text-sm font-semibold text-neutral-300 mb-3 flex items-center gap-2">
                                <Zap className="h-4 w-4 text-amber-400" />
                                Quick Actions
                            </h4>
                            <div className="grid grid-cols-2 gap-2">
                                <Link
                                    href="#"
                                    className="text-xs px-3 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-neutral-300 border border-gray-600 flex items-center gap-2 transition-colors"
                                >
                                    <CreditCard className="h-3.5 w-3.5" />
                                    Payment Portal
                                </Link>
                                <Link
                                    href="#"
                                    className="text-xs px-3 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-neutral-300 border border-gray-600 flex items-center gap-2 transition-colors"
                                >
                                    <HelpCircle className="h-3.5 w-3.5" />
                                    FAQ
                                </Link>
                                <Link
                                    href="#"
                                    className="text-xs px-3 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-neutral-300 border border-gray-600 flex items-center gap-2 transition-colors"
                                >
                                    <Mail className="h-3.5 w-3.5" />
                                    Contact
                                </Link>
                                <Link
                                    href="#"
                                    className="text-xs px-3 py-2 bg-gray-700/50 hover:bg-gray-700 rounded-lg text-neutral-300 border border-gray-600 flex items-center gap-2 transition-colors"
                                >
                                    <Users className="h-3.5 w-3.5" />
                                    Team Registration
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "20 Oct",
            icon: <AlertCircle className="h-5 w-5 text-amber-400" />,
            content: (
                <div className="space-y-6">
                    <div className="bg-gradient-to-r from-gray-800/40 to-gray-900/30 p-5 rounded-xl border border-gray-700/80 backdrop-blur-sm">
                        <div className="flex items-start gap-3">
                            <div className="bg-amber-500/10 p-2 rounded-lg border border-amber-500/20">
                                <AlertTriangle className="h-5 w-5 text-amber-400" />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-neutral-100">
                                    Deadline for Abstract & Draft Submission
                                </h3>
                                <p className="mt-1.5 text-sm text-neutral-400">
                                    Final submissions must be in PDF format and
                                    adhere to the conference guidelines
                                </p>
                                <div className="flex items-center gap-1.5 text-sm text-blue-300">
                                    <Clock className="h-4 w-4" />
                                    <CountdownProgress endDate="2025-10-20" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/60 p-5 rounded-xl border border-gray-700 shadow-xl overflow-hidden">
                        <div className="relative w-full h-[250px] sm:aspect-square sm:h-auto rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                            <Image
                                src={t2}
                                alt="Registration period"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent pointer-events-none" />
                            <div className="absolute bottom-4 left-4">
                                <span className="text-xs font-semibold px-3 py-1.5 bg-amber-600/90 text-white rounded-full shadow-lg">
                                    ⏰ Final Countdown
                                </span>
                            </div>
                        </div>

                        {/* Enhanced Tags Section */}
                        <div className="mt-5 flex flex-wrap gap-3">
                            <span className="text-xs px-3 py-1.5 bg-amber-600/20 rounded-full text-amber-300 border border-amber-400/30 flex items-center gap-1.5 font-medium">
                                <AlertCircle className="h-3.5 w-3.5" />
                                Strict Deadline
                            </span>
                            <span className="text-xs px-3 py-1.5 bg-blue-600/20 rounded-full text-blue-300 border border-blue-400/30 flex items-center gap-1.5 font-medium">
                                <File className="h-3.5 w-3.5" />
                                Max 5MB file size
                            </span>
                            <span className="text-xs px-3 py-1.5 bg-gray-700/80 rounded-full text-gray-100 border border-gray-600 flex items-center gap-1.5 font-medium">
                                <FileText className="h-3.5 w-3.5" />
                                PDF format required
                            </span>
                        </div>

                        {/* Submission Guidelines */}
                        <div className="mt-6 space-y-3">
                            <h4 className="text-sm font-semibold text-neutral-300 flex items-center gap-2">
                                <Info className="h-4 w-4 text-blue-400" />
                                Submission Guidelines
                            </h4>
                            <ul className="text-xs text-neutral-400 space-y-2 pl-5 list-disc">
                                <li>Include author names and affiliations</li>
                                <li>Minimum 12pt font size for readability</li>
                                <li>Maximum 8 pages including references</li>
                                <li>Submit through conference portal only</li>
                            </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <button className="w-full py-3 bg-gradient-to-r from-blue-600/40 to-blue-700/30 hover:from-blue-600/50 hover:to-blue-700/40 rounded-lg text-blue-100 border border-blue-500/30 flex items-center justify-center gap-2 transition-all hover:shadow-blue-500/20 hover:shadow-md">
                                <UploadCloud className="h-4 w-4" />
                                <span className="font-medium">Submit Now</span>
                            </button>
                            <button className="w-full py-3 bg-gradient-to-r from-gray-700/40 to-gray-800/30 hover:from-gray-700/50 hover:to-gray-800/40 rounded-lg text-neutral-100 border border-gray-600/30 flex items-center justify-center gap-2 transition-all hover:shadow-gray-500/10 hover:shadow-md">
                                <FileText className="h-4 w-4" />
                                <span className="font-medium">
                                    Download Template
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            ),
        },
        {
            title: "3 Nov",
            icon: <PartyPopper className="h-5 w-5 text-purple-400" />,
            content: (
                <div className="space-y-6">
                    <div className="bg-gray-800/40 p-5 rounded-xl border border-gray-700/80 backdrop-blur-sm">
                        <h3 className="text-lg font-medium text-neutral-100 flex items-center gap-2">
                            <CalendarDays className="h-5 w-5 text-purple-400" />
                            Symposium Day @ Universiti Tun Hussein Onn Malaysia
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-blue-300">
                            <Clock className="h-4 w-4" />
                            <CountdownProgress endDate="2025-11-03" />
                        </div>
                        <p className="mt-2 text-sm text-neutral-400 flex items-center gap-2">
                            <Clock className="h-4 w-4 text-purple-400" />
                            <span>Main Campus, 9:00 AM - 5:00 PM</span>
                            <span className="text-xs bg-purple-900/30 text-purple-300 px-2 py-1 rounded-full ml-2">
                                All Day Event
                            </span>
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/60 p-5 rounded-xl border border-gray-700 shadow-xl">
                        <h4 className="text-md font-medium text-neutral-200 mb-4 flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-rose-400" />
                            Location Details
                        </h4>

                        {/* Enhanced Google Map Embed */}
                        <div className="relative w-full aspect-video max-h-[400px] md:max-h-[450px] rounded-xl overflow-hidden border-2 border-gray-700 shadow-2xl">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.160378290877!2d103.0852!3d1.8554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f8a7a8b2c5%3A0x9f7cf7e6b9a05a!2sUniversiti%20Tun%20Hussein%20Onn%20Malaysia!5e0!3m2!1sen!2smy!4v1691505630664!5m2!1sen!2smy"
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent pointer-events-none" />
                        </div>

                        <div className="mt-6 space-y-3">
                            <div className="flex items-start gap-3 text-sm text-neutral-300">
                                <div className="w-2.5 h-2.5 rounded-full bg-purple-400 animate-pulse mt-1 flex-shrink-0"></div>
                                <span className="font-medium">
                                    Keynote speeches from industry leaders
                                </span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-neutral-300">
                                <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse mt-1 flex-shrink-0"></div>
                                <span className="font-medium">
                                    Interactive networking sessions
                                </span>
                            </div>
                            <div className="flex items-start gap-3 text-sm text-neutral-300">
                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse mt-1 flex-shrink-0"></div>
                                <span className="font-medium">
                                    Award ceremony and closing dinner
                                </span>
                            </div>
                        </div>

                        {/* Enhanced Action Buttons */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-3">
                            <Link
                                href="https://maps.app.goo.gl/D21WZe5Uz8kDCM3L9"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 bg-gradient-to-r from-purple-600/40 to-purple-700/30 hover:from-purple-600/50 hover:to-purple-700/40 rounded-lg text-purple-100 border border-purple-500/30 flex items-center justify-center gap-2 transition-all hover:shadow-purple-500/20 hover:shadow-md"
                            >
                                <MapPin className="h-5 w-5" />
                                <span className="font-medium">
                                    View Campus Map
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            ),
        },
    ];

    return (
        <section className="relative w-full bg-gradient-to-bl from-gray-900 to-black overflow-hidden">
            <div
                className="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8"
                id="schedule"
            >
                <div className="mt-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Event Timeline
                    </h2>
                    <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
                        Important dates and milestones for the symposium
                    </p>
                </div>

                <div className="relative">
                    <div className="absolute -left-20 top-1/3 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-10"></div>
                    <div className="absolute -right-20 top-2/3 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"></div>

                    <Timeline data={data} />
                </div>
            </div>
        </section>
    );
}
