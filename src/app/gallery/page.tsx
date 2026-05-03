"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Lightbox from "@/components/Lightbox";

const galleryImages = Array.from(
  { length: 19 },
  (_, i) => `/images/gallery/misc${i + 1}.jpg`
);

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = () =>
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryImages.length
    );

  const prev = () =>
    setActiveIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );

  return (
    <div className="relative min-h-screen text-white bg-black">
      
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/hero/woodsiding.jpg')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto cursor-default">
        
        {/* TITLE */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          Gallery
        </h1>

        {/* MASONRY GRID */}
        <div className="masonry">
          {galleryImages.map((src, index) => (
            <div key={index} className="masonry-item">
              <FadeIn delay={index * 0.05}>
                <Image
                  src={src}
                  alt={`Gallery photo ${index + 1}`}
                  width={800}
                  height={600}
                  className="masonry-img cursor-pointer transition-transform duration-700 ease-out hover:scale-[1.01]"
                  onClick={() => setActiveIndex(index)}
                />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  );
}