"use client";
import React, { useEffect } from "react";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    MapPin,
    Mail,
    Phone,
    User,
    Users,
} from "lucide-react";
import Lenis from "lenis";
import Link from "next/link";
import Image from "next/image";
import tvLogo from "@/public/images/tv-logo.svg";
import uthmLogo from "@/public/images/unis/uthm.png";

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
        <footer className="bg-gradient-to-b from-gray-900 to-black py-12 px-6 sm:px-12 text-gray-300 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                            <MapPin className="inline mr-2 h-4 w-4" />
                            Location
                        </h3>
                        <address className="text-base md:text-lg space-y-3">
                            <p>Faculty of Computer Science</p>
                            <p>Universiti Tun Hussein Onn Malaysia</p>
                            <p className="pt-4 flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                <Link
                                    href="mailto:event@uthm.edu.my"
                                    className="hover:text-emerald-400"
                                >
                                    event@uthm.edu.my
                                </Link>
                            </p>
                            <p className="flex items-center gap-2">
                                <Phone className="h-4 w-4" />
                                +60 7-453 7000
                            </p>
                        </address>
                    </div>

                    {/* Contact Persons */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                            <Users className="inline mr-2 h-4 w-4" />
                            Contact Persons
                        </h3>
                        <div className="text-base md:text-lg space-y-3">
                            <p className="flex items-center gap-2">
                                <User className="h-4 w-4 text-blue-400" />
                                <span className="font-medium">Ahmad Firas</span>
                                <span className="text-xs md:text-sm ml-2">
                                    (Program Director)
                                </span>
                            </p>
                            <p className="flex items-center gap-2 pl-6">
                                <Phone className="h-4 w-4 text-emerald-400" />
                                <Link
                                    href="tel:01121768812"
                                    className="hover:text-emerald-400"
                                >
                                    011-2176 8812
                                </Link>
                            </p>

                            <p className="flex items-center gap-2 mt-4">
                                <User className="h-4 w-4 text-blue-400" />
                                <span className="font-medium">Shaamalan</span>
                                <span className="text-xs md:text-sm ml-2">
                                    (Assistant Program Director)
                                </span>
                            </p>
                            <p className="flex items-center gap-2 pl-6">
                                <Phone className="h-4 w-4 text-emerald-400" />
                                <Link
                                    href="tel:0163605017"
                                    className="hover:text-emerald-400"
                                >
                                    016-360 5017
                                </Link>
                            </p>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-6">
                        <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
                            Follow Us
                        </h3>
                        <div className="flex flex-wrap gap-4">
                            {[
                                { icon: Facebook, name: "Facebook" },
                                { icon: Instagram, name: "Instagram" },
                                { icon: Twitter, name: "Twitter" },
                                { icon: Youtube, name: "YouTube" },
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href="#"
                                    className="p-3 rounded-full bg-gray-800 hover:bg-emerald-500/20 hover:text-emerald-400 transition-all"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-6 w-6" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Branding */}
                <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                        DINS 2025
                    </h1>

                    <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                        <div className="flex items-center gap-3">
                            <Image
                                src={uthmLogo}
                                alt="UTHM Logo"
                                width={2000}
                                height={2000}
                                className="w-12 h-12 object-contain bg-white rounded-full p-1"
                            />
                            <span className="text-gray-400 text-sm">
                                © 2024 Universiti Tun Hussein Onn Malaysia
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image
                                src={tvLogo}
                                alt="Tech Ventura Logo"
                                width={2000}
                                height={2000}
                                className="w-12 h-12 object-contain bg-white rounded-full p-1"
                            />
                            <span className="text-gray-400 hover:text-white transition-colors text-sm">
                                Tech Ventura
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
