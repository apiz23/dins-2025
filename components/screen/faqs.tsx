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
            answer: "DINS 2025 is open to all university students (public and private), with participation focused on IT, engineering, and innovation-based projects. Industry representatives and the public are welcome as visitors.",
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
            answer: "Attractive cash prizes, trophies, and certificates will be awarded to winners. All participants will receive an e-certificate of participation.",
            category: "Prizes",
        },
        {
            question: "Will accommodation and meals be provided?",
            answer: "Some refreshments will be provided during the program. Accommodation arrangements are not covered by the organisers and depend on the participant's university. However, organisers may assist with local recommendations upon request.",
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
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 1.5 }}
                    className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500 to-transparent blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.15 }}
                    transition={{ duration: 1.5, delay: 0.3 }}
                    className="absolute bottom-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-emerald-500 to-transparent blur-[100px]"
                />
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 1.5, delay: 0.6 }}
                    className="absolute bottom-1/4 right-3/4 w-56 h-56 rounded-full bg-gradient-to-br from-purple-500 to-transparent blur-[100px]"
                />
            </div>

            <div className="max-w-4xl w-full mx-auto relative z-10">
                {/* Enhanced Header with BlurFade */}
                <div className="text-center mb-12 px-4">
                    <BlurFade delay={0.2} inView>
                        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 leading-tight">
                            Frequently Asked Questions
                        </h2>
                    </BlurFade>
                    <BlurFade delay={0.4} inView>
                        <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto">
                            Find answers to common questions about our
                            innovation challenge
                        </p>
                    </BlurFade>
                </div>

                {/* Improved Category Filter with BlurFade */}
                <BlurFade delay={0.6} inView>
                    <div className="flex flex-wrap justify-center gap-3 mb-10 px-2">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(null)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                !activeCategory
                                    ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/30"
                                    : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 backdrop-blur-sm border border-gray-700"
                            }`}
                        >
                            All Categories
                        </motion.button>
                        {categories.map((category) => (
                            <motion.button
                                key={category}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => setActiveCategory(category)}
                                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                    activeCategory === category
                                        ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-700/70 backdrop-blur-sm border border-gray-700"
                                }`}
                            >
                                {category}
                            </motion.button>
                        ))}
                    </div>
                </BlurFade>

                {/* Enhanced Accordion with BlurFade */}
                <BlurFade delay={0.8} inView>
                    <div className="space-y-3">
                        <Accordion type="single" collapsible>
                            {filteredFAQs.map((faq, index) => (
                                <AccordionItem
                                    key={index}
                                    value={`item-${index}`}
                                    className="border border-gray-800 rounded-xl overflow-hidden bg-gradient-to-br from-gray-900/80 to-gray-900/20 backdrop-blur-sm hover:bg-gray-800/30 transition-all mb-4 shadow-lg hover:shadow-[0_4px_20px_-4px_rgba(139,92,246,0.3)]"
                                >
                                    <AccordionTrigger className="py-5 px-6 hover:no-underline group">
                                        <div className="flex items-start w-full">
                                            <div className="flex-shrink-0 mr-4">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center text-blue-300 font-bold ring-1 ring-blue-500/30 ring-inset">
                                                    {String(index + 1).padStart(
                                                        2,
                                                        "0"
                                                    )}
                                                </div>
                                            </div>
                                            <div className="text-left flex-grow">
                                                <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r from-blue-400 to-purple-400 transition-all">
                                                    {faq.question}
                                                </h3>
                                                <div className="mt-1">
                                                    <span className="inline-block px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-blue-900/50 to-purple-900/50 text-blue-200 border border-blue-800/30">
                                                        {faq.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionTrigger>
                                    <AccordionContent className="px-6 pb-5 text-gray-300">
                                        <div className="relative pl-4">
                                            {/* Gradient border using pseudo-element */}
                                            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

                                            {/* Content with background gradient */}
                                            <div className="bg-gradient-to-r from-blue-900/10 via-transparent to-purple-900/10">
                                                <div className="prose prose-invert max-w-none">
                                                    {faq.answer}
                                                </div>
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </BlurFade>
            </div>
        </div>
    );
}
