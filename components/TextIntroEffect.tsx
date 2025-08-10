"use client";
import React from "react";
import { motion } from "motion/react";

export const TextIntroEffect = ({
    text,
    duration = 3, // total animation duration
}: {
    text: string;
    duration?: number;
    className?: string;
}) => {
    return (
        <svg
            width="100%"
            height="100%"
            viewBox="0 0 300 100"
            xmlns="http://www.w3.org/2000/svg"
            className="select-none"
        >
            <defs>
                {/* Gradient for the revealed stroke */}
                <linearGradient
                    id="textGradient"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset="0%" stopColor="#eab308" />
                    <stop offset="25%" stopColor="#ef4444" />
                    <stop offset="50%" stopColor="#3b82f6" />
                    <stop offset="75%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                </linearGradient>

                {/* Radial mask animation from small to large */}
                <motion.radialGradient
                    id="revealMask"
                    gradientUnits="userSpaceOnUse"
                    initial={{ r: "0%" }}
                    animate={{ r: "150%" }}
                    transition={{
                        duration: duration,
                        ease: "easeInOut",
                    }}
                >
                    <stop offset="0%" stopColor="white" />
                    <stop offset="100%" stopColor="black" />
                </motion.radialGradient>

                <mask id="textMask">
                    <rect
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        fill="url(#revealMask)"
                    />
                </mask>
            </defs>

            {/* Outline draw animation */}
            <motion.text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                strokeWidth="0.3"
                className="fill-transparent stroke-neutral-200 font-[helvetica] text-7xl font-bold dark:stroke-neutral-800"
                initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
                animate={{
                    strokeDashoffset: 0,
                    strokeDasharray: 1000,
                }}
                transition={{
                    duration: duration,
                    ease: "easeInOut",
                }}
            >
                {text}
            </motion.text>

            {/* Colored gradient reveal */}
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dominantBaseline="middle"
                stroke="url(#textGradient)"
                strokeWidth="0.3"
                mask="url(#textMask)"
                className="fill-transparent font-[helvetica] text-7xl font-bold"
            >
                {text}
            </text>
        </svg>
    );
};
