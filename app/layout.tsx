import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ClientWrapper from "@/lib/client-wrapper";
import { ScrollProgress } from "@/components/magicui/scroll-progress";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["500", "700", "900"],
});

export const metadata: Metadata = {
    title: "Digital Innovathon Symposium",
    description:
        "The Digital Innovathon Symposium 2025 (DINS 2025) is a premier platform dedicated to showcasing the latest advancements in digital innovation, technology, and creative solutions for the future.",
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
                <Analytics />
                <Navbar />
                <ClientWrapper>
                    <ScrollProgress />
                    {children}
                </ClientWrapper>
            </body>
        </html>
    );
}
