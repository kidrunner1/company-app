// components/layout/Navbar.jsx
"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Icon components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const SunIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-6.364-.386l1.591-1.591M3 12h2.25m.386-6.364l1.591 1.591" />
  </svg>
);

const MoonIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21c3.73 0 7.01-1.977 8.752-4.998z" />
  </svg>
);

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedMode = localStorage.getItem('darkMode');
      // Default to dark mode for AI BATTLE LAB theme if no preference saved
      return savedMode ? JSON.parse(savedMode) : true; 
    }
    return true; // Default to dark mode for SSR
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (isDarkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('darkMode', JSON.stringify(true));
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('darkMode', JSON.stringify(false));
      }
    }
  }, [isDarkMode]);

  const navLinks = [
    { href: '/HomePage', label: 'ABOUT US' },
    { href: '/Portfolio', label: 'PROJECT' },
    { href: '/Contact', label: 'CONTACT' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme-specific colors
  const logoColorClass = "text-pink-400"; // Make logo stand out
  const baseTextColorClass = "text-slate-200"; // For general text and icons
  const hoverColorClass = "hover:text-pink-400"; // Hover effect for links
  const buttonHoverBgClass = "hover:bg-purple-500/20"; // Background hover for icon buttons
  const mobileLinkHoverBgClass = "hover:bg-purple-500/10"; // Background hover for mobile menu links

  return (
    <div
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl
                  rounded-[50px] 
                  bg-slate-900/70 dark:bg-black/70 backdrop-blur-xl 
                  shadow-2xl shadow-purple-500/20 dark:shadow-pink-500/15
                  border border-purple-600/30 dark:border-pink-500/30
                  px-6 py-2 
                  transition-all duration-500 ease-out
                  ${isMounted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
    >
      <nav>
        <div className="flex items-center justify-between h-12">
          <div className="flex-shrink-0">
            <Link
              href="/"
              className={`text-xl sm:text-2xl font-bold transition-all duration-200 ease-in-out ${logoColorClass} hover:opacity-80 hover:scale-105`}
            >
              AI BATTLE LAB
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative group px-3 py-2 rounded-md text-xs sm:text-sm font-medium 
                            transition-all duration-200 ease-in-out 
                            ${baseTextColorClass} ${hoverColorClass}`}
              >
                <span>{link.label}</span>
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] 
                              bg-pink-400 opacity-70 group-hover:w-3/5 
                              transition-all duration-300 ease-out`}
                ></span>
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Dark Mode"
              className={`p-2 rounded-full 
                          focus:outline-none focus:ring-2 focus:ring-offset-1 
                          dark:focus:ring-offset-black/70 focus:ring-pink-500 
                          mr-1 sm:mr-2 group transition-all duration-200 ease-in-out 
                          ${buttonHoverBgClass} hover:scale-110 hover:rotate-[20deg]
                          ${baseTextColorClass}`} // Icon color
            >
              <span className="transition-transform duration-300 ease-in-out group-hover:scale-0">
                {isDarkMode ? <SunIcon /> : <MoonIcon />}
              </span>
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 ease-in-out scale-0 group-hover:scale-100">
                {isDarkMode ? <MoonIcon /> : <SunIcon />}
              </span>
            </button>

            <div className="md:hidden">
              <button
                onClick={toggleMobileMenu}
                type="button"
                className={`inline-flex items-center justify-center p-2 rounded-full 
                            focus:outline-none focus:ring-2 focus:ring-inset 
                            focus:ring-pink-500 transition-all duration-200 ease-in-out
                            ${buttonHoverBgClass} hover:scale-110 hover:rotate-12
                            ${baseTextColorClass}`} // Icon color
                aria-controls="mobile-menu"
                aria-expanded={isMobileMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-out overflow-hidden
            border-t border-purple-500/20 dark:border-pink-500/20 mt-2 
            ${isMobileMenuOpen ? 'max-h-60 opacity-100 pt-2 pb-3' : 'max-h-0 opacity-0 pt-0 pb-0'}`}
          id="mobile-menu"
        >
          <div className="px-2 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                style={{ transitionDelay: `${isMobileMenuOpen ? index * 75 : 0}ms` }}
                className={`block px-3 py-2 rounded-md text-base font-medium 
                            transform transition-all duration-300 ease-out
                            ${baseTextColorClass} ${hoverColorClass}
                            ${mobileLinkHoverBgClass} hover:translate-x-1.5
                            ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
}
