import React from "react";
import { ChevronDown, HelpCircle, Phone, User } from "lucide-react";
import Link from "next/link";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export default function CTA() {
    return (
        <>
            {/* Registration CTA Section */}
            <div className="relative flex flex-col justify-center items-center min-h-[70vh] bg-gradient-to-b from-black to-gray-900 px-4 overflow-hidden">
                {/* Animated background elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl animate-pulse delay-300"></div>
                    <div className="absolute bottom-1/4 right-3/4 w-28 h-28 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="relative max-w-4xl mx-auto text-center z-10 space-y-8 px-6 py-16">
                    <h2 className="text-5xl md:text-6xl font-bold text-white">
                        Ready to join{" "}
                        <span className="bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            DINS 2025
                        </span>
                        ?
                    </h2>

                    <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Secure your spot now and be part of the innovation
                        revolution!
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                        {/* Register Button - Full width on mobile, auto width on desktop */}
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLScTZ-hp-i0fr51nNivRIInBJSYiiU4VIakaiFxULgAOoLECtw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-lg sm:rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-[1.02] sm:hover:scale-105 text-center"
                        >
                            Register Now →
                        </Link>

                        {/* Questions Button - Full width on mobile, auto width on desktop */}
                        <div className="w-full sm:w-auto px-5 py-2.5 sm:px-6 sm:py-3 border border-gray-700 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-all cursor-pointer shadow-lg hover:shadow-gray-900/50">
                            <Popover>
                                <PopoverTrigger className="flex items-center justify-center gap-2 w-full md:p-0 p-3">
                                    <HelpCircle className="h-5 w-5 text-blue-400" />
                                    <span>Have questions?</span>
                                </PopoverTrigger>
                                <PopoverContent
                                    className="w-[calc(100vw-2rem)] sm:w-72 bg-gray-900 border border-gray-700 rounded-lg shadow-xl p-4 mx-2 sm:mx-0"
                                    align="center"
                                    sideOffset={8}
                                >
                                    <div className="space-y-4">
                                        <h3 className="text-sm font-semibold text-gray-300 mb-2">
                                            Contact our team
                                        </h3>

                                        <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-blue-500">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-blue-500/10 rounded-full">
                                                    <User className="h-4 w-4 text-blue-400" />
                                                </div>
                                                <div>
                                                    <p className="flex flex-wrap items-center gap-2 font-medium text-white">
                                                        Ahmad Firas
                                                        <span className="text-xs px-2 py-0.5 bg-gray-700 rounded-full text-gray-300">
                                                            Program Director
                                                        </span>
                                                    </p>
                                                    <Link
                                                        href="tel:01121768812"
                                                        className="flex items-center gap-2 mt-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                                                    >
                                                        <Phone className="h-4 w-4" />
                                                        011-2176 8812
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-purple-500">
                                            <div className="flex items-start gap-3">
                                                <div className="p-2 bg-purple-500/10 rounded-full">
                                                    <User className="h-4 w-4 text-purple-400" />
                                                </div>
                                                <div>
                                                    <p className="flex flex-wrap items-center gap-2 font-medium text-white">
                                                        Shaamalan
                                                        <span className="text-xs px-2 py-0.5 bg-gray-700 rounded-full text-gray-300">
                                                            Assistant Director
                                                        </span>
                                                    </p>
                                                    <Link
                                                        href="tel:0163605017"
                                                        className="flex items-center gap-2 mt-2 text-sm text-gray-300 hover:text-emerald-400 transition-colors"
                                                    >
                                                        <Phone className="h-4 w-4" />
                                                        016-360 5017
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                        <p className="text-xs text-gray-500 text-center mt-2">
                                            We{"'"}re happy to help with any
                                            questions
                                        </p>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>

                    <p className="text-sm text-gray-400 mt-4">
                        Limited seats available. Registration closes soon!
                    </p>
                </div>

                {/* Scrolling indicator */}
                <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20 animate-bounce">
                    <ChevronDown className="h-8 w-8 text-gray-400" />
                </div>
            </div>
        </>
    );
}
