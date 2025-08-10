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
import { Calendar, CheckCircle, Users } from "lucide-react";
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
        description:
            "Leading academic institution fostering tech talent and research",
    },
    {
        name: "Malaysia Digital Economy Corporation",
        logo: mdec,
        description:
            "National agency driving Malaysia's digital transformation",
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
                        snap: 1 / (sections.length - 1),
                        end: () => "+=" + container.scrollWidth,
                    },
                });
            });

            return () => ctx.revert();
        });
    }, []);

    return (
        <div className="horizontal-scroll-container flex h-screen w-[300vw] overflow-hidden ">
            {/* Panel 1 */}
            <div className="panel w-screen min-h-screen flex-shrink-0 flex items-center justify-center px-4 sm:px-6 py-16 text-center bg-gradient-to-br from-gray-800 to-black">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
                    {/* Left Column - Content */}
                    <div className="lg:col-span-5 space-y-12">
                        <motion.div
                            className="text-center lg:text-left"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                                Participation{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                    Details
                                </span>
                            </h2>
                            <p className="text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
                                Everything you need to know about joining the
                                innovation challenge
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 gap-8">
                            {/* Team Formation Card */}
                            <motion.div
                                className="relative group bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-2xl border border-gray-700/50 hover:border-blue-400/50 transition-all duration-500 shadow-xl hover:shadow-blue-500/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                                            <Users className="w-6 h-6 text-blue-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mt-1">
                                            Team Formation
                                        </h3>
                                    </div>
                                    <ul className="space-y-4 text-gray-300 text-base pl-1">
                                        <li className="flex items-start gap-4">
                                            <span className="text-blue-400 mt-1 flex-shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </span>
                                            <span className="leading-relaxed">
                                                Open to all university students
                                                nationwide with valid student ID
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="text-blue-400 mt-1 flex-shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </span>
                                            <span className="leading-relaxed">
                                                Teams of 2-5 members
                                                (cross-university teams allowed)
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="text-blue-400 mt-1 flex-shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </span>
                                            <span className="leading-relaxed">
                                                Single registration per team
                                                with all member details
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>

                            {/* Event Structure Card */}
                            <motion.div
                                className="relative group bg-gradient-to-br from-gray-800/90 to-gray-900/90 p-6 rounded-2xl border border-gray-700/50 hover:border-purple-400/50 transition-all duration-500 shadow-xl hover:shadow-purple-500/10"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                            >
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="flex items-start gap-4 mb-5">
                                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                            <Calendar className="w-6 h-6 text-purple-400" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mt-1">
                                            Event Structure
                                        </h3>
                                    </div>
                                    <ul className="space-y-4 text-gray-300 text-base pl-1">
                                        <li className="flex items-start gap-4">
                                            <span className="text-purple-400 mt-1 flex-shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </span>
                                            <span className="leading-relaxed">
                                                Intensive 48-hour innovation
                                                sprint with milestones
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="text-purple-400 mt-1 flex-shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </span>
                                            <span className="leading-relaxed">
                                                Daily expert mentorship sessions
                                                and workshops
                                            </span>
                                        </li>
                                        <li className="flex items-start gap-4">
                                            <span className="text-purple-400 mt-1 flex-shrink-0">
                                                <CheckCircle className="w-5 h-5" />
                                            </span>
                                            <span className="leading-relaxed">
                                                Final pitch showcase with
                                                $10,000+ in prizes
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Column - University Marquees */}
                    <div className="lg:col-span-7 flex flex-col justify-center items-center space-y-8 mt-8 lg:mt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                delay: 0.4,
                                duration: 0.8,
                                ease: "easeOut",
                            }}
                            className="w-full space-y-8"
                        >
                            <div className="text-center">
                                <h3 className="text-xl font-semibold text-gray-300 mb-2">
                                    Participating Universities
                                </h3>
                                <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-emerald-400 mx-auto rounded-full"></div>
                            </div>

                            {/* First Marquee (Left to Right) */}
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

                            {/* Second Marquee (Right to Left) */}
                            <motion.div
                                initial={{ x: "10%" }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.6, duration: 0.8 }}
                                className="relative overflow-hidden"
                            >
                                <Marquee
                                    className="w-full"
                                    pauseOnHover={true}
                                    reverse={true}
                                >
                                    <div className="flex items-center py-2">
                                        {[...universities]
                                            .reverse()
                                            .map((uni, index) => (
                                                <motion.div
                                                    key={`reverse-${index}`}
                                                    className="px-5"
                                                    whileHover={{ scale: 1.08 }}
                                                    transition={{
                                                        duration: 0.2,
                                                    }}
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

                            <div className="text-center pt-4">
                                <p className="text-gray-400 text-sm">
                                    And 20+ more universities across the country
                                </p>
                            </div>
                        </motion.div>
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

                    <div className="grid md:grid-cols-2 gap-10">
                        {partners.map((partner, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-800 to-gray-950 border border-gray-700 hover:border-blue-400/30 shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:-translate-y-2"
                            >
                                {/* Content */}
                                <div className="relative h-full flex flex-col">
                                    {/* Logo container */}
                                    <div className="relative h-64 sm:h-72 lg:h-80 w-full flex items-center justify-center p-8">
                                        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-transparent opacity-70 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={300}
                                            height={200}
                                            className="object-contain transition-all duration-500 group-hover:scale-110"
                                            style={{
                                                maxWidth: "80%",
                                                maxHeight: "80%",
                                                opacity: 0.9,
                                            }}
                                        />
                                    </div>

                                    {/* Text content */}
                                    <div className="p-8 pt-0 text-center">
                                        <h3 className="text-xl font-bold text-white mb-3">
                                            {partner.name}
                                        </h3>
                                        <p className="text-gray-400 mb-6">
                                            {partner.description}
                                        </p>
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
            {/* Section 1: Participation Details */}
            <section className="w-full py-12 md:py-16 px-4 bg-gradient-to-tl from-black to-gray-800">
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
                                Students from all public and private
                                universities across Malaysia are welcome to join
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
                                {/* Gradient fade effects */}
                                <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-gray-800 to-transparent z-10"></div>
                                <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-gray-800 to-transparent z-10"></div>

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
                        <AnimatedGradientText
                            speed={2}
                            colorFrom="#4ade80"
                            colorTo="#a855f7"
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            Valued
                        </AnimatedGradientText>
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
                                        <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                                            {partner.description}
                                        </p>
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
