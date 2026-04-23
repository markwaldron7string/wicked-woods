"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
  const cleanPathname =
    pathname !== "/" ? pathname.replace(/\/$/, "") : pathname;

  if (path === "/") {
    return cleanPathname === "/";
  }

  return cleanPathname === path;
};

  const linkClass = (path: string) =>
    `block py-2 transition-all duration-200 ${
      isActive(path) ? "text-white font-semibold" : "text-white/80"
    } hover:text-white`;

  return (
    <nav className="absolute md:absolute top-0 left-0 w-full z-50 flex justify-center items-center px-6 md:px-10 py-2 text-white">
      {/* DESKTOP NAV */}
      <div className="space-x-8 text-sm md:text-base hidden md:flex items-center">
        <Link href="/" className={linkClass("/")}>
          Home
        </Link>
        <Link href="/contact" className={linkClass("/contact")}>
          Contact
        </Link>
        <Link href="/lessons" className={linkClass("/lessons")}>
          Learning Opportunities
        </Link>
        <Link href="/horses" className={linkClass("/horses")}>
          Meet the Horses
        </Link>
        <Link href="/farm" className={linkClass("/farm")}>
          The Farm
        </Link>
        <Link href="/gallery" className={linkClass("/gallery")}>
          Gallery
        </Link>
        <Link href="/artists" className={linkClass("/artists")}>
          Supporting Local Artists
        </Link>
      </div>

      {/* HAMBURGER BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden cursor-pointer fixed top-4 right-6 z-50 flex flex-col justify-center items-center w-8 h-8"
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
          <Link
            href="/"
            className={linkClass("/")}
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          <Link
            href="/contact"
            className={linkClass("/contact")}
            onClick={() => setOpen(false)}
          >
            Contact
          </Link>

          <Link
            href="/lessons"
            className={linkClass("/lessons")}
            onClick={() => setOpen(false)}
          >
            Learning Opportunities
          </Link>

          <Link
            href="/horses"
            className={linkClass("/horses")}
            onClick={() => setOpen(false)}
          >
            Meet the Horses
          </Link>

          <Link
            href="/farm"
            className={linkClass("/farm")}
            onClick={() => setOpen(false)}
          >
            The Farm
          </Link>

          <Link
            href="/gallery"
            className={linkClass("/gallery")}
            onClick={() => setOpen(false)}
          >
            Gallery
          </Link>

          <Link
            href="/artists"
            className={linkClass("/artists")}
            onClick={() => setOpen(false)}
          >
            Supporting Local Artists
          </Link>
        </div>
      </div>
    </nav>
  );
}
