"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"; // make sure this path is correct

export default function Navbar() {
    return (
        <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black backdrop-blur-md border-b border-gray-800"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-shrink-0"
                    >
                        <Link href="/" className="flex items-center">
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                                DINS 2025
                            </span>
                        </Link>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/about"
                            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                        >
                            About
                        </Link>
                        <Link
                            href="/schedule"
                            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                        >
                            Schedule
                        </Link>
                        <Link
                            href="/speakers"
                            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                        >
                            Speakers
                        </Link>
                        <Link
                            href="/partners"
                            className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
                        >
                            Partners
                        </Link>

                        {/* CTA Button */}
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link
                                href="/register"
                                className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-medium hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                            >
                                Register Now
                            </Link>
                        </motion.div>
                    </div>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex items-center">
                        <Sheet>
                            <SheetTrigger asChild>
                                <button
                                    className="text-gray-300 hover:text-white focus:outline-none"
                                    aria-label="Open menu"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </SheetTrigger>

                            <SheetContent
                                side="right"
                                className="bg-black/95 text-white border-l border-gray-800"
                            >
                                <SheetHeader>
                                    <SheetTitle className="text-xl font-bold mb-4">
                                        Menu
                                    </SheetTitle>
                                </SheetHeader>

                                <div className="flex flex-col space-y-4 mt-6">
                                    {[
                                        "About",
                                        "Schedule",
                                        "Speakers",
                                        "Partners",
                                    ].map((item) => (
                                        <Link
                                            key={item}
                                            href={`/${item.toLowerCase()}`}
                                            className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-emerald-400 transition-colors"
                                        >
                                            {item}
                                        </Link>
                                    ))}
                                    <Link
                                        href="/register"
                                        className="block w-full px-3 py-2 mt-4 rounded-md text-center font-medium text-white bg-gradient-to-r from-blue-500 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
}
