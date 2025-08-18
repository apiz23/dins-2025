"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import uthm from "@/public/images/unis/uthm.png";
import Image from "next/image";
import mdec from "@/public/images/mdec-logo.png";
import Speakers from "./speaker";
import { BlurFade } from "../magicui/blur-fade";

const partners = [
    {
        name: "Faculty of Computer Science and Information Technology UTHM",
        logo: uthm,
    },
    {
        name: "Malaysia Digital Economy Corporation",
        logo: mdec,
    },
];

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
                        end: () => "+=" + container.scrollWidth,
                    },
                });
            });

            return () => ctx.revert();
        });
    }, []);

    return (
        <div className="horizontal-scroll-container flex h-screen w-[300vw] overflow-hidden">
            {/* Panel 1 - Why Participate */}
            <div className="panel w-screen min-h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-tr from-gray-800 via-black to-black px-4 sm:px-6 py-16 text-center">
                <div className="w-full max-w-6xl mx-auto">
                    {/* Centered Header */}
                    <div className="text-center mb-12 sm:mb-16">
                        <BlurFade delay={0.1} inView>
                            <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                                Why{" "}
                                <span className="text-emerald-400">
                                    Participate?
                                </span>
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                                Discover the amazing benefits of joining our
                                challenge
                            </p>
                        </BlurFade>
                    </div>

                    {/* Cards Grid */}
                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                            {[
                                {
                                    icon: "💸",
                                    title: "Exciting Prizes",
                                    desc: "Worth up to RM1,000 or more!",
                                    color: "text-yellow-400",
                                    bg: "bg-yellow-400/10",
                                },
                                {
                                    icon: "🎤",
                                    title: "Expert Sessions",
                                    desc: "Keynotes by industry leaders",
                                    color: "text-blue-400",
                                    bg: "bg-blue-400/10",
                                },
                                {
                                    icon: "🛠️",
                                    title: "Hands-on Workshops",
                                    desc: "Interactive learning experiences",
                                    color: "text-purple-400",
                                    bg: "bg-purple-400/10",
                                },
                                {
                                    icon: "🌍",
                                    title: "Real Impact",
                                    desc: "Build solutions for real problems",
                                    color: "text-green-400",
                                    bg: "bg-green-400/10",
                                },
                                {
                                    icon: "🧠",
                                    title: "Creativity Unleashed",
                                    desc: "Platform for your best ideas",
                                    color: "text-pink-400",
                                    bg: "bg-pink-400/10",
                                },
                                {
                                    icon: "🤝",
                                    title: "Networking",
                                    desc: "Connect with like-minded peers",
                                    color: "text-cyan-400",
                                    bg: "bg-cyan-400/10",
                                },
                            ].map((item, index) => (
                                <BlurFade
                                    key={index}
                                    delay={0.3 + index * 0.1}
                                    inView
                                >
                                    <motion.div
                                        whileHover={{ y: -8, scale: 1.03 }}
                                        className={`px-10 py-20 rounded-xl border border-gray-800 hover:border-emerald-400/50 transition-all flex flex-col ${item.bg}`}
                                    >
                                        <div
                                            className={`text-4xl mb-4 ${item.color}`}
                                        >
                                            {item.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-300">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                </BlurFade>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            {/* Panel 2 - Partner */}
            <div className="panel w-screen h-screen flex items-center justify-center bg-black relative overflow-hidden">
                {/* Background elements */}
                <div className="absolute inset-0">
                    <div className="absolute top-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl"></div>
                    <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl"></div>
                </div>

                <div className="max-w-6xl mx-auto relative z-10 px-8">
                    <div className="mb-20 text-center">
                        <BlurFade delay={0.1} inView>
                            <span className="text-blue-400 font-medium tracking-wider uppercase text-lg">
                                Strategic Partnerships
                            </span>
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                            <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-8">
                                Our{" "}
                                <span className="text-blue-400">Trusted</span>{" "}
                                Partners
                            </h2>
                        </BlurFade>
                        <BlurFade delay={0.3} inView>
                            <p className="text-gray-300 max-w-2xl mx-auto text-xl leading-relaxed">
                                Collaborating with industry leaders to drive
                                innovation forward.
                            </p>
                        </BlurFade>
                    </div>

                    {/* Partner Logos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
                        {partners.slice(0, 2).map((partner, index) => (
                            <BlurFade
                                key={index}
                                delay={0.4 + index * 0.2}
                                inView
                            >
                                <div className="flex flex-col items-center group">
                                    <div
                                        className="relative bg-gray-900 w-64 h-64 md:w-72 md:h-72 rounded-full flex items-center justify-center p-8 transition-all duration-500 ease-in-out 
                    group-hover:shadow-[0_0_30px_rgba(52,211,153,0.2)]
                    before:absolute before:inset-0 before:rounded-full before:p-[2px] before:bg-gradient-to-br before:from-transparent before:via-emerald-500/30 before:to-transparent"
                                    >
                                        <div className="absolute inset-[2px] bg-gradient-to-br from-gray-900 to-gray-950 rounded-full flex items-center justify-center p-4">
                                            <div className="w-full h-full flex items-center justify-center bg-white/5 rounded-full backdrop-blur-sm">
                                                <Image
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    width={280}
                                                    height={280}
                                                    className="object-contain rounded-full w-full h-full p-4 transition-transform duration-500 ease-in-out group-hover:scale-105 bg-white/80"
                                                    priority
                                                />
                                            </div>
                                        </div>

                                        <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[radial-gradient(circle_at_center,rgba(52,211,153,0.1)_0%,transparent_70%)]"></div>
                                    </div>

                                    <h3 className="mt-6 text-white font-medium text-center text-xl md:text-2xl transition-colors duration-300 group-hover:text-emerald-400 relative inline-block">
                                        {partner.name}
                                        <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-emerald-400 transition-all duration-300 group-hover:w-full"></span>
                                    </h3>
                                </div>
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </div>
            <div className="panel w-screen min-h-screen flex items-center justify-center  text-center bg-gradient-to-tl from-gray-900 to-black ">
                <Speakers />
            </div>
        </div>
    );
}

export function VerticalInfo() {
    return (
        <div className="w-full overflow-x-hidden">
            {/* Section 1: Benefits */}
            <section className="w-full py-16 px-4 bg-gradient-to-tr from-gray-800 via-black to-black">
                <div className="max-w-5xl mx-auto p-4">
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

            {/* Section 2: Partner */}
            <section className="w-full py-16 px-4  bg-gradient-to-br from-gray-800 via-black to-black">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 p-4">
                    <div className="text-center mb-20">
                        <span className="inline-block text-blue-400 font-medium mb-4 tracking-wider">
                            STRATEGIC PARTNERSHIPS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Valued
                            </span>{" "}
                            Collaborators
                        </h2>

                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We partner with industry leaders and academic
                                institutions to drive digital innovation and
                                create impactful solutions.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-5">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="mb-5 group relative overflow-hidden rounded-xl bg-gray-900 border border-gray-700 hover:border-blue-400/40 shadow-md transition-all duration-300"
                            >
                                {/* Logo container */}
                                <div className="relative h-44 w-full flex items-center justify-center p-5 bg-gray-800/50">
                                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        width={240}
                                        height={120}
                                        className="object-contain w-full h-full p-4 transition-transform duration-300 group-hover:scale-[1.03] bg-white/80"
                                        style={{
                                            maxWidth: "90%",
                                            maxHeight: "90%",
                                        }}
                                    />
                                </div>

                                {/* Text content */}
                                <div className="p-4 text-center">
                                    <h3 className="text-base font-medium text-gray-200 group-hover:text-blue-300 transition-colors duration-300">
                                        {partner.name}
                                    </h3>
                                </div>

                                {/* Subtle hover glow */}
                                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)]"></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <div className="panel w-screen min-h-screen flex items-center justify-center  text-center bg-gradient-to-tl from-gray-900 to-black ">
                <Speakers />
            </div>
        </div>
    );
}
