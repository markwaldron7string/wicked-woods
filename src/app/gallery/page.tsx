"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Lightbox from "@/components/Lightbox";
import WoodBackground from "@/components/WoodBackground";
import PageHeader from "@/components/PageHeader";
import SiteFooter from "@/components/SiteFooter";

const galleryImages = Array.from(
  { length: 19 },
  (_, i) => `/images/gallery/misc${i + 1}.jpg`,
);

export default function GalleryPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = () =>
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryImages.length,
    );

  const prev = () =>
    setActiveIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + galleryImages.length) % galleryImages.length,
    );

  return (
    <main className="relative min-h-dvh text-white">
      <WoodBackground opacity="subtle" />

      <div className="relative z-10 px-6 pt-32 pb-12 max-w-6xl mx-auto cursor-default">
        <PageHeader
          title="Gallery"
          subtitle="A glimpse of life at The Wicked Woods."
        />

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

        <SiteFooter />
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={galleryImages}
          currentIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNext={next}
          onPrev={prev}
        />
      )}
    </main>
  );
}
