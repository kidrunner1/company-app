// Assuming this file is app/HomePage/page.jsx or a similar route component
"use client";
import React, { useEffect } from "react"; // Added React import
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles - make sure this is imported

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex flex-col items-center justify-center px-4 py-10 sm:py-20 text-white"> {/* Added text-white for default text color on dark bg */}
      <main className="w-full max-w-3xl flex flex-col items-center text-center space-y-8">
        <div
          data-aos="fade-down"
          className="w-full flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 mb-4 drop-shadow-lg">
            AI BATTLE LAB
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl">
            ปลดปล่อยพลังของปัญญาประดิษฐ์ แข่งขัน เรียนรู้ และสร้างสรรค์นวัตกรรมในสนามรบ AI ขั้นสูงสุด.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="200" // Added a slight delay
          className="w-full flex flex-col sm:flex-row items-center justify-center gap-6 mt-8"
        >

        </div>
      </main>
    </div>
  );
}
