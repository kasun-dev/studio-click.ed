"use client";

import { CameraIcon, HeartIcon, PhotoIcon, CalendarIcon } from "@heroicons/react/24/solid";

const services = [
  {
    title: "Casual Photoshoots",
    description: "Relaxed and natural photoshoots that capture your personality and style.",
    icon: CameraIcon,
  },
  {
    title: "Couple Shoots",
    description: "Beautiful, intimate moments captured for couples, perfect for memories or social media.",
    icon: HeartIcon,
  },
  {
    title: "Outdoor Shoots",
    description: "Vibrant outdoor sessions in scenic locations, full of natural light and life.",
    icon: PhotoIcon,
  },
  {
    title: "Event Shoots",
    description: "Professional coverage of birthdays, small events, or gatherings, preserving memories beautifully.",
    icon: CalendarIcon,
  },
];

export default function ServicePage() {
  return (
    <section
      id="services"
      className="py-20 px-4 bg-white/10 min-h-screen flex flex-col items-center"
    >
      <h2
        className="text-4xl md:text-5xl font-extrabold text-black mb-12 mt-20"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={index}
              className="bg-white/10 rounded-2xl shadow-xl p-8 flex flex-col items-center text-center transform transition hover:-translate-y-3 hover:shadow-2xl"
            >
              <Icon className="w-12 h-12 text-black mb-4" />
              <h3
                className="text-xl font-bold text-black mb-3"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {service.title}
              </h3>
              <p
                className="text-black text-sm"
                style={{ fontFamily: "'Roboto', sans-serif" }}
              >
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
