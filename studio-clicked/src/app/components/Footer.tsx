"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black/80 text-[#EBEBEB] py-2 px-4 mt-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-2 md:space-y-0">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Image src="/logo.png" alt="Studio Clicked Logo" width={100} height={100} />
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-3 text-sm">
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white italic">
            Facebook
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white italic">
            Instagram
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-white italic">
            Twitter
          </a>
        </div>

        {/* Contact */}
        <div className="text-center md:text-right text-xs space-y-0.5">
          <p>Email: studio@clicked.com</p>
          <p>Phone: +94 77 123 4567</p>
          <p>Colombo, Sri Lanka</p>
        </div>
      </div>

      <div className="mt-1 text-center text-xs text-gray-400">
        &copy; {new Date().getFullYear()} Studio Clicked. All rights reserved.
      </div>
    </footer>
  );
}
