import { Lightbulb, Users, Target } from "lucide-react";

export default function AboutSection() {
    const highlights = [
        {
            icon: <Target className="w-8 h-8 text-emerald-400" />,
            title: "Our Mission",
            description:
                "Foster innovation and collaboration among students in data science and analytics while bridging the gap between academia and industry.",
        },
        {
            icon: <Lightbulb className="w-8 h-8 text-blue-400" />,
            title: "Innovation Focus",
            description:
                "Encourage creative thinking and innovative approaches to solve real-world data challenges using cutting-edge technologies.",
        },
        {
            icon: <Users className="w-8 h-8 text-emerald-400" />,
            title: "Collaboration",
            description:
                "Build a network of future data scientists and create lasting partnerships between students, academia, and industry.",
        },
    ];

    return (
        <section className="relative py-16 bg-black text-center text-white">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/20 blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-emerald-500/20 blur-3xl animate-pulse delay-300"></div>
                <div className="absolute bottom-1/4 right-3/4 w-28 h-28 rounded-full bg-purple-500/20 blur-3xl animate-pulse delay-500"></div>
                <div className="absolute top-2/4 left-1/5 w-44 h-44 rounded-full bg-purple-400/15 blur-3xl animate-pulse delay-200"></div>
            </div>
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    About MDIT x DOSM Datathon 2025
                </h2>
                <p className="text-gray-300 mb-4 leading-relaxed">
                    The Malaysia Data Innovation Talent x DOSM Datathon 2025 is
                    a premier national competition that brings together the
                    brightest minds from universities across Malaysia to tackle
                    real-world data challenges.
                </p>
                <p className="text-gray-300 leading-relaxed mb-12">
                    Organised in collaboration with the Department of Statistics
                    Malaysia (DOSM) and Statistics Association (inStats) at UiTM
                    Shah Alam, this competition encourages participants to
                    utilise official government datasets alongside other open
                    data sources to develop innovative, data-driven solutions
                    that address real-world national challenges.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
                        >
                            <div className="mb-4">{item.icon}</div>
                            <h3 className="text-lg font-semibold mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
