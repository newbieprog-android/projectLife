import { Button } from "./Button";

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path
        d="M4 3.2a1.4 1.4 0 0 1 2.1-1.2l13.4 7.6a1.5 1.5 0 0 1 0 2.6L6.1 19.8A1.4 1.4 0 0 1 4 18.6V3.2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M4 3.2 14 12 4 20.8" fill="none" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-amber">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-24 -left-24 h-[380px] w-[380px] bg-cream/40 blur-[70px]" />
        <div
          className="animate-blob absolute -right-20 -bottom-28 h-[420px] w-[420px] bg-terracotta/25 blur-[80px]"
          style={{ animationDelay: "-10s" }}
        />
        <svg
          viewBox="0 0 1200 200"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-10 h-32 w-full text-espresso/15"
        >
          <path
            d="M-20 160 C 240 120, 420 40, 700 70 S 1000 150, 1220 40"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-3xl px-6 py-20 text-center md:py-32">
        <h2 className="reveal text-4xl leading-[1.05] font-extrabold text-espresso sm:text-[3.2rem]">
          Your charger deserves to come home.
        </h2>
        <p className="reveal mt-6 text-[1.08rem] leading-relaxed text-espresso/75">
          Coming soon on Google Play. No account. No subscription. Just pack.
        </p>

        <div className="reveal mt-10 flex justify-center">
          <Button variant="play" size="2xl" className="gap-3.5" disabled>
            <PlayGlyph />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[0.62rem] font-bold tracking-[0.18em] uppercase opacity-70">
                Coming soon on
              </span>
              <span className="text-[1.05rem] font-extrabold">Google Play</span>
            </span>
          </Button>
        </div>

        <p className="mt-6 text-[0.8rem] font-semibold text-espresso/55">
          🕯️ Made with love by a guy who now checks Room 412 twice.
        </p>
      </div>
    </section>
  );
}
