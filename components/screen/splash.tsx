"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TextIntroEffect } from "../TextIntroEffect";

export default function SplashScreenWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const [showSplash, setShowSplash] = useState(true);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });

    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });

        const timer = setTimeout(() => {
            setShowSplash(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
    } Q${dimension.width / 2} ${dimension.height + 500} 0 ${
        dimension.height
    } L0 0`;

    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
    } Q${dimension.width / 2} ${dimension.height - 200} 0 ${
        dimension.height
    } L0 0`;

    const finalPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${
        dimension.height
    } Q${dimension.width / 2} ${dimension.height - 1000} 0 ${
        dimension.height
    } L0 0`;

    const curve = {
        initial: {
            d: initialPath,
            transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1] as const,
            },
        },
        animate: {
            d: targetPath,
            transition: {
                duration: 1.5,
                ease: "easeOut" as const,
            },
        },
        exit: {
            d: finalPath,
            transition: {
                duration: 1.2,
                ease: [0.76, 0, 0.24, 1] as const,
                delay: 0.3,
            },
        },
    };

    const containerVariants = {
        initial: { opacity: 1 },
        exit: {
            opacity: 0,
            transition: {
                when: "afterChildren" as const,
                duration: 0.8,
                ease: "easeInOut" as const,
                delay: 0.5,
            },
        },
    };

    return (
        <>
            <AnimatePresence mode="wait">
                {showSplash && dimension.width > 0 && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black"
                        variants={containerVariants}
                        initial="initial"
                        exit="exit"
                    >
                        {/* Text animation */}
                        <motion.div
                            className="absolute inset-0 z-10 flex items-center justify-center"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{
                                opacity: 1,
                                y: 0,
                                transition: {
                                    duration: 1,
                                    delay: 0.3,
                                },
                            }}
                            exit={{
                                opacity: 0,
                                y: -50,
                                scale: 1.2,
                                transition: {
                                    duration: 0.6,
                                    ease: "easeInOut",
                                },
                            }}
                        >
                            <TextIntroEffect text="DINS" duration={1.5} />
                        </motion.div>

                        {/* Animated curve */}
                        <svg
                            className="absolute top-0 w-full z-0"
                            style={{ height: `calc(100% + 500px)` }}
                        >
                            <motion.path
                                variants={curve}
                                initial="initial"
                                animate="animate"
                                exit="exit"
                                fill="#030712"
                            />
                        </svg>

                        {/* Particle effects */}
                        <motion.div
                            className="absolute inset-0 overflow-hidden"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 0.3,
                                transition: { delay: 1.5, duration: 0.5 },
                            }}
                            exit={{
                                opacity: 0,
                                transition: { duration: 0.3 },
                            }}
                        >
                            {[...Array(30)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute rounded-full bg-white"
                                    style={{
                                        width: Math.random() * 5 + 2 + "px",
                                        height: Math.random() * 5 + 2 + "px",
                                        top: Math.random() * 100 + "%",
                                        left: Math.random() * 100 + "%",
                                    }}
                                    initial={{
                                        opacity: 0,
                                        y: Math.random() * 100 - 50,
                                        x: Math.random() * 100 - 50,
                                    }}
                                    animate={{
                                        opacity: [0, 0.8, 0],
                                        y: [0, Math.random() * 200 - 100],
                                        x: [0, Math.random() * 200 - 100],
                                        transition: {
                                            duration: Math.random() * 3 + 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 1.5,
                                            ease: "linear",
                                        },
                                    }}
                                />
                            ))}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{
                    opacity: showSplash ? 0 : 1,
                    transition: {
                        duration: 1,
                        delay: showSplash ? 0 : 0.8,
                    },
                }}
            >
                {children}
            </motion.div>
        </>
    );
}
