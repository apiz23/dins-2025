import React from "react";
import {
    Clock,
    Download,
    MapPin,
    FileText,
    File,
    Info,
    UploadCloud,
    CalendarCheck,
    Users,
    Mail,
    HelpCircle,
    CheckCircle,
    Calendar,
    FileInput,
    Type,
    Award,
    ArrowUpRight,
    Star,
    Mic,
} from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";

import utm from "@/public/images/unis/utm.png";
import uitm from "@/public/images/unis/uitm.png";
import usm from "@/public/images/unis/usm.png";
import um from "@/public/images/unis/um.png";
import ukm from "@/public/images/unis/ukm.png";
import utem from "@/public/images/unis/utem.png";
import uthm from "@/public/images/unis/uthm.png";
import ump from "@/public/images/unis/ump.png";
import { Marquee } from "../magicui/marquee";
import { BlurFade } from "../magicui/blur-fade";

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

export function TimelineEvent() {
    return (
        <>
            {/* Panel 3*/}
            <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 py-16 text-center bg-gradient-to-bl from-gray-900 to-black">
                <BlurFade delay={0.15} inView>
                    <div className="max-w-7xl mx-auto w-full p-4">
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
                                            Teams of 2-5 members
                                            (cross-university teams allowed)
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <span className="text-blue-400 mt-1 flex-shrink-0">
                                            <CheckCircle className="w-5 h-5" />
                                        </span>
                                        <span>
                                            Single registration per team with
                                            all member details
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
                                            Intensive 48-hour innovation sprint
                                            with milestones
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
                                            Final pitch showcase with $10,000+
                                            in prizes
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
                                    Malaysia — your campus could be next to
                                    shine!
                                </p>
                            </div>

                            <motion.div
                                initial={{ x: "-10%" }}
                                animate={{ x: 0 }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="relative overflow-hidden"
                            >
                                {/* Left shadow gradient */}
                                <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />

                                {/* Right shadow gradient */}
                                <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

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
                </BlurFade>
            </div>
            <section className="relative w-full bg-black overflow-hidden">
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
                    <div className="absolute top-1/5 left-0 -translate-y-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute bottom-1/6 right-0 translate-y-1/2 translate-x-1/2 w-80 h-80 rounded-full bg-purple-500/10 blur-3xl animate-pulse delay-800"></div>
                </div>
                <BlurFade delay={0.25} inView>
                    <div
                        className="max-w-6xl mx-auto py-16 px-6 sm:px-6 lg:px-8"
                        id="schedule"
                    >
                        <div className="text-center mb-16">
                            <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                                Event Timeline
                            </h2>
                            <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                                Key dates and milestones for your innovation
                                journey
                            </p>
                        </div>

                        <div className="relative">
                            {/* Animated background elements */}
                            <div className="absolute -left-20 top-1/3 w-64 h-64 bg-emerald-500 rounded-full filter blur-3xl opacity-10 animate-pulse duration-5000"></div>
                            <div className="absolute -right-20 top-2/3 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-pulse duration-7000"></div>

                            <div className="space-y-12">
                                {/* Pricing Section - Enhanced */}
                                <div className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                                    {/* Registration Period Card - More prominent */}
                                    <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-xl mb-12 transform transition-all hover:scale-[1.01]">
                                        <div className="flex flex-col sm:flex-row items-start gap-6">
                                            <div className="bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/30 flex-shrink-0">
                                                <CalendarCheck className="h-8 w-8 text-indigo-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-2xl font-semibold text-white mb-2">
                                                    Registration Now Open
                                                </h3>
                                                <p className="text-lg text-gray-300 mb-4">
                                                    August 15 – September 30,
                                                    2025
                                                </p>
                                                <div className="flex flex-wrap gap-3">
                                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700">
                                                        Limited slots available
                                                    </span>
                                                    <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                                                        Early bird discounts
                                                        until August 31
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Header with better spacing */}
                                    <div className="text-center mb-20">
                                        <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-900/30 border border-blue-700/50 mb-4">
                                            <span className="text-blue-300 text-sm font-medium">
                                                Simple Pricing
                                            </span>
                                        </div>
                                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                            Choose Your Plan
                                        </h2>
                                        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                            Flexible options tailored for
                                            students. All plans include full
                                            event access and exclusive benefits.
                                        </p>
                                    </div>

                                    {/* Pricing Cards - Improved layout and styling */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                                        {/* UTHM Student */}
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative bg-gray-900/80 rounded-2xl border border-gray-700 overflow-hidden h-full hover:border-blue-400 transition-all backdrop-blur-sm z-10">
                                                <div className="p-8">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                                UTHM Student
                                                            </h3>
                                                            <p className="text-blue-300 text-sm">
                                                                Exclusive rate
                                                                for UTHM
                                                                students
                                                            </p>
                                                        </div>
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-300">
                                                            Best Value
                                                        </span>
                                                    </div>
                                                    <div className="my-6">
                                                        <div className="flex items-end">
                                                            <span className="text-4xl font-bold text-white">
                                                                RM70
                                                            </span>
                                                            <span className="text-lg text-gray-400 ml-2 line-through">
                                                                RM80
                                                            </span>
                                                        </div>
                                                        <p className="text-blue-300 text-sm mt-1">
                                                            Save RM10 with
                                                            student discount
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="border-t border-gray-700/50 p-8 bg-gray-900/30">
                                                    <h4 className="text-lg font-medium text-white mb-4">
                                                        What{"'"}s included:
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {[
                                                            "Official participation certificate",
                                                            "Team medal for all members",
                                                            "Dedicated exhibition booth",
                                                            "Event souvenirs & merchandise",
                                                            "Access to all workshops",
                                                        ].map((item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start"
                                                            >
                                                                <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                                                <span className="text-gray-300">
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Non–UTHM Student */}
                                        <div className="relative group">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="relative bg-gray-900/80 rounded-2xl border border-gray-700 overflow-hidden h-full hover:border-purple-400 transition-all backdrop-blur-sm z-10">
                                                <div className="p-8">
                                                    <div className="flex justify-between items-start">
                                                        <div>
                                                            <h3 className="text-2xl font-bold text-white mb-2">
                                                                Non UTHM Student
                                                            </h3>
                                                            <p className="text-gray-400 text-sm">
                                                                Open to all
                                                                university
                                                                students
                                                            </p>
                                                        </div>
                                                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-500/20 text-purple-300">
                                                            Popular
                                                        </span>
                                                    </div>
                                                    <div className="my-6">
                                                        <div className="flex items-end">
                                                            <span className="text-4xl font-bold text-white">
                                                                RM100
                                                            </span>
                                                            <span className="text-lg text-gray-400 ml-2 line-through">
                                                                RM110
                                                            </span>
                                                        </div>
                                                        <p className="text-purple-300 text-sm mt-1">
                                                            Save RM10 with early
                                                            registration
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="border-t border-gray-700/50 p-8 bg-gray-900/30">
                                                    <h4 className="text-lg font-medium text-white mb-4">
                                                        What{"'"}s included:
                                                    </h4>
                                                    <ul className="space-y-3">
                                                        {[
                                                            "Official participation certificate",
                                                            "Team medal for all members",
                                                            "Dedicated exhibition booth",
                                                            "Event souvenirs & merchandise",
                                                            "Access to all workshops",
                                                        ].map((item, idx) => (
                                                            <li
                                                                key={idx}
                                                                className="flex items-start"
                                                            >
                                                                <CheckCircle className="h-5 w-5 text-emerald-400 mr-3 mt-0.5 flex-shrink-0" />
                                                                <span className="text-gray-300">
                                                                    {item}
                                                                </span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurFade>

                <Separator className="max-w-6xl mx-auto bg-white/20" />

                <BlurFade delay={0.45} inView>
                    <div className="max-w-6xl mx-auto py-16 px-8 sm:px-6 lg:px-8 space-y-4">
                        {/* Deadline Alert - Simplified */}

                        <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-xl mb-12 transform transition-all hover:scale-[1.01]">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/30 flex-shrink-0">
                                    <CalendarCheck className="h-8 w-8 text-indigo-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        Abstract & Draft Submission Deadline
                                    </h3>
                                    <p className="text-lg text-gray-300 mb-4">
                                        20 Oct 2025
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Submission Card - Streamlined */}
                        <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/60 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
                            {/* Key Requirements */}
                            <div className="mb-6">
                                <h4 className="text-sm font-medium text-neutral-200 mb-3 flex items-center gap-2">
                                    <Info className="h-4 w-4 text-blue-400" />
                                    Key Requirements
                                </h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                                        <FileText className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                        PDF format only
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                                        <File className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                        Max 5MB file size
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                                        <Type className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                        12pt minimum font
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-neutral-300">
                                        <FileInput className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                        Conference portal submission
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons - More prominent */}
                            <div className="flex flex-col sm:flex-row gap-3">
                                <button className="flex-1 py-3 px-4 bg-blue-600/90 hover:bg-blue-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/20">
                                    <UploadCloud className="h-4 w-4" />
                                    Submit Now
                                </button>
                                <button className="flex-1 py-3 px-4 bg-gray-700/80 hover:bg-gray-600/90 rounded-lg text-neutral-100 font-medium flex items-center justify-center gap-2 transition-all border border-gray-600/50">
                                    <Download className="h-4 w-4" />
                                    Download Guidelines
                                </button>
                            </div>
                        </div>
                    </div>
                </BlurFade>
                <Separator className="max-w-6xl mx-auto bg-white/20" />

                <BlurFade delay={0.65} inView>
                    <div className="max-w-6xl mx-auto px-8 sm:px-6 lg:px-8 py-12 space-y-8">
                        <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-xl mb-12 transform transition-all hover:scale-[1.01]">
                            <div className="flex flex-col sm:flex-row items-start gap-6">
                                <div className="bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/30 flex-shrink-0">
                                    <CalendarCheck className="h-8 w-8 text-indigo-400" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-semibold text-white mb-2">
                                        Symposium Day @ UTHM
                                    </h3>
                                    <p className="text-lg text-gray-300 mb-4">
                                        3 Nov 2025
                                    </p>
                                    <div className="mt-2 flex flex-wrap items-center gap-3">
                                        <div className="flex items-center text-sm text-purple-200">
                                            <Clock className="h-4 w-4 mr-2" />
                                            <span>9:00 AM - 5:00 PM</span>
                                        </div>
                                        <div className="flex items-center text-sm text-gray-300">
                                            <MapPin className="h-4 w-4 mr-2 text-rose-300" />
                                            <span>
                                                Main Campus, Universiti Tun
                                                Hussein Onn Malaysia
                                            </span>
                                        </div>
                                        <span className="text-xs bg-purple-900/40 text-purple-200 px-3 py-1 rounded-full border border-purple-700/50">
                                            All Day Event
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Section - Enhanced */}
                        <div className="bg-gray-800/50 rounded-2xl border border-gray-700/80 overflow-hidden backdrop-blur-sm">
                            <div className="p-6">
                                <div className="flex items-center gap-3 mb-5">
                                    <div className="bg-rose-500/20 p-2 rounded-lg border border-rose-500/30">
                                        <MapPin className="h-5 w-5 text-rose-300" />
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">
                                        Venue Location
                                    </h3>
                                </div>

                                {/* Interactive Map - Improved */}
                                <div className="relative w-full aspect-video rounded-xl overflow-hidden border-2 border-gray-700 shadow-lg hover:border-purple-500 transition-all duration-300">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.160378290877!2d103.0852!3d1.8554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da72f8a7a8b2c5%3A0x9f7cf7e6b9a05a!2sUniversiti%20Tun%20Hussein%20Onn%20Malaysia!5e0!3m2!1sen!2smy!4v1691505630664!5m2!1sen!2smy"
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        className="w-full h-full absolute inset-0"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent pointer-events-none" />
                                </div>

                                {/* CTA Button - More Prominent */}
                                <div className="mt-8 flex justify-center">
                                    <Link
                                        href="https://maps.app.goo.gl/D21WZe5Uz8kDCM3L9"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-purple-500/30"
                                    >
                                        <MapPin className="h-5 w-5" />
                                        <span>Open in Google Maps</span>
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </BlurFade>
            </section>
        </>
    );
}
