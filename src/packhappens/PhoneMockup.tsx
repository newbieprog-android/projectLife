type Trip = {
  emoji: string;
  name: string;
  meta: string;
  pct: number;
  bags: string[];
  current?: boolean;
};

const trips: Trip[] = [
  {
    emoji: "🏝️",
    name: "Cebu Getaway",
    meta: "Beach template · in 4 days",
    pct: 78,
    bags: ["🎒 Carry-on", "🧳 Check-in"],
    current: true,
  },
  {
    emoji: "🗼",
    name: "Tokyo Business",
    meta: "Business template · in 12 days",
    pct: 45,
    bags: ["🎒 Carry-on", "💼 Laptop"],
  },
  {
    emoji: "⛰️",
    name: "Banaue Weekend",
    meta: "Adventure template · in 26 days",
    pct: 12,
    bags: ["🎒 Daypack"],
  },
];

function TripCard({ trip }: { trip: Trip }) {
  return (
    <div
      className={`rounded-2xl border p-3 ${
        trip.current
          ? "border-amber bg-white shadow-card"
          : "border-espresso/8 bg-white/60"
      }`}
    >
      <div className="flex items-start gap-2.5">
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-cream-deep text-base">
          {trip.emoji}
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <p className="truncate text-[0.8rem] font-bold text-espresso">{trip.name}</p>
            <span className="shrink-0 text-[0.6rem] font-bold text-espresso/50">{trip.pct}%</span>
          </div>
          <p className="truncate text-[0.62rem] text-espresso/55">{trip.meta}</p>
          <div className="mt-2 h-1 overflow-hidden rounded-full bg-cream-deep">
            <div
              className="h-full rounded-full bg-amber"
              style={{ width: `${trip.pct}%` }}
            />
          </div>
          <div className="mt-2 flex flex-wrap gap-1">
            {trip.bags.map((bag) => (
              <span
                key={bag}
                className="rounded-full bg-cream-deep/80 px-1.5 py-0.5 text-[0.55rem] font-semibold text-espresso/70"
              >
                {bag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-5 pt-3 text-[0.6rem] font-bold text-espresso/70">
      <span>9:41</span>
      <div className="flex items-center gap-1">
        <svg viewBox="0 0 16 10" className="h-2 w-4 fill-espresso/70">
          <rect x="0" y="6" width="3" height="4" rx="1" />
          <rect x="4.5" y="4" width="3" height="6" rx="1" />
          <rect x="9" y="2" width="3" height="8" rx="1" />
          <rect x="13.5" y="0" width="2.5" height="10" rx="1" opacity="0.35" />
        </svg>
        <svg viewBox="0 0 22 10" className="h-2.5 w-5">
          <rect
            x="0.5"
            y="0.5"
            width="18"
            height="9"
            rx="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-espresso/50"
          />
          <rect x="2" y="2" width="12" height="6" rx="1.5" className="fill-espresso/70" />
        </svg>
      </div>
    </div>
  );
}

function BottomNav() {
  const items = [
    { icon: "🏠", label: "Home", active: true },
    { icon: "🧳", label: "Trip" },
    { icon: "⚙️", label: "Settings" },
  ];

  return (
    <div className="mt-3 flex items-end justify-between rounded-t-3xl border-t border-espresso/8 bg-white/80 px-4 pt-2.5 pb-3 backdrop-blur">
      {items.map((item) => (
        <div key={item.label} className="flex flex-col items-center gap-1">
          <span
            className={`grid h-7 w-7 place-items-center rounded-xl text-[0.8rem] ${
              item.active ? "bg-amber/30" : ""
            }`}
          >
            {item.icon}
          </span>
          <span
            className={`text-[0.5rem] font-bold ${
              item.active ? "text-espresso" : "text-espresso/40"
            }`}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}

export function PhoneMockup() {
  return (
    <div className="relative mx-auto w-[290px] max-w-full sm:w-[310px]">
      {/* Floating proof chips */}
      <div className="absolute -left-10 top-16 z-20 hidden animate-float-slow -rotate-6 rounded-2xl border border-espresso/10 bg-white px-3 py-2 shadow-card sm:block">
        <p className="text-[0.7rem] font-bold text-espresso">🔌 Charger ✓</p>
        <p className="text-[0.6rem] text-espresso/50">Carry-on · packed</p>
      </div>
      <div
        className="absolute -right-8 bottom-28 z-20 hidden animate-float-slow rotate-3 rounded-2xl border border-espresso/10 bg-white px-3 py-2 shadow-card sm:block"
        style={{ animationDelay: "-4s" }}
      >
        <p className="text-[0.7rem] font-bold text-espresso">🔋 Power bank ✓</p>
        <p className="text-[0.6rem] text-espresso/50">Checked in · bag 1</p>
      </div>

      <div className="animate-float">
        <div className="rounded-[46px] border border-espresso/10 bg-espresso p-2.5 shadow-warm">
          <div className="relative overflow-hidden rounded-[38px] bg-cream">
            <div className="absolute left-1/2 top-2.5 z-30 h-4 w-20 -translate-x-1/2 rounded-full bg-espresso" />
            <StatusBar />

            <div className="px-4 pt-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.62rem] font-bold tracking-widest text-terracotta uppercase">
                    Good morning Marco
                  </p>
                  <p className="text-[0.95rem] font-extrabold text-espresso">3 trips open</p>
                </div>
                <span className="grid h-8 w-8 place-items-center rounded-full bg-amber text-[0.8rem]">
                  🕯️
                </span>
              </div>

              <div className="mt-3 flex gap-1.5">
                <span className="rounded-full bg-espresso px-2.5 py-1 text-[0.58rem] font-bold text-cream">
                  Open
                </span>
                <span className="rounded-full bg-cream-deep px-2.5 py-1 text-[0.58rem] font-bold text-espresso/55">
                  Packing
                </span>
                <span className="rounded-full bg-cream-deep px-2.5 py-1 text-[0.58rem] font-bold text-espresso/55">
                  Home
                </span>
              </div>

              <div className="mt-3 flex flex-col gap-2">
                {trips.map((trip) => (
                  <TripCard key={trip.name} trip={trip} />
                ))}
              </div>
            </div>

            <BottomNav />
          </div>
        </div>
      </div>
    </div>
  );
}
