import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-bl from-black to-gray-800">
            <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="md:max-w-6xl mx-auto w-full"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight tracking-tight">
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
                        className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto mt-4 sm:mt-8 leading-relaxed px-2"
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
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-8 sm:mt-14 w-full max-w-xs sm:max-w-md mx-auto"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-sm sm:text-base"
                    >
                        Register Now
                        <span className="ml-2">→</span>
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2.5 sm:px-8 sm:py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/50 transition-all duration-300 text-sm sm:text-base"
                    >
                        Learn More
                    </motion.button>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="mt-12 sm:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 text-white w-full max-w-xs sm:max-w-2xl mx-auto px-4"
                >
                    {[
                        { number: "24-26", label: "October 2025" },
                        { number: "100+", label: "Innovators" },
                        { number: "30+", label: "Speakers" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="flex flex-col items-center p-4 sm:p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                {item.number}
                            </div>
                            <div className="text-sm sm:text-base md:text-lg text-gray-300">
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
                    className="absolute bottom-6 sm:bottom-12 left-1/2 transform -translate-x-1/2"
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
                        <span className="text-sm sm:text-lg text-white/80 mb-1 sm:mb-2 tracking-wider">
                            EXPLORE MORE
                        </span>
                        <svg
                            className="w-5 h-5 sm:w-6 sm:h-6 text-white/80"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                            />
                        </svg>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
