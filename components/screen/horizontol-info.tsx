"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export function HorizontolInfo() {
    useEffect(() => {
        if (typeof window === "undefined") return;

        gsap.registerPlugin(ScrollTrigger);

        requestAnimationFrame(() => {
            const sections = gsap.utils.toArray<HTMLElement>(".panel");
            const container = document.querySelector(
                ".horizontal-scroll-container"
            );

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
                        end: () => "+=" + container.scrollWidth,
                    },
                });
            });

            return () => ctx.revert();
        });
    }, []);

    return (
        <div className="horizontal-scroll-container flex h-screen w-[300vw] overflow-hidden">
            {/* Panel 1 */}
            <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-black px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Participation{" "}
                        <span className="text-blue-400">Details</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-semibold text-blue-400 mb-3">
                                Team Formation
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">
                                        ✓
                                    </span>
                                    <span>Open to all university students</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">
                                        ✓
                                    </span>
                                    <span>Teams of 2-5 members</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">
                                        ✓
                                    </span>
                                    <span>Single registration per team</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
                            <h3 className="text-xl font-semibold text-purple-400 mb-3">
                                Event Structure
                            </h3>
                            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">
                                        ✓
                                    </span>
                                    <span>48-hour innovation sprint</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">
                                        ✓
                                    </span>
                                    <span>Mentorship sessions</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-emerald-400 mt-1">
                                        ✓
                                    </span>
                                    <span>Final pitch showcase</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Panel 2 - Benefits */}
            <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-black px-4 sm:px-6 py-10 text-center overflow-hidden">
                <div className="relative z-10 w-full max-w-6xl mx-auto overflow-y-auto">
                    <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                        Why{" "}
                        <span className="text-emerald-400">Participate?</span>{" "}
                        💡
                    </h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 px-2">
                        {[
                            {
                                icon: "💸",
                                title: "Exciting Prizes",
                                desc: "Worth up to RM1,000 or more!",
                                color: "text-yellow-400",
                            },
                            {
                                icon: "🎤",
                                title: "Expert Sessions",
                                desc: "Keynotes by industry leaders",
                                color: "text-blue-400",
                            },
                            {
                                icon: "🛠️",
                                title: "Hands-on Workshops",
                                desc: "Interactive learning experiences",
                                color: "text-purple-400",
                            },
                            {
                                icon: "🌍",
                                title: "Real Impact",
                                desc: "Build solutions for real problems",
                                color: "text-green-400",
                            },
                            {
                                icon: "🧠",
                                title: "Creativity Unleashed",
                                desc: "Platform for your best ideas",
                                color: "text-pink-400",
                            },
                            {
                                icon: "🤝",
                                title: "Networking",
                                desc: "Connect with like-minded peers",
                                color: "text-cyan-400",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ y: -4 }}
                                className="bg-gray-900/80 p-4 rounded-lg border border-gray-700 hover:border-emerald-400 transition-all text-left"
                            >
                                <span
                                    className={`text-xl sm:text-2xl ${item.color}`}
                                >
                                    {item.icon}
                                </span>
                                <h3 className="text-sm font-semibold text-white mt-1">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-xs mt-1">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Panel 3 - Commitment */}
            <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-tl from-gray-900 to-black px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                        Our <span className="text-blue-400">Commitment</span>
                    </h2>

                    <div className="space-y-6">
                        {[
                            {
                                title: "Inclusive Environment",
                                desc: "We welcome participants from all backgrounds and skill levels",
                                icon: "🌍",
                            },
                            {
                                title: "Fair Judging",
                                desc: "Transparent evaluation criteria and experienced judges",
                                icon: "⚖️",
                            },
                            {
                                title: "Quality Content",
                                desc: "Curated workshops and mentorship sessions",
                                icon: "✨",
                            },
                            {
                                title: "Safe Space",
                                desc: "Zero tolerance for harassment or discrimination",
                                icon: "🛡️",
                            },
                        ].map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <div className="bg-blue-500/20 p-3 rounded-lg text-blue-400 text-xl">
                                    {item.icon}
                                </div>
                                <div className="text-left">
                                    <h3 className="text-lg font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export function VerticalInfo() {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Section 1: Participation Details */}
            <section className="w-full py-16 px-4 bg-gradient-to-br from-gray-800 to-black">
                <div className="max-w-4xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8 text-center"
                    >
                        Participation{" "}
                        <span className="text-blue-400">Details</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/70 p-5 rounded-lg border border-gray-700 hover:border-blue-400 transition-all"
                        >
                            <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                                Team Formation
                            </h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                {[
                                    "Open to all university students",
                                    "Teams of 2-5 members",
                                    "Single registration per team",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-emerald-400 mt-0.5">
                                            •
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/70 p-5 rounded-lg border border-gray-700 hover:border-purple-400 transition-all"
                        >
                            <h3 className="text-lg font-semibold text-purple-400 mb-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                Event Structure
                            </h3>
                            <ul className="space-y-2 text-gray-300 text-sm">
                                {[
                                    "48-hour innovation sprint",
                                    "Mentorship sessions",
                                    "Final pitch showcase",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-2"
                                    >
                                        <span className="text-emerald-400 mt-0.5">
                                            •
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 2: Benefits */}
            <section className="w-full py-16 px-4 bg-black">
                <div className="max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8 text-center"
                    >
                        Why{" "}
                        <span className="text-emerald-400">Participate?</span>
                    </motion.h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                        {[
                            {
                                icon: "💸",
                                title: "Exciting Prizes",
                                desc: "Worth up to RM1,000 or more!",
                                color: "bg-yellow-400/10 border-yellow-400/30 hover:border-yellow-400",
                            },
                            {
                                icon: "🎤",
                                title: "Expert Sessions",
                                desc: "Keynotes by industry leaders",
                                color: "bg-blue-400/10 border-blue-400/30 hover:border-blue-400",
                            },
                            {
                                icon: "🛠️",
                                title: "Hands-on Workshops",
                                desc: "Interactive learning experiences",
                                color: "bg-purple-400/10 border-purple-400/30 hover:border-purple-400",
                            },
                            {
                                icon: "🌍",
                                title: "Real Impact",
                                desc: "Build solutions for real problems",
                                color: "bg-green-400/10 border-green-400/30 hover:border-green-400",
                            },
                            {
                                icon: "🧠",
                                title: "Creativity Unleashed",
                                desc: "Platform for your best ideas",
                                color: "bg-pink-400/10 border-pink-400/30 hover:border-pink-400",
                            },
                            {
                                icon: "🤝",
                                title: "Networking",
                                desc: "Connect with like-minded peers",
                                color: "bg-cyan-400/10 border-cyan-400/30 hover:border-cyan-400",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ y: -3 }}
                                transition={{
                                    duration: 0.3,
                                    delay: index * 0.05,
                                }}
                                viewport={{ once: true }}
                                className={`p-4 rounded-lg border ${item.color} transition-all`}
                            >
                                <div className="flex items-start gap-3">
                                    <span className="text-2xl">
                                        {item.icon}
                                    </span>
                                    <div>
                                        <h3 className="text-base font-semibold text-white">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs mt-1">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section 3: Commitment */}
            <section className="w-full py-16 px-4 bg-gradient-to-tl from-gray-900 to-black">
                <div className="max-w-3xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-3xl font-bold text-white mb-8 text-center"
                    >
                        Our <span className="text-blue-400">Commitment</span>
                    </motion.h2>

                    <div className="space-y-4">
                        {[
                            {
                                title: "Inclusive Environment",
                                desc: "We welcome participants from all backgrounds and skill levels",
                                icon: "🌍",
                                color: "text-blue-400",
                            },
                            {
                                title: "Fair Judging",
                                desc: "Transparent evaluation criteria and experienced judges",
                                icon: "⚖️",
                                color: "text-emerald-400",
                            },
                            {
                                title: "Quality Content",
                                desc: "Curated workshops and mentorship sessions",
                                icon: "✨",
                                color: "text-purple-400",
                            },
                            {
                                title: "Safe Space",
                                desc: "Zero tolerance for harassment or discrimination",
                                icon: "🛡️",
                                color: "text-amber-400",
                            },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{
                                    opacity: 0,
                                    x: index % 2 === 0 ? -20 : 20,
                                }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="flex gap-3 items-start p-4 rounded-lg bg-gray-800/30 hover:bg-gray-800/50 transition-all"
                            >
                                <div className={`text-xl ${item.color}`}>
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-base font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 text-xs">
                                        {item.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
