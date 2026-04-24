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
    <div className="relative min-h-[65vh] md:h-[40vh] w-full overflow-hidden">
      {/* IMAGE */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover object-top brightness-95 contrast-85 saturate-100"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#2a1f14]/10" />

      {/* TEXT */}
      <div className="absolute inset-0 cursor-default flex flex-col items-center justify-center text-white text-center px-4 pt-28 pb-20 md:pt-20 md:pb-0 gap-12">
        <h1 className={`${amalfi.className} text-5xl md:text-7xl`}>{title}</h1>

        {subtitle && (
          <div className="flex items-center justify-center gap-4 mt-4">
            <div className="h-px w-16 bg-white/60" />

            <p className={`${serif.className} text-[20px] tracking-[0.4em]`}>
              {subtitle}
            </p>

            <div className="h-px w-16 bg-white/60" />
          </div>
        )}
      </div>

      {/* FADE */}
      <div className="absolute bottom-0 left-0 w-full h-32 md:h-40 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-black/10 to-black/90" />
      </div>
    </div>
  );
}
