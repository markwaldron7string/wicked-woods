import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const horses = [
  {
    name: "Sergeant Cadburry (Sarge)",
    image: "/images/horses/sergeant.jpg",
    description:
      "Sarge is youngest of the four boys. He's showing wonderful prospect with each ride and will be a great partner for our advanced-beginner to intermediate students.",
  },
  {
    name: "Jeepers Creepers",
    image: "/images/horses/jc.jpg",
    description:
      "Jeepers was an impulse purchase like no other. He was purchased from an auction website, site unseen, with no known history. Over the last few years he's come a long way from the muddy little pony who was scared of everyone. He totes our little girl around so pleasantly, and cannot wait to help other little equestrians learn to love horses.",
  },
  {
    name: "Goblin",
    image: "/images/horses/goblin.jpg",
    description:
      "Goblin is our first program pony and is Mr. Personality with immense patience and politeness. He is a very smooth, quiet ride, keeps a level head, and stands like a statue while enjoying a nice grooming. He loves attention, and especially loves mint candies.",
  },
  {
    name: "Wicked (Dante)",
    image: "/images/horses/dante.jpg",
    description:
      "Dante has been owned and loved by Kristen for 18 years, and has been a once-in-a-lifetime horse. He's shown in dressage, jumpers, and eventing; been on the trails of the Rocky Mountains and through the sawgrasses of the Everglades. While he has many, many miles on him, he's still an advanced ride, and will be available for select lessons.",
  },
  {
    name: "Queen",
    image: "/images/horses/queen.jpg",
    description:
      "Queen is an Off the Track Thoroughbred (OTTB), last raced in June 2025 - at 17hh she is a stately mare with presence and awe-inspiring movement. Now that she has had time to adjust to off-track life, she will be taking the throne as Kristen's competitive mount.",
  },
];

export default function Horses() {
  return (
    <main className="relative min-h-screen text-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/horses/background.jpg"
          alt="Horses background"
          fill
          priority
          className="object-cover brightness-75"
        />
      </div>

      {/* TOP FADE */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/70 to-transparent -z-10" />

      {/* CONTENT */}
      <div className="max-w-7xl cursor-default mx-auto px-6 md:px-12 pt-32 pb-20">
        {/* TITLE */}
        <FadeIn>
          <h1 className="text-4xl md:text-6xl text-center mb-16">
            Meet the Horses
          </h1>
        </FadeIn>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
          {horses.map((horse, index) => (
            <FadeIn key={horse.name} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center mb-16">
                {/* IMAGE */}
                <div className="relative w-full h-64 mb-4 overflow-hidden rounded-md">
                  <Image
                    src={horse.image}
                    alt={horse.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* NAME */}
                <h2 className="text-lg font-medium underline mb-3">
                  {horse.name}
                </h2>

                {/* DESCRIPTION */}
                <p className="text-white/80 text-sm leading-relaxed">
                  {horse.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </main>
  );
}
