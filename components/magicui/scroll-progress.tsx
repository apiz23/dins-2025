"use client";

import { cn } from "@/lib/utils";
import { motion, MotionProps, useScroll } from "motion/react";
import React from "react";

type ScrollProgressProps = Omit<
    React.HTMLAttributes<HTMLElement>,
    keyof MotionProps
>;

const ScrollProgressComponent = (
    { className, ...props }: ScrollProgressProps,
    ref: React.Ref<HTMLDivElement>
) => {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div
            ref={ref}
            className={cn(
                "fixed inset-x-0 top-0 z-50 h-[2px] origin-left bg-gradient-to-r from-[#A97CF8] via-[#F38CB8] to-[#FDCC92]",
                className
            )}
            style={{
                scaleX: scrollYProgress,
            }}
            {...props}
        />
    );
};

ScrollProgressComponent.displayName = "ScrollProgress";

export const ScrollProgress = React.forwardRef(ScrollProgressComponent);
