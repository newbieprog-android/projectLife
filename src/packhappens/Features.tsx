const features = [
  {
    emoji: "🧳",
    title: "Smart Templates",
    body: "Beach, Business, Adventure, City, Camping, Custom.",
    pro: false,
  },
  {
    emoji: "⛅",
    title: "Weather Card",
    body: "Know what to pack before you pack it.",
    pro: false,
  },
  {
    emoji: "✅",
    title: "Pack Mode",
    body: "Check off items bag by bag until the trip is closed.",
    pro: false,
  },
  {
    emoji: "✈️",
    title: "Travel Mode",
    body: "Quick access to essentials on the go.",
    pro: true,
  },
  {
    emoji: "🏠",
    title: "Return Mode",
    body: "Make sure it all came back.",
    pro: true,
  },
  {
    emoji: "🛎️",
    title: "Room Sweep",
    body: "Room by room before checkout.",
    pro: true,
  },
];

export function Features() {
  return (
    <section className="bg-paper">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10 md:py-32">
        <div className="reveal max-w-2xl">
          <h2 className="text-3xl font-extrabold text-espresso sm:text-[2.6rem]">
            Everything your trip needs.
          </h2>
          <p className="mt-5 text-[1.05rem] leading-relaxed text-espresso/60">
            Six small things that keep a whole trip together.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:mt-14 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="reveal group rounded-3xl border border-espresso/10 bg-cream/50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber hover:bg-cream hover:shadow-card"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl shadow-inset-warm ring-1 ring-espresso/8">
                  {feature.emoji}
                </span>
                {feature.pro && (
                  <span className="rounded-full bg-terracotta-soft px-2.5 py-1 text-[0.62rem] font-extrabold tracking-wider text-terracotta uppercase">
                    Pro
                  </span>
                )}
              </div>
              <h3 className="mt-6 text-lg font-extrabold text-espresso">{feature.title}</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-espresso/60">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
