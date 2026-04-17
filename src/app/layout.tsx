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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lato.className} relative text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
