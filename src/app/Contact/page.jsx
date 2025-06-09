"use client";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const contactMarqueeFeatures = [
  {
    id: 1,
    title: "Multiple Contact Channels",
    description: "Reach us via email, phone, or our online form. We ensure a quick response to all your queries.",
  },
  {
    id: 2,
    title: "Dedicated Support",
    description: "Our support team is available to assist you with any technical or business-related questions.",
  },
  {
    id: 3,
    title: "Fast Response Time",
    description: "We value your time and strive to respond to all inquiries within 24 hours.",
  },
  {
    id: 4,
    title: "Feedback Welcome",
    description: "We appreciate your feedback to help us improve our services and your experience.",
  },
];

// Duplicate features for a seamless loop
const duplicatedMarqueeFeatures = [...contactMarqueeFeatures, ...contactMarqueeFeatures];

// Sub-component for individual feature cards in the marquee
const FeatureCard = ({ title, description }) => (
  <div
    className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out min-w-[300px] sm:min-w-[320px] flex-shrink-0 group cursor-default"
  // Removed AOS from individual cards as it can be jittery in a fast marquee
  >
    <h4 className="text-xl font-semibold text-blue-700 dark:text-sky-400 mb-3 group-hover:text-blue-800 dark:group-hover:text-sky-300 transition-colors">
      {title}
    </h4>
    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
      {description}
    </p>
  </div>
);


