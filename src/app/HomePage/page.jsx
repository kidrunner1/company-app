"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const labFeatures = [
  {
    id: 1,
    icon: "🔬",
    title: "Cutting-Edge AI Models",
    description: "Experiment with and deploy the latest in AI and machine learning.",
    imageUrl: "https://placehold.co/600x400/7C3AED/FFFFFF?text=AI+Models", // Placeholder
  },
  {
    id: 2,
    icon: "⚔️",
    title: "Competitive Challenges",
    description: "Test your skills against others in exciting AI-driven competitions.",
    imageUrl: "https://placehold.co/600x400/DB2777/FFFFFF?text=AI+Challenges", // Placeholder
  },
  {
    id: 3,
    icon: "💡",
    title: "Innovative Research",
    description: "Contribute to and access groundbreaking research in artificial intelligence.",
    imageUrl: "https://placehold.co/600x400/F59E0B/FFFFFF?text=AI+Research", // Placeholder
  },
  {
    id: 4,
    icon: "🤝",
    title: "Collaborative Community",
    description: "Connect with fellow AI enthusiasts, researchers, and developers.",
    imageUrl: "https://placehold.co/600x400/10B981/FFFFFF?text=AI+Community", // Placeholder
  },
];

// Duplicate for seamless loop
const duplicatedLabFeatures = [...labFeatures, ...labFeatures, ...labFeatures]; // Duplicated more for smoother longer marquee

// Sub-component for individual feature cards in the marquee
const LabFeatureCard = ({ icon, title, description, imageUrl }) => (
  <div
    className="bg-white dark:bg-slate-800/70 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out min-w-[300px] sm:min-w-[340px] flex-shrink-0 group cursor-default overflow-hidden text-center"
  >
    <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-lg mb-4 transition-transform duration-300 group-hover:scale-105" />

    <h4 className="text-xl font-semibold text-slate-800 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
      {title}
    </h4>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);


export default function HomePage() {
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
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col text-white dark"> {/* Defaulting to dark theme based on AIBATTLELAB style */}
      {/* Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-4 md:px-12 py-20 md:py-28 gap-10 overflow-hidden">
        <div className="flex-1 md:max-w-2xl text-center md:text-left" data-aos="fade-right" data-aos-delay="100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              WELCOME TO <br className="md:hidden" />AIBATTLELAB
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            ปลดปล่อยพลังของปัญญาประดิษฐ์ แข่งขัน เรียนรู้ และสร้างสรรค์นวัตกรรมในสนามปัญญาประดิษฐ์ขั้นสูงสุด.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/Portfolio" // Link to portfolio page
              className="inline-block px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg shadow-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 text-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              เยี่ยมชมผลงานของเรา   
            </a>
          </div>
        </div>
        <div className="flex-1 flex justify-center md:justify-end mt-10 md:mt-0" data-aos="fade-left" data-aos-delay="200">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/26/13/12/pencils-1280558_1280.jpg" // AI/Tech themed image
            alt="AI Battle Lab visual representation"
            className="rounded-2xl shadow-2xl w-full max-w-md lg:max-w-lg object-cover aspect-square animate-float"
          />
        </div>
      </section>

      {/* Features Marquee Section */}
      <section className="w-full py-16 md:py-20 bg-slate-800/50 dark:bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16" data-aos="fade-down">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              โปรเจคของเรามีอะไรบ้าง?
            </h2>
            <p className="text-md text-slate-400 mt-3 max-w-2xl mx-auto">
              ค้นพบส่วนประกอบหลักที่ทำให้ AIBATTLELAB เป็นจุดหมายปลายทางอันดับหนึ่งสำหรับผู้ที่ชื่นชอบ AI.
            </p>
          </div>
          <div
            className="relative w-full max-w-7xl mx-auto bg-slate-700/30 dark:bg-slate-900/50 backdrop-blur-md rounded-2xl shadow-xl p-3 sm:p-4 overflow-hidden"
            data-aos="zoom-in-up"
          >
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-slate-800/80 dark:from-black/50 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-slate-800/80 dark:from-black/50 to-transparent z-10 pointer-events-none rounded-r-2xl"></div>
            <div className="relative w-full overflow-x-hidden py-4">
              <div className="flex gap-6 sm:gap-8 animate-marqueeLeft whitespace-nowrap">
                {duplicatedLabFeatures.map((feature, index) => (
                  <LabFeatureCard
                    key={`${feature.id}-${index}`}
                    icon={feature.icon}
                    title={feature.title}
                    description={feature.description}
                    imageUrl={feature.imageUrl}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* About AIBATTLELAB Section */}
      <section className="py-16 md:py-24 px-4 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="flex-1 md:order-2" data-aos="fade-left" data-aos-delay="100">
            <img
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80" // Image related to data/AI research/collaboration
              alt="Inside AIBATTLELAB - Research and Collaboration"
              className="rounded-xl shadow-2xl w-full max-w-lg object-cover aspect-video"
            />
          </div>
          <div className="flex-1 md:order-1 md:max-w-xl" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500 mb-6">
              ABOUT AIBATTLELAB
            </h2>
            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              AIBATTLELAB เป็นแพลตฟอร์มแบบไดนามิกที่ออกแบบมาสำหรับนักพัฒนา นักวิจัย และผู้ที่ชื่นชอบ AI เพื่อร่วมมือกัน แข่งขัน และขยายขอบเขตของปัญญาประดิษฐ์ เราจัดเตรียมเครื่องมือ ทรัพยากร และชุมชนเพื่อส่งเสริมนวัตกรรม.
            </p>
            <ul className="space-y-2 text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                สภาพแวดล้อม AI ที่ทันสมัยที่สุด

              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                การท้าทายและกระดานผู้นำด้าน AI ที่น่าสนใจ
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                ชุมชนที่มีชีวิตชีวาสำหรับการแบ่งปันความรู้
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white">
        <div className="container mx-auto px-4 text-center" data-aos="zoom-in-up" data-aos-delay="100">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Join the Battle?
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Sign up today to access our platform, participate in challenges, and become part of the AIBATTLELAB community.
          </p>
          <a
            href="/register" // Link to a registration page or similar
            className="inline-block px-10 py-4 bg-white text-purple-700 font-semibold rounded-lg shadow-xl hover:bg-slate-100 transition-all duration-300 transform hover:scale-105 text-lg"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      <footer className="w-full py-8 px-4 md:px-12 bg-slate-900 text-slate-400 text-center text-sm">
        &copy; {year || "2025"} AIBATTLELAB. All rights reserved.
      </footer>

      {/* Marquee and Float animation keyframes */}
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); } /* Adjusted for 3 sets of items */
        }
        .animate-marqueeLeft {
          animation: marqueeLeft 60s linear infinite; /* Slower for more items */
        }
        .animate-marqueeLeft:hover {
           /* animation-play-state: paused; */
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
