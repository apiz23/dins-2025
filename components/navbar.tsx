"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
    DrawerFooter,
    DrawerClose,
} from "@/components/ui/drawer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// @ts-expect-error no types available
import AnchorLink from "react-anchor-link-smooth-scroll";
import { PanelBottomOpen } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export default function Navbar() {
    const isMobile = useIsMobile();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className="w-full fixed top-0 z-50 bg-transparent">
            <div
                className={`transition-all duration-300 mx-auto px-4 sm:px-6 lg:px-8 ${
                    scrolled
                        ? "lg:max-w-6xl lg:mt-4 lg:rounded-xl bg-black shadow shadow-gray-700"
                        : "max-w-screen-xl"
                }`}
            >
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <AnchorLink href="#hero" offset={80}>
                            <div className="flex items-center space-x-3 cursor-pointer">
                                <Avatar className="h-9 w-9 border border-emerald-400/30">
                                    <AvatarImage src="https://github.com/shadcn.png" />
                                    <AvatarFallback className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white font-bold">
                                        DINS
                                    </AvatarFallback>
                                </Avatar>
                                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                                    DIGITAL INNOVATHON
                                </span>
                            </div>
                        </AnchorLink>
                    </motion.div>

                    {/* Desktop Nav */}
                    <div
                        className={`hidden lg:flex items-center space-x-1 ${
                            isMobile ? "invisible" : "visible"
                        }`}
                    >
                        {[
                            { name: "About", id: "about" },
                            { name: "Schedule", id: "schedule" },
                            { name: "Speakers", id: "speakers" },
                            { name: "Partners", id: "partners" },
                            { name: "FAQs", id: "faqs" },
                        ].map((item) => (
                            <AnchorLink
                                key={item.id}
                                href={`#${item.id}`}
                                offset={80}
                                className="relative px-4 py-2 text-sm font-medium group"
                            >
                                <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                    {item.name}
                                </span>
                                <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" />
                            </AnchorLink>
                        ))}
                    </div>

                    {/* Mobile Nav - Drawer */}
                    <div className="lg:hidden flex items-center">
                        <Drawer>
                            <DrawerTrigger asChild>
                                <motion.button
                                    whileTap={{ scale: 0.9 }}
                                    className="p-2 rounded-lg text-gray-300 hover:text-white focus:outline-none hover:bg-gray-800/50 transition-colors"
                                    aria-label="Open menu"
                                >
                                    <PanelBottomOpen />
                                </motion.button>
                            </DrawerTrigger>

                            <DrawerContent
                                className={`bg-gradient-to-br from-gray-900 to-black backdrop-blur-2xl border-t-2 border-gray-900/50 min-h-[40vh] overflow-y-auto ${
                                    isMobile ? "" : "hidden"
                                }`}
                            >
                                <DrawerHeader className="pt-6 px-6">
                                    <div className="flex items-center space-x-3">
                                        <Avatar className="h-9 w-9 border border-emerald-400/30">
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white font-bold">
                                                DINS
                                            </AvatarFallback>
                                        </Avatar>
                                        <DrawerTitle className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                            DINS 2025
                                        </DrawerTitle>
                                    </div>
                                </DrawerHeader>

                                <div className="flex flex-col space-y-2 mt-8 px-6">
                                    {[
                                        { name: "About", id: "about" },
                                        { name: "Schedule", id: "schedule" },
                                        { name: "Speakers", id: "speakers" },
                                        { name: "Partners", id: "partners" },
                                        { name: "FAQs", id: "faqs" },
                                    ].map((item) => (
                                        <AnchorLink
                                            key={item.id}
                                            href={`#${item.id}`}
                                            offset={80}
                                            className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 flex items-center"
                                        >
                                            <span className="flex-1">
                                                {item.name}
                                            </span>
                                            <svg
                                                className="h-4 w-4 text-gray-500"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M9 5l7 7-7 7"
                                                />
                                            </svg>
                                        </AnchorLink>
                                    ))}
                                </div>

                                <DrawerFooter className="space-y-2">
                                    <AnchorLink
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScTZ-hp-i0fr51nNivRIInBJSYiiU4VIakaiFxULgAOoLECtw/viewform"
                                        offset={80}
                                        className="mt-4 px-4 py-3 rounded-lg text-center font-medium text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                                    >
                                        Register Now
                                    </AnchorLink>
                                    <DrawerClose asChild>
                                        <button className="w-full px-4 py-3 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 transition">
                                            Close
                                        </button>
                                    </DrawerClose>
                                </DrawerFooter>
                            </DrawerContent>
                        </Drawer>
                    </div>
                </div>
            </div>
        </nav>
    );
}
