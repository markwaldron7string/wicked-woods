"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavLogo, {
  DEFAULT_LOGO_STYLE,
  LOGO_STYLE_EVENT,
  LOGO_STYLE_OPTIONS,
  LOGO_STYLE_STORAGE_KEY,
  type LogoStyle,
} from "@/components/NavLogo";

const BACKGROUNDS = [
  {
    label: "Hero banner",
    src: "/images/hero/ww-banner.jpg",
    objectPosition: "object-top",
  },
  {
    label: "Wood siding",
    src: "/images/hero/woodsiding.jpg",
    objectPosition: "object-center",
  },
  {
    label: "Lessons photo",
    src: "/images/lessons/lessongear.jpg",
    objectPosition: "object-left",
  },
] as const;

export default function LogoPreviewPage() {
  const [activeStyle, setActiveStyle] = useState<LogoStyle>(DEFAULT_LOGO_STYLE);

  useEffect(() => {
    const saved = localStorage.getItem(
      LOGO_STYLE_STORAGE_KEY,
    ) as LogoStyle | null;
    if (saved && LOGO_STYLE_OPTIONS.some((option) => option.id === saved)) {
      setActiveStyle(saved);
    }
  }, []);

  const applyStyle = (style: LogoStyle) => {
    localStorage.setItem(LOGO_STYLE_STORAGE_KEY, style);
    setActiveStyle(style);
    window.dispatchEvent(
      new CustomEvent(LOGO_STYLE_EVENT, { detail: style }),
    );
  };

  return (
    <main className="min-h-dvh bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 pt-32 pb-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide">
            Logo Style Preview
          </h1>
          <p className="mt-4 text-white/70 max-w-2xl mx-auto leading-relaxed">
            Compare each treatment on the backgrounds used across the site.
            Click &ldquo;Try on site&rdquo; to apply one to the navbar, then
            browse around to see how it feels in context.
          </p>
          <div className="mt-6 mx-auto h-px w-16 bg-white/40" />
        </div>

        <div className="mb-10 rounded-2xl border border-white/15 bg-white/5 p-5 text-center">
          <p className="text-sm text-white/60 mb-1">
            Currently applied to navbar
          </p>
          <p className="text-lg font-medium capitalize">{activeStyle}</p>
          <Link
            href="/"
            className="inline-block mt-4 text-sm text-white/80 underline underline-offset-4 hover:text-white"
          >
            Go to home page to preview in the navbar →
          </Link>
        </div>

        <div className="space-y-16">
          {LOGO_STYLE_OPTIONS.map((option) => (
            <section
              key={option.id}
              className={`rounded-2xl border p-6 md:p-8 transition-colors ${
                activeStyle === option.id
                  ? "border-white/40 bg-white/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h2 className="text-2xl font-light">{option.label}</h2>
                  <p className="text-white/70 mt-1">{option.description}</p>
                </div>
                <button
                  type="button"
                  onClick={() => applyStyle(option.id)}
                  className={`cursor-pointer rounded-lg px-5 py-2.5 text-sm font-medium transition-colors ${
                    activeStyle === option.id
                      ? "bg-white text-black"
                      : "bg-white/15 hover:bg-white/25"
                  }`}
                >
                  {activeStyle === option.id ? "Applied" : "Try on site"}
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                {BACKGROUNDS.map((background) => (
                  <div
                    key={background.label}
                    className="relative overflow-hidden rounded-xl border border-white/10"
                  >
                    <div className="relative h-40">
                      <Image
                        src={background.src}
                        alt={background.label}
                        fill
                        className={`object-cover ${background.objectPosition}`}
                      />
                      <div className="absolute inset-0 bg-black/20" />
                    </div>
                    <div className="absolute inset-0 flex items-start justify-start p-5">
                      <NavLogo
                        style={option.id}
                        size="lg"
                        priority={false}
                        preview
                      />
                    </div>
                    <p className="absolute bottom-3 left-3 text-xs text-white/70 bg-black/50 px-2 py-1 rounded">
                      {background.label}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className="mt-12 text-center text-sm text-white/50">
          When you&apos;ve picked a favorite, let us know which one and
          we&apos;ll set it permanently and remove this preview page.
        </p>
      </div>
    </main>
  );
}
