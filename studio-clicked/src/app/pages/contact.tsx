"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const contacts = [
  {
    name: "WhatsApp",
    info: "+94 72 399 9927",
    icon: FaWhatsapp,
    link: "https://wa.me/94723999927",
  },
  {
    name: "Instagram",
    info: "@studio_click.ed",
    icon: FaInstagram,
    link: "https://instagram.com/studio_click.ed",
  },
  {
    name: "Facebook",
    info: "@studioclicked",
    icon: FaFacebookF,
    link: "https://facebook.com/share/1CfePvJW7d/?mibextid=wwXIfr",
  },
  {
    name: "TikTok",
    info: "@studio_click.ed",
    icon: FaTiktok,
    link: "https://www.tiktok.com/@studio_click.ed",
  },
  {
    name: "Email",
    info: "studioclicked.info@gmail.com",
    icon: FaEnvelope,
    link: "mailto:studioclicked.info@gmail.com",
  },
  {
    name: "Location",
    info: "Colombo, Sri Lanka",
    icon: FaMapMarkerAlt,
    link: null,
  },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-white/30 min-h-screen flex flex-col items-center overflow-x-hidden"
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold text-black mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Get in Touch
      </h2>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-16 box-border">
        {/* Left: Contact Info */}
        <div className="flex-1 flex flex-col gap-6 box-border">
          <p
            className="text-m text-black"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            We'd love to hear from you! Reach out for bookings, inquiries, or just
            to say hello. Connect with us via social media, WhatsApp, or email.
          </p>

          <div className="flex flex-col gap-4">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              return (
                <a
                  key={index}
                  href={contact.link || "#"}
                  target={contact.link ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-black hover:text-gray-700 transition"
                >
                  {Icon && <Icon className="w-6 h-6" />}
                  <span
                    className="font-medium"
                    style={{ fontFamily: "'Roboto', sans-serif" }}
                  >
                    {contact.info}
                  </span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Right: Contact Form */}
        <div className="flex-1 box-border">
          <form className="flex flex-col gap-4 w-full text-black">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="flex-1 p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black box-border w-full"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="flex-1 p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black box-border w-full"
              />
            </div>
            <input
              type="email"
              placeholder="Email"
              className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black box-border w-full"
            />
            <textarea
              placeholder="Message"
              rows={5}
              className="p-3 border border-black rounded-md focus:outline-none focus:ring-2 focus:ring-black box-border w-full"
            ></textarea>
            <button
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition w-full sm:w-auto"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
