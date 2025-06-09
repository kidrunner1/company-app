/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["'Noto Sans'", "sans-serif"], // ✅ เพิ่ม Custom Font
      },
    },
  },
  darkMode: "class", // ✅ รองรับ Dark Mode แบบ manual toggle
  plugins: [],
};
