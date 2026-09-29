export function OriginStory() {
  return (
    <section className="grain relative overflow-hidden bg-espresso">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber/12 blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[600px] px-6 py-20 text-center md:py-32">
        <p className="eyebrow justify-center text-amber">
          <span className="h-px w-6 bg-amber/40" aria-hidden />
          Why we built this
          <span className="h-px w-6 bg-amber/40" aria-hidden />
        </p>

        <h2 className="mt-7 text-3xl leading-[1.1] font-extrabold text-cream sm:text-[2.6rem]">
          In loving memory of
          <br className="hidden sm:block" /> The Charger Left Behind.
        </h2>

        <p className="mt-7 text-[1.05rem] leading-relaxed text-cream/70">
          It happened to our founder on a business trip. The charger. The power bank. Gone. Left at
          Room 412. Packhappens was built so this never happens to you.
        </p>

        <div className="mt-8 flex justify-center">
          <span className="animate-breathe grid h-14 w-14 place-items-center rounded-full border border-amber/25 bg-amber/10 text-2xl">
            🕯️
          </span>
        </div>
      </div>
    </section>
  );
}
