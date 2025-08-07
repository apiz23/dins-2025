"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import SmoothCursor from "@/components/ui/smooth-cursor";

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const isMobile = useIsMobile();

    if (isMobile) return <>{children}</>;

    return (
        <>
            <SmoothCursor />
            {children}
        </>
    );
}
