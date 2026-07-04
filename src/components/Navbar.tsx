"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

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

  const linkClass = (path: string) => {
    const active = isActive(path);
    return `py-2 transition-all duration-200 hover:text-white ${
      active
        ? "text-white font-medium underline underline-offset-[6px] decoration-white/60"
        : "text-white/75"
    }`;
  };

  const logoHref = pathname === "/" ? "/contact" : "/";

  const LogoLink = ({
    circleClassName,
    imageClassName,
  }: {
    circleClassName: string;
    imageClassName: string;
  }) => (
    <Link
      href={logoHref}
      className="relative inline-flex items-center justify-center"
    >
      <span
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black ${circleClassName}`}
        aria-hidden="true"
      />
      <Image
        src="/images/logo/whitelogonobg.png"
        alt="Wicked Woods Equestrian Center"
        width={280}
        height={120}
        priority
        className={`relative z-10 ${imageClassName}`}
      />
    </Link>
  );

  return (
    <nav className="absolute md:absolute top-0 left-0 w-full z-50 flex justify-center items-center px-6 md:px-10 py-2 text-white">
      {/* DESKTOP LOGO (≥1024px) */}
      <div className="absolute top-6 left-2 z-50 hidden lg:block">
        <LogoLink circleClassName="size-24" imageClassName="h-20 w-auto" />
      </div>

      {/* MOBILE / TABLET LOGO (<1024px) */}
      <div className="absolute top-6 left-4 z-50 block lg:hidden">
        <LogoLink circleClassName="size-20" imageClassName="h-16 w-auto" />
      </div>

      {/* DESKTOP NAV */}
      <div className="space-x-8 text-sm tracking-wide hidden md:flex items-center">
        <Link href="/" className={linkClass("/")}>
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
          <Link href="/" className={`block ${linkClass("/")}`} onClick={() => setOpen(false)}>
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

        </div>
      </div>
    </nav>
  );
}
