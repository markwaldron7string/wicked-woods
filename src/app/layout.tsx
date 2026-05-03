import "./globals.css";
import Navbar from "@/components/Navbar";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata = {
  title: "The Wicked Woods",
  description: "Equestrian Center",
  icons: {
    icon: [
      { url: "/images/logo/circlelogo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo/circlelogo.png", sizes: "192x192", type: "image/png" },
    ],
    apple: "/images/logo/circlelogo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} relative text-white bg-black`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
