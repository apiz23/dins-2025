"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
import { ArrowRight, PanelBottomOpen, User } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import dinsLogo from "@/public/icon/android-chrome-512x512.png";
import Link from "next/link";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";

export default function Navbar() {
    const isMobile = useIsMobile();
    const [scrolled, setScrolled] = useState(false);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <AnimatePresence>
            {isMounted && (
                <motion.nav
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="w-full fixed top-0 z-50 bg-transparent"
                >
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
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex-shrink-0"
                            >
                                <AnchorLink href="#hero" offset={80}>
                                    <div className="flex items-center space-x-3 cursor-pointer">
                                        <Avatar className="h-9 w-9 border border-emerald-400/30">
                                            <AvatarImage src={dinsLogo.src} />
                                            <AvatarFallback className="bg-gradient-to-br from-blue-600 to-emerald-500 text-white font-bold">
                                                DINS
                                            </AvatarFallback>
                                        </Avatar>
                                        <span className="hidden md:block text-xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent tracking-tight">
                                            DIGITAL INNOVATHON SYMPOSIUM
                                        </span>
                                    </div>
                                </AnchorLink>
                            </motion.div>

                            {/* Desktop Nav */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{
                                    delay: 0.4,
                                    staggerChildren: 0.1,
                                }}
                                className={`hidden lg:flex items-center space-x-1 ${
                                    isMobile ? "invisible" : "visible"
                                }`}
                            >
                                {[
                                    { name: "About", id: "about" },
                                    { name: "Schedule", id: "schedule" },
                                    { name: "FAQs", id: "faqs" },
                                ].map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            delay: 0.4 + index * 0.1,
                                        }}
                                    >
                                        <AnchorLink
                                            href={`#${item.id}`}
                                            offset={80}
                                            className="relative px-4 py-2 text-sm font-medium group"
                                        >
                                            <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                                                {item.name}
                                            </span>
                                            <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" />
                                        </AnchorLink>
                                    </motion.div>
                                ))}
                                <Dialog>
                                    <DialogTrigger className="relative text-sm font-medium group">
                                        <Button className="bg-transparent text-gray-300 group-hover:text-white transition-colors duration-200">
                                            Contact
                                        </Button>
                                        <span className="absolute bottom-1 left-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-4/5 group-hover:left-[10%] transition-all duration-300" />
                                    </DialogTrigger>
                                    <DialogContent className="bg-black">
                                        <DialogHeader>
                                            <DialogTitle className="text-white">
                                                Contact our team
                                            </DialogTitle>
                                            <DialogDescription>
                                                Have questions or need
                                                assistance? Contact our team
                                                directly using the details
                                                below.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="space-y-4">
                                            {/* Contact 1 */}
                                            <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-blue-500 flex justify-between items-center">
                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 bg-blue-500/10 rounded-full">
                                                        <User className="h-4 w-4 text-blue-400" />
                                                    </div>
                                                    <div>
                                                        <p className="flex flex-wrap items-center gap-2 font-medium text-white">
                                                            Ahmad Firas
                                                            <span className="text-xs px-2 py-0.5 bg-gray-700 rounded-full text-gray-300">
                                                                Program Director
                                                            </span>
                                                        </p>
                                                        <p className="text-sm text-gray-400">
                                                            011-2176 8812
                                                        </p>
                                                    </div>
                                                </div>
                                                <Link
                                                    href="https://wa.me/601121768812"
                                                    target="_blank"
                                                    className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500 hover:text-white transition-colors"
                                                >
                                                    Contact
                                                </Link>
                                            </div>

                                            {/* Contact 2 */}
                                            <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
                                                <div className="flex items-start gap-3">
                                                    <div className="p-2 bg-purple-500/10 rounded-full">
                                                        <User className="h-4 w-4 text-purple-400" />
                                                    </div>
                                                    <div>
                                                        <p className="flex flex-wrap items-center gap-2 font-medium text-white">
                                                            Shaamalan
                                                            <span className="text-xs px-2 py-0.5 bg-gray-700 rounded-full text-gray-300">
                                                                Assistant
                                                                Director
                                                            </span>
                                                        </p>
                                                        <p className="text-sm text-gray-400">
                                                            016-360 5017
                                                        </p>
                                                    </div>
                                                </div>
                                                <Link
                                                    href="https://wa.me/60163605017"
                                                    target="_blank"
                                                    className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500 hover:text-white transition-colors"
                                                >
                                                    Contact
                                                </Link>
                                            </div>

                                            <p className="text-xs text-gray-500 text-center mt-2">
                                                We&apos;re happy to help with
                                                any questions
                                            </p>
                                        </div>
                                    </DialogContent>
                                </Dialog>
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                >
                                    <Link
                                        href="https://docs.google.com/forms/d/e/1FAIpQLScTZ-hp-i0fr51nNivRIInBJSYiiU4VIakaiFxULgAOoLECtw/viewform"
                                        target="_blank"
                                        className="ml-2 px-6 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                                    >
                                        Register
                                    </Link>
                                </motion.div>
                            </motion.div>

                            {/* Mobile Nav - Drawer */}
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="lg:hidden flex items-center"
                            >
                                <Drawer>
                                    <DrawerTrigger asChild>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
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
                                                    <AvatarImage
                                                        src={dinsLogo.src}
                                                    />
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
                                                {
                                                    name: "Schedule",
                                                    id: "schedule",
                                                },
                                                { name: "FAQs", id: "faqs" },
                                            ].map((item, index) => (
                                                <motion.div
                                                    key={item.id}
                                                    initial={{
                                                        opacity: 0,
                                                        x: 20,
                                                    }}
                                                    animate={{
                                                        opacity: 1,
                                                        x: 0,
                                                    }}
                                                    transition={{
                                                        delay:
                                                            0.1 + index * 0.1,
                                                    }}
                                                >
                                                    <AnchorLink
                                                        href={`#${item.id}`}
                                                        offset={80}
                                                        className="px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 flex items-center"
                                                    >
                                                        <span className="flex-1">
                                                            {item.name}
                                                        </span>
                                                        <ArrowRight />
                                                    </AnchorLink>
                                                </motion.div>
                                            ))}

                                            {/* Contact - Same look but DialogTrigger */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{
                                                    delay: 0.1 + 3 * 0.1,
                                                }} // after last link
                                            >
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <button className="w-full px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors duration-200 flex justify-between">
                                                            Contact
                                                            <ArrowRight />
                                                        </button>
                                                    </DialogTrigger>

                                                    <DialogContent className="bg-black">
                                                        <DialogHeader>
                                                            <DialogTitle className="text-white">
                                                                Contact our team
                                                            </DialogTitle>
                                                            <DialogDescription>
                                                                Have questions
                                                                or need
                                                                assistance?
                                                                Contact our team
                                                                directly using
                                                                the details
                                                                below.
                                                            </DialogDescription>
                                                        </DialogHeader>

                                                        <div className="space-y-4">
                                                            {/* Contact 1 */}
                                                            <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-blue-500 flex justify-between items-center">
                                                                <div className="flex items-start gap-3">
                                                                    <div className="p-2 bg-blue-500/10 rounded-full">
                                                                        <User className="h-4 w-4 text-blue-400" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="flex flex-wrap items-center gap-2 font-medium text-white">
                                                                            Ahmad
                                                                            Firas
                                                                            <span className="text-xs px-2 py-0.5 bg-gray-700 rounded-full text-gray-300">
                                                                                Program
                                                                                Director
                                                                            </span>
                                                                        </p>
                                                                        <p className="text-sm text-gray-400">
                                                                            011-2176
                                                                            8812
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <Link
                                                                    href="https://wa.me/601121768812"
                                                                    target="_blank"
                                                                    className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500 hover:text-white transition-colors"
                                                                >
                                                                    Contact
                                                                </Link>
                                                            </div>

                                                            {/* Contact 2 */}
                                                            <div className="p-3 bg-gray-800/50 rounded-lg border-l-4 border-purple-500 flex justify-between items-center">
                                                                <div className="flex items-start gap-3">
                                                                    <div className="p-2 bg-purple-500/10 rounded-full">
                                                                        <User className="h-4 w-4 text-purple-400" />
                                                                    </div>
                                                                    <div>
                                                                        <p className="flex flex-wrap items-center gap-2 font-medium text-white">
                                                                            Shaamalan
                                                                            <span className="text-xs px-2 py-0.5 bg-gray-700 rounded-full text-gray-300">
                                                                                Assistant
                                                                                Director
                                                                            </span>
                                                                        </p>
                                                                        <p className="text-sm text-gray-400">
                                                                            016-360
                                                                            5017
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <Link
                                                                    href="https://wa.me/60163605017"
                                                                    target="_blank"
                                                                    className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 rounded-lg text-sm font-medium hover:bg-emerald-500 hover:text-white transition-colors"
                                                                >
                                                                    Contact
                                                                </Link>
                                                            </div>

                                                            <p className="text-xs text-gray-500 text-center mt-2">
                                                                We&apos;re happy
                                                                to help with any
                                                                questions
                                                            </p>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </motion.div>
                                        </div>

                                        <DrawerFooter className="space-y-2">
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.6 }}
                                            >
                                                <Link
                                                    href="https://docs.google.com/forms/d/e/1FAIpQLScTZ-hp-i0fr51nNivRIInBJSYiiU4VIakaiFxULgAOoLECtw/viewform"
                                                    target="_blank"
                                                    className="mt-4 px-4 py-3 rounded-lg w-full block text-center font-medium text-white bg-gradient-to-r from-blue-600 to-emerald-500 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300"
                                                >
                                                    Register Now
                                                </Link>
                                            </motion.div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.7 }}
                                            >
                                                <DrawerClose asChild>
                                                    <button className="w-full px-4 py-3 rounded-lg border border-gray-700 text-gray-300 hover:text-white hover:bg-gray-800/50 transition">
                                                        Close
                                                    </button>
                                                </DrawerClose>
                                            </motion.div>
                                        </DrawerFooter>
                                    </DrawerContent>
                                </Drawer>
                            </motion.div>
                        </div>
                    </div>
                </motion.nav>
            )}
        </AnimatePresence>
    );
}
