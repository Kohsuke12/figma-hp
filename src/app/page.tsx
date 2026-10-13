import { SiteHeader } from "@/components/top/site-header";
import { HeroSection } from "@/components/top/hero-section";
import { PartnersSection } from "@/components/top/partners-section";
import { MissionSection } from "@/components/top/mission-section";
import { ServicesSection } from "@/components/top/services-section";
import { NewsSection } from "@/components/top/news-section";
import { CtaSection } from "@/components/top/cta-section";
import { SiteFooter } from "@/components/top/site-footer";

export default function Home() {
  return (
    <div className="flex min-h-full w-full flex-col items-start bg-white">
      <SiteHeader />
      <main className="flex w-full flex-col items-start">
        <HeroSection />
        <PartnersSection />
        <MissionSection />
        <ServicesSection />
        <NewsSection />
        <CtaSection />
      </main>
      <SiteFooter />
    </div>
  );
}
