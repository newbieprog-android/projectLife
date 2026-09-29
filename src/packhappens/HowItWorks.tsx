const steps = [
  {
    n: "01",
    emoji: "🧠",
    title: "Brain Dump",
    body: "List everything without thinking about where it goes.",
  },
  {
    n: "02",
    emoji: "🎒",
    title: "Assign to Bags",
    body: "Tap items into your carry-on, check-in, or any bag you name.",
  },
  {
    n: "03",
    emoji: "🏠",
    title: "Return Home Complete",
    body: "A reverse checklist makes sure everything came back with you.",
  },
];

function ArrowRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 20" aria-hidden className={className}>
      <path
        d="M2 10h48"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="1 9"
        strokeLinecap="round"
      />
      <path
        d="M44 4l8 6-8 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden bg-cream">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <div className="reveal max-w-2xl">
          <p className="eyebrow text-terracotta">
            <span className="h-1.5 w-1.5 rounded-full bg-terracotta" aria-hidden />
            The full trip loop
          </p>
          <h2 className="mt-5 text-3xl font-extrabold text-espresso sm:text-[2.6rem]">
            Three moves, start to finish.
          </h2>
        </div>

        <ol className="mt-12 grid gap-10 md:mt-16 md:grid-cols-3 md:gap-10">
          {steps.map((step, i) => (
            <li key={step.n} className="reveal relative flex flex-col">
              <div className="flex items-center gap-4">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-amber text-2xl shadow-amber">
                  {step.emoji}
                </span>
                <span className="text-[0.72rem] font-extrabold tracking-[0.2em] text-espresso/35">
                  {step.n}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-extrabold text-espresso">{step.title}</h3>
              <p className="mt-3 max-w-xs text-[0.98rem] leading-relaxed text-espresso/60">
                {step.body}
              </p>

              {i < steps.length - 1 && (
                <>
                  <ArrowRight className="absolute top-4 -right-10 hidden h-5 w-10 text-espresso/30 md:block" />
                  <ArrowRight className="absolute -bottom-9 left-6 h-5 w-10 rotate-90 text-espresso/30 md:hidden" />
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
