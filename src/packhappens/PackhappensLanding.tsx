import { Features } from "./Features";
import { FinalCta } from "./FinalCta";
import { Footer } from "./Footer";
import { Hero } from "./Hero";
import { HowItWorks } from "./HowItWorks";
import { OriginStory } from "./OriginStory";
import { Pricing } from "./Pricing";
import { Testimonial } from "./Testimonial";

export default function PackhappensLanding() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-cream focus:p-3">Skip to content</a>
    <main id="main">
      <Hero />
      <OriginStory />
      <HowItWorks />
      <Features />
      <Pricing />
      <Testimonial />
      <FinalCta />
    </main>
    <Footer />
    </>
  );
}
