// components/SpeakersSection.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Twitter, Linkedin, Globe, Github } from "lucide-react";
import { AnimatedGradientText } from "../magicui/animated-gradient-text";

type SocialPlatform = "twitter" | "linkedin" | "website" | "github";

interface SocialLink {
    platform: SocialPlatform;
    url: string;
}

interface Speaker {
    id: number;
    name: string;
    bio: string;
    image: string;
    socialLinks: SocialLink[];
    tba?: boolean;
}

const SpeakerItem = ({ speaker }: { speaker: Speaker }) => {
    const iconComponents = {
        twitter: Twitter,
        linkedin: Linkedin,
        website: Globe,
        github: Github,
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center text-center group"
        >
            <div className="relative h-48 w-48 rounded-full overflow-hidden mb-6 border-4 border-transparent group-hover:border-indigo-400/20 transition-all duration-300">
                {speaker.tba ? (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-700 flex items-center justify-center">
                        <span className="text-gray-300 text-xl font-medium">
                            TBA
                        </span>
                    </div>
                ) : (
                    <>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10" />
                        <Image
                            src={speaker.image}
                            alt={speaker.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </>
                )}
            </div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                {speaker.name}
            </h3>
            <p className="text-gray-300 mb-4 max-w-md">{speaker.bio}</p>
            {!speaker.tba && (
                <div className="flex space-x-4">
                    {speaker.socialLinks.map((link, index) => {
                        const IconComponent = iconComponents[link.platform];
                        return (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-400 hover:text-white transition-colors hover:bg-indigo-600/20 p-2 rounded-full"
                                aria-label={`${speaker.name}'s ${link.platform}`}
                            >
                                <IconComponent className="w-5 h-5" />
                            </a>
                        );
                    })}
                </div>
            )}
        </motion.div>
    );
};

const speakers: Speaker[] = [
    {
        id: 1,
        name: "Dr. Sarah Johnson",
        bio: "AI Researcher with 10+ years experience in machine learning and neural networks.",
        image: "https://github.com/shadcn.png",
        socialLinks: [
            { platform: "twitter", url: "#" },
            { platform: "website", url: "#" },
        ],
    },
    {
        id: 2,
        name: "PROF. Ts. Dr. MOHD FARHAN BIN MD. FUDZEE",
        bio: "Dean of FSKTM, UTHM, specializing in Multimedia Computing, Digitalization, and ICT Governance.",
        image: "/images/speakers/2.png",
        socialLinks: [
            { platform: "twitter", url: "#" },
            { platform: "linkedin", url: "#" },
        ],
    },
    {
        id: 3,
        name: "To Be Announced",
        bio: "Special guest speaker - details coming soon!",
        image: "",
        socialLinks: [],
        tba: true,
    },
];

export default function Speakers() {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <AnimatedGradientText
                        speed={1.2}
                        colorFrom="#3b82f6"
                        colorTo="#10b981"
                        className="text-4xl font-bold sm:text-5xl mb-4"
                    >
                        Featured Speakers
                    </AnimatedGradientText>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Meet the visionaries shaping the future at our event
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
                    {speakers.map((speaker) => (
                        <SpeakerItem key={speaker.id} speaker={speaker} />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="text-center mt-16"
                >
                    <p className="text-gray-400 text-lg">
                        Stay tuned for more speaker announcements
                    </p>
                    <div className="mt-4 h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
                </motion.div>
            </div>
        </>
    );
}
