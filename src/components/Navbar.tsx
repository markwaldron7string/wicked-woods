"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import NavLogo, {
  DEFAULT_LOGO_STYLE,
  LOGO_STYLE_EVENT,
  LOGO_STYLE_STORAGE_KEY,
  type LogoStyle,
} from "@/components/NavLogo";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [logoStyle, setLogoStyle] = useState<LogoStyle>(DEFAULT_LOGO_STYLE);
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem(
      LOGO_STYLE_STORAGE_KEY,
    ) as LogoStyle | null;
    if (saved) {
      setLogoStyle(saved);
    }

    const handleStyleChange = (event: Event) => {
      const customEvent = event as CustomEvent<LogoStyle>;
      if (customEvent.detail) {
        setLogoStyle(customEvent.detail);
      }
    };

    window.addEventListener(LOGO_STYLE_EVENT, handleStyleChange);
    return () => window.removeEventListener(LOGO_STYLE_EVENT, handleStyleChange);
  }, []);

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

  return (
    <nav className="absolute md:absolute top-0 left-0 w-full z-50 flex justify-center items-center px-6 md:px-10 py-2 text-white">
      {/* DESKTOP LOGO (≥1024px) */}
      <div className="absolute top-6 left-2 z-50 hidden lg:block">
        <NavLogo href={logoHref} style={logoStyle} size="lg" />
      </div>

      {/* MOBILE / TABLET LOGO (<1024px) */}
      <div className="absolute top-6 left-4 z-50 block lg:hidden">
        <NavLogo href={logoHref} style={logoStyle} size="sm" />
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
