import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-dvh flex flex-col">
      {/* HERO */}
        <Hero
          title="The Wicked Woods"
          subtitle="EQUESTRIAN CENTER"
          image="/images/hero/ww-banner.jpg"
        />

      {/* STORY SECTION */}
      <FadeIn>
      <HomeSection>
        <div className="-mt-10">
          <div className="grid md:grid-cols-2 gap-10 items-start max-w-6xl mx-auto">
            {/* LEFT IMAGE */}
            <div className="relative w-full h-100 md:h-246">
              <Image
                src="/images/farm/path.jpg"
                alt="Trail view"
                fill
                className="object-cover rounded-xl"
              />
            </div>
            {/* RIGHT TEXT */}
            <div className="leading-relaxed backdrop-blur-md backdrop-saturate-150 bg-white/5 p-8 md:p-10 rounded-xl border border-white/0 shadow-[0_8px_32px_rgba(0,0,0,0.25)]">
              <h2 className="text-3xl md:text-4xl mb-6">
                The Wicked Woods Story
              </h2>
              <p className="text-gray-200 mb-4">
                Decades in the making, it has been a dream of our family&apos;s to have
                our horses at home and to build an educational equestrian program
                unlike most in the surrounding area. Starting in 2021, with an
                empty 10 acre plot of land, we have built not only our personal
                forever home, but the forever home for our horses. After getting
                all of our must-have facilities in place (horse shelters,
                pastures, arena, and tack house), and developing a rhythm for farm
                management, we are finally ready to open our doors to students for
                riding and horsemanship lessons.
              </p>
              <p className="text-gray-200 mb-4">
                Like any grand adventure, The Wicked Woods dream started long
                before 2021, a small ember as I rode and showed my horse Dante
                (under the show name Wicked), and worked on various horse farms
                around the country, growing into a wildfire. I started riding in
                1997 and purchased my first horse in 1998 from a woman I still
                refer to as my second mother. I spent years at the same lesson
                facility, learning to feed and care for the horses, just as
                intensely as I learned to ride the horses. That experience
                instilled a holistic approach to horsemanship that I wish to pass
                on to future horse-people. As I moved from Colorado to Florida,
                and then to Ohio, I have taken the opportunity to grow an learn
                from each person I&apos;ve encountered, good and bad, and have built my
                dream around the beliefs that have grown from those experiences.
                Our horses have free access to pasture, hay, and water, twice
                daily grain, and full turnout with shelter - you won&apos;t find a box
                stall here. We put in an arena with safe footing that is groomed
                regularly, and a tack house is available for storage of all the
                stuff that comes along with horses.
              </p>
              <p className="text-gray-200">
                The Wicked Woods is an inclusive facility that will aid all horse
                crazy people in finding a way to keep these animals in their
                lives. We have flexible lesson plans, work exchange, lease
                options, and community outreach programs to ensure that anyone who
                wants to learn to ride and care for horses, will be given that
                opportunity.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-auto text-center translate-y-12 text-white/60 text-sm cursor-default">
          ©2026 The Wicked Woods. All Rights Reserved.
        </div>
      </HomeSection>
      </FadeIn>
    </main>
  );
}
