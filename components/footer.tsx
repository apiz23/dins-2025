"use client";
import React, { useEffect } from "react";
import { Instagram, MapPin, Phone, User, Users } from "lucide-react";
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
        <footer className="bg-gradient-to-b from-gray-900 to-black py-16 px-6 sm:px-12 text-gray-300 w-full">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Branding Section */}
                    <div className="flex flex-col items-start space-y-6">
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">
                            DINS 2025
                        </h1>
                        <div className="flex items-center gap-4">
                            <Link
                                href="https://www.uthm.edu.my"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <Image
                                    src={uthmLogo}
                                    alt="UTHM Logo"
                                    width={2000}
                                    height={2000}
                                    className="w-20 h-20 object-contain bg-white rounded-full p-1 hover:shadow-lg hover:shadow-blue-500/20 transition-all"
                                />
                            </Link>
                            <Link
                                href="https://tech-ventura.vercel.app/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-transform hover:scale-105"
                            >
                                <Image
                                    src={tvLogo}
                                    alt="Tech Ventura Logo"
                                    width={2000}
                                    height={2000}
                                    className="w-20 h-20 object-contain bg-white rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
                                />
                            </Link>
                        </div>
                        <p className="text-sm text-gray-400">
                            © 2024 Universiti Tun Hussein Onn Malaysia
                        </p>
                    </div>

                    {/* Contact Section */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white flex items-center gap-2">
                            <MapPin className="h-5 w-5 text-emerald-500" />
                            Location
                        </h3>
                        <address className="text-gray-400 space-y-2">
                            <p>Faculty of Computer Science</p>
                            <p>Universiti Tun Hussein Onn Malaysia</p>
                        </address>

                        <h3 className="text-lg font-semibold text-white flex items-center gap-2 mt-8">
                            <Users className="h-5 w-5 text-blue-500" />
                            Contact Persons
                        </h3>
                        <div className="text-gray-400 space-y-4">
                            <div>
                                <p className="flex items-center gap-2 font-medium">
                                    <User className="h-4 w-4 text-blue-400" />
                                    Ahmad Firas
                                    <span className="text-xs ml-2 text-gray-500">
                                        (Program Director)
                                    </span>
                                </p>
                                <Link
                                    href="tel:01121768812"
                                    className="flex items-center gap-2 mt-1 text-sm hover:text-emerald-400 transition-colors"
                                >
                                    <Phone className="h-4 w-4" />
                                    011-2176 8812
                                </Link>
                            </div>

                            <div>
                                <p className="flex items-center gap-2 font-medium">
                                    <User className="h-4 w-4 text-blue-400" />
                                    Shaamalan
                                    <span className="text-xs ml-2 text-gray-500">
                                        (Assistant Program Director)
                                    </span>
                                </p>
                                <Link
                                    href="tel:0163605017"
                                    className="flex items-center gap-2 mt-1 text-sm hover:text-emerald-400 transition-colors"
                                >
                                    <Phone className="h-4 w-4" />
                                    016-360 5017
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Social Media */}
                    <div className="space-y-6">
                        <h3 className="text-lg font-semibold text-white">
                            Follow Us
                        </h3>
                        <div className="flex gap-3">
                            {[
                                {
                                    icon: Instagram,
                                    name: "Instagram",
                                    link: "https://www.instagram.com/dins.uthm?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
                                },
                            ].map((social) => (
                                <Link
                                    key={social.name}
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 rounded-lg bg-gray-900 hover:bg-gray-800 transition-all border border-gray-800 hover:border-emerald-500/30"
                                    aria-label={social.name}
                                >
                                    <social.icon className="h-5 w-5" />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-16 pt-8 text-center text-sm text-gray-500">
                    <p>All rights reserved. DINS 2025</p>
                </div>
            </div>
        </footer>
    );
}
