"use client";

import { FaFacebookF, FaInstagram, FaTiktok, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  const socialLinks = [
    { icon: FaWhatsapp, link: "https://wa.me/94723999927" },
    { icon: FaInstagram, link: "https://instagram.com/studio_click.ed" },
    { icon: FaFacebookF, link: "https://facebook.com/share/1CfePvJW7d/?mibextid=wwXIfr" },
    { icon: FaTiktok, link: "https://www.tiktok.com/@studio_click.ed" },
    { icon: FaEnvelope, link: "mailto:studioclicked.info@gmail.com" },
  ];

  return (
    <footer className="bg-black text-white py-4 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-4 mb-2 md:mb-0">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-300 transition"
              >
                <Icon className="w-5 h-5" />
              </a>
            );
          })}
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-right text-sm space-y-1">
          <p>Email: studioclicked.info@gmail.com</p>
          <p>Phone: +94 72 399 9927</p>
          <p>Colombo, Sri Lanka</p>
        </div>
      </div>

      <div className=" text-center text-xs text-white">
        &copy; {new Date().getFullYear()} Studio Clicked. All rights reserved. <br />
        Created by <span className="text-yellow-400">Beelix Solutions</span>
      </div>


    </footer>
  );
}
