import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative h-screen w-full bg-gradient-to-bl from-black to-gray-800">
            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:max-w-6xl mx-auto w-full"
                >
                    <h1 className="text-5xl md:text-6xl lg:text-[90px] font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                        <motion.span
                            className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.8 }}
                        >
                            DIGITAL INNOVATHON
                        </motion.span>
                        <motion.span
                            className="block text-white mt-2 sm:mt-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.8 }}
                        >
                            SYMPOSIUM 2025
                        </motion.span>
                    </h1>

                    {/* Subheading */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto mt-3 sm:mt-6 leading-relaxed px-2"
                    >
                        Where{" "}
                        <span className="font-semibold text-blue-300">
                            Innovation
                        </span>{" "}
                        Meets{" "}
                        <span className="font-semibold text-emerald-300">
                            Digital Transformation
                        </span>
                    </motion.p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-12 w-full max-w-xs sm:max-w-md mx-auto"
                >
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScTZ-hp-i0fr51nNivRIInBJSYiiU4VIakaiFxULgAOoLECtw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            {" "}
                            Register Now
                            <span className="ml-1">→</span>
                        </motion.button>
                    </Link>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-5 py-2.5 sm:px-8 sm:py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
                    >
                        Learn More
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-white w-full max-w-xs sm:max-w-2xl mx-auto px-4"
                >
                    {[
                        { number: "24-26", label: "October 2025" },
                        { number: "100+", label: "Innovators" },
                        { number: "30+", label: "Speakers" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center p-3 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                {item.number}
                            </div>
                            <div className="text-xs sm:text-sm md:text-base text-gray-300">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                    className="absolute bottom-2 sm:bottom-10 left-1/2 transform -translate-x-1/2"
                >
                    <motion.div
                        animate={{
                            y: [0, 10, 0],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                        className="flex flex-col items-center"
                    >
                        <span className="text-xs sm:text-sm text-white/80 mb-1 tracking-wider">
                            EXPLORE MORE
                        </span>
                        <ChevronDown className="text-white" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
