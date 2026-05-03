"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  onClose,
  onNext,
  onPrev,
}: Props) {
  const [loaded, setLoaded] = useState(false);
  const currentImage = images[currentIndex];

  // Preload adjacent images (smooth nav)
  useEffect(() => {
    const nextImg = new window.Image();
    const prevImg = new window.Image();

    nextImg.src = images[(currentIndex + 1) % images.length];
    prevImg.src =
      images[(currentIndex - 1 + images.length) % images.length];
  }, [currentIndex, images]);

  // Keyboard + scroll lock
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "auto";
    };
  }, [onClose, onNext, onPrev]);

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* IMAGE WRAPPER */}
      <div className="relative z-10 max-w-5xl w-full px-6">

        {/* IMAGE */}
        <Image
          key={currentImage}
          src={currentImage}
          alt="Expanded"
          width={1600}
          height={1000}
          onLoad={() => setLoaded(true)}
          className={`w-full h-auto rounded-lg transition-all duration-500 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        />
      </div>

      {/* CLOSE */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-4xl z-20 cursor-pointer p-3 hover:scale-110 transition"
      >
        ✕
      </button>

      {/* LEFT */}
      <button
        onClick={onPrev}
        className="absolute left-4 md:left-8 text-white text-5xl z-20 cursor-pointer p-6 hover:scale-125 transition"
      >
        ‹
      </button>

      {/* RIGHT */}
      <button
        onClick={onNext}
        className="absolute right-4 md:right-8 text-white text-5xl z-20 cursor-pointer p-6 hover:scale-125 transition"
      >
        ›
      </button>
    </div>
  );
}