"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { BlurFade } from "../magicui/blur-fade";
import { Button } from "../ui/button";

export default function FAQS() {
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const faqs = [
        {
            question: "What is DINS 2025?",
            answer: "Digital Innovathon Symposium 2025 (DINS 2025) is a national innovation and tech showcase that brings together students from universities across Malaysia to present digital projects, compete in innovation challenges, and share ideas through exhibitions, symposium sessions, and final pitching.",
            category: "General",
        },
        {
            question: "Who can participate?",
            answer: "DINS 2025 is open to all university (public and private) and high school students, with participation focused on IT, engineering, and innovation-based projects. Industry representatives and the public are welcome as visitors.",
            category: "Participation",
        },
        {
            question: "Is DINS 2025 a competition or a symposium?",
            answer: "Both! DINS combines Competition – Teams compete by showcasing digital/tech innovations. Exhibition – Participants present projects to visitors, judges, and industry experts. Symposium & Pitching – Finalists present ideas in front of judges and audience.",
            category: "Event Details",
        },
        {
            question: "Is there a registration fee?",
            answer: "Yes. A participation fee applies for teams from other universities. Details on fees and payment will be provided in the official registration guidelines.",
            category: "Registration",
        },
        {
            question: "How do I register?",
            answer: "Registration is done via a Google Form, which can be accessed through our official Instagram page or the DINS 2025 website. Participants must fill in their details and complete the payment process before the closing date.",
            category: "Registration",
        },
        {
            question: "What are the competition themes?",
            answer: "This year, projects should align with one of the following three themes: Sustainable Innovation, AI & Digital Transformation, Social Innovation & Inclusivity.",
            category: "Competition",
        },
        {
            question: "What are the prizes?",
            answer: "Attractive cash prizes, medal, and certificates will be awarded to winners. All participants will receive an e-certificate of participation.",
            category: "Prizes",
        },
        {
            question: "Will accommodation and meals be provided?",
            answer: "Some refreshments will be provided during the program. Accommodation arrangements are not covered by the organisers and depend on the participant's university. However, organisers may assist with local recommendations upon request..",
            category: "Logistics",
        },
        {
            question: "Where will DINS 2025 be held?",
            answer: "The event will be held at Universiti Tun Hussein Onn Malaysia (UTHM), Faculty of Computer Science and Information Technology (FSKTM).",
            category: "Venue",
        },
        {
            question: "Who is organizing DINS 2025?",
            answer: "The event is organized by the Information Technology Club, UTHM, and MDEC, with support from industry partners and collaborating universities.",
            category: "Organizers",
        },
        {
            question:
                "How can my university/organization get involved as a partner or media collaborator?",
            answer: "We welcome collaborations! Interested institutions or media partners can reach out via email or register interest through our collaboration form.",
            category: "Collaboration",
        },
    ];
    const categories = Array.from(new Set(faqs.map((faq) => faq.category)));
    const filteredFAQs = activeCategory
        ? faqs.filter((faq) => faq.category === activeCategory)
        : faqs;

    return (
        <div
            className="relative flex flex-col justify-center items-center min-h-screen bg-black px-4 sm:px-6 overflow-hidden py-24"
            id="faqs"
        >
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-[100px]" />
                <div className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-emerald-500/10 blur-[100px]" />
                <div className="absolute bottom-1/4 right-3/4 w-56 h-56 rounded-full bg-purple-500/10 blur-[100px]" />
            </div>

            <div className="max-w-3xl w-full mx-auto relative z-10">
                {/* Header */}
                <div className="text-center mb-12 px-4">
                    <BlurFade delay={0.2} inView>
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Frequently Asked Questions
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.4} inView>
                        <p className="text-neutral-300 max-w-2xl mx-auto">
                            Find answers to common questions about our
                            innovation challenge
                        </p>
                    </BlurFade>
                </div>

                {/* Category Filter */}
                <BlurFade delay={0.6} inView>
                    <div className="flex flex-wrap justify-center gap-2 mb-10">
                        <Button
                            onClick={() => setActiveCategory(null)}
                            className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                                !activeCategory
                                    ? "text-white bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/30"
                                    : "text-gray-400 hover:text-white border border-gray-700/50"
                            }`}
                        >
                            All
                        </Button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-3 py-1.5 rounded-md text-sm transition-colors ${
                                    activeCategory === category
                                        ? "text-white bg-gradient-to-r from-blue-500/20 to-emerald-500/20 border border-blue-500/30"
                                        : "text-gray-400 hover:text-white border border-gray-700/50"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </BlurFade>

                {/* FAQ Accordion */}
                <BlurFade delay={0.8} inView>
                    <Accordion type="single" collapsible className="space-y-4">
                        {filteredFAQs.map((faq, index) => (
                            <AccordionItem
                                key={index}
                                value={`faq-${index}`}
                                className="px-6 py-2 border border-gray-800 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-900/20 backdrop-blur-sm hover:bg-gray-800/30 transition-all mb-4 shadow-lg hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.3)]"
                            >
                                <AccordionTrigger className="text-white font-medium">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-300 text-justify">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </BlurFade>
            </div>
        </div>
    );
}
