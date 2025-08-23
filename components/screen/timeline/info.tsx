"use client";

import { BlurFade } from "@/components/magicui/blur-fade";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, CheckCircle, Download, File, Users } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    ScrollVelocityContainer,
    ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import utm from "@/public/images/unis/utm.png";
import uitm from "@/public/images/unis/uitm.png";
import usm from "@/public/images/unis/usm.png";
import um from "@/public/images/unis/um.png";
import ukm from "@/public/images/unis/ukm.png";
import utem from "@/public/images/unis/utem.png";
import uthm from "@/public/images/unis/uthm.png";
import ump from "@/public/images/unis/ump.png";

import r1 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0001.jpg";
import r2 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0002.jpg";
import r3 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0003.jpg";
import r4 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0004.jpg";
import r5 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0005.jpg";
import r6 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0006.jpg";
import r7 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0007.jpg";
import r8 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0008.jpg";
import r9 from "@/public/images/rules/Copy of DINS - Rules and regulations_page-0009.jpg";

import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Skeleton } from "@/components/ui/skeleton";

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

const rulesImages = [r1, r2, r3, r4, r5, r6, r7, r8, r9];

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
    const isMobile = useIsMobile();

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
                        <Carousel
                            orientation={isMobile ? "vertical" : "horizontal"}
                            className="w-full max-w-2xl md:max-w-5xl mx-auto my-20"
                            opts={{
                                align: "start",
                                loop: true,
                            }}
                            plugins={[
                                Autoplay({
                                    delay: 6000,
                                }),
                            ]}
                        >
                            <CarouselContent
                                className={
                                    isMobile
                                        ? "min-h-[260px] max-h-[350px]"
                                        : ""
                                }
                            >
                                {rulesImages.map((img, idx) => (
                                    <RuleImage key={idx} img={img} idx={idx} />
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>

                        <div className="max-w-2xl mx-auto text-center mb-20">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <File />
                            </div>
                            <h3 className="text-xl font-semibold text-slate-100 mb-2">
                                Complete Rulebook
                            </h3>
                            <p className="text-slate-600 mb-5">
                                Download the full rules document for detailed
                                information about competition guidelines,
                                judging criteria, and participant requirements.
                            </p>
                            <Link
                                href="https://drive.google.com/file/d/1wj1APt3gGEfpmITkb--l0-HAhewttlAw/view"
                                target="_blank"
                                className="block"
                            >
                                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2">
                                    <Download />
                                    View Full Rules (PDF)
                                </Button>
                            </Link>
                        </div>

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
                                                "Open to all university and high school students nationwide with valid student ID",
                                                "Teams of Individual or up to 5 members (cross-university teams NOT ALLOWED)",
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
                                <Card className="h-full bg-gradient-to-br from-gray-900/80 to-gray-800/90 border border-gray-700/50 shadow-lg hover:shadow-purple-500/20 transition-shadow duration-300 overflow-hidden">
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

                                    <CardContent className="relative">
                                        <div className="flex flex-col items-center justify-center h-40 p-4">
                                            <div className="relative">
                                                <div className="relative z-10 flex items-center">
                                                    <div className="mr-3 h-2 w-2 bg-emerald-400/60 rounded-full animate-ping"></div>
                                                    <p className="text-lg font-medium text-gray-300/90">
                                                        To Be Announced
                                                    </p>
                                                </div>

                                                <p className="text-sm text-gray-500/80 mt-2 text-center">
                                                    Check back later for updates
                                                </p>
                                            </div>
                                        </div>
                                        {/*<ul className="space-y-3 sm:space-y-4 text-gray-300 text-sm sm:text-base text-start">
                                            {[
                                                "Intensive 48-hour innovation sprint with milestones",
                                                "Daily expert mentorship sessions and workshops",
                                                "Final pitch showcase with RMXXXX in prizes",
                                            ].map((item, index) => (
                                                <motion.li
                                                    key={index}
                                                    className="flex items-start gap-3 sm:gap-4 bg-gray-800/50 rounded-lg p-3"
                                                >
                                                    <span className="text-purple-400 mt-0.5 flex-shrink-0">
                                                        <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                                                    </span>
                                                    <span className="leading-relaxed">
                                                        {item}
                                                    </span>
                                                </motion.li>
                                            ))}
                                        </ul>*/}
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
            className="max-w-6xl mx-auto mb-20 relative"
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

            <ScrollVelocityContainer className="overflow-hidden">
                <ScrollVelocityRow baseVelocity={5} direction={1}>
                    <div className="flex items-center gap-3">
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
                </ScrollVelocityRow>
            </ScrollVelocityContainer>
        </motion.div>
    );
};

export const RuleImage = ({
    img,
    idx,
}: {
    img: StaticImageData;
    idx: number;
}) => {
    const [loading, setLoading] = useState(true);

    return (
        <CarouselItem className="basis-full">
            <div className="flex justify-center p-2">
                {loading && (
                    <Skeleton className="h-[500px] w-full rounded-xl" />
                )}
                <Image
                    src={img}
                    alt={`Rule page ${idx + 1}`}
                    className={`rounded-xl shadow-lg object-contain transition-opacity duration-500 ${
                        loading ? "opacity-0" : "opacity-100"
                    }`}
                    width={6000}
                    height={3375}
                    onLoadingComplete={() => setLoading(false)}
                />
            </div>
        </CarouselItem>
    );
};
