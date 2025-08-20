import { Lightbulb, Users, Target } from "lucide-react";
import { BlurFade } from "@/components/magicui/blur-fade";

export default function AboutSection() {
    const highlights = [
        {
            icon: <Target className="w-8 h-8 text-emerald-400" />,
            title: "Our Mission",
            description:
                "Empower individuals and communities to drive digital transformation through innovation, creativity, and impactful ideas.",
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
            title: "Innovation Focus",
            description:
                "Highlight emerging technologies, creative problem-solving, and forward-thinking strategies shaping the future of the digital era.",
        },
        {
            icon: <Users className="w-8 h-8 text-emerald-400" />,
            title: "Collaboration",
            description:
                "Bring together industry leaders, academics, innovators, and students to foster meaningful partnerships and shared growth.",
        },
    ];

    return (
        <section
            className="relative py-16 px-6 bg-black text-center text-white"
            id="about"
        >
            {/* Decorative background blur elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 right-3/4 w-28 h-28 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-500"></div>
                <div className="absolute top-2/4 left-1/5 w-44 h-44 rounded-full bg-purple-400/15 blur-3xl animate-pulse delay-200"></div>
            </div>

            <div className="max-w-6xl mx-auto px-4">
                <div className="mx-auto max-w-3xl">
                    <BlurFade delay={0.1} inView>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            About Digital Innovathon Symposium 2025
                        </h2>
                    </BlurFade>

                    <BlurFade delay={0.2} inView>
                        <p className="text-gray-300 mb-4 leading-relaxed md:text-center text-justify">
                            The Digital Innovathon Symposium 2025 (DINS 2025) is
                            a premier platform dedicated to showcasing the
                            latest advancements in digital innovation,
                            technology, and creative solutions for the future.
                        </p>
                    </BlurFade>

                    <BlurFade delay={0.3} inView>
                        <p className="text-gray-300 leading-relaxed mb-12 md:text-center text-justify">
                            Bringing together visionaries from academia,
                            industry, government, and the startup ecosystem,
                            DINS 2025 encourages knowledge sharing, networking,
                            and collaborative projects that push the boundaries
                            of digital transformation across multiple sectors.
                        </p>
                    </BlurFade>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <BlurFade key={index} delay={0.4 + index * 0.15} inView>
                            <div className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                                <div className="mb-4">{item.icon}</div>
                                <h3 className="text-lg font-semibold mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        </BlurFade>
                    ))}
                </div>
            </div>
        </section>
    );
}
