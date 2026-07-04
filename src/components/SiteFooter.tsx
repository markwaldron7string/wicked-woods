import Image from "next/image";

export default function SiteFooter() {
  return (
    <footer className="mt-20 pt-8 pb-10 text-center border-t border-white/10">
      <a
        href="https://mark-waldron.com"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1 opacity-70 hover:opacity-100 transition"
      >
        <Image
          src="/images/logo/mw-orangelogo.png"
          alt="Mark Waldron Logo"
          width={34}
          height={34}
          className="object-contain transition duration-300 [filter:drop-shadow(0_0_4px_rgba(255,115,0,0.6))] group-hover:[filter:drop-shadow(0_0_10px_rgba(255,115,0,0.9))]"
        />
        <span className="text-sm text-white/60 transition duration-300 [filter:drop-shadow(0_0_4px_rgba(255,115,0,0.6))] group-hover:[filter:drop-shadow(0_0_10px_rgba(255,115,0,0.9))]">
          Site by Mark Waldron
        </span>
      </a>
      <div className="text-white/40 text-sm mt-3">
        ©2026 The Wicked Woods. All Rights Reserved.
      </div>
    </footer>
  );
}
