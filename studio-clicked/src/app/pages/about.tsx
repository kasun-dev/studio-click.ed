"use client";

import Image from "next/image";

export default function AboutPage() {
  return (
    <section
      id="about"
      className="py-20 px-4 bg-white/30 min-h-screen flex flex-col items-center overflow-x-hidden"
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold text-black mb-12"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        About Me
      </h2>

      <div className="flex flex-col lg:flex-row w-full max-w-6xl gap-16 items-center">
        {/* Left: Personal photo */}
        <div className="flex-1 flex justify-center">
          <Image
            src="/profile-photo.jpeg" // replace with your own photo
            alt="Kasun Sampath - Studio Clicked"
            width={400}
            height={400}
            className="rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 flex flex-col gap-4">
          <p
            className="text-base text-black"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Hi, I&apos;m Kasun Sampath — the creator behind Studio Clicked. Photography
            has always been more than a hobby for me; it&apos;s a way to capture the
            beauty, emotion, and stories in everyday life. Every photo I take is a
            reflection of the moment, the feeling, and the people in it.
          </p>

          <p
            className="text-base text-black"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            From casual portraits to events, I focus on creating images that are
            authentic, timeless, and full of life. I believe that every person has a
            unique story, and my goal is to capture it in a way that feels personal
            and meaningful.
          </p>

          <p
            className="text-base text-black"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          >
            Studio Clicked is my space to experiment, learn, and share my vision with
            the world. If you&apos;re looking for photography that is genuine, creative,
            and tailored to you, I&apos;d love to work with you and bring your moments to
            life.
          </p>

          <a
            href="#contact"
            className="mt-4 inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition w-max"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
