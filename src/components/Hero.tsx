import Image from "next/image";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";

const amalfi = localFont({
  src: "../../public/fonts/AmalfiCoast.ttf",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Hero({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle?: string;
  image: string;
}) {
  return (
    <div className="relative h-[55vh] md:h-[40vh] w-full overflow-hidden">
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-top brightness-105 contrast-105 saturate-110"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#2a1f14]/10" />

      {/* TEXT */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 pt-20 md:pt-10 gap-12">
        <h1 className={`${amalfi.className} text-5xl md:text-7xl`}>{title}</h1>

        {subtitle && (
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-[1px] w-16 bg-white/60" />

            <p className={`${serif.className} text-[20px] tracking-[0.4em]`}>
              {subtitle}
            </p>

            <div className="h-[1px] w-16 bg-white/60" />
          </div>
        )}
      </div>

      {/* FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/400 to-black/90" />
      </div>
    </div>
  );
}
