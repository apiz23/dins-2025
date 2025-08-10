"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { TextIntroEffect } from "../TextIntroEffect";
import { useIsMobile } from "@/hooks/use-mobile";

export default function SplashScreenWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showSplash, setShowSplash] = useState(true);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const isMobile = useIsMobile();

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
    } Q${dimension.width / 2} ${dimension.height + 300} 0 ${
        dimension.height
    } L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
    } Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
            },
        },
        exit: {
            d: targetPath,
            transition: {
                duration: 0.7,
                ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
                delay: 0.3,
            },
        },
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {showSplash && dimension.width > 0 && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center"
                        initial={{ top: 0 }}
                        exit={{ top: "-100vh" }}
                        transition={{
                            duration: 0.8,
                            ease: [0.76, 0, 0.24, 1],
                            delay: 0.2,
                        }}
                    >
                        {/* Text above curve */}
                        <div className="absolute inset-0 z-10">
                            <TextIntroEffect
                                text="DINS"
                                duration={2}
                            />
                        </div>

                        {/* Yellow curve */}
                        <svg
                            className="absolute top-0 w-full z-0"
                            style={{ height: `calc(100% + 300px)` }}
                        >
                            <motion.path
                                variants={curve}
                                initial="initial"
                                exit="exit"
                                fill="#000000"
                            />
                        </svg>
                    </motion.div>
                )}
            </AnimatePresence>

            <div
                className={`${
                    showSplash ? "opacity-0" : "opacity-100"
                } transition-opacity duration-500`}
            >
                {children}
            </div>
        </>
    );
}
