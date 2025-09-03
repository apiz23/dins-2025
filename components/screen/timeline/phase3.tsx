import { BlurFade } from "@/components/magicui/blur-fade";
import { ArrowUpRight, CalendarCheck, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Phase3() {
    return (
        <>
            <BlurFade delay={0.65} inView>
                <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 py-12 space-y-8">
                    <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-xl mb-12 transform transition-all hover:scale-[1.01]">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/30 flex-shrink-0">
                                <CalendarCheck className="h-8 w-8 text-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    Symposium Day @ UTHM
                                </h3>
                                <p className="text-lg text-gray-300 mb-4">
                                    3 Nov 2025
                                </p>
                                <div className="mt-2 flex flex-wrap items-center gap-3">
                                    <div className="flex items-center text-sm text-purple-200">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>9:00 AM - 5:00 PM</span>
                                    </div>
                                    <div className="flex items-center text-sm text-gray-300">
                                        <MapPin className="h-4 w-4 mr-2 text-rose-300" />
                                        <span>
                                            Main Campus, Universiti Tun Hussein
                                            Onn Malaysia
                                        </span>
                                    </div>
                                    <span className="text-xs bg-purple-900/40 text-purple-200 px-3 py-1 rounded-full border border-purple-700/50">
                                        All Day Event
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Location Section - Enhanced */}
                    <div className="bg-gray-800/50 rounded-2xl border border-gray-700/80 overflow-hidden backdrop-blur-sm">
                        <div className="p-6">
                            <div className="flex items-center gap-3 mb-5">
                                <div className="bg-rose-500/20 p-2 rounded-lg border border-rose-500/30">
                                    <MapPin className="h-5 w-5 text-rose-300" />
                                </div>
                                <h3 className="text-lg font-semibold text-white">
                                    Venue Location
                                </h3>
                            </div>

                            {/* Interactive Map - Improved */}
                            <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-gray-700 shadow-lg hover:border-purple-500 transition-all duration-300">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.160378290877!2d103.0852!3d1.8554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f8a7a8b2c5%3A0x9f7cf7e6b9a05a!2sUniversiti%20Tun%20Hussein%20Onn%20Malaysia!5e1!3m2!1sen!2smy!4v1691505630664!5m2!1sen!2smy"
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-full absolute inset-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent pointer-events-none" />
                            </div>

                            {/* CTA Button - More Prominent */}
                            <div className="mt-8 flex justify-center">
                                <Link
                                    href="https://maps.app.goo.gl/D21WZe5Uz8kDCM3L9"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-purple-500/30"
                                >
                                    <MapPin className="h-5 w-5" />
                                    <span>Open in Google Maps</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </>
    );
}
