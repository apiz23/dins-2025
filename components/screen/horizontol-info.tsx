"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import uthm from "@/public/images/unis/uthm.png";
import Image from "next/image";
import mdec from "@/public/images/mdec_logo.png";
import dscUtem from "@/public/images/dsc-utem2.png";
import csUsm from "@/public/images/cs-usm.png";
import zeroday from "@/public/images/0day.png";
import runcloud from "@/public/images/runcloud.svg";
import Speakers from "./speaker";
import { BlurFade } from "../magicui/blur-fade";
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "../magicui/scroll-based-velocity";

const co_organizer = [
    {
        name: "Faculty of Computer Science and Information Technology UTHM",
        logo: uthm,
    },
    {
        name: "Malaysia Digital Economy Corporation",
        logo: mdec,
    },
];

const partners = [
    {
        name: "Developer Student Club UTEM",
        logo: dscUtem,
    },
    {
        name: "Computer Science Society USM",
        logo: csUsm,
    },
    {
        name: "Zer0Day Technology",
        logo: zeroday,
    },
    {
        name: "RunCloud",
        logo: runcloud,
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
        <div className="horizontal-scroll-container flex h-screen w-[400vw] overflow-hidden">
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
            {/* Panel 2 - Co-organizer */}
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
                                Co-Organizers
                            </span>
                        </BlurFade>
                        <BlurFade delay={0.2} inView>
                            <h2 className="text-5xl md:text-6xl font-bold text-white mt-6 mb-8">
                                Our{" "}
                                <span className="text-blue-400">Trusted</span>{" "}
                                Co-Organizers
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
                        {co_organizer.slice(0, 2).map((partner, index) => (
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

            <section className="panel w-screen min-h-screen flex items-center justify-center py-16 bg-black relative overflow-hidden">
                {/* Enhanced decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-28 right-24 w-52 h-52 bg-blue-600 rounded-full blur-[120px] opacity-25"></div>
                    <div className="absolute bottom-16 left-20 w-72 h-72 bg-purple-600 rounded-full blur-[120px] opacity-25"></div>
                    <div className="absolute top-1/2 left-2/5 w-40 h-40 bg-cyan-500 rounded-full blur-[100px] opacity-20"></div>
                    <div className="absolute top-3/4 right-1/4 w-32 h-32 bg-indigo-500 rounded-full blur-[90px] opacity-15"></div>
                </div>

                {/* Subtle grid overlay for depth */}
                <div className="absolute inset-0 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMEg2MFY2MEgwWiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMjIyIiBzdHJva2Utd2lkdGg9IjAuNSIvPjwvc3ZnPg==')] opacity-10"></div>

                <div className="max-w-6xl mx-auto relative z-10 px-8">
                    <div className="text-center mb-20">
                        <motion.span
                            className="inline-block text-blue-400 font-medium mb-6 tracking-widest text-sm uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                        >
                            STRATEGIC ALLIANCES
                        </motion.span>
                        <motion.h2
                            className="text-5xl font-bold text-white mb-8 tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Our Premier{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Technology
                            </span>{" "}
                            Partners
                        </motion.h2>
                        <motion.div
                            className="max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                We are proud to collaborate with diverse
                                organizations, institutions, and communities
                                that support our mission and help us create a
                                greater impact.
                            </p>
                        </motion.div>
                    </div>

                    {/* Enhanced Scroll Velocity Section with Cards */}
                    <div className="relative">
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

                        <h3 className="text-xl font-semibold text-gray-300 mb-10 text-center tracking-wide flex items-center justify-center before:content-[''] before:flex-1 before:h-px before:bg-gradient-to-r before:from-transparent before:via-gray-700 before:to-transparent after:content-[''] after:flex-1 after:h-px after:bg-gradient-to-l after:from-transparent after:via-gray-700 after:to-transparent">
                            <span className="mx-6">
                                TRUSTED BY INDUSTRY LEADERS
                            </span>
                        </h3>

                        <ScrollVelocityContainer className="overflow-hidden py-6">
                            <ScrollVelocityRow baseVelocity={8} direction={1}>
                                <div className="flex items-center gap-4 px-2">
                                    {partners.map((partner, index) => (
                                        <motion.div
                                            key={index}
                                            className="px-8 py-6 bg-gradient-to-b from-gray-900/70 to-black/70 rounded-2xl border border-gray-800/80 flex flex-col items-center justify-center shadow-lg backdrop-blur-sm min-w-[280px]"
                                        >
                                            {/* Logo Container */}
                                            <div className="h-full w-full flex items-center justify-center mb-5 p-6 bg-gradient-to-br from-gray-200 to-gray-800 rounded-xl">
                                                <div className="relative h-36 w-56">
                                                    <Image
                                                        src={partner.logo}
                                                        alt={partner.name}
                                                        fill
                                                        className="object-contain" // Prevent cropping
                                                    />
                                                </div>
                                            </div>
                                            {/* Partner Info */}
                                            <div className="text-center">
                                                <h4 className="text-lg font-semibold text-white mb-1">
                                                    {partner.name}
                                                </h4>

                                                <div className="flex justify-center mt-3">
                                                    <span className="inline-block h-1 w-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
                                                </div>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </ScrollVelocityRow>
                        </ScrollVelocityContainer>
                    </div>
                </div>
            </section>
            <div className="panel w-screen min-h-screen flex items-center justify-center text-center bg-gradient-to-tl from-gray-900 to-black ">
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

            {/* Section 2: Co-organizer */}
            <section className="w-full py-16 px-4 bg-gradient-to-br from-gray-800 via-black to-black relative overflow-hidden">
                {/* Decorative elements - simplified */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-10"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full blur-[100px] opacity-10"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 px-4">
                    <div className="text-center mb-16">
                        <span className="inline-block text-blue-400 font-medium mb-4 tracking-widest text-sm uppercase">
                            CO-ORGANIZERS
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                            Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Valued
                            </span>{" "}
                            Co-Organizers
                        </h2>
                        <div className="max-w-2xl mx-auto">
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We collaborate with esteemed organizations and
                                institutions to co-host impactful programs and
                                foster meaningful innovation together.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        {co_organizer.map((partner, index) => (
                            <div key={index}>
                                <div className="relative h-fit w-full flex items-center justify-center p-6 rounded-2xl border bg-white">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={500}
                                            height={500}
                                            className={`object-contain w-auto h-auto max-w-full`}
                                        />
                                    </div>
                                </div>

                                {/* Text content */}
                                <div className="p-4 text-center">
                                    <h3 className="text-sm font-medium text-gray-200 group-hover:text-blue-300 transition-colors duration-300">
                                        {partner.name}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="w-full py-20 px-4 bg-black relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-20 right-10 w-40 h-40 bg-blue-500 rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>
                    <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-500 rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-400 rounded-full blur-[80px] opacity-15"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 px-4">
                    <div className="text-center mb-16">
                        <motion.span
                            className="inline-block text-blue-400 font-medium mb-4 tracking-widest text-sm uppercase"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true }}
                        >
                            PARTNERSHIPS
                        </motion.span>
                        <motion.h2
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Our{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                                Strategic
                            </span>{" "}
                            Partners
                        </motion.h2>
                        <motion.div
                            className="max-w-2xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-gray-300 text-lg leading-relaxed">
                                We are proud to collaborate with diverse
                                organizations, institutions, and communities
                                that support our mission and help us create a
                                greater impact.
                            </p>
                        </motion.div>
                    </div>

                    <div>
                        <h3 className="text-xl font-semibold text-gray-200 mb-6 text-center">
                            Technology Partners
                        </h3>
                        <ScrollVelocityContainer className="overflow-hidden">
                            <ScrollVelocityRow baseVelocity={4} direction={1}>
                                <div className="flex items-center gap-4 px-2">
                                    {partners.map((partner, index) => (
                                        <motion.div
                                            key={index}
                                            className="px-6 py-4 bg-gradient-to-br from-gray-200 to-gray-600 rounded-xl border border-white/10 flex items-center justify-center"
                                        >
                                            <div className="h-32 w-48 relative">
                                                <Image
                                                    src={partner.logo}
                                                    alt={partner.name}
                                                    fill
                                                    className="object-contain"
                                                />
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </ScrollVelocityRow>
                        </ScrollVelocityContainer>
                    </div>
                </div>
            </section>

            <div className="panel w-screen min-h-screen flex items-center justify-center  text-center bg-gradient-to-tl from-gray-900 to-black ">
                <Speakers />
            </div>
        </div>
    );
}
