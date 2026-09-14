"use client";

import { useLayoutEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Cormorant_Garamond } from "next/font/google";
import localFont from "next/font/local";
import { useChrome } from "@/components/ChromeContext";

const amalfi = localFont({
  src: "../../../public/fonts/AmalfiCoast.ttf",
  display: "swap",
});

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Intro() {
  const { setNavLinksVisible } = useChrome();

  useLayoutEffect(() => {
    setNavLinksVisible(false);
    return () => setNavLinksVisible(true);
  }, [setNavLinksVisible]);

  return (
    <main className="relative h-dvh w-full text-white overflow-hidden">
      {/* FULL-BLEED BANNER */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      >
        <Image
          src="/images/hero/ww-banner.jpg"
          alt="The Wicked Woods"
          fill
          priority
          className="object-cover object-top brightness-65 contrast-85 saturate-100"
        />
        <div className="absolute inset-0 bg-[#2a1f14]/10" />
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </motion.div>

      {/* TEXT */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4 gap-10 cursor-default">
        <div className="flex flex-col items-center gap-16">
          <motion.h1
            className={`${amalfi.className} text-5xl md:text-8xl`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            The Wicked Woods
          </motion.h1>

          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          >
            <div className="h-px w-16 bg-white/60" />
            <p className={`${serif.className} text-[20px] tracking-[0.4em]`}>
              EQUESTRIAN CENTER
            </p>
            <div className="h-px w-16 bg-white/60" />
          </motion.div>
        </div>

        {/* ENTER SITE — appears ~2s in with a slow, looping glow that locks in place on hover */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{
            opacity: 1,
            y: 0,
            boxShadow: [
              "0 0 0px rgba(255,255,255,0.0)",
              "0 0 18px rgba(255,255,255,0.55)",
              "0 0 0px rgba(255,255,255,0.0)",
            ],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 2, ease: "easeOut" },
            y: { duration: 0.8, delay: 2, ease: "easeOut" },
            boxShadow: {
              duration: 2.5,
              delay: 2.2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
          whileHover={{
            boxShadow: "0 0 18px rgba(255,255,255,0.55)",
            transition: { duration: 0.4, ease: "easeOut" },
          }}
          className="mt-4 rounded-full"
        >
          <Link
            href="/"
            className="block cursor-pointer text-sm tracking-[0.3em] uppercase text-white/90 hover:text-white border border-white/40 hover:border-white/70 rounded-full px-8 py-3 transition-colors"
          >
            Enter Site
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
