// ✅ ไม่มี use client
import "./globals.css";
import { Prompt, Noto_Sans } from "next/font/google";
import NavbarClient from "./components/layout/NavbarClient";

export const metadata = {
  title: "AIBATTLELAB",
  description: "คำอธิบายเว็บไซต์",
};

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto",
});

const prompt = Prompt({
  subsets: ["thai", "latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-prompt",
});

export default function RootLayout({ children }) {
  return (
    <html lang="th" className={`${prompt.variable} ${notoSans.variable}`}>
      <body className="font-prompt">
        <NavbarClient />
        <main>{children}</main>
      </body>
    </html>
  );
}
