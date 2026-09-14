import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";

const amalfi = localFont({
  src: "../../public/fonts/AmalfiCoast.ttf",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

const links = [
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Learning Opportunities", href: "/lessons" },
  { label: "The Facility", href: "/facility" },
  { label: "Meet the Horses", href: "/horses" },
  { label: "Our Story", href: "/our-story" },
  { label: "Gallery", href: "/gallery" },
];

export default function Home() {
  return (
    <main className="relative min-h-dvh flex flex-col text-white overflow-hidden">
      {/* WOODEN BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/woodsiding.jpg"
          alt="background"
          fill
          priority
          className="object-cover object-bottom scale-110 brightness-75"
        />
        <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-black via-black/70 to-transparent" />
      </div>

      <div className="flex-1 flex items-center justify-center px-6 py-32">
        <FadeIn>
          <div className="flex flex-col items-center text-center gap-12">
            <div className="flex flex-col items-center gap-16 cursor-default">
              <h1 className={`${amalfi.className} text-5xl md:text-7xl`}>
                The Wicked Woods
              </h1>

              <div className="flex items-center justify-center gap-4">
                <div className="h-px w-16 bg-white/60" />
                <p className={`${serif.className} text-[18px] tracking-[0.4em]`}>
                  EQUESTRIAN CENTER
                </p>
                <div className="h-px w-16 bg-white/60" />
              </div>
            </div>

            <nav className="flex flex-col items-center gap-6 text-2xl md:text-3xl tracking-wide">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="glow-link py-1 text-white/85"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </FadeIn>
      </div>

      <div className="text-center pb-4">
        <Link
          href="/intro"
          className="text-[11px] tracking-[0.3em] uppercase text-white/25 hover:text-white/60 transition-colors"
        >
          Replay Intro
        </Link>
      </div>

      <div className="px-6 md:px-16">
        <SiteFooter />
      </div>
    </main>
  );
}
