import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import ClientWrapper from "@/lib/client-wrapper";

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
                <ClientWrapper>{children}</ClientWrapper>
            </body>
        </html>
    );
}
