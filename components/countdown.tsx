"use client";

import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

type CountdownProgressProps = {
    endDate: string | Date;
};

export default function CountdownProgress({ endDate }: CountdownProgressProps) {
    const [progress, setProgress] = useState(0);
    const [daysLeft, setDaysLeft] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const now = new Date();
            const end = new Date(endDate);

            const totalDuration = Math.max(end.getTime() - now.getTime(), 0);
            const totalDays = Math.ceil(
                (end.getTime() - now.setHours(0, 0, 0, 0)) /
                    (1000 * 60 * 60 * 24)
            );
            const daysPassed = Math.ceil(
                (now.getTime() - now.setHours(0, 0, 0, 0)) /
                    (1000 * 60 * 60 * 24)
            );

            const start = new Date(now);
            start.setDate(start.getDate() - daysPassed);

            const fullDuration = end.getTime() - start.getTime();
            const elapsed = now.getTime() - start.getTime();

            const progressPercentage = Math.min(
                (elapsed / fullDuration) * 100,
                100
            );

            setProgress(progressPercentage);
            setDaysLeft(Math.max(totalDays, 0));
        };

        updateProgress();

        const interval = setInterval(updateProgress, 1000 * 60 * 60);

        return () => clearInterval(interval);
    }, [endDate]);

    return (
        <div className="space-y-2">
            <p className="text-sm text-muted-foreground">
                {daysLeft} day{daysLeft !== 1 ? "s" : ""} remaining
            </p>
        </div>
    );
}
