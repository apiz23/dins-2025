import React from "react";
import Phase1 from "./phase1";
import Phase2 from "./phase2";
import Phase3 from "./phase3";
import { Separator } from "../../ui/separator";
import Info from "./info";

export function TimelineEvent() {
    return (
        <>
            <section className="relative w-full bg-black overflow-hidden">
                <div className="absolute inset-0 overflow-hidden">
                    {/* Blue Blobs */}
                    <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                    <div className="absolute top-1/3 right-1/3 w-40 h-40 rounded-full bg-blue-400/15 blur-3xl animate-pulse delay-100"></div>

                    {/* Emerald/Green Blobs */}
                    <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl animate-pulse delay-300"></div>
                    <div className="absolute top-1/5 left-3/4 w-36 h-36 rounded-full bg-emerald-400/15 blur-3xl animate-pulse delay-700"></div>

                    {/* Purple Blobs */}
                    <div className="absolute bottom-1/4 right-3/4 w-28 h-28 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-500"></div>
                    <div className="absolute top-3/4 left-1/5 w-44 h-44 rounded-full bg-purple-400/15 blur-3xl animate-pulse delay-200"></div>

                    {/* Additional Color Variations */}
                    <div className="absolute top-2/5 left-1/5 w-24 h-24 rounded-full bg-cyan-500/15 blur-3xl animate-pulse delay-400"></div>
                    <div className="absolute bottom-1/5 right-1/5 w-48 h-48 rounded-full bg-indigo-500/15 blur-3xl animate-pulse delay-600"></div>

                    {/* Large Background Blobs */}
                    <div className="absolute top-1/5 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/6 right-0 translate-y-1/2 translate-x-1/2 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-800"></div>
                </div>
                <Info />
                <Phase1 />
                <Separator className="max-w-6xl mx-auto bg-white/20" />
                <Phase2 />
                <Separator className="max-w-6xl mx-auto bg-white/20" />
                <Phase3 />
            </section>
        </>
    );
}
