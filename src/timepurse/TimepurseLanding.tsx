import { useRef } from "react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUpRight, Clock3, Heart, LockKeyhole, Plus, ReceiptText, Sparkles, Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
const appIcon = { url: "/timepurse/assets/timePurse-store-icon-512.png" };
import { GOOGLE_PLAY_LIVE, GOOGLE_PLAY_URL, screenshots } from "./site-content";

const howItWorks = [
  { number: "01", title: "Set your time", text: "Enter your pay rate and work schedule so your hours have a real starting point.", icon: Clock3 },
  { number: "02", title: "Add a purchase", text: "Record what you bought, or bring in existing purchases with a CSV import.", icon: Plus },
  { number: "03", title: "See the hours", text: "Look at spending through the time it took to earn it, not just the price tag.", icon: ArrowRight },
];

const faqs = [
  { question: "Is timePurse free?", answer: "Yes. The tracker is free, has no ads, and does not require an account. An optional one-time Supporter purchase helps keep the app ad-free and supports future apps; it does not unlock tracker features." },
  { question: "Do wishlist items count toward my spending?", answer: "No. Your wishlist is a separate space to think about possible purchases. Items there are not included in your spending." },
  { question: "What happens with different currencies?", answer: "Amounts in different currencies stay separate. timePurse does not convert currencies or combine them into one total." },
  { question: "Where is my tracker data stored?", answer: "The purchases, wishlist items, pay details, work schedule, and preferences you enter are stored on your device. You can read more in the privacy policy." },
  { question: "Can I bring in my purchases?", answer: "Yes. timePurse supports importing purchases from a CSV file." },
  { question: GOOGLE_PLAY_LIVE ? "Where can I download timePurse?" : "When can I get it on Google Play?", answer: GOOGLE_PLAY_LIVE ? "timePurse is available on Google Play. Use the download button on this page to visit the public listing." : "The production release is currently under Google Play review. The public listing will be linked here once it is confirmed live." },
];

function StoreAction({ light = false }: { light?: boolean }) {
  if (!GOOGLE_PLAY_LIVE) {
    return (
      <div className="flex flex-col items-start gap-2">
        <Button size="lg" disabled className={light ? "h-14 rounded-md bg-cream px-6 text-base font-bold text-cream-foreground opacity-100 disabled:opacity-100" : "h-14 rounded-md bg-primary px-6 text-base font-bold text-primary-foreground opacity-100 disabled:opacity-100"}>
          Coming soon on Google Play
        </Button>
        <span className={light ? "text-sm text-cream/80" : "text-sm text-muted-foreground"}>Production release under review</span>
      </div>
    );
  }
  return (
    <Button asChild size="lg" className={light ? "h-14 rounded-md bg-cream px-6 text-base font-bold text-cream-foreground hover:bg-cream/90" : "h-14 rounded-md bg-primary px-6 text-base font-bold text-primary-foreground hover:bg-primary/90"}>
      <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer">Get it on Google Play <ArrowUpRight aria-hidden="true" /></a>
    </Button>
  );
}

