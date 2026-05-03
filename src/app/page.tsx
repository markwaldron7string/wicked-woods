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
                  Decades in the making, it has been a dream of our
                  family&apos;s to have our horses at home and to build an
                  educational equestrian program unlike most in the surrounding
                  area. Starting in 2021, with an empty plot of land, we have
                  built not only our personal forever home, but the forever home
                  for our horses.
                </p>
                <p className="text-gray-200 mb-4">
                  Like any grand adventure, The Wicked Woods dream started long
                  before 2021 - as a small ember - while riding and showing my
                  horse Dante (under the show name Wicked) and working on
                  various horse farms around the country - growing into a
                  wildfire. My name is Kristen and I started riding in 1997.
                  I have been riding for over two decades and purchased my
                  first horse in 1998 from a woman I still refer to as my
                  second mother. I spent years at the same lesson
                  facility, learning to feed and care for the horses, just as
                  intensely as I learned to ride the horses. That experience
                  instilled a holistic approach to horsemanship that I wish to
                  pass on to future horse-people. After having moved from
                  Colorado to Florida, and then to Ohio, I have taken the
                  opportunity to grow and learn from each person I&apos;ve
                  encountered, and have built this dream around the
                  beliefs that have grown from those experiences. Our horses
                  have free access to runs off their stalls while inside,
                  sizable pastures for ample turnout in most weather conditions
                  - with shelters, free-fed hay, and twice daily grain.
                </p>
                <p className="text-gray-200 mb-4">
                  The Wicked Woods is an inclusive facility that will aid all
                  horse crazy people in finding a way to keep these animals in
                  their lives. We have flexible lesson plans, work exchange,
                  lease options, and community outreach programs to ensure that
                  anyone who wants to learn to ride and care for horses, will be
                  given that opportunity.
                </p>
                <p className="text-gray-200">
                  Please see the Services page for Boarding information, and
                  Learning Opportunity page for lesson details.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-auto translate-y-12 text-center">
            {/* CREDIT */}
            <a
              href="https://mark-waldron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 mb-3 opacity-70 hover:opacity-100 transition"
            >
              <Image
                src="/images/logo/mw-orangelogo.png"
                alt="Mark Waldron Logo"
                width={38}
                height={38}
                className="object-contain"
              />
              <span className="text-sm text-white/70">
                Site by Mark Waldron
              </span>
            </a>

            {/* COPYRIGHT */}
            <div className="text-white/60 text-sm cursor-default">
              ©2026 The Wicked Woods. All Rights Reserved.
            </div>
          </div>
        </HomeSection>
      </FadeIn>
    </main>
  );
}
