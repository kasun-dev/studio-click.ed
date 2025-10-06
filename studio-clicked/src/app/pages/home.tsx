"use client";

import { useEffect } from "react";

// Make sure to import your Google Font in _app.tsx or globals.css, e.g.:
// @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Roboto:wght@400;500&display=swap');

export default function HomePage() {
  const photoLink = "#contact";

  return (
    <section
      id="home"
      className="relative w-full h-screen flex flex-col items-center justify-center px-4 space-y-6"
    >
      {/* Hero Title Card */}
      <div>
        <h1
          className="text-4xl md:text-6xl font-bold text-black"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          @studio click.ed
        </h1>
      </div>

      {/* Hero Description Card */}
      <div className="bg-white/10 p-2 md:p-4 rounded-xl shadow-md max-w-2xl">
        <p
          className="text-m md:text-l text-black/80"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Turning fleeting moments into timeless memories.  
          We capture the essence of every story — authentic, creative, unforgettable.
        </p>
      </div>

      {/* Call to Action Card */}
      <div>
        <a
          href={photoLink}
          className="inline-block bg-black text-white px-8 py-2 rounded-full font-semibold hover:bg-gray-800 transition text-lg"
        >
          Book a Session
        </a>
      </div>
    </section>
  );
}
