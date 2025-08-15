import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle, Mail, MessageSquare } from "lucide-react";

export default function FAQS() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is the eligibility criteria for participation?",
            answer: "The challenge is open to all university students with a valid student ID. Both undergraduate and postgraduate students can participate.",
            category: "General",
        },
        {
            question: "Can I participate as an individual or do I need a team?",
            answer: "You need to form a team of 2-5 members. Cross-university teams are allowed and encouraged!",
            category: "Team Formation",
        },
        {
            question: "What are the key dates I should remember?",
            answer: "Registration opens on January 15th and closes on February 20th. The hackathon will run from March 5th-7th with winners announced on March 10th.",
            category: "Event Details",
        },
        {
            question: "What resources will be provided during the event?",
            answer: "We'll provide mentorship sessions, technical workshops, cloud credits, API access, and design resources to all participants.",
            category: "Resources",
        },
        {
            question: "How will projects be judged?",
            answer: "Projects will be evaluated on innovation (30%), technical complexity (25%), design (20%), and real-world impact (25%).",
            category: "Judging",
        },
        {
            question: "What prizes can winners expect?",
            answer: "The winning team receives $10,000, runner-up gets $5,000, and we have special category prizes for best design, technical implementation, and social impact.",
            category: "Prizes",
        },
    ];

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="min-h-fit bg-black py-10 px-4 sm:px-6 lg:px-8 hidden" id="faqs">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center px-4 py-2 bg-blue-100 rounded-full mb-4">
                        <HelpCircle className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="text-blue-600 font-medium text-sm">
                            FAQS
                        </span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-200 mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our innovation
                        challenge
                    </p>
                </motion.div>

                <div className="space-y-6">
                    {/* FAQ Items */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.05 }}
                                className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                >
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {faq.question}
                                    </h3>
                                    <ChevronDown
                                        className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                            activeIndex === index
                                                ? "transform rotate-180"
                                                : ""
                                        }`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{
                                                height: "auto",
                                                opacity: 1,
                                            }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-6 pb-6 pt-0 text-gray-600">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
