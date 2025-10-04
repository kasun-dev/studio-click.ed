"use client";

import { useState, useEffect } from "react";

export default function HomePage() {
  const photoLink = "#contact";

  const photos = [
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1755258577/posts/nozf51lvfhjjpbctnuoz.jpg",
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1755258479/posts/lajj1pvhkaepfdyqa4ct.jpg",
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1755258212/posts/y414rkdmtq9mdj1rz98a.jpg",
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1755257872/posts/nkab4tzssqfrsmbmzfwe.jpg",
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1747831343/jjeeiryd2jimyiiljolw.png",
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1747646092/tqlapvfqknuiniutryyr.jpg",
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1745892361/wl2dg1o2gtvphyniz0b2.jpg",
    "https://res.cloudinary.com/dks7sqgjd/image/upload/v1745598762/cld-sample-4.jpg",
  ];

  const [current, setCurrent] = useState(0);

  const nextPhoto = () =>
    setCurrent((prev) => (prev + 1) % photos.length);
  const prevPhoto = () =>
    setCurrent((prev) => (prev - 1 + photos.length) % photos.length);

  // Automatic sliding for mobile
  useEffect(() => {
    const interval = setInterval(() => {
      nextPhoto();
    }, 3000); // change photo every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden">
      {/* Desktop collage */}
      <div className="hidden md:grid md:grid-cols-6 md:grid-rows-4 gap-2 w-full h-full">
        <a href={photoLink} className="relative col-span-3 row-span-2">
          <img
            src={photos[0]}
            alt="Photo 1"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-3 row-span-2">
          <img
            src={photos[1]}
            alt="Photo 2"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-2 row-span-1">
          <img
            src={photos[2]}
            alt="Photo 3"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-2 row-span-1">
          <img
            src={photos[3]}
            alt="Photo 4"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-2 row-span-2">
          <img
            src={photos[4]}
            alt="Photo 5"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-1 row-span-1">
          <img
            src={photos[5]}
            alt="Photo 6"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-1 row-span-1">
          <img
            src={photos[6]}
            alt="Photo 7"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-2 row-span-1">
          <img
            src={photos[7]}
            alt="Photo 8"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
        <a href={photoLink} className="relative col-span-2 row-span-1">
          <img
            src={photos[8]}
            alt="Photo 9"
            className="absolute w-full h-full object-cover rounded-lg"
          />
        </a>
      </div>

      {/* Mobile slideshow */}
      <div className="md:hidden w-full h-full relative overflow-hidden">
        <a href={photoLink} className="w-full h-full block">
          <img
            key={current}
            src={photos[current]}
            alt={`Photo ${current + 1}`}
            className="absolute w-full h-full object-cover transition-transform duration-700 ease-in-out transform translate-x-0"
          />
        </a>
        
      </div>

      {/* Overlay */}
{/* Overlay */}
<div className="absolute inset-0 flex items-center justify-center px-4">
  {/* Center Card */}
  <div className="bg-black/20 p-6 md:p-10 rounded-xl shadow-lg w-full max-w-2xl text-left">
    <h1 className="text-4xl md:text-3xl italic font-bold text-white mb-4">
      @studio click.ed
    </h1>
    <p className="max-w-lg text-sm md:text-m text-gray-200 mb-6">
      Capturing your moments with creativity and passion. Welcome to Studio
      Clicked — where every shot tells a story.
    </p>
    <div className="flex justify-end">
      <a
        href={photoLink}
        className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition inline-block"
      >
        Contact Us
      </a>
    </div>
  </div>
</div>



    </section>
  );
}
