import type { Metadata } from "next";
import { Geist, Geist_Mono,Montserrat } from "next/font/google";
import "./globals.css";
import LayoutWireFrame from "@/modules/layout";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} antialiased`}>
      <body>
        <LayoutWireFrame>

        {children}
        </LayoutWireFrame>
      </body>
    </html>
  );
}
