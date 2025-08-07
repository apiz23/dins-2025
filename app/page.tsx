"use client";

import Footer from "@/components/footer";
import { TimelineEvent } from "@/components/screen/timeline-event";
import {
    HorizontolInfo,
    VerticalInfo,
} from "@/components/screen/horizontol-info";
import Hero from "@/components/screen/hero";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Home() {
    const isMobile = useIsMobile();

    return (
        <>
            <Hero />
            <VerticalInfo />
            <TimelineEvent />
            {/* Registration CTA Section */}
            <div className="relative flex flex-col justify-center items-center min-h-screen bg-gradient-to-b from-black to-gray-900 px-4 overflow-hidden">
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

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            href="https://docs.google.com/forms/d/e/1FAIpQLScTZ-hp-i0fr51nNivRIInBJSYiiU4VIakaiFxULgAOoLECtw/viewform"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:scale-105"
                        >
                            Register Now →
                        </Link>

                        <Link
                            href="#contact"
                            className="px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:bg-gray-800/50 transition-all"
                        >
                            Have questions?
                        </Link>
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
            <Footer />
        </>
    );
}
