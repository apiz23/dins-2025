import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import {
    CalendarCheck,
    FileText,
    Info,
    UploadCloud,
    Download,
    Clock,
} from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Phase2() {
    return (
        <>
            <BlurFade delay={0.45} inView>
                <div className="max-w-5xl mx-auto py-16 px-8 sm:px-6 lg:px-8 space-y-6">
                    {/* Deadline Alert - Enhanced */}
                    <div className="bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 p-8 rounded-2xl border border-indigo-500/30 backdrop-blur-sm shadow-2xl mb-12 transform transition-all hover:scale-[1.01] hover:shadow-indigo-500/10">
                        <div className="flex flex-col sm:flex-row items-center gap-6">
                            <div className="bg-gradient-to-br from-indigo-500/30 to-purple-600/30 p-4 rounded-xl border border-indigo-400/40 flex-shrink-0">
                                <CalendarCheck className="h-8 w-8 text-indigo-300" />
                            </div>
                            <div className="flex-1 text-center sm:text-left">
                                <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-indigo-200 bg-clip-text text-transparent mb-2">
                                    Abstract & Draft Submission Deadline
                                </h3>
                                <p className="text-xl font-semibold text-indigo-200">
                                    20 Oct 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submission Card - Clean & Modern */}
                    <div className="bg-gradient-to-br from-gray-800/60 to-gray-900/70 p-8 rounded-2xl border border-gray-600/40 backdrop-blur-sm shadow-xl">
                        {/* Format Preview - Prominent */}
                        <div className="mb-8 p-6 bg-gradient-to-r from-blue-900/30 to-indigo-900/30 rounded-xl border border-blue-500/30">
                            <div className="flex items-start gap-4">
                                <div className="bg-blue-500/20 p-3 rounded-lg border border-blue-500/30 flex-shrink-0 mt-1">
                                    <FileText className="h-5 w-5 text-blue-300" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-semibold text-blue-100 mb-3">
                                        Format Reference Document
                                    </h4>
                                    <p className="text-blue-100/80 leading-relaxed">
                                        This document provides the current
                                        format structure and layout guidelines.
                                        Use it as a reference while preparing
                                        your submission. Final templates and
                                        detailed requirements will be provided
                                        when the portal opens.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons - Centered & Enhanced */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button
                                asChild
                                className="flex-1 max-w-sm py-4 px-6 bg-gradient-to-r from-blue-600/70 to-indigo-600/70 hover:from-blue-500/80 hover:to-indigo-500/80 rounded-xl text-white font-semibold flex items-center justify-center gap-3 transition-all border border-blue-400/40 shadow-lg hover:shadow-blue-500/20 cursor-not-allowed opacity-80"
                            >
                                <Link
                                    target="_blank"
                                    href="https://forms.gle/8u7P6a5r63LgtcG28"
                                    rel="noopener noreferrer"
                                >
                                    <UploadCloud className="h-5 w-5" />
                                    <span className="text-base">
                                        Submission Portal
                                    </span>
                                </Link>
                            </Button>
                            <Button
                                asChild
                                className="flex-1 max-w-sm py-4 px-6 bg-gradient-to-r from-gray-700/70 to-gray-800/70 hover:from-gray-600/80 hover:to-gray-700/80 rounded-xl text-neutral-100 font-semibold flex items-center justify-center gap-3 transition-all border border-gray-500/40 shadow-lg hover:shadow-gray-500/20"
                            >
                                <Link
                                    href="/file/AITCS-English-Ver-1-2025.doc"
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Download className="h-5 w-5" />
                                    <span className="text-base">
                                        Download Guidelines
                                    </span>
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </>
    );
}
