import type { Metadata } from "next";
import { SiteHeader } from "@/components/top/site-header";
import { CtaSection } from "@/components/top/cta-section";
import { SiteFooter } from "@/components/top/site-footer";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHeader } from "@/components/common/page-header";
import { PhilosophySection } from "@/components/company/philosophy-section";
import { MessageSection } from "@/components/company/message-section";
import { ProfileSection } from "@/components/company/profile-section";
import { AccessSection } from "@/components/company/access-section";

export const metadata: Metadata = {
  title: "会社概要 | NEXUS Corporation",
};

export default function CompanyPage() {
  return (
    <div className="flex min-h-full w-full flex-col items-start bg-white">
      <SiteHeader />
      <main className="flex w-full flex-col items-start">
        <Breadcrumb items={[{ label: "会社概要" }]} />
        <PageHeader en="COMPANY OVERVIEW" title="会社概要" />
        <PhilosophySection />
        <MessageSection />
        <ProfileSection />
        <AccessSection />
        <div className="w-full lg:hidden">
          <CtaSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
