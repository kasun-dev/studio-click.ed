"use client";

import { useEffect } from "react";

interface SplashScreenProps {
  onFinish: () => void;
}

export default function SplashScreen({ onFinish }: SplashScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent that splash is done
    }, 2500); // 2 seconds splash
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <img
        src="/logo.png"
        alt="Studio Clicked Logo"
        className="w-80 h-80 animate-pulse"
      />
    </div>
  );
}
