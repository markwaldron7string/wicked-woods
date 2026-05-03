import Link from "next/link";

export default function Page() {
  return (
    <div className="relative min-h-screen text-white">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50"
        style={{ backgroundImage: "url('/images/hero/woodsiding.jpg')" }}
      />

      {/* CONTENT */}
      <div className="relative z-10 px-6 py-24 max-w-5xl mx-auto cursor-default">
        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Services
        </h1>

        {/* MAIN CARD */}
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

          {/* INCLUDED */}
          <div>
            <h2 className="text-2xl mb-6 text-center">
              Your monthly board will include:
            </h2>

            <div className="text-white/80 text-sm leading-relaxed text-center lg:text-left grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-4">
              <p>Customized feed plan to include:</p>
              <p>
                Free-fed hay inside (first, second, and third cuttings pending
                diet needs)
              </p>
              <p>Round bales in hay huts in pastures year-round</p>
              <p>
                Tribute feeds included, will feed owner grain w/ board
                adjustment as requested
              </p>
              <p>
                Supplements and medications fed if prepped by owner in
                baggies/containers/SmarPaks
              </p>
              <p>
                12x12 matted stall with 24hr access to 12x16 run with
                mud-resistent footing, doors will only be closed for extreme
                weather events.
              </p>
              <p>Individual stall fan</p>
              <p>
                Shavings/sawdust included, 7day per week stall cleaning as well
                as holidays
              </p>
              <p>Hot/cold wash rack</p>
              <p>Tack locker with 2 saddle and bridle racks</p>
              <p>80x160 lit arena</p>
              <p>Blanketing with blanket changes</p>
              <p>Fly spray, masks, boots, sheets put on before turnout</p>
              <p>Access to small trail system on property</p>
              <p>Blanket and additional tack storage in our tack house</p>
              <p>Owners on site</p>
              <p>Hold for farrier/vet pending schedule availability</p>
              <p>Trailer parking</p>
            </div>
          </div>

          {/* PRICE */}
          <div className="text-center border-t border-white/20 pt-8">
            <p className="text-lg md:text-xl">
              <span className="font-semibold">Full Care Board:</span> $550 /
              month
            </p>
            <p className="text-white/60 text-sm mt-2">
              Deposit required at start of board contract
            </p>
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
      </div>
    </div>
  );
}
