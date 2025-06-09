"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { GlobeDemo } from "./components/GitHubGlobe";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col text-white dark">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between gap-10 px-6 sm:px-12 py-24 max-w-7xl mx-auto">
        {/* Left: Static Text */}
        <div className="md:w-1/2 space-y-6 text-left" data-aos="fade-right">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            BATTLE LAB TECHNOLOGIES ENGIMEERING FOR ALL COMPANY LIMITED
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-xl">
            เรายืนอยู่แนวหน้าในยุค AI ที่เปลี่ยนโลก — พร้อมพัฒนานวัตกรรมที่คุณไว้ใจได้
          </p>
        </div>

        {/* Right: Globe */}
        <div
          className="w-full md:w-1/2 h-[300px] sm:h-[450px] md:h-[550px] relative flex justify-center items-center "
          data-aos="fade-right"
        >
          <GlobeDemo />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-16 md:py-20 bg-slate-800/50 dark:bg-black/30 backdrop-blur-sm mt-20">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white" data-aos="fade-up">
            ทำไมถึงเลือกเรา?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition" data-aos="zoom-in-up">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">AI & IoT Integration</h3>
              <p className="text-gray-400">
                เราสร้างระบบที่เชื่อมต่อกับเซ็นเซอร์และระบบ AI อย่างแม่นยำ พร้อมนำไปใช้งานได้จริง
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition" data-aos="zoom-in-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold mb-2 text-purple-400">Realtime Dashboard</h3>
              <p className="text-gray-400">
                ข้อมูลทั้งหมดจะถูกรายงานผ่านระบบ Dashboard แบบเรียลไทม์ ดูได้ทุกที่ทุกเวลา
              </p>
            </div>

            <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:scale-[1.02] transition" data-aos="zoom-in-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold mb-2 text-pink-400">ความปลอดภัยระดับองค์กร</h3>
              <p className="text-gray-400">
                ข้อมูลของคุณจะถูกจัดเก็บและเข้ารหัสด้วยมาตรฐานความปลอดภัยระดับสูง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-400 text-sm bg-gray-900">
        © 2025 Battle Lab Technologies. All rights reserved.
      </footer>
    </div>
  );
}
