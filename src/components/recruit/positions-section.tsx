import { SectionHeading } from "@/components/common/section-heading";
import { ContactButton } from "@/components/contact/contact-modal";

const POSITIONS = [
  {
    title: "DXコンサルタント",
    type: "中途採用",
    summary:
      "顧客の経営課題をヒアリングし、DX戦略の立案から実行支援までを担当します。",
    requirements: "事業会社またはコンサルティングファームでの実務経験 3年以上",
  },
  {
    title: "クラウドエンジニア",
    type: "中途採用",
    summary:
      "AWS / Azure を中心に、クラウド環境の設計・構築・移行・運用を担当します。",
    requirements: "インフラまたはクラウド環境の構築経験 2年以上",
  },
  {
    title: "ソフトウェアエンジニア",
    type: "新卒・中途採用",
    summary:
      "Webシステムの設計・開発・保守を、少人数のチームで一気通貫して担当します。",
    requirements: "Web開発の実務経験(新卒は学習経験・制作物でも可)",
  },
  {
    title: "セキュリティエンジニア",
    type: "中途採用",
    summary:
      "セキュリティ診断や、対策の設計・構築支援、顧客へのアドバイザリーを担当します。",
    requirements: "セキュリティ診断またはセキュリティ運用の経験 2年以上",
  },
];

export function PositionsSection() {
  return (
    <section
      id="positions"
      className="flex w-full flex-col items-start gap-6 bg-[#f9fafb] px-5 py-12 lg:gap-10 lg:p-20"
    >
      <SectionHeading en="POSITIONS" title="募集職種" />
      <div className="grid w-full grid-cols-1 gap-6 lg:grid-cols-2">
        {POSITIONS.map((p) => (
          <div
            key={p.title}
            className="flex flex-col items-start gap-3 rounded border border-[#e5e7eb] bg-white p-6 lg:p-8"
          >
            <span className="rounded bg-[#0a1c36] px-2 py-1 text-[11px] font-semibold text-white">
              {p.type}
            </span>
            <h3 className="text-[16px] font-bold text-[#0a1c36] lg:text-[18px]">
              {p.title}
            </h3>
            <p className="text-[13px] leading-[1.6] text-[#4b5563] lg:text-[14px]">
              {p.summary}
            </p>
            <p className="text-[12px] leading-[1.6] text-[#111827] lg:text-[13px]">
              <span className="font-bold">応募要件: </span>
              {p.requirements}
            </p>
            <ContactButton className="mt-2 flex items-center rounded border border-[#0a1c36] px-5 py-2.5">
              <span className="text-[13px] font-semibold text-[#0a1c36]">
                この職種に応募する
              </span>
            </ContactButton>
          </div>
        ))}
      </div>
    </section>
  );
}
