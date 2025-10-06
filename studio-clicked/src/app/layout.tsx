"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";
import Footer from "./components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <html lang="en">
      <body className=" min-h-screen">
        {/* Splash Screen */}
        <AnimatePresence>
          {!splashDone && <SplashScreen onFinish={() => setSplashDone(true)} />}
        </AnimatePresence>

        {/* Navbar */}
        {splashDone && <Navbar />}

        {/* Main content fade in */}
        {splashDone && (
          <motion.main
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {children}
          </motion.main>
        )}
      </body>
    </html>
  );
}
