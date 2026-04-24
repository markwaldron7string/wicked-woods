import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const farmImages = Array.from(
  { length: 12 },
  (_, i) => `/images/farm/farm${i + 1}.jpg`,
);

export default function FarmPage() {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/images/hero/woodsiding.jpg')" }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 py-20 max-w-6xl mx-auto">
        <h1 className="text-4xl cursor-default font-bold mb-10 text-center">The Farm</h1>

        <div className="masonry">
          {farmImages.map((src, index) => (
            <div key={index} className="masonry-item">
              <FadeIn delay={index * 0.05}>
                <Image
                  src={src}
                  alt={`Farm photo ${index + 1}`}
                  width={800}
                  height={600}
                  className="masonry-img"
                />
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
