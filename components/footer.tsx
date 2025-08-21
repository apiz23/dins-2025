"use client";
import React, { useEffect } from "react";
import {
    Instagram,
    InstagramIcon,
    MapPin,
    Phone,
    User,
    Users,
} from "lucide-react";
import Lenis from "lenis";
import Link from "next/link";
import Image from "next/image";
import tvLogo from "@/public/images/tv-logo.svg";
import itcLogo from "@/public/images/itc-logo.png";
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
                                    className="w-20 h-20 object-contain p-2 bg-white rounded-full hover:shadow-lg hover:shadow-blue-500/20 transition-all"
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
                                    className="w-20 h-20 object-contain p-2 bg-white rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
                                />
                            </Link>
                            <div className="transition-transform hover:scale-105">
                                <Image
                                    src={itcLogo}
                                    alt="Tech Ventura Logo"
                                    width={1000}
                                    height={1000}
                                    className="w-20 h-20 object-contain p-2 bg-white rounded-full hover:shadow-lg hover:shadow-emerald-500/20 transition-all"
                                />
                            </div>
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
                    <div className="relative group">
                        <div className="relative flex items-center justify-center w-full h-[400px] md:h-[470px] overflow-hidden">
                            <iframe
                                src="https://www.instagram.com/dins.uthm/embed"
                                className="w-[90%] h-[90%] rounded-lg border-none"
                                title="Instagram Profile"
                                allowTransparency={true}
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                                <div className="text-center mb-6">
                                    <span className="text-white text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-sm">
                                        Click to interact
                                    </span>
                                </div>
                            </div>
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
