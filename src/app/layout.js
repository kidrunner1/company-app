// ✅ ไม่มี use client
import "./globals.css";
import NavbarClient from "./components/layout/NavbarClient";

export const metadata = {
  title: "AIBATTLELAB",
  description: "คำอธิบายเว็บไซต์",
};

export default function RootLayout({ children }) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
        <NavbarClient />
        <main>{children}</main>
      </body>
    </html>
  );
}