export default function ContactPage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true, // AOS animations will only happen once per element
      offset: 50,
    });
  }, []);

  const [year, setYear] = useState("");

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 flex flex-col text-white dark">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col md:flex-row items-center justify-between px-4 md:px-12 py-16 md:py-24 gap-8 overflow-hidden">
        <div className="flex-1 md:max-w-2xl" data-aos="fade-right" data-aos-delay="100">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              CONTACT <br className="md:hidden" />US
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 leading-relaxed">
            ติดต่อทีมงานของเราหากต้องการสอบถาม ขอรับการสนับสนุน หรือต้องการเป็นพันธมิตร เราพร้อมช่วยเหลือคุณเกี่ยวกับความต้องการทางธุรกิจและตอบคำถามของคุณทันที.
          </p>
        </div>
        <div className="flex-1 flex justify-center md:justify-end" data-aos="fade-left" data-aos-delay="200">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=600&q=80" // Updated image for better relevance
            alt="Contact our company - diverse team collaborating"
            className="rounded-xl shadow-2xl w-full max-w-lg object-cover aspect-[4/3]"
          />
        </div>
      </section>

      {/* Marquee Features Section - Integrated from your selection */}
      <section className="w-full py-16 md:py-20 bg-slate-800/50 dark:bg-black/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-12" data-aos="fade-down">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              เราสนับสนุนคุณอย่างไร
            </h2>
            <p className="text-md text-white dark:text-slate-400 mt-2 max-w-2xl mx-auto">
              เราพร้อมช่วยเหลือและตอบคำถามใดๆ ที่คุณอาจมี สำรวจวิธีต่างๆ ที่คุณสามารถติดต่อทีมงานของเราได้
            </p>
          </div>

          {/* The Marquee Frame */}
          <div
            className="relative w-full max-w-6xl mx-auto bg-white/60 dark:bg-slate-800/60 backdrop-blur-lg rounded-2xl shadow-xl p-3 sm:p-4 overflow-hidden"
            data-aos="zoom-in-up"
          >
            {/* Gradient Fades for edges */}
            <div className="absolute top-0 bottom-0 left-0 w-12 sm:w-20 bg-gradient-to-r from-slate-100 dark:from-slate-900/80 to-transparent z-10 pointer-events-none rounded-l-2xl"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 sm:w-20 bg-gradient-to-l from-slate-100 dark:from-slate-900/80 to-transparent z-10 pointer-events-none rounded-r-2xl"></div>

            <div className="relative w-full overflow-x-hidden py-4">
              <div
                className="flex gap-6 sm:gap-8 animate-marqueeLeft whitespace-nowrap"
              >
                {duplicatedMarqueeFeatures.map((feature, index) => (
                  <FeatureCard
                    key={`${feature.id}-${index}`}
                    title={feature.title}
                    description={feature.description}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Reach Us Section (เดิมคือ About Section) */}
      <section className="py-16 md:py-24 px-4 md:px-12">
        <div className="container mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div
            className="flex-1"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <img
              src="https://cdn.pixabay.com/photo/2018/02/08/10/22/desk-3139127_1280.jpg"
              alt="Team working together for customer support"
              className="rounded-xl shadow-2xl w-full max-w-lg object-cover aspect-video"
            />
          </div>
          <div
            className="flex-1"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <h3 className="text-3xl sm:text-4xl font-bold text-white">
              ติดต่อโดยตรง
            </h3>
            <p className="text-slate-300 text-lg mb-4 leading-relaxed">
              เรามุ่งมั่นที่จะมอบบริการลูกค้าที่ยอดเยี่ยม ไม่ว่าคุณจะมีคำถามเกี่ยวกับบริการของเรา ต้องการการสนับสนุนด้านเทคนิค หรือต้องการหารือเกี่ยวกับความร่วมมือที่อาจเกิดขึ้น ทีมงานของเราพร้อมให้ความช่วยเหลือคุณ
              .
            </p>
            <ul className="space-y-3 text-slate-300 dark:text-slate-300">
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span>Email: kritdaowaset@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.308 1.154a11.06 11.06 0 006.086 6.086l1.154-2.308a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span>Phone: +1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span>Office Hours: Mon-Fri, 9am - 6pm</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-purple-700 via-pink-600 to-red-600 text-white">
        <div
          className="container mx-auto px-4 text-center"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          <h3 className="text-3xl sm:text-4xl font-bold mb-6">
            พร้อมที่จะเชื่อมต่อกันแล้วหรือยัง?
          </h3>
          <p className="text-slate-300 text-lg mb-4 leading-relaxed">
            กรอกแบบฟอร์มติดต่อของเรา หรือติดต่อเราโดยตรงผ่านทางอีเมลหรือโทรศัพท์ เราหวังว่าจะได้เชื่อมต่อกับคุณและช่วยให้ธุรกิจของคุณเติบโต.
          </p>
          <form
            action="https://formspree.io/f/xvgrkarl" // 👉 เปลี่ยนตาม Form ID ที่คุณได้
            method="POST"
            className="max-w-2xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left"
          >
            <input
              type="text"
              name="name"
              placeholder="ชื่อของคุณ"
              required
              className="p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            />
            <input
              type="email"
              name="email"
              placeholder="อีเมลของคุณ"
              required
              className="p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            />
            <textarea
              name="message"
              placeholder="ข้อความของคุณ..."
              rows={4}
              required
              className="sm:col-span-2 p-3 rounded-lg bg-white/90 text-black placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            ></textarea>
            <button
              type="submit"
              className="sm:col-span-2 py-3 px-6 bg-white text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition duration-300"
            >
              ส่งข้อความ
            </button>
          </form>
        </div>
      </section>
      <footer className="w-full py-8 px-4 md:px-12 bg-slate-800 dark:bg-black text-slate-300 dark:text-slate-400 text-center text-sm">
        &copy; {year || "2025"} AIBATTLELAB. All rights reserved.
      </footer>
      <style jsx global>{`
        @keyframes marqueeLeft {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); } /* Scrolls one full set of original items */
        }
        .animate-marqueeLeft {
          animation: marqueeLeft 30s linear infinite; /* Adjusted duration */
        }
        /* Optional: Pause animation on hover */
        .animate-marqueeLeft:hover {
           /* animation-play-state: paused; */ /* Uncomment to pause on hover if desired */
        }
      `}</style>
    </main>
  );
}
