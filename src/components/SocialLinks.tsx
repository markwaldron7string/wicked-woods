"use client";

import { usePathname } from "next/navigation";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

export default function SocialLinks() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  // Every page except /home has a hamburger menu on mobile, which holds its
  // own social links there instead. /home has no hamburger, so keep these
  // corner links visible on mobile only for that page.
  const mobileVisible = pathname === "/home";

  return (
    <div
      className={`fixed top-4 right-16 md:top-6 md:right-8 z-50 flex items-center gap-4 text-white/75 ${
        mobileVisible ? "flex" : "hidden"
      } md:flex`}
    >
      <a
        href="https://www.facebook.com/profile.php?id=100088086146913"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Facebook page"
        className="hover:text-white transition-colors duration-200"
      >
        <FacebookIcon className="w-6 h-6 md:w-7 md:h-7" />
      </a>
      <a
        href="https://www.instagram.com/thefarmatwickedwoods/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Visit our Instagram page"
        className="hover:text-white transition-colors duration-200"
      >
        <InstagramIcon className="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </div>
  );
}
