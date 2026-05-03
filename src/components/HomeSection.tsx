import Image from "next/image";

export default function HomeSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative py-20 px-6 md:px-20 text-white overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/woodsiding.jpg"
          alt="background"
          fill
          className="w-full h-full object-cover object-bottom scale-110 brightness-75"
        />

        {/* 🔥 TOP FADE (this is the key) */}
        <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-black via-black/70 to-transparent" />
      </div>

      {children}
    </section>
  );
}