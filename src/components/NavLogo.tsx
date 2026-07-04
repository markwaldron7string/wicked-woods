import Image from "next/image";
import Link from "next/link";

type NavLogoProps = {
  href: string;
  size?: "sm" | "lg";
  priority?: boolean;
};

export default function NavLogo({
  href,
  size = "lg",
  priority = true,
}: NavLogoProps) {
  const imageClassName = size === "lg" ? "h-20 w-auto" : "h-16 w-auto";

  return (
    <Link href={href} className="inline-flex items-center justify-center">
      <Image
        src="/images/logo/whitelogonobg.png"
        alt="Wicked Woods Equestrian Center"
        width={280}
        height={120}
        priority={priority}
        className={`${imageClassName} drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] drop-shadow-[0_0_24px_rgba(0,0,0,0.45)]`}
      />
    </Link>
  );
}
