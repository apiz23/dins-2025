import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

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
                    <h1 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
                        <motion.span
                            className="block"
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.1,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                        >
                            <AnimatedGradientText
                                speed={1.2}
                                colorFrom="#3b82f6"
                                colorTo="#10b981"
                                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                            >
                                DIGITAL INNOVATHON
                            </AnimatedGradientText>
                        </motion.span>
                        <motion.span
                            className="block mt-2 sm:mt-4 bg-gradient-to-r from-white to-gray-200 text-transparent bg-clip-text"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                delay: 0.3,
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
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
                        <span className="font-semibold text-blue-300 bg-white/5 px-1.5 py-0.5 rounded-md">
                            Innovation
                        </span>{" "}
                        meets{" "}
                        <span className="font-semibold text-emerald-300 bg-white/5 px-1.5 py-0.5 rounded-md">
                            Digital Transformation
                        </span>{" "}
                        in a{" "}
                        <span className="font-semibold text-purple-300 bg-white/5 px-1.5 py-0.5 rounded-md">
                            3-day immersive experience
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
                        className="relative overflow-hidden group px-5 py-2.5 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-10 flex items-center justify-center"
                        >
                            Register Now
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                →
                            </span>
                        </motion.div>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
                    <Link
                        href="#about"
                        className="relative overflow-hidden group px-5 py-2.5 sm:px-8 sm:py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
                    >
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="relative z-10 flex items-center justify-center"
                        >
                            Learn More
                            <span className="ml-2 transition-transform group-hover:translate-x-1">
                                ↓
                            </span>
                        </motion.div>
                        <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </Link>
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
                            className="flex flex-col items-center p-3 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all hover:shadow-lg hover:shadow-blue-500/10 relative overflow-hidden group"
                        >
                            {/* Animated highlight on hover */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

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
                        className="flex flex-col items-center group cursor-pointer"
                    >
                        <span className="text-xs sm:text-sm text-white/80 mb-1 tracking-wider transition-colors group-hover:text-white">
                            EXPLORE MORE
                        </span>
                        <ChevronDown className="text-white/80 group-hover:text-white transition-colors" />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
