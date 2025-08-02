"use client";
import React, { useEffect } from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    CalendarDays,
    Mic2,
    MonitorPlay,
    MapPin,
    HelpCircle,
    Ticket,
    UserPlus,
    HandHeart,
    Handshake,
    Building2,
    School,
    Mail,
    Phone,
} from "lucide-react";
import Lenis from "lenis";

export default function Footer() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time: number) {
            lenis.raf(time);

            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <div
                className="relative h-[800px] md:h-[500px]"
                style={{
                    clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
                }}
            >
                <div className="relative h-[calc(100vh+800px)] md:h-[calc(100vh+500px)] -top-[100vh]">
                    <div className="h-[800px] md:h-[500px] sticky top-[calc(100vh-500px)]">
                        <div className="bg-gradient-to-b from-gray-800 to-black py-8 px-12 h-full w-full flex flex-col justify-between">
                            {/* Main Footer Content */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
                                {/* Quick Links */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                                        Quick Links
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <CalendarDays className="h-4 w-4" />
                                                Event Schedule
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <Mic2 className="h-4 w-4" />
                                                Speakers
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <MonitorPlay className="h-4 w-4" />
                                                Workshops
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <MapPin className="h-4 w-4" />
                                                Venue Map
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <HelpCircle className="h-4 w-4" />
                                                FAQs
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Registration */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                                        Registration
                                    </h3>
                                    <ul className="space-y-2">
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <Ticket className="h-4 w-4" />
                                                Attendee Registration
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <UserPlus className="h-4 w-4" />
                                                Speaker Application
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <HandHeart className="h-4 w-4" />
                                                Volunteer Sign-up
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-lg hover:text-emerald-400 transition-colors duration-200 flex items-center gap-2"
                                            >
                                                <Handshake className="h-4 w-4" />
                                                Sponsorship
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                {/* Contact */}
                                <div className="space-y-4">
                                    <h3 className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                                        Contact Us
                                    </h3>
                                    <address className="text-lg not-italic space-y-2">
                                        <p className="flex items-center gap-2">
                                            <Building2 className="h-4 w-4" />
                                            Faculty of Computer Science
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <School className="h-4 w-4" />
                                            Universiti Tun Hussein Onn Malaysia
                                        </p>
                                        <p className="flex items-center gap-2 mt-2">
                                            <Mail className="h-4 w-4" />
                                            <a
                                                href="mailto:event@uthm.edu.my"
                                                className="hover:text-emerald-400"
                                            >
                                                event@uthm.edu.my
                                            </a>
                                        </p>
                                        <p className="flex items-center gap-2">
                                            <Phone className="h-4 w-4" />
                                            +60 7-453 7000
                                        </p>
                                    </address>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400"
                                >
                                    <span className="sr-only">Facebook</span>
                                    <Facebook className="h-10 w-10" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400"
                                >
                                    <span className="sr-only">Instagram</span>
                                    <Instagram className="h-10 w-10" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <Twitter className="h-10 w-10" />
                                </a>
                                <a
                                    href="#"
                                    className="text-gray-400 hover:text-emerald-400"
                                >
                                    <span className="sr-only">YouTube</span>
                                    <Youtube className="h-10 w-10" />
                                </a>
                            </div>
                            {/* Footer Section */}
                            <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 text-center sm:text-left">
                                <h1 className="text-[6vw] sm:text-[4vw] leading-[0.9] font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg mb-4 sm:mb-0">
                                    DINS 2025
                                </h1>
                                <p className="text-lg text-gray-400 hover:text-white transition">
                                    Universiti Tun Hussein Onn Malaysia © 2024
                                    Tech Ventura. All rights reserved.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
