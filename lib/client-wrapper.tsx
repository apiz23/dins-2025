"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import SmoothCursor from "@/components/ui/smooth-cursor";

export default function ClientWrapper() {
    const isMobile = useIsMobile();
    return !isMobile && <SmoothCursor />;
}
