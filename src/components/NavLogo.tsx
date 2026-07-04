import Image from "next/image";
import Link from "next/link";

export type LogoStyle = "plain" | "shadow" | "badge" | "circle";

type NavLogoProps = {
  href?: string;
  style: LogoStyle;
  size?: "sm" | "lg";
  priority?: boolean;
  preview?: boolean;
};

export default function NavLogo({
  href = "/",
  style,
  size = "lg",
  priority = true,
  preview = false,
}: NavLogoProps) {
  const imageClassName = size === "lg" ? "h-20 w-auto" : "h-16 w-auto";
  const circleClassName = size === "lg" ? "size-24" : "size-20";

  const image = (
    <Image
      src="/images/logo/whitelogonobg.png"
      alt="Wicked Woods Equestrian Center"
      width={280}
      height={120}
      priority={priority}
      className={`relative z-10 ${imageClassName} ${
        style === "shadow"
          ? "drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] drop-shadow-[0_0_24px_rgba(0,0,0,0.45)]"
          : ""
      }`}
    />
  );

  if (style === "badge") {
    const badge = (
      <span className="inline-flex items-center justify-center rounded-xl bg-black/45 backdrop-blur-sm px-3 py-1.5 border border-white/10">
        {image}
      </span>
    );

    if (preview) return badge;

    return <Link href={href}>{badge}</Link>;
  }

  if (style === "circle") {
    const circle = (
      <span className="relative inline-flex items-center justify-center">
        <span
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black ${circleClassName}`}
          aria-hidden="true"
        />
        {image}
      </span>
    );

    if (preview) return circle;

    return <Link href={href}>{circle}</Link>;
  }

  const plain = (
    <span className="inline-flex items-center justify-center">{image}</span>
  );

  if (preview) return plain;

  return <Link href={href}>{plain}</Link>;
}

export const LOGO_STYLE_OPTIONS: {
  id: LogoStyle;
  label: string;
  description: string;
}[] = [
  {
    id: "plain",
    label: "Plain",
    description: "No backdrop — clean and minimal.",
  },
  {
    id: "shadow",
    label: "Drop shadow",
    description: "Subtle depth for legibility on busy backgrounds.",
  },
  {
    id: "badge",
    label: "Soft badge",
    description: "Rounded rectangle that follows the logo shape.",
  },
  {
    id: "circle",
    label: "Black circle",
    description: "Centered circle behind the logo (current style).",
  },
];

export const DEFAULT_LOGO_STYLE: LogoStyle = "circle";

export const LOGO_STYLE_STORAGE_KEY = "wicked-woods-logo-style";

export const LOGO_STYLE_EVENT = "wicked-woods-logo-style-change";
