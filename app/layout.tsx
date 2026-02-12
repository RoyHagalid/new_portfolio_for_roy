import type { Metadata } from "next";
import { Geist, Geist_Mono, Libre_Baskerville, Rubik, Work_Sans, Space_Mono, Permanent_Marker } from "next/font/google";
import "./globals.css";
import Header from "./components/(header)/Header";
import Papers from "./components/(paper)/Papers";
import Navbar from "./components/(navigation)/Navbar";
import BackToTop from "./components/(footer)/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: "400",
  variable: "--font-libre-baskerville",
  subsets:["latin"],
});

const rubik = Rubik({
  weight: "400",
  variable: "--font-rubik",
  subsets:["latin"],
})

const workSans = Work_Sans({
  weight: "300",
  variable: "--font-work-sans",
  subsets:["latin"],
})

const spaceMono = Space_Mono({
  weight: "400",
  variable: "--font-space-mono",
  subsets:["latin"],
})

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-permanent-marker",
  subsets:["latin"],
})

export const metadata: Metadata = {
  title: "Hagalid's Portfolio",
  description: "Hagalid's Portfolio side",
  icons: {
    icon: [
      {
        url: '/logo.svg',
        href: '/logo.svg',
      }
    ]
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${libreBaskerville.variable} ${rubik.variable} ${workSans.variable} ${spaceMono.variable} ${permanentMarker.variable} antialiased md:p-6 pt-8 md:pt-0 relative`}>
        <div className="z-[1] min-w-full " id="top">
          <Header />
          <Navbar />
          <Papers />
          {children}
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
