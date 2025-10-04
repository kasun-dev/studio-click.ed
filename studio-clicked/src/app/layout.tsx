"use client";

import { useState } from "react";
import "./globals.css";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-[#EBEBEB] min-h-screen">
        {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
        {splashDone && <Navbar />}
        <main className={`${splashDone ? "" : "hidden"}`}>{children}</main>
      </body>
    </html>
  );
}
