"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
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
    <>
      {/* Sidebar for Desktop (shown from md and up) */}
      <nav className="hidden md:flex fixed top-0 left-0 h-full w-15 flex-col items-center justify-between py-6 bg-white/30 backdrop-blur-md z-50">
        {/* Logo */}
        <div className="mb-10">
          <a href="#home">
            <Image
              src="/logo.png"
              alt="Studio Clicked Logo"
              width={60}
              height={60}
              priority
            />
          </a>
        </div>

        {/* Navigation Icons */}
        <div className="flex flex-col gap-6 items-center">
          {[
            { href: "#home", src: "/home.png", alt: "Home" },
            { href: "#services", src: "/services.png", alt: "Services" },
            { href: "#contact", src: "/contact.png", alt: "Contact" },
            { href: "#about", src: "/about.png", alt: "About" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="transition-transform hover:scale-110"
            >
              <Image src={item.src} alt={item.alt} width={30} height={30} />
            </a>
          ))}
        </div>

        <div className="h-8" />
      </nav>

      {/* Top Navbar for Mobile (below md only) */}
      <nav className="md:hidden fixed top-0 left-0 w-full flex items-center justify-between p-4 z-[100]">
        {/* Centered Logo */}
        <a
          href="#home"
          className="absolute left-1/2 transform -translate-x-1/2 mt-1"
        >
          <Image
            src="/logo.png"
            alt="Studio Clicked Logo"
            width={100}
            height={100}
            priority
          />
        </a>

        {/* Hamburger Button */}
        <button
          ref={buttonRef}
          onClick={() => setOpen(!open)}
          className="ml-auto transition-transform duration-300 z-[150]"
        >
          <Image
            src="/hamburger.png"
            alt="menu"
            width={30}
            height={30}
            className={`transition-transform duration-300 ${
              open ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>

        {/* Fullscreen Overlay Menu */}
        <div
          className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 ease-in-out z-[105] ${
            open ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setOpen(false)}
        />

        {/* Slide-in Menu */}
        <div
          ref={menuRef}
          className={`fixed top-0 right-0 h-screen w-1/4 sm:w-1/5 bg-white/30 backdrop-blur-md shadow-lg transform transition-transform duration-500 ease-in-out z-[120] flex flex-col justify-center items-center gap-10 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {[
            { href: "#home", src: "/home.png", alt: "Home" },
            { href: "#services", src: "/services.png", alt: "Services" },
            { href: "#contact", src: "/contact.png", alt: "Contact" },
            { href: "#about", src: "/about.png", alt: "About" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="hover:scale-110 transition-transform"
            >
              <Image src={item.src} alt={item.alt} width={35} height={35} />
            </a>
          ))}
        </div>
      </nav>
    </>
  );
}
