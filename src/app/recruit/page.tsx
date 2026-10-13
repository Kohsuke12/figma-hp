import type { Metadata } from "next";
import { SiteHeader } from "@/components/top/site-header";
import { CtaSection } from "@/components/top/cta-section";
import { SiteFooter } from "@/components/top/site-footer";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHeader } from "@/components/common/page-header";
import { RecruitMessageSection } from "@/components/recruit/message-section";
import { PositionsSection } from "@/components/recruit/positions-section";
import { EnvironmentSection } from "@/components/recruit/environment-section";
import { FlowSection } from "@/components/recruit/flow-section";

export const metadata: Metadata = {
  title: "採用情報 | NEXUS Corporation",
  description:
    "ネクサス株式会社の採用情報です。DXコンサルタント、クラウドエンジニアなどの募集職種、働く環境、選考フローをご案内します。",
};

export default function RecruitPage() {
  return (
    <div className="flex min-h-full w-full flex-col items-start bg-white">
      <SiteHeader />
      <main className="flex w-full flex-col items-start">
        <Breadcrumb items={[{ label: "採用情報" }]} />
        <PageHeader en="RECRUIT" title="採用情報" />
        <RecruitMessageSection />
        <PositionsSection />
        <EnvironmentSection />
        <FlowSection />
        <div className="w-full lg:hidden">
          <CtaSection />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
