"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LineShadowText } from "@/components/magicui/line-shadow-text";
import Footer from "@/components/footer";

export default function Home() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray<HTMLElement>(".panel");
        const container = document.querySelector(".container");

        if (!container || sections.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () =>
                        "+=" + (container.scrollWidth - window.innerWidth),
                    markers: false,
                },
            });
        });
        return () => ctx.revert();
    }, []);
    return (
        <>
            <section className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-black to-gray-800">
                <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-24">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-6xl mx-auto"
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-6 leading-tight tracking-tight">
                            <motion.span
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.8 }}
                            >
                                DIGITAL INNOVATHON
                            </motion.span>
                            <motion.span
                                className="block text-white mt-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.8 }}
                            >
                                SYMPOSIUM{" "}
                                <LineShadowText
                                    className="italic"
                                    shadowColor={"white"}
                                >
                                    2025
                                </LineShadowText>
                            </motion.span>
                        </h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            className="text-lg sm:text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mt-8 leading-relaxed"
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

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 mt-14"
                    >
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-semibold rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300"
                        >
                            Register Now
                            <span className="ml-2">→</span>
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-3.5 bg-transparent border-2 border-white/30 text-white font-semibold rounded-full hover:bg-white/5 hover:border-white/50 transition-all duration-300"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-white max-w-2xl mx-auto"
                    >
                        {[
                            { number: "24-26", label: "October 2025" },
                            { number: "100+", label: "Innovators" },
                            { number: "30+", label: "Speakers" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-white/20 transition-all"
                            >
                                <div className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                    {item.number}
                                </div>
                                <div className="text-lg text-gray-300">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8 }}
                        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
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
                            <span className="text-lg text-white/80 mb-2 tracking-wider">
                                EXPLORE MORE
                            </span>
                            <svg
                                className="w-6 h-6 text-white/80"
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
            {/* Horizontal Scroll Section */}
            <div className="container flex h-screen w-[400vw]">
                {/* Panel 1 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        Innovation Hub
                    </h2>
                </div>

                {/* Panel 2 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        Digital Transformation
                    </h2>
                </div>

                {/* Panel 3 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        100+ Innovators
                    </h2>
                </div>

                {/* Panel 4 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-pink-900 to-pink-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        30+ Global Speakers
                    </h2>
                </div>
            </div>

            {/* Outro Section */}
            <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-black to-gray-800 px-4">
                <div className="p-12 rounded-3xl shadow-xl max-w-2xl text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Thank you for joining DINS 2025 🚀
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-300 mb-8">
                        Let’s innovate the future together
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}
