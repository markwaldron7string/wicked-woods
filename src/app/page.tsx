import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import Link from "next/link";

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
      <HomeSection>
        <div className="-mt-10">
          <FadeIn>
            {/* COMBINED CARD */}
            <div className="backdrop-blur-md bg-black/30 rounded-xl p-6 md:p-10 shadow-lg shadow-black/30">
              <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 items-start md:items-center">
                {/* IMAGE */}
                <div className="relative w-full h-72 md:h-[420px] overflow-hidden rounded-md">
                  <Image
                    src="/images/hero/path.jpg"
                    alt="Trail view"
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
                  />
                </div>

                {/* TEXT */}
                <div className="leading-relaxed text-white/80 cursor-default">
                  <h2 className="text-3xl md:text-4xl mb-6 text-gray-300">
                    The Wicked Woods Story
                  </h2>

                  <p className="mb-4 text-gray-300">
                    Decades in the making, it has been a dream of our
                    family&apos;s to have our horses at home and to build an
                    educational equestrian program unlike most in the
                    surrounding area. Starting in 2021, with an empty plot of
                    land, we have built not only our personal forever home, but
                    the forever home for our horses.
                  </p>

                  <p className="mb-4 text-gray-300">
                    Like any grand adventure, The Wicked Woods dream started
                    long before 2021 - as a small ember - while riding and
                    showing my horse Dante (under the show name Wicked) and
                    working on various horse farms around the country - growing
                    into a wildfire. My name is Kristen and I started riding in
                    1997. I have been riding for over two decades and purchased
                    my first horse in 1998 from a woman I still refer to as my
                    second mother. I spent years at the same lesson facility,
                    learning to feed and care for the horses, just as intensely
                    as I learned to ride the horses. That experience instilled a
                    holistic approach to horsemanship that I wish to pass on to
                    future horse-people. After having moved from Colorado to
                    Florida, and then to Ohio, I have taken the opportunity to
                    grow and learn from each person I&apos;ve encountered, and
                    have built this dream around the beliefs that have grown
                    from those experiences. Our horses have free access to runs
                    off their stalls while inside, sizable pastures for ample
                    turnout in most weather conditions - with shelters, free-fed
                    hay, and twice daily grain.
                  </p>

                  <p className="mb-4 text-gray-300">
                    The Wicked Woods is an inclusive facility that will aid all
                    horse crazy people in finding a way to keep these animals in
                    their lives. We have flexible lesson plans, work exchange,
                    lease options, and community outreach programs to ensure
                    that anyone who wants to learn to ride and care for horses,
                    will be given that opportunity.
                  </p>
                  <p className="mb-4 text-gray-300">
                    Please see the{" "}
                    <Link href="/services">
                      <span className="font-bold hover:text-white transition-colors">
                        Services
                      </span>
                    </Link>{" "}
                    page for Boarding information, and Learning Opportunity page
                    for lesson details.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="mt-auto translate-y-16 text-center">
          {/* CREDIT */}
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
              className="object-contain transition duration-300 
               [filter:drop-shadow(0_0_4px_rgba(255,115,0,0.6))]
               group-hover:[filter:drop-shadow(0_0_10px_rgba(255,115,0,0.9))]"
            />
            <span
              className="text-sm text-white/60 object-contain transition duration-300 
               [filter:drop-shadow(0_0_4px_rgba(255,115,0,0.6))]
               group-hover:[filter:drop-shadow(0_0_10px_rgba(255,115,0,0.9))]"
            >
              Site by Mark Waldron
            </span>
          </a>

          {/* COPYRIGHT */}
          <div className="text-white/40 text-sm cursor-default">
            ©2026 The Wicked Woods. All Rights Reserved.
          </div>
        </div>
      </HomeSection>
    </main>
  );
}
