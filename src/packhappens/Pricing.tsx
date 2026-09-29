import { Button } from "./Button";

const plans = [
  {
    name: "Free forever",
    badge: null as string | null,
    items: ["1 bag per trip", "Pack mode", "Smart templates", "Unlimited trips"],
    cta: "Download Free",
  },
  {
    name: "Yours forever",
    badge: "₱99 one-time",
    items: ["Unlimited bags", "Full trip loop", "Room sweep", "Memory manager"],
    cta: "Upgrade to Pro",
  },
];

function Check({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" className={`h-4 w-4 shrink-0 ${className}`} aria-hidden>
      <path
        d="M2.5 8.5 6 12 13.5 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Pricing() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div
        aria-hidden
        className="animate-blob pointer-events-none absolute -right-40 bottom-0 h-[420px] w-[420px] bg-amber/25 blur-[80px]"
      />

      <div className="relative mx-auto w-full max-w-5xl px-6 py-20 md:px-10 md:py-32">
        <div className="reveal mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-espresso sm:text-[2.6rem]">
            Less than a checked baggage fee.
          </h2>
          <p className="mt-5 text-[1.05rem] text-espresso/60">
            One price. No subscription. Nothing to cancel.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:mt-14 md:grid-cols-2">
          {plans.map((plan, i) => {
            const isPro = i === 1;
            return (
              <div
                key={plan.name}
                className={`reveal flex flex-col rounded-[28px] p-8 sm:p-9 ${
                  isPro
                    ? "bg-amber shadow-amber"
                    : "border border-espresso/12 bg-white shadow-card"
                }`}
              >
                {plan.badge && (
                  <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-espresso px-3.5 py-1.5 text-[0.72rem] font-extrabold text-cream">
                    {plan.badge}
                  </span>
                )}
                <h3
                  className={`text-2xl font-extrabold ${
                    isPro ? "text-espresso" : "text-espresso"
                  }`}
                >
                  {plan.name}
                </h3>
                <ul className="mt-7 flex flex-1 flex-col gap-3.5">
                  {plan.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-3 text-[0.98rem] font-medium ${
                        isPro ? "text-espresso/85" : "text-espresso/70"
                      }`}
                    >
                      <Check className={isPro ? "text-espresso" : "text-amber-deep"} />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button
                  disabled
                  variant={isPro ? "espresso" : "line"}
                  size="xl"
                  className="mt-9 w-full"
                >
                  {isPro ? "Pro coming soon" : "Coming soon on Google Play"}
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-[0.82rem] font-medium text-espresso/45">
          Pro is a one-time unlock. Buy it once, keep it forever.
        </p>
      </div>
    </section>
  );
}
