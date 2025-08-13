import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

export default function Hero() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const endDate = new Date("September 30, 2025 23:59:59").getTime();
            const now = new Date().getTime();
            const difference = endDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    ),
                    minutes: Math.floor(
                        (difference % (1000 * 60 * 60)) / (1000 * 60)
                    ),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            className="relative h-screen w-full bg-gradient-to-t from-black via-black to-gray-900"
            id="hero"
        >
            {/* Background Blobs */}
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
            </div>

            <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 pt-24 sm:pt-0">
                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-center mb-6 sm:mb-8 pt-32"
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                    >
                        <AnimatedGradientText
                            speed={1.2}
                            colorFrom="#3b82f6"
                            colorTo="#10b981"
                            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 leading-tight"
                        >
                            DIGITAL INNOVATHON
                        </AnimatedGradientText>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6"
                    >
                        SYMPOSIUM 2025
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-base sm:text-lg text-gray-300 max-w-lg sm:max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed px-2"
                    >
                        Where{" "}
                        <span className="font-semibold text-blue-300">
                            innovation
                        </span>{" "}
                        meets{" "}
                        <span className="font-semibold text-emerald-300">
                            digital transformation
                        </span>{" "}
                        in a{" "}
                        <span className="font-semibold text-purple-300">
                            3-day immersive experience
                        </span>
                    </motion.p>
                </motion.div>

                {/* Buttons */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-10 sm:mb-12 w-full max-w-xs sm:max-w-none justify-center"
                >
                    <Link
                        href="https://docs.google.com/forms/d/e/1FAIpQLScTZ-hp-i0fr51nNivRIInBJSYiiU4VIakaiFxULgAOoLECtw/viewform"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative px-6 py-3 sm:px-10 sm:py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-base w-full sm:w-auto text-center"
                    >
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Register Now →
                        </motion.span>
                    </Link>

                    <Link
                        href="#about"
                        className="relative px-6 py-3 sm:px-10 sm:py-4 bg-transparent border-2 border-white/20 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/40 transition-all duration-300 text-base w-full sm:w-auto text-center"
                    >
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Learn More ↓
                        </motion.span>
                    </Link>
                </motion.div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 w-full max-w-sm sm:max-w-2xl mb-10 sm:mb-12"
                >
                    {[
                        { number: "24-26", label: "October 2025" },
                        { number: "100+", label: "Innovators" },
                        { number: "30+", label: "Speakers" },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -3 }}
                            className="p-4 sm:p-5 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all"
                        >
                            <div className="text-xl sm:text-3xl font-bold mb-1 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                {item.number}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-300">
                                {item.label}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Countdown */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="mb-12 sm:mb-16"
                >
                    <h3 className="text-sm sm:text-lg text-gray-300/80 mb-4 sm:mb-6 tracking-wider">
                        COUNTDOWN TO EVENT
                    </h3>
                    <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                        {Object.entries(timeLeft).map(([unit, value]) => (
                            <div
                                key={unit}
                                className="flex flex-col items-center p-3 w-16 sm:w-20 bg-white/5 backdrop-blur-md rounded-lg border border-white/10 hover:border-white/30 transition-colors"
                            >
                                <motion.span
                                    key={value}
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent"
                                >
                                    {value.toString().padStart(2, "0")}
                                </motion.span>
                                <span className="text-[10px] sm:text-xs text-gray-300/80 uppercase tracking-wider mt-1">
                                    {unit}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
