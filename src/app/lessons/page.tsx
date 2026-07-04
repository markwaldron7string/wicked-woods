import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FixedImageBackground from "@/components/FixedImageBackground";
import PageHeader from "@/components/PageHeader";
import GlassCard from "@/components/GlassCard";
import SiteFooter from "@/components/SiteFooter";

export default function Lessons() {
  return (
    <main className="relative min-h-dvh text-white">
      <FixedImageBackground
        src="/images/lessons/lessongear.jpg"
        alt="Learning opportunities background"
        objectPosition="object-left"
        priority
      />

      <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
        <PageHeader
          title="Learning Opportunities"
          subtitle="Flexible lesson programs for riders of all ages and experience levels."
        />

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <FadeIn delay={0.15}>
            <Link href="/contact" className="group block h-full">
              <GlassCard className="p-6 md:p-8 h-full transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/images/lessons/closeup.jpg"
                    alt="Riding Lessons"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl mb-4 font-light">
                  Riding Lessons
                </h2>
                <p className="text-white/80 leading-relaxed">
                  Riding lessons are typically 30–40 minutes depending on the
                  student&apos;s needs. Ride time increases as independence
                  grows, including preparing horses for lessons. Monthly
                  horsemanship and groundwork sessions are required for all
                  students over the age of 7 to build a well-rounded
                  foundation.
                </p>
              </GlassCard>
            </Link>
          </FadeIn>

          <FadeIn delay={0.3}>
            <Link href="/contact" className="group block h-full">
              <GlassCard className="p-6 md:p-8 h-full transition-transform duration-300 hover:scale-[1.01]">
                <div className="relative w-full h-64 mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/images/lessons/littlelessons.jpg"
                    alt="Little Lessons"
                    fill
                    className="object-cover object-[center_75%] transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h2 className="text-2xl md:text-3xl mb-4 font-light">
                  Little Lessons
                </h2>
                <p className="text-white/80 leading-relaxed">
                  We offer short rides (10–15 minutes) for children three and
                  older to give smaller enthusiasts a fun introduction to
                  riding. These sessions are currently private and involve the
                  instructor leading the pony with a parent assisting for
                  stability. As more staff becomes available, this program will
                  continue to evolve.
                </p>
              </GlassCard>
            </Link>
          </FadeIn>
        </div>

        <SiteFooter />
      </div>
    </main>
  );
}
