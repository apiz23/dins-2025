import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function HorizontolInfo() {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const sections = gsap.utils.toArray<HTMLElement>(".panel");
        const container = document.querySelector(".container");

        if (!container || sections.length === 0) return;

        const ctx = gsap.context(() => {
            gsap.to(sections, {
                xPercent: -100 * (sections.length - 1),
                ease: "none",
                scrollTrigger: {
                    trigger: container,
                    pin: true,
                    scrub: 1,
                    snap: 1 / (sections.length - 1),
                    end: () =>
                        "+=" + (container.scrollWidth - window.innerWidth),
                    markers: false,
                },
            });
        });
        return () => ctx.revert();
    }, []);

    return (
        <>
            {/* Horizontal Scroll Section */}
            <div className="container flex h-screen w-[400vw]">
                {/* Panel 1 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 to-blue-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        Innovation Hub
                    </h2>
                </div>

                {/* Panel 2 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 to-emerald-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        Digital Transformation
                    </h2>
                </div>

                {/* Panel 3 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-purple-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        100+ Innovators
                    </h2>
                </div>

                {/* Panel 4 */}
                <div className="panel flex-shrink-0 w-screen h-screen flex items-center justify-center bg-gradient-to-br from-pink-900 to-pink-600">
                    <h2 className="text-4xl md:text-6xl font-bold text-white">
                        30+ Global Speakers
                    </h2>
                </div>
            </div>
        </>
    );
}
