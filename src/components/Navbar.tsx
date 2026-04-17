"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path: string) =>
  `transition-all duration-400 hover:scale-105 hover:text-white text-white/80 ${
    pathname === path ? "text-white font-semibold" : ""
  }`;

  return (
    <nav className="absolute top-0 left-0 w-full z-50 flex justify-end items-center px-6 py-4 text-white">
      <div className="space-x-8 text-sm md:text-base hidden md:flex items-center">
        <Link href="/" className={linkClass("/")}>Home</Link>
        <Link href="/lessons" className={linkClass("/lessons")}>Learning Opportunities</Link>
        <Link href="/horses" className={linkClass("/horses")}>Meet the Horses</Link>
        <Link href="/farm" className={linkClass("/farm")}>The Farm</Link>
        <Link href="/gallery" className={linkClass("/gallery")}>Gallery</Link>
        <Link href="/artists" className={linkClass("/artists")}>Supporting Local Artists</Link>
      </div>
    </nav>
  );
}