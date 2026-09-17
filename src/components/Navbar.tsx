"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLogo from "@/components/NavLogo";
import { useChrome } from "@/components/ChromeContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { navLinksVisible } = useChrome();

  const isActive = (path: string) => pathname.replace(/\/$/, "") === path;

  const linkClass = (path: string) => {
    const active = isActive(path);
    return `nav-link py-2 transition-colors duration-200 hover:text-white ${
      active ? "is-active text-white font-medium" : "text-white/75"
    }`;
  };

  if (pathname === "/home") return null;

  return (
    <nav className="absolute md:absolute top-0 left-0 w-full z-50 flex justify-center items-center px-6 md:px-10 py-2 text-white">
      {/* DESKTOP LOGO (≥1024px) */}
      <div className="absolute top-6 left-2 z-50 hidden lg:block">
        <NavLogo href="/home" size="lg" />
      </div>

      {/* MOBILE / TABLET LOGO (<1024px) */}
      <div className="absolute top-6 left-4 z-50 block lg:hidden">
        <NavLogo href="/home" size="sm" />
      </div>

      {/* DESKTOP NAV */}
      <div
        className={`space-x-8 text-sm tracking-wide hidden md:flex items-center transition-opacity duration-300 ${
          navLinksVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <Link href="/home" className={linkClass("/home")}>
          Home
        </Link>
        <Link href="/services" className={linkClass("/services")}>
          Services
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
        <Link href="/lessons" className={linkClass("/lessons")}>
          Learning Opportunities
        </Link>
        <Link href="/facility" className={linkClass("/facility")}>
          The Facility
        </Link>
        <Link href="/horses" className={linkClass("/horses")}>
          Meet the Horses
        </Link>
        <Link href="/gallery" className={linkClass("/gallery")}>
          Gallery
        </Link>
        <Link href="/our-story" className={linkClass("/our-story")}>
          Our Story
        </Link>
      </div>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className={`md:hidden cursor-pointer fixed top-4 right-6 z-50 flex flex-col justify-center items-center w-8 h-8 transition-opacity duration-300 ${
          navLinksVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span
          className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "rotate-45" : "-translate-y-2"
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <span
          className={`absolute h-0.5 w-6 bg-white transition-all duration-300 ${
            open ? "-rotate-45" : "translate-y-2"
          }`}
        />
      </button>

      {/* MOBILE DROPDOWN */}
      <div
        className={`fixed top-0 left-0 w-full bg-black/40 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          open ? "max-h-125 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          <Link href="/home" className={`block ${linkClass("/home")}`} onClick={() => setOpen(false)}>
            Home
          </Link>

          <Link href="/services" className={`block ${linkClass("/services")}`} onClick={() => setOpen(false)}>
            Services
          </Link>

          <Link href="/contact" className={`block ${linkClass("/contact")}`} onClick={() => setOpen(false)}>
            Contact
          </Link>

          <Link href="/lessons" className={`block ${linkClass("/lessons")}`} onClick={() => setOpen(false)}>
            Learning Opportunities
          </Link>

          <Link href="/facility" className={`block ${linkClass("/facility")}`} onClick={() => setOpen(false)}>
            The Facility
          </Link>

          <Link href="/horses" className={`block ${linkClass("/horses")}`} onClick={() => setOpen(false)}>
            Meet the Horses
          </Link>

          <Link href="/gallery" className={`block ${linkClass("/gallery")}`} onClick={() => setOpen(false)}>
            Gallery
          </Link>

          <Link href="/our-story" className={`block ${linkClass("/our-story")}`} onClick={() => setOpen(false)}>
            Our Story
          </Link>

        </div>
      </div>
    </nav>
  );
}
