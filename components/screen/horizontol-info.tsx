"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion, useAnimation } from "framer-motion";
import utm from "@/public/images/unis/utm.png";
import uitm from "@/public/images/unis/uitm.png";
import usm from "@/public/images/unis/usm.png";
import um from "@/public/images/unis/um.png";
import ukm from "@/public/images/unis/ukm.png";
import utem from "@/public/images/unis/utem.png";
import uthm from "@/public/images/unis/uthm.png";
import ump from "@/public/images/unis/ump.png";
import Image, { StaticImageData } from "next/image";
import { Marquee } from "../magicui/marquee";
import { ArrowRight, Calendar, CheckCircle, Users } from "lucide-react";
import mdec from "@/public/images/mdec-logo.png";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

const universities = [
    { name: "UTHM", img: uthm },
    { name: "UTM", img: utm },
    { name: "USM", img: usm },
    { name: "UM", img: um },
    { name: "UKM", img: ukm },
    { name: "UTEM", img: utem },
    { name: "UITM", img: uitm },
    { name: "UMP", img: ump },
];

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

type Props = {
    name: string;
    img: string | StaticImageData;
};

const UniLogoCard = ({ name, img }: Props) => {
    return (
        <div className="hover:shadow-lg hover:shadow-blue-500/20 transition-all bg-white p-4 rounded-md shadow-md md:w-full min-w-[150px] h-40 flex flex-col items-center justify-center">
            <Image
                src={img}
                alt={name}
                width={1080}
                height={1920}
                className="w-[24vw] md:w-44 h-auto object-contain drop-shadow-md"
            />
        </div>
    );
};

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
                        //snap: 1 / (sections.length - 1),
                        end: () => "+=" + container.scrollWidth,
                    },
                });
            });

            return () => ctx.revert();
        });
    }, []);

    return (
        <div className="horizontal-scroll-container flex h-screen w-[300vw] overflow-hidden ">
            {/* Panel 1 - Benefits */}

            <div className="panel w-screen min-h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-tr from-gray-800 via-black to-black px-4 sm:px-6 py-16 text-center">
                <div className="w-full max-w-6xl mx-auto">
                    {/* Centered Header */}
                    <motion.div
                        className="text-center mb-12 sm:mb-16"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Why{" "}
                            <span className="text-emerald-400">
                                Participate?
                            </span>
                        </h2>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                            Discover the amazing benefits of joining our
                            challenge
                        </p>
                    </motion.div>

                    {/* Centered Cards Grid */}
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
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                    }}
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
                                    <p className="text-gray-300">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Panel 2*/}
            <div className="panel w-screen min-h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-6 py-16 text-center bg-black">
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

                    {/* Large Background Blobs */}
                    <div className="absolute top-1/5 left-70 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/6 right-72 translate-y-1/2 translate-x-1/2 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-800"></div>
                </div>
                <div className="max-w-7xl mx-auto w-full">
                    {/* Centered Header Section */}
                    <motion.div
                        className="text-center mt-20 mb-5"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-block text-blue-400 font-medium mb-3 tracking-wider">
                            JOIN THE CHALLENGE
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                            Participation{" "}
                            <span className="text-blue-400">Details</span>
                        </h2>
                        <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                            Everything you need to know about joining our
                            innovation challenge
                        </p>
                    </motion.div>

                    {/* Two Column Content Below Title */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left Column - Team Formation */}
                        <motion.div
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.6 }}
                        >
                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="w-16 h-16 rounded-xl bg-blue-500/10 flex items-center justify-center mb-4">
                                    <Users className="w-7 h-7 text-blue-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Team Formation
                                </h3>
                                <div className="w-16 h-1 bg-blue-400 rounded-full"></div>
                            </div>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-4">
                                    <span className="text-blue-400 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </span>
                                    <span>
                                        Open to all university students
                                        nationwide with valid student ID
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-blue-400 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </span>
                                    <span>
                                        Teams of 2-5 members (cross-university
                                        teams allowed)
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-blue-400 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </span>
                                    <span>
                                        Single registration per team with all
                                        member details
                                    </span>
                                </li>
                            </ul>
                        </motion.div>

                        {/* Right Column - Event Structure */}
                        <motion.div
                            className="bg-gray-800 p-8 rounded-xl border border-gray-700"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            <div className="flex flex-col items-center text-center mb-6">
                                <div className="w-16 h-16 rounded-xl bg-purple-500/10 flex items-center justify-center mb-4">
                                    <Calendar className="w-7 h-7 text-purple-400" />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">
                                    Event Structure
                                </h3>
                                <div className="w-16 h-1 bg-purple-400 rounded-full"></div>
                            </div>
                            <ul className="space-y-4 text-gray-300">
                                <li className="flex items-start gap-4">
                                    <span className="text-purple-400 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </span>
                                    <span>
                                        Intensive 48-hour innovation sprint with
                                        milestones
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-purple-400 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </span>
                                    <span>
                                        Daily expert mentorship sessions and
                                        workshops
                                    </span>
                                </li>
                                <li className="flex items-start gap-4">
                                    <span className="text-purple-400 mt-1 flex-shrink-0">
                                        <CheckCircle className="w-5 h-5" />
                                    </span>
                                    <span>
                                        Final pitch showcase with $10,000+ in
                                        prizes
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>

                    {/* Universities Section Below */}
                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <div className="text-center mb-10">
                            <h3 className="text-2xl font-bold text-white mb-3">
                                Participating Universities
                            </h3>
                            <p className="text-gray-400 max-w-2xl mx-auto">
                                Open to students from every university in
                                Malaysia — your campus could be next to shine!
                            </p>
                        </div>

                        <motion.div
                            initial={{ x: "-10%" }}
                            animate={{ x: 0 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="relative overflow-hidden"
                        >
                            <Marquee className="w-full" pauseOnHover={true}>
                                <div className="flex items-center py-2">
                                    {universities.map((uni, index) => (
                                        <motion.div
                                            key={index}
                                            className="px-5"
                                            whileHover={{ scale: 1.08 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <UniLogoCard
                                                name={uni.name}
                                                img={uni.img}
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </Marquee>
                        </motion.div>
                    </motion.div>
                </div>
            </div>

            {/* Panel 3 - Commitment */}
            <div className="panel w-screen h-screen flex-shrink-0 flex items-center justify-center bg-gradient-to-tl from-gray-900 to-black px-6 text-center">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
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

                    <div className="grid md:grid-cols-2 gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-102 hover:border-blue-400"
                            >
                                <div className="flex flex-col h-full">
                                    {/* Logo container */}
                                    <div className="h-64 w-full flex items-center justify-center p-8 bg-gray-300 transition-colors duration-300 hover:bg-gray-200">
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={300}
                                            height={200}
                                            className="object-contain"
                                            style={{
                                                maxWidth: "80%",
                                                maxHeight: "80%",
                                            }}
                                        />
                                    </div>

                                    {/* Text content */}
                                    <div className="p-6 text-center">
                                        <h3 className="text-xl font-bold text-white transition-colors duration-300 hover:text-blue-400">
                                            {partner.name}
                                        </h3>
                                    </div>
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
            {/* Section 1: Benefits */}
            <section className="w-full py-16 px-4 bg-gradient-to-tr from-gray-800 via-black to-black">
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

            {/* Section 2: Participation Details */}
            <section className="w-full py-12 md:py-16 px-4 bg-gradient-to-br from-gray-800 via-black to-black">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                        className="mb-10 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                            Participation{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                Details
                            </span>
                        </h2>
                        <p className="text-gray-400 text-base md:text-lg max-w-lg mx-auto">
                            Key information about joining the innovation
                            challenge
                        </p>
                    </motion.div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">
                        {/* Team Formation Card */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <Users className="w-5 h-5 text-blue-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Team Formation
                                </h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                {[
                                    "Open to all university students nationwide",
                                    "Teams of 2-5 members (cross-university allowed)",
                                    "Single registration per team required",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-blue-400 mt-1">
                                            <CheckCircle className="w-4 h-4" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        {/* Event Structure Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="bg-gray-800/80 p-6 rounded-xl border border-gray-700 hover:border-purple-400/50 transition-all duration-300 shadow-lg hover:shadow-purple-500/10"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                    <Calendar className="w-5 h-5 text-purple-400" />
                                </div>
                                <h3 className="text-xl font-semibold text-white">
                                    Event Structure
                                </h3>
                            </div>
                            <ul className="space-y-3 text-gray-300 text-sm md:text-base">
                                {[
                                    "48-hour intensive innovation sprint",
                                    "Daily expert mentorship sessions",
                                    "Final pitch showcase with prizes",
                                ].map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3"
                                    >
                                        <span className="text-purple-400 mt-1">
                                            <CheckCircle className="w-4 h-4" />
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Universities Section */}
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="mb-8"
                        >
                            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                                    Participating Universities
                                </span>
                            </h3>
                            <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto">
                                Open to students from every university in
                                Malaysia — your campus could be next to shine!
                            </p>
                        </motion.div>

                        {/* Mobile-optimized Marquee */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-full"
                        >
                            <div className="relative overflow-hidden py-4">
                                <Marquee className="w-full" pauseOnHover>
                                    <div className="flex items-center space-x-6 px-2">
                                        {universities.map((uni, index) => (
                                            <div
                                                key={index}
                                                className="flex-shrink-0"
                                            >
                                                <UniLogoCard
                                                    name={uni.name}
                                                    img={uni.img}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </Marquee>
                            </div>

                            <p className="text-gray-500 text-sm mt-4">
                                And many more institutions nationwide
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Section 3: Partner */}
            <section className="w-full py-16 px-4 bg-gradient-to-tl from-gray-900 to-black">
                {/* Decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
                    <div className="absolute bottom-10 right-10 w-60 h-60 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
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

                    <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-800 to-gray-950 border border-gray-700 hover:border-blue-400/30 shadow-xl sm:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Content */}
                                <div className="relative h-full flex flex-col bg-gray-200 sm:bg-black">
                                    {/* Logo container */}
                                    <div className="relative h-40 xs:h-48 sm:h-64 lg:h-72 w-full flex items-center justify-center p-4 sm:p-8">
                                        <div className="absolute inset-0 bg-gradient-to-b sm:from-gray-50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={300}
                                            height={200}
                                            className="object-contain transition-all duration-500 group-hover:scale-110"
                                            style={{
                                                maxWidth: "75%",
                                                maxHeight: "75%",
                                                opacity: 0.9,
                                            }}
                                        />
                                    </div>

                                    {/* Text content */}
                                    <div className="p-4 sm:p-8 pt-0 text-center">
                                        <h3 className="text-lg sm:text-xl font-bold text-black sm:text-white mb-2 sm:mb-3">
                                            {partner.name}
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
