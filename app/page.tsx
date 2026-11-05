import { SiteHeader } from "./components/site-header";
import { HeroSection } from "./components/hero-section";
import BenefitsSection from "./components/benefits-section";
import { EcosystemSection } from "./components/ecosystem-section";
import { FeatureSection } from "./components/feature-section";
import { RoadmapSection } from "./components/roadmap-section";
import { HowItWorksSection } from "./components/how-it-works-section";
import { PricingSection } from "./components/pricing-section";
import { FaqSection } from "./components/faq-section";
import { SiteFooter } from "./components/site-footer";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="top" className="overflow-hidden">
        <HeroSection />
        <BenefitsSection />
        <EcosystemSection />
        <FeatureSection />
        <RoadmapSection />
        <HowItWorksSection />
        <PricingSection />
        <FaqSection />
        <section className="bg-[radial-gradient(ellipse_at_50%_100%,#eee6fa,#f9f8fc_68%)] px-5 py-16 text-center md:py-20">
          <p className="eyebrow">БУХПРО · РАБОТАТЬ ПРОЩЕ</p><h2 className="section-title">Всё нужное для работы.<br /><em>В одном месте.</em></h2>
          <a className="button mt-7" href="#plans">Попробовать <span aria-hidden="true">↗</span></a>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