export default function TimepurseLanding() {
  const galleryRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-cream focus:px-4 focus:py-2 focus:text-foreground">Skip to content</a>
      <header className="absolute inset-x-0 top-0 z-20 text-cream">
        <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
          <a href="#top" className="flex min-w-0 items-center gap-2.5 font-display text-xl font-bold tracking-normal" aria-label="timePurse, back to top">
            <img src={appIcon.url} width="36" height="36" alt="" className="h-9 w-9 shrink-0 rounded-lg" />
            <span className="truncate">timePurse</span>
          </a>
          <nav aria-label="Main navigation" className="flex shrink-0 items-center gap-4 text-sm font-medium sm:gap-7">
            <a href="#how-it-works" className="hidden transition-opacity hover:opacity-70 sm:inline">How it works</a>
            <a href="#features" className="hidden transition-opacity hover:opacity-70 sm:inline">Features</a>
            <a href="#faq" className="transition-opacity hover:opacity-70">FAQ</a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section id="top" className="relative overflow-hidden bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-7xl items-center gap-3 px-5 pb-3 pt-24 sm:px-8 sm:pb-16 sm:pt-28 lg:min-h-[min(800px,93svh)] lg:grid-cols-[1.15fr_.85fr] lg:gap-10 lg:px-12 lg:pb-24 lg:pt-36">
            <div className="relative z-10 max-w-[720px]">
              <div className="mb-4 flex items-center gap-2.5 text-[10px] font-bold uppercase tracking-[0.16em] text-cream/80 sm:mb-7 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-coral" /> {GOOGLE_PLAY_LIVE ? "Now available on Google Play" : "A different way to see spending"}</div>
              <h1 className="font-display text-[2.8rem] font-bold leading-[1.02] tracking-normal sm:text-[clamp(3.25rem,7vw,6.9rem)] sm:leading-[.98]">See what your spending costs <span className="text-cream">in time.</span></h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-cream/90 sm:mt-7 sm:text-xl">That purchase has a price. timePurse shows you the hours behind it, so you can decide what feels worth it.</p>
              <div className="mt-6 sm:mt-9"><StoreAction light /></div>
              <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-cream/25 pt-4 text-sm text-cream/85 sm:mt-9 sm:pt-5"><span>Free to use</span><span aria-hidden="true">·</span><span>No ads</span><span aria-hidden="true">·</span><span>No account</span></div>
            </div>
            <div className="relative flex h-[160px] items-start justify-center overflow-hidden sm:h-auto sm:min-h-[490px] sm:items-center sm:overflow-visible lg:min-h-[580px]" aria-label="timePurse app preview">
              <div className="absolute inset-0 grid place-items-center" aria-hidden="true"><div className="h-[min(75vw,490px)] w-[min(75vw,490px)] rounded-full border border-cream/25" /><div className="absolute h-[min(58vw,375px)] w-[min(58vw,375px)] rounded-full border border-cream/15" /></div>
              <img src={screenshots[0]?.src} width="884" height="1920" fetchPriority="high" alt="timePurse home screen showing spending this month and recent purchases measured in work time" className="relative z-10 h-[390px] w-auto rounded-[25px] border-[5px] border-cream shadow-[0_30px_80px_-25px_var(--blue-deep)] sm:h-[490px] lg:h-[550px]" />
              <span className="absolute bottom-2 right-3 hidden font-display text-[10px] font-bold uppercase tracking-[0.18em] text-cream/65 lg:block">Your money, measured in hours</span>
            </div>
          </div>
          <div className="border-t border-cream/20"><div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-xs font-bold uppercase tracking-[0.15em] text-cream/75 sm:px-8 lg:px-12"><span>Made for everyday decisions</span><a href="#how-it-works" className="inline-flex items-center gap-2 hover:text-cream">Explore <ArrowDown size={15} aria-hidden="true" /></a></div></div>
        </section>

        <section id="how-it-works" className="scroll-mt-10 bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-5 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">01 / The idea</p><h2 className="mt-5 max-w-md font-display text-4xl font-bold leading-tight sm:text-5xl">A price makes more sense in hours.</h2></div><p className="max-w-xl self-end text-lg leading-relaxed text-muted-foreground">You already know what something costs in money. timePurse adds another perspective: the working time behind the purchase.</p></div>
            <div className="mt-14 grid border-t border-border md:grid-cols-3">{howItWorks.map((item) => <div key={item.number} className="border-b border-border py-7 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"><div className="mb-12 flex items-center justify-between"><span className="font-display text-sm font-bold text-primary">{item.number}</span><item.icon size={25} strokeWidth={1.6} className="text-primary" aria-hidden="true" /></div><h3 className="font-display text-2xl font-bold">{item.title}</h3><p className="mt-3 max-w-xs leading-relaxed text-muted-foreground">{item.text}</p></div>)}</div>
          </div>
        </section>

        <section id="features" className="scroll-mt-10 bg-paper px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">02 / Inside timePurse</p><div className="mt-5 grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-end"><h2 className="max-w-xl font-display text-4xl font-bold leading-tight sm:text-5xl">The useful details, without the noise.</h2><p className="max-w-lg text-lg leading-relaxed text-muted-foreground">Keep track of what you spend, what you&apos;re considering, and what the numbers mean to you.</p></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-md border border-border bg-border md:grid-cols-2">
            <article className="min-h-60 bg-background p-7 sm:p-9"><Wallet size={28} strokeWidth={1.6} className="text-primary" aria-hidden="true" /><h3 className="mt-9 font-display text-2xl font-bold">Purchases in perspective</h3><p className="mt-3 max-w-md leading-relaxed text-muted-foreground">Record purchases and see their cost in hours worked, based on the pay rate and schedule you set.</p></article>
            <article className="min-h-60 bg-background p-7 sm:p-9"><Heart size={28} strokeWidth={1.6} className="text-coral" aria-hidden="true" /><h3 className="mt-9 font-display text-2xl font-bold">A wishlist that stays separate</h3><p className="mt-3 max-w-md leading-relaxed text-muted-foreground">Save ideas before buying. Wishlist items never count toward your spending.</p></article>
            <article className="min-h-60 bg-background p-7 sm:p-9"><Sparkles size={28} strokeWidth={1.6} className="text-primary" aria-hidden="true" /><h3 className="mt-9 font-display text-2xl font-bold">Spending insights</h3><p className="mt-3 max-w-md leading-relaxed text-muted-foreground">See patterns in your purchases with a clearer view of where your time goes.</p></article>
            <article className="min-h-60 bg-background p-7 sm:p-9"><ReceiptText size={28} strokeWidth={1.6} className="text-primary" aria-hidden="true" /><h3 className="mt-9 font-display text-2xl font-bold">Bring your history along</h3><p className="mt-3 max-w-md leading-relaxed text-muted-foreground">Import purchases from a CSV file. Different currencies stay separate, with no conversion.</p></article>
          </div></div></section>

        <section id="screenshots" className="bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto max-w-7xl"><div className="flex flex-wrap items-end justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">03 / A closer look</p><h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">See the app for yourself.</h2></div><div className="flex items-center gap-3"><Button variant="outline" size="icon" aria-label="Previous screenshots" title="Previous screenshots" onClick={() => galleryRef.current?.scrollBy({ left: -320, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}><ArrowLeft aria-hidden="true" /></Button><Button variant="outline" size="icon" aria-label="Next screenshots" title="Next screenshots" onClick={() => galleryRef.current?.scrollBy({ left: 320, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })}><ArrowRight aria-hidden="true" /></Button></div></div>
          {screenshots.length > 0 ? <div ref={galleryRef} className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-6" role="region" aria-label="timePurse app screenshots" tabIndex={0}>{screenshots.map((shot, index) => <figure key={shot.src} className="w-[min(72vw,300px)] shrink-0 snap-start sm:w-[300px]"><img src={shot.src} alt={shot.alt} width="884" height="1920" loading="lazy" decoding="async" className="h-auto w-full rounded-md border border-border" /><figcaption className="mt-4 text-sm text-muted-foreground"><span className="mr-3 font-display font-bold text-primary">{String(index + 1).padStart(2,"0")}</span>{shot.caption}</figcaption></figure>)}</div> : <div className="mt-12 flex min-h-60 flex-col justify-center border-y border-border py-10"><span className="font-display text-6xl font-bold text-primary/20 sm:text-8xl" aria-hidden="true">timePurse.</span><p className="mt-3 max-w-lg text-lg text-muted-foreground">Real app screenshots will appear here when they&apos;re available. No mock screens in the meantime.</p></div>}
          </div></section>

        <section id="privacy" className="bg-blue-deep px-5 py-20 text-cream sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-center lg:gap-20"><div className="flex h-16 w-16 items-center justify-center rounded-full border border-cream/30"><LockKeyhole size={28} strokeWidth={1.5} aria-hidden="true" /></div><div><p className="text-xs font-bold uppercase tracking-[0.17em] text-cream/65">04 / Your space</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">Your tracker data stays on your device.</h2><p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream/80">No account required. Your purchases, wishlist, pay details, work schedule, and preferences are stored on your device. <a className="font-semibold text-cream underline underline-offset-4 hover:no-underline" href="/privacy">Read the privacy policy <ArrowUpRight size={16} className="inline" aria-hidden="true" /></a></p></div></div></section>

        <section id="faq" className="scroll-mt-10 bg-background px-5 py-20 sm:px-8 lg:px-12 lg:py-28"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.7fr_1.3fr] lg:gap-24"><div><p className="text-xs font-bold uppercase tracking-[0.17em] text-primary">05 / Good to know</p><h2 className="mt-5 font-display text-4xl font-bold sm:text-5xl">Questions, answered.</h2></div><div className="border-t border-border">{faqs.map(({question,answer}) => <details key={question} className="group border-b border-border"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 py-6 font-display text-lg font-bold marker:hidden [&::-webkit-details-marker]:hidden"><span>{question}</span><Plus className="shrink-0 text-primary transition-transform group-open:rotate-45" size={20} aria-hidden="true" /></summary><p className="max-w-xl pb-6 pr-8 leading-relaxed text-muted-foreground">{answer}</p></details>)}</div></div></section>

        <section className="bg-primary px-5 py-20 text-cream sm:px-8 lg:px-12 lg:py-24"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-9 lg:flex-row lg:items-end"><div><p className="text-xs font-bold uppercase tracking-[0.17em] text-cream/70">A little more perspective</p><h2 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-tight sm:text-5xl">Make room for the question: is it worth my time?</h2></div><div className="shrink-0"><StoreAction light /></div></div></section>
      </main>
      <footer className="bg-foreground px-5 py-10 text-cream sm:px-8 lg:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 sm:flex-row sm:items-end"><div><div className="flex items-center gap-3 font-display text-xl font-bold"><img src={appIcon.url} alt="" width="32" height="32" loading="lazy" className="h-8 w-8 rounded-md" /> timePurse</div><p className="mt-3 text-sm text-cream/65">By Project Life by CV · For Android</p></div><div className="flex flex-wrap gap-x-6 gap-y-3 text-sm"><a className="hover:underline" href="/privacy">Privacy policy</a><a className="hover:underline" href="/lab/timepurse">Project Life Lab</a><a className="hover:underline" href="mailto:projectlifebycv@gmail.com">Support</a><a className="hover:underline" href="#top">Back to top ↑</a></div></div></footer>
    </>
  );
}
