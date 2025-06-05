// app/layout.jsx
import './globals.css';
import Navbar from './components/ui/Navbar'; // Adjust the path as necessary

export const metadata = {
  title: 'ชื่อเว็บไซต์ของคุณ',
  description: 'คำอธิบายเว็บไซต์',
};

export default function RootLayout({ children }) {
  return (
    <html lang="th"> 
      <head>
        <link rel="preconnect" href="[https://fonts.googleapis.com](https://fonts.googleapis.com)" />
        <link rel="preconnect" href="[https://fonts.gstatic.com](https://fonts.gstatic.com)" crossOrigin="true" />
        <link
          href="[https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap](https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap)"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Navbar />
        <main>{children}</main>

      </body>
    </html>
  );
}
