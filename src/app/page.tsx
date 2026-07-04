import Hero from "@/components/Hero";
import HomeSection from "@/components/HomeSection";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import StoryContent from "@/components/StoryContent";
import SiteFooter from "@/components/SiteFooter";

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
                <StoryContent />
              </div>
            </div>
          </FadeIn>
        </div>
        <div className="mt-auto translate-y-16">
          <SiteFooter />
        </div>
      </HomeSection>
    </main>
  );
}
