"use client";

import Footer from "@/components/footer";
import { TimelineEvent } from "@/components/screen/timeline-event";
import {
    HorizontolInfo,
    VerticalInfo,
} from "@/components/screen/horizontol-info";
import Hero from "@/components/screen/hero";
import { useIsMobile } from "@/hooks/use-mobile";
import CTA from "@/components/screen/cta";
import AboutSection from "@/components/screen/about";

export default function Home() {
    const isMobile = useIsMobile();

    return (
        <>
            <Hero />
            <AboutSection />
            {isMobile ? (
                <VerticalInfo />
            ) : (
                <div className="overflow-hidden h-full">
                    <HorizontolInfo />
                </div>
            )}
            <TimelineEvent />
            <CTA />
            <Footer />
        </>
    );
}
