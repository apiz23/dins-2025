import { BlurFade } from "@/components/magicui/blur-fade";
import { Button } from "@/components/ui/button";
import {
    CalendarCheck,
    File,
    FileText,
    Info,
    FileInput,
    UploadCloud,
    Type,
    Download,
} from "lucide-react";
import React from "react";

export default function Phase2() {
    return (
        <>
            <BlurFade delay={0.45} inView>
                <div className="max-w-6xl mx-auto py-16 px-8 sm:px-6 lg:px-8 space-y-4">
                    {/* Deadline Alert - Simplified */}

                    <div className="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 p-8 rounded-2xl border border-gray-700 backdrop-blur-sm shadow-xl mb-12 transform transition-all hover:scale-[1.01]">
                        <div className="flex flex-col sm:flex-row items-start gap-6">
                            <div className="bg-indigo-500/20 p-4 rounded-xl border border-indigo-500/30 flex-shrink-0">
                                <CalendarCheck className="h-8 w-8 text-indigo-400" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-semibold text-white mb-2">
                                    Abstract & Draft Submission Deadline
                                </h3>
                                <p className="text-lg text-gray-300 mb-4">
                                    20 Oct 2025
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Submission Card - Streamlined */}
                    <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/60 p-6 rounded-xl border border-gray-700 backdrop-blur-sm">
                        {/* Key Requirements */}
                        <div className="mb-6">
                            <h4 className="text-sm font-medium text-neutral-200 mb-3 flex items-center gap-2">
                                <Info className="h-4 w-4 text-blue-400" />
                                Key Requirements
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                <div className="flex items-center gap-2 text-sm text-neutral-300">
                                    <FileText className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                    PDF format only
                                </div>
                                <div className="flex items-center gap-2 text-sm text-neutral-300">
                                    <File className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                    Max 5MB file size
                                </div>
                                <div className="flex items-center gap-2 text-sm text-neutral-300">
                                    <Type className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                    12pt minimum font
                                </div>
                                <div className="flex items-center gap-2 text-sm text-neutral-300">
                                    <FileInput className="h-4 w-4 text-blue-400 flex-shrink-0" />
                                    Conference portal submission
                                </div>
                            </div>
                        </div>

                        {/* Action Buttons - More prominent */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Button
                                disabled
                                className="flex-1 py-3 px-4 bg-blue-600/90 hover:bg-blue-500 rounded-lg text-white font-medium flex items-center justify-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/20"
                            >
                                <UploadCloud className="h-4 w-4" />
                                Submit Now
                            </Button>
                            <Button
                                disabled
                                className="flex-1 py-3 px-4 bg-gray-700/80 hover:bg-gray-600/90 rounded-lg text-neutral-100 font-medium flex items-center justify-center gap-2 transition-all border border-gray-600/50"
                            >
                                <Download className="h-4 w-4" />
                                Download Guidelines
                            </Button>
                        </div>
                    </div>
                </div>
            </BlurFade>
        </>
    );
}
