import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import SiteFooter from "@/components/SiteFooter";

export default function OurStory() {
  return (
    <main className="relative min-h-dvh flex flex-col text-white overflow-hidden">
      {/* WOODEN BACKGROUND */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/images/hero/woodsiding.jpg"
          alt="background"
          fill
          priority
          className="object-cover object-bottom scale-110 brightness-75"
        />
        <div className="absolute top-0 left-0 w-full h-48 bg-linear-to-b from-black via-black/70 to-transparent" />
      </div>

      <div className="flex-1 flex items-center px-6 md:px-16 pt-32 pb-20">
        <FadeIn>
          <div className="max-w-5xl lg:max-w-none mx-auto w-full">
            <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-[492px_1fr] gap-8 md:gap-10 items-start">
              {/* IMAGE CARD — horse on the trail, full image shown */}
              <div className="w-full backdrop-blur-md bg-black/30 rounded-xl p-4 shadow-lg shadow-black/30">
                <div className="relative w-full aspect-3/4 overflow-hidden rounded-md">
                  <Image
                    src="/images/hero/path.jpg"
                    alt="Trail view"
                    fill
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.01]"
                  />
                </div>
              </div>

              {/* TEXT CARD — full story, always expanded */}
              <div className="backdrop-blur-md bg-black/30 rounded-xl p-6 md:p-10 shadow-lg shadow-black/30 leading-relaxed text-white/80">
                <h2 className="text-3xl md:text-4xl mb-6 text-gray-300">
                  The Wicked Woods Story
                </h2>

                <p className="mb-4 text-gray-300">
                  Decades in the making, it has been a dream of our
                  family&apos;s to have our horses at home and to build an
                  educational equestrian program unlike most in the
                  surrounding area. Starting in 2021, with an empty plot
                  of land, we have built not only our personal forever
                  home, but the forever home for our horses.
                </p>

                <p className="mb-4 text-gray-300">
                  Like any grand adventure, The Wicked Woods dream
                  started long before 2021 - as a small ember - while
                  riding and showing my horse Dante (under the show name
                  Wicked) and working on various horse farms around the
                  country - growing into a wildfire. My name is Kristen
                  and I started riding in 1997. I have been riding for
                  over two decades and purchased my first horse in 1998
                  from a woman I still refer to as my second mother. I
                  spent years at the same lesson facility, learning to
                  feed and care for the horses, just as intensely as I
                  learned to ride the horses. That experience instilled
                  a holistic approach to horsemanship that I wish to
                  pass on to future horse-people. After having moved
                  from Colorado to Florida, and then to Ohio, I have
                  taken the opportunity to grow and learn from each
                  person I&apos;ve encountered, and have built this
                  dream around the beliefs that have grown from those
                  experiences. Our horses have free access to runs off
                  their stalls while inside, sizable pastures for ample
                  turnout in most weather conditions - with shelters,
                  free-fed hay, and twice daily grain.
                </p>

                <p className="mb-4 text-gray-300">
                  The Wicked Woods is an inclusive facility that will
                  aid all horse crazy people in finding a way to keep
                  these animals in their lives. We have flexible lesson
                  plans, work exchange, lease options, and community
                  outreach programs to ensure that anyone who wants to
                  learn to ride and care for horses, will be given that
                  opportunity.
                </p>

                <p className="mb-4 text-gray-300">
                  Please see the{" "}
                  <Link href="/services">
                    <span className="font-bold hover:text-white transition-colors">
                      Services
                    </span>
                  </Link>{" "}
                  page for boarding information, and the{" "}
                  <Link href="/lessons">
                    <span className="font-bold hover:text-white transition-colors">
                      Learning Opportunities
                    </span>
                  </Link>{" "}
                  page for lesson details.
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="px-6 md:px-16">
        <SiteFooter />
      </div>
    </main>
  );
}
