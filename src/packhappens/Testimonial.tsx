export function Testimonial() {
  return (
    <section className="grain relative overflow-hidden bg-espresso">
      <div className="relative mx-auto w-full max-w-3xl px-6 py-20 text-center md:py-32">
        <span
          aria-hidden
          className="block text-[5rem] leading-[0.6] font-extrabold text-amber select-none"
        >
          &ldquo;
        </span>

        <blockquote className="mt-8 text-2xl leading-[1.35] font-bold text-cream sm:text-[2rem]">
          Finally an app that thinks about coming HOME, not just leaving.
        </blockquote>

        <figcaption className="mt-8 text-[0.88rem] font-semibold tracking-wide text-amber">
          — Early tester, Cavite PH
        </figcaption>
      </div>
    </section>
  );
}
