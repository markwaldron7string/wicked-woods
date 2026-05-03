"use client";

import { useState } from "react";
import Lightbox from "@/components/Lightbox";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const facilityImages = [
  "/images/facility/facility1.jpeg",
  "/images/facility/facility2.jpeg",
  "/images/facility/facility3.jpeg",
  "/images/facility/facility4.jpeg",
  "/images/facility/facility5.jpeg",
];

export default function Facility() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const next = () =>
    setActiveIndex((prev) =>
      prev === null ? 0 : (prev + 1) % facilityImages.length,
    );

  const prev = () =>
    setActiveIndex((prev) =>
      prev === null
        ? 0
        : (prev - 1 + facilityImages.length) % facilityImages.length,
    );

  return (
    <div className="relative min-h-screen text-white bg-black">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-60"
        style={{ backgroundImage: "url('/images/hero/woodsiding.jpg')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto cursor-default">
        <h1 className="text-4xl font-bold mb-10 text-center">The Facility</h1>

        {/* CARD */}
        <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-8 md:p-12 mb-16 space-y-6 text-white/80 leading-relaxed text-center max-w-4xl mx-auto shadow-lg shadow-black/30">
          <p>
            The Wicked Woods is situated on nearly 11 acres in Stark County just
            east of Canton in Louisville, OH. We are conveniently located within
            10 minutes of Canton, 20 minutes North Canton, and 40 minutes from
            Akron. Situated on a rolling hillside for ample drainage, the
            property is a good mix of pasture and forest. We have four sizable
            pastures with new electrobraid fencing to ensure good pasture
            management and safe herd dynamics, each with a shelter and hay hut
            for round bales.
          </p>
          <p>
            The barn is a new build with 11 spacious stalls, fans for each
            horse, runs for added space, hot and cold wash rack, boarders tack
            room with lockers, feed room, and owners separate tack space. The
            80x160 arena is well maintained, and trails will be cut into the
            woods as we work through projects throughout the farm. There is an
            additional Tack House that was our original working tack storage
            space, which will now be used to store blankets, tack boxes,
            equipment… all the extras anyone may have but not need on a daily
            basis.
          </p>
        </div>

        {/* GRID */}
        <div className="masonry">
          {facilityImages.map((src, index) => (
            <div key={index} className="masonry-item">
              <FadeIn delay={index * 0.05}>
                <Image
                  src={src}
                  alt={`Facility ${index + 1}`}
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

      {activeIndex !== null && (
        <Lightbox
          images={facilityImages}
          currentIndex={activeIndex}
          onClose={() => setActiveIndex(null)}
          onNext={next}
          onPrev={prev}
        />
      )}
    </div>
  );
}
