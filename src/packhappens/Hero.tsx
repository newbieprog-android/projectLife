import { Button } from "./Button";
import { PhoneMockup } from "./PhoneMockup";

function Wordmark() {
  return (
    <a href="#top" className="flex items-center gap-2.5">
      <img src="/packhappens/app-icon.png" alt="" width="36" height="36" className="h-9 w-9 rounded-xl" />
      <span className="text-[1.05rem] font-extrabold tracking-tight text-espresso">
        Packhappens
      </span>
    </a>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-cream">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="animate-blob absolute -top-40 -right-32 h-[560px] w-[560px] bg-amber/40 blur-[70px]" />
        <div
          className="animate-blob absolute top-1/3 -left-56 h-[420px] w-[420px] rounded-full bg-terracotta/12 blur-[90px]"
          style={{ animationDelay: "-8s" }}
        />
        <svg
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          className="absolute inset-x-0 top-40 h-64 w-full text-espresso/12"
        >
          <path
            d="M-20 320 C 220 250, 380 120, 620 150 S 980 260, 1220 90"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeDasharray="2 12"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-6 md:px-10">
        <header className="flex items-center justify-between py-6">
          <Wordmark />
          <div className="hidden items-center gap-3 text-[0.78rem] font-semibold text-espresso/55 sm:flex">
            <span>Free forever</span>
            <span className="h-1 w-1 rounded-full bg-terracotta" />
            <span>No account</span>
            <span className="h-1 w-1 rounded-full bg-terracotta" />
            <span>Android</span>
          </div>
        </header>

        <div className="grid items-center gap-14 pt-8 pb-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:pt-16 lg:pb-28">
          <div className="reveal max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-espresso/12 bg-white/70 px-3.5 py-1.5 text-[0.72rem] font-semibold text-espresso/70">
              🕯️ Built by a founder who lost his charger in Room 412
            </span>

            <h1 className="mt-6 text-[3.2rem] leading-[0.95] font-extrabold text-espresso sm:text-6xl lg:text-[4.25rem]">
              Pack without the{" "}
              <span className="relative inline-block text-terracotta">
                panic.
                <svg
                  aria-hidden
                  viewBox="0 0 220 16"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3.5 w-full text-amber"
                >
                  <path
                    d="M3 11 C 42 3, 74 14, 112 7 S 182 3, 217 10"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-espresso/65">
              Brain dump everything, assign to bags, and never leave your charger at the hotel
              again.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3.5">
              <Button variant="amber" size="xl" disabled>
                Coming soon on Google Play
              </Button>
              <Button variant="line" size="xl" asChild>
                <a href="#how-it-works">
                See how it works
                <svg viewBox="0 0 16 16" className="h-4 w-4" aria-hidden>
                  <path
                    d="M8 2v10m0 0 4-4m-4 4-4-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                </a>
              </Button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-[0.8rem] font-medium text-espresso/50">
              {["No account needed", "No subscription", "Offline checklists"].map((line) => (
                <span key={line} className="flex items-center gap-1.5">
                  <svg viewBox="0 0 14 14" className="h-3.5 w-3.5 text-amber-deep" aria-hidden>
                    <path
                      d="M2 7.5 5.5 11 12 3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {line}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal-late relative">
            <PhoneMockup />
            <div className="mt-6 flex justify-center">
              <span className="animate-sway inline-block -rotate-2 rounded-xl border border-dashed border-espresso/25 bg-white/60 px-3 py-1.5 text-[0.72rem] font-semibold text-espresso/60">
                Room 412 never wins again.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
