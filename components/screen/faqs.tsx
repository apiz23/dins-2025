"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { HelpCircle, Mail, MessageSquare } from "lucide-react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

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

    // ✅ Extract categories (unique list)
    const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

    const filteredFAQs = activeCategory
        ? faqs.filter((faq) => faq.category === activeCategory)
        : faqs;

    return (
        <div
            className="relative flex flex-col justify-center items-center min-h-screen bg-black px-6 overflow-hidden pt-44"
            id="faqs"
        >
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 right-3/4 w-28 h-28 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-500"></div>
            </div>
            <div className="max-w-3xl mx-auto relative">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                            Find answers to common questions about our
                            innovation challenge{" "}
                        </p>
                    </div>
                </motion.div>

                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                    <button
                        onClick={() => setActiveCategory(null)}
                        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                            !activeCategory
                                ? "bg-blue-600 text-white"
                                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                        }`}
                    >
                        All
                    </button>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                                activeCategory === category
                                    ? "bg-blue-600 text-white"
                                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Accordion FAQs */}
                <Accordion type="single" collapsible className="space-y-2">
                    {filteredFAQs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            value={`item-${index}`}
                            className="border-b border-gray-700"
                        >
                            <AccordionTrigger className="py-4 hover:no-underline group">
                                <div className="flex items-start">
                                    <span className="text-lg font-medium text-gray-400 mt-0.5 mr-3">
                                        0{index + 1}
                                    </span>
                                    <div>
                                        <h3 className="text-left text-lg font-medium text-white group-hover:text-blue-400 transition-colors">
                                            {faq.question}
                                        </h3>
                                        <span className="text-md text-gray-400 mt-1 block">
                                            {faq.category}
                                        </span>
                                    </div>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="pb-4 text-gray-300 pl-9">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
