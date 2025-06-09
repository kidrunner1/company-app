"use client";
import React, { useEffect,useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const portfolioHighlights = [
    {
        id: 1,
        category: "Web Application",
        title: "CHEMIMONITORING",
        description: "A full-featured online store with robust backend and intuitive UI.",
        imageUrl: "https://placehold.co/600x400/3B82F6/FFFFFF?text=CHEMIMONITORING",
    },
    {
        id: 2,
        category: "Web Application",
        title: "More Projects Coming Soon!",
        description: "More Projects Coming Soon!.",
        imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=More Projects Coming Soon!",
    },
    {
        id: 3,
        category: "UI/UX Design",
        title: "More Projects Coming Soon!",
        description: "More Projects Coming Soon!.",
        imageUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=More Projects Coming Soon!",
    },
    {
        id: 4,
        category: "Branding",
        title: "More Projects Coming Soon!",
        description: "More Projects Coming Soon!.",
        imageUrl: "https://placehold.co/600x400/EC4899/FFFFFF?text=More Projects Coming Soon!",
    },
];

// Duplicate for seamless loop
const duplicatedPortfolioHighlights = [...portfolioHighlights, ...portfolioHighlights];

// Sub-component for individual project cards in the marquee
const ProjectHighlightCard = ({ category, title, description, imageUrl }) => (
    <div
        className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out min-w-[320px] sm:min-w-[350px] flex-shrink-0 group cursor-pointer overflow-hidden"
    >
        <div className="w-full h-48 mb-4 rounded-lg overflow-hidden">
            <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
        </div>
        <span className="text-xs font-semibold uppercase text-blue-500 dark:text-sky-400 tracking-wider">{category}</span>
        <h4 className="text-xl font-bold text-slate-800 dark:text-white mt-1 mb-2 group-hover:text-blue-600 dark:group-hover:text-sky-300 transition-colors">
            {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

export default function PortfolioPage() {

    const [year, setYear] = useState("");

    useEffect(() => {
        setYear(new Date().getFullYear().toString());
    }, []);

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 50,
        });

    }, []);

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col text-white dark">
            {/* Hero Section */}
            <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 md:py-24 gap-8 overflow-hidden">
                <div className="flex-1 md:max-w-2xl text-center md:text-left" data-aos="fade-right" data-aos-delay="100">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                            OUR <br className="md:hidden" />PROJECT
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
                        ค้นพบคอลเลกชั่นผลงานที่ดีที่สุดของเราซึ่งนำเสนอโซลูชันที่สร้างสรรค์และการออกแบบที่สร้างสรรค์ในหลากหลายโดเมน.
                    </p>
                    <a
                        href="#project-gallery" // Link to project gallery section
                        className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-center"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        View Portfolio
                    </a>
                </div>
                <div className="flex-1 flex justify-center md:justify-end mt-10" data-aos="fade-left" data-aos-delay="200">
                    <img
                        src="https://images.unsplash.com/photo-1522199755839-a2bacb67c546?auto=format&fit=crop&w=600&q=80" // Image representing creative projects
                        alt="Showcase of creative projects"
                        className="rounded-xl shadow-2xl w-full max-w-lg object-cover aspect-[16/10]"
                    />
                </div>
            </section>

            {/* Project Highlights Marquee Section */}
            <section className="w-full py-16 md:py-20 bg-slate-800/50 dark:bg-black/30 backdrop-blur-sm">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-10 md:mb-12" data-aos="fade-down">
                        <h2 className="text-3xl sm:text-4xl font-bold text-white">
                            Project Highlights
                        </h2>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            การดูแบบรวดเร็วของโครงการที่น่าตื่นเต้นบางส่วนที่เราส่งมอบ.
                        </p>
                    </div>
                    <div
                        className="relative w-full max-w-7xl mx-auto bg-white/70 dark:bg-slate-800/70 backdrop-blur-lg rounded-2xl shadow-xl p-3 sm:p-4 overflow-hidden"
                        data-aos="zoom-in-up"
                    >
                        <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-slate-100 dark:from-slate-900/80 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-slate-100 dark:from-slate-900/80 to-transparent z-10 pointer-events-none rounded-r-2xl"></div>
                        <div className="relative w-full overflow-x-hidden py-4">
                            <div className="flex gap-6 sm:gap-8 animate-marqueeLeft whitespace-nowrap">
                                {duplicatedPortfolioHighlights.map((project, index) => (
                                    <ProjectHighlightCard
                                        key={`${project.id}-${index}`}
                                        category={project.category}
                                        title={project.title}
                                        description={project.description}
                                        imageUrl={project.imageUrl}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Project Gallery Section (Placeholder for now) */}
            <section id="project-gallery" className="py-16 md:py-24 px-4 md:px-12">
                <div className="container mx-auto">
                    <div className="text-center mb-12 md:mb-16" data-aos="fade-up">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                            ผลงานทั้งหมดของเรา
                        </h2>
                        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                            สำรวจโครงการที่หลากหลายของเราโดยละเอียด คลิกที่โครงการใด ๆ เพื่อเรียนรู้เพิ่มเติมเกี่ยวกับกระบวนการและผลลัพธ์ของเรา.
                        </p>
                    </div>
                    {/* Placeholder for Project Grid/List */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {portfolioHighlights.slice(0, 3).map((project, index) => ( // Show a few examples
                            <div key={project.id} className="bg-white dark:bg-slate-800 rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl transform hover:-translate-y-2" data-aos="fade-up" data-aos-delay={100 * (index + 1)}>
                                <img src={project.imageUrl} alt={project.title} className="w-full h-56 object-cover" />
                                <div className="p-6">
                                    <span className="text-xs font-semibold uppercase text-indigo-500 dark:text-indigo-400 tracking-wider">{project.category}</span>
                                    <h3 className="text-xl font-bold text-slate-800 dark:text-white mt-2 mb-2">{project.title}</h3>
                                    <p className="text-sm text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">{project.description}</p>
                                    <a href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">View Project →</a>
                                </div>
                            </div>
                        ))}
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl shadow-lg flex flex-col items-center justify-center p-6 min-h-[300px] text-center" data-aos="fade-up" data-aos-delay="400">
                            <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-3">More Projects Coming Soon!</h3>
                            <p className="text-slate-500 dark:text-slate-400">We are constantly working on new and exciting things. Stay tuned for updates.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action Section */}
            <section className="py-16 md:py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white">
                <div className="container mx-auto px-4 text-center" data-aos="zoom-in" data-aos-delay="100">
                    <h3 className="text-3xl sm:text-4xl font-bold mb-6">
                        มีไอเดียอะไรหรือไม่?
                    </h3>
                    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
                        มาหารือกันว่าเราจะทำให้วิสัยทัศน์ของคุณเป็นจริงได้อย่างไร เรายินดีเป็นอย่างยิ่งที่จะร่วมมือกันในโครงการที่สร้างสรรค์และมีผลกระทบ.
                    </p>

                </div>
            </section>

            <footer className="w-full py-8 px-4 md:px-12 bg-slate-800 dark:bg-black text-slate-300 dark:text-slate-400 text-center text-sm">
                &copy; {year || "2025"} AIBATTLELAB. All rights reserved.
            </footer>

            {/* Marquee animation keyframes (same as Contact Page) */}
            <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marqueeLeft {
          animation: marqueeLeft 40s linear infinite; /* Slower for portfolio items */
        }
        .animate-marqueeLeft:hover {
           /* animation-play-state: paused; */
        }
      `}</style>
        </main>
    );
}
