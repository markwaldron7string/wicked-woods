import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";

export default function Lessons() {
  return (
    <main className="relative min-h-screen flex items-center justify-center text-white">
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/lessons/lessongear.jpg"
          alt="Lessons"
          fill
          priority
          className="object-cover object-left"
        />
      </div>

      {/* DARK OVERLAY (for readability) */}
      <div className="absolute bottom-0 left-0 w-full h-58 bg-gradient-to-b from-transparent via-black/40 to-black/70 -z-10" />

      {/* CONTENT */}
      <div className="max-w-6xl mx-auto px-6 pt-28 pb-16 md:pt-32 md:pb-96 grid md:grid-cols-2 gap-12">
        {/* LITTLE LESSONS */}
        <FadeIn delay={0.3}>
        <Link href="/contact" className="group">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/lessons/littlelessons.jpg"
                alt="Little Lessons"
                fill
                className="object-cover object-[center_75%]"
              />
            </div>
            <h2 className="text-2xl md:text-3xl mb-4 font-light">
              Little Lessons
            </h2>
            <p className="text-white/80 leading-relaxed">
              We offer short rides (10–15 minutes) for children three and older to
              give smaller enthusiasts a fun introduction to riding. These
              sessions are currently private and involve the instructor leading
              the pony with a parent assisting for stability. As more staff
              becomes available, this program will continue to evolve.
            </p>
          </div>
        </Link>
        </FadeIn>

        {/* RIDING LESSONS */}
        <FadeIn delay={0.6}>
        <Link href="/contact" className="group">
          <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 md:p-8 shadow-xl transition-transform duration-300 hover:scale-[1.02]">
            <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
              <Image
                src="/images/lessons/closeup.jpg"
                alt="Riding Lessons"
                fill
                className="object-cover object-center"
              />
            </div>
            <h2 className="text-2xl md:text-3xl mb-4 font-light">
              Riding Lessons
            </h2>
            <p className="text-white/80 leading-relaxed">
              Riding lessons are typically 30–40 minutes depending on the
              student’s needs. Ride time increases as independence grows,
              including preparing horses for lessons. Monthly horsemanship and
              groundwork sessions are required for all students over the age of 7
              to build a well-rounded foundation.
            </p>
          </div>
        </Link>
        </FadeIn>
      </div>
    </main>
  );
}
