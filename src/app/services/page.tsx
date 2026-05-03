import FadeIn from "@/components/FadeIn";
import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-screen text-white">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-60"
        style={{ backgroundImage: "url('/images/hero/woodsiding.jpg')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-24 max-w-5xl mx-auto cursor-default">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Services
        </h1>

        {/* MAIN CARD */}
        <FadeIn>
          <div className="backdrop-blur-md bg-black/30 border border-white/10 rounded-xl p-8 md:p-12 space-y-10">
            {/* INTRO */}
            <p className="text-white/80 leading-relaxed text-center max-w-3xl mx-auto">
              The Wicked Woods is a full care boarding facility ideal for multiple
              disciplines, retirees and semi-retirees, casual riders, and the
              occasional competitor. Our arena has excellent footing, is well
              maintained, and regularly assessed for drainage and stability. It
              will be under lights in 2026, extending evening ride times
              throughout the year.
            </p>
            {/* WHAT'S INCLUDED */}
            <div>
              <h2 className="text-2xl mb-6 lg:text-center">
                Your monthly board will include:
              </h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 text-white/80 text-sm leading-relaxed">
                {/* LEFT COLUMN */}
                <ul className="space-y-4 list-disc list-outside pl-5">
                  <li>
                    Customized feed plan to include:
                    <ul className="list-[circle] list-outside pl-5 mt-2 space-y-1 text-white/70">
                      <li>
                        Free-fed hay inside (first, second, and third cuttings
                        pending diet needs)
                      </li>
                      <li>Round bales in hay huts in pastures year-round</li>
                      <li>
                        Tribute feeds included, will feed owner grain w/ board
                        adjustment as requested
                      </li>
                      <li>
                        Supplements and medications fed if prepped by owner in
                        baggies/containers/SmarPaks
                      </li>
                    </ul>
                  </li>
                  <li>
                    12x12 matted stall with 24hr access to 12x16 run with
                    mud-resistant footing, doors will only be closed for extreme
                    weather events.
                  </li>
                  <li>Individual stall fan</li>
                  <li>
                    Shavings/sawdust included, 7day per week stall cleaning as
                    well as holidays
                  </li>
                </ul>
                {/* RIGHT COLUMN */}
                <ul className="space-y-4 list-disc list-inside">
                  <li>Hot/cold wash rack</li>
                  <li>Tack locker with 2 saddle and bridle racks</li>
                  <li>80x160 lit arena</li>
                  <li>Blanketing with blanket changes</li>
                  <li>Fly spray, masks, boots, sheets put on before turnout</li>
                  <li>Access to small trail system on property</li>
                  <li>Blanket and additional tack storage in our tack house</li>
                  <li>Owners on site</li>
                  <li>Hold for farrier/vet pending schedule availability</li>
                  <li>Trailer parking</li>
                </ul>
              </div>
            </div>
            {/* ADDITIONAL SERVICES */}
            <div>
              <h2 className="text-2xl mb-8 text-center">Additional Services</h2>
              <div className="max-w-xl mx-auto space-y-6 text-white/80 text-sm text-center">
                <div>
                  <p className="font-medium text-white mb-1">Riding Lessons</p>
                  <p className="text-white/60">
                    See{" "}
                    <Link href="/lessons">
                      <span className="text-white/60 hover:text-white/80 transition-colors">
                        Learning Opportunities
                      </span>
                    </Link>{" "}
                    page
                  </p>
                </div>
                <div>
                  <p className="font-medium text-white mb-2">Body Clipping</p>
                  <div className="space-y-1">
                    <p>Full: $200</p>
                    <p>Trace: $150</p>
                    <p>Legs only: $75</p>
                  </div>
                </div>
                <div>
                  <p className="font-medium text-white mb-1">Bandage Changes</p>
                  <p>$15 per change (owner supplies materials)</p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
