"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on outside click or scroll
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // If click is NOT inside menu AND NOT on button, close menu
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    function handleScroll() {
      setOpen(false);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-black/30 z-50">
      {/* Empty div to balance layout */}
      <div className="w-8" />

      {/* Centered Logo */}
      <a
        href="#home"
        className="absolute left-1/2 transform -translate-x-1/2 mt-2 mb-2"
      >
        <Image
          src="/logo.png"
          alt="Studio Clicked Logo"
          width={150}
          height={150}
          priority
        />
      </a>

      {/* Hamburger Button */}
      <button
        ref={buttonRef}
        onClick={() => setOpen(!open)}
        className="transition-transform duration-300"
      >
        <Image
          src="/hamburger.png"
          alt="menu"
          width={32}
          height={32}
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div
          ref={menuRef}
          className="absolute right-4 top-16 bg-black/50 rounded-lg shadow-lg py-3 px-10 space-y-3 text-sm italic min-w-[200px] md:min-w-[250px]"
        >
          <a href="#home" className="block hover:text-white">
            Home
          </a>
          <a href="#contact" className="block hover:text-white">
            Contact
          </a>
          <a href="#services" className="block hover:text-white">
            Services
          </a>
        </div>
      )}
    </nav>
  );
}
