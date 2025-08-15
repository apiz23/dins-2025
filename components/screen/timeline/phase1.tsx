import { BlurFade } from "@/components/magicui/blur-fade";
import { CalendarCheck, CheckCircle } from "lucide-react";
import React, { useState, useEffect } from "react";

export default function Phase1() {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const targetDate = new Date("September 30, 2025 23:59:59");
            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        const timer = setInterval(calculateTimeLeft, 1000);
        calculateTimeLeft(); // Initial call

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <BlurFade delay={0.25} inView>
                <div
                    className="max-w-6xl mx-auto py-16 px-6 sm:px-6 lg:px-8"
                    id="schedule"
                >
                    <div className="text-center mb-8">
                        <h2 className="text-5xl md:text-6xl font-bold mb-4 text-white bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                            Event Timeline
                        </h2>
                        <p className="text-xl text-neutral-300 max-w-2xl mx-auto">
                            Key dates and milestones for your innovation journey
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
                                                August 15 – September 30, 2025
                                            </p>
                                            <div className="flex flex-wrap gap-3">
                                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-gray-800 text-gray-200 border border-gray-700">
                                                    Limited slots available
                                                </span>
                                                <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-amber-500/15 text-amber-400 border border-amber-500/30">
                                                    Early bird discounts until
                                                    August 31
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="my-20">
                                    <h3 className="text-xl font-medium text-white text-center mb-4">
                                        Registration closes
                                    </h3>
                                    <div className="flex justify-center gap-4">
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-400 bg-gray-800/50 rounded-lg px-4 py-2">
                                                {timeLeft.days}
                                            </div>
                                            <div className="text-sm text-gray-300 mt-1">
                                                Days
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-400 bg-gray-800/50 rounded-lg px-4 py-2">
                                                {timeLeft.hours}
                                            </div>
                                            <div className="text-sm text-gray-300 mt-1">
                                                Hours
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-400 bg-gray-800/50 rounded-lg px-4 py-2">
                                                {timeLeft.minutes}
                                            </div>
                                            <div className="text-sm text-gray-300 mt-1">
                                                Minutes
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-3xl font-bold text-blue-400 bg-gray-800/50 rounded-lg px-4 py-2">
                                                {timeLeft.seconds}
                                            </div>
                                            <div className="text-sm text-gray-300 mt-1">
                                                Seconds
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Header with better spacing */}
                                <div className="text-center mb-20">
                                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                        Choose Your Plan
                                    </h2>
                                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                                        Flexible options tailored for students.
                                        All plans include full event access and
                                        exclusive benefits.
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
                                                            Exclusive rate for
                                                            UTHM students
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
                                                        Save RM10 with student
                                                        discount
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
                                                            university students
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
        </>
    );
}
