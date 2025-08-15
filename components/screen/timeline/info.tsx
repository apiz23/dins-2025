import { BlurFade } from "@/components/magicui/blur-fade";
import React from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Users } from "lucide-react";
import { Marquee } from "@/components/magicui/marquee";
import Image, { StaticImageData } from "next/image";
import utm from "@/public/images/unis/utm.png";
import uitm from "@/public/images/unis/uitm.png";
import usm from "@/public/images/unis/usm.png";
import um from "@/public/images/unis/um.png";
import ukm from "@/public/images/unis/ukm.png";
import utem from "@/public/images/unis/utem.png";
import uthm from "@/public/images/unis/uthm.png";
import ump from "@/public/images/unis/ump.png";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

const universities = [
    { name: "UTHM", img: uthm },
    { name: "UTM", img: utm },
    { name: "USM", img: usm },
    { name: "UM", img: um },
    { name: "UKM", img: ukm },
    { name: "UTEM", img: utem },
    { name: "UITM", img: uitm },
    { name: "UMP", img: ump },
];

type Props = {
    name: string;
    img: string | StaticImageData;
};

const UniLogoCard = ({ name, img }: Props) => {
    return (
        <div className="hover:shadow-lg hover:shadow-blue-500/20 transition-all bg-white p-4 rounded-md shadow-md min-w-[120px] w-28 sm:w-36 md:w-44 h-32 sm:h-36 md:h-40 flex flex-col items-center justify-center">
            <Image
                src={img}
                alt={name}
                width={200}
                height={200}
                className="w-full h-auto object-contain drop-shadow-md"
            />
        </div>
    );
};
export default function Info() {
    return (
        <>
            <div className="min-h-fit flex items-center justify-center px-4 sm:px-6 py-16 text-center bg-gradient-to-bl from-gray-900 to-black">
                <BlurFade delay={0.15} inView>
                    <div className="max-w-6xl mx-auto w-full p-4">
                        {/* Centered Header Section */}
                        <motion.div
                            className="text-center mt-20 mb-5"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block text-blue-400 font-medium mb-3 tracking-wider">
                                JOIN THE CHALLENGE
                            </span>
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
                                Participation{" "}
                                <span className="text-blue-400">Details</span>
                            </h2>
                            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                                Everything you need to know about joining our
                                innovation challenge
                            </p>
                        </motion.div>

                        {/* Two Column Content Below Title */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                            {/* Left Column - Team Formation */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.2,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/90 border border-gray-700/50 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>
                                            <div className="w-fit h-fit rounded-xl flex items-center justify-center space-x-3 bg-blue-900/20 px-4 py-2 border border-blue-500/20">
                                                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />
                                                <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-400">
                                                    Team Formation
                                                </h3>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base text-start">
                                            {[
                                                "Open to all university students nationwide with valid student ID",
                                                "Teams of Individual or up to 5 members (cross-university teams allowed)",
                                                "Single registration per team with all member details",
                                            ].map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start gap-3 sm:gap-4 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <span className="text-blue-400 mt-0.5 flex-shrink-0">
                                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </span>
                                                    <span className="leading-relaxed">
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>

                            {/* Right Column - Event Structure */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    duration: 0.5,
                                    ease: "easeOut",
                                }}
                                whileHover={{ y: -5 }}
                                className="h-full"
                            >
                                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/90 border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300">
                                    <CardHeader>
                                        <CardTitle>
                                            <div className="w-fit h-fit rounded-xl flex items-center justify-center space-x-3 bg-purple-900/20 px-4 py-2 border border-purple-500/20">
                                                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />
                                                <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-purple-400">
                                                    Event Structure
                                                </h3>
                                            </div>
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base text-start">
                                            {[
                                                "Intensive 48-hour innovation sprint with milestones",
                                                "Daily expert mentorship sessions and workshops",
                                                "Final pitch showcase with RMXXXX in prizes",
                                            ].map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start gap-3 sm:gap-4 bg-gray-800/50 rounded-lg p-3 hover:bg-gray-700/50 transition-colors"
                                                    whileHover={{ x: 5 }}
                                                >
                                                    <span className="text-purple-400 mt-0.5 flex-shrink-0">
                                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </span>
                                                    <span className="leading-relaxed">
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </div>
                    </div>
                </BlurFade>
            </div>
            <Universiti />
        </>
    );
}

export const Universiti = () => {
    return (
        <motion.div
            className="max-w-6xl mx-auto mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
        >
            <div className="text-center mb-10">
                <h3 className="text-2xl font-bold text-white mb-3">
                    Participating Universities
                </h3>
                <p className="text-gray-400 max-w-2xl mx-auto">
                    Open to students from every university in Malaysia — your
                    campus could be next to shine!
                </p>
            </div>

            <motion.div
                initial={{ x: "-10%" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="relative overflow-hidden"
            >
                {/* Left shadow gradient */}
                <div className="absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-black to-transparent pointer-events-none" />

                {/* Right shadow gradient */}
                <div className="absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-black to-transparent pointer-events-none" />

                <Marquee className="w-full" pauseOnHover={true}>
                    <div className="flex items-center py-2">
                        {universities.map((uni, index) => (
                            <motion.div
                                key={index}
                                className="px-5"
                                whileHover={{ scale: 1.08 }}
                                transition={{ duration: 0.2 }}
                            >
                                <UniLogoCard name={uni.name} img={uni.img} />
                            </motion.div>
                        ))}
                    </div>
                </Marquee>
            </motion.div>
        </motion.div>
    );
};
