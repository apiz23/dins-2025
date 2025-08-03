"use client";

import Footer from "@/components/footer";
import { TimelineEvent } from "@/components/screen/timeline-event";
import HorizontolInfo from "@/components/screen/horizontol-info";
import Hero from "@/components/screen/hero";

export default function Home() {
    return (
        <>
            <Hero />
            <HorizontolInfo />
            <TimelineEvent />

            {/* Outro Section */}
            <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black to-gray-800 px-4">
                <div className="p-12 rounded-3xl shadow-xl max-w-2xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Thank you for joining DINS 2025 🚀
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Let’s innovate the future together
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
