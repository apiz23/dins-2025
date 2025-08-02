import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
    title: "DIGITAL INNOVATHON SYMPOSIUM",
    description: "DIGITAL INNOVATHON SYMPOSIUM",
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
                {children}
            </body>
        </html>
    );
}
