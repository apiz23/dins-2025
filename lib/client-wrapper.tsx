"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import SmoothCursor from "@/components/ui/smooth-cursor";
import SplashScreenWrapper from "@/components/screen/splash";
import { CommandMenu } from "@/components/cmd";

export default function ClientWrapper({
    children,
}: {
    children: React.ReactNode;
}) {
    const isMobile = useIsMobile();

    if (isMobile)
        return (
            <>
                <SplashScreenWrapper>{children}</SplashScreenWrapper>
            </>
        );

    return (
        <>
            <SplashScreenWrapper>
                <SmoothCursor />
                <CommandMenu />
                {children}
            </SplashScreenWrapper>
        </>
    );
}
