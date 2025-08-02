import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SmoothCursor } from "@/components/ui/smooth-cursor";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "Digital Innovathon Symposium",
    description: "Digital Innovathon Symposium",
    icons: {
        icon: [
            {
                url: "/favicon.ico",
                href: "/favicon.ico",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.className}`}>
                <Navbar />
                <SmoothCursor />
                {children}
            </body>
        </html>
    );
}
