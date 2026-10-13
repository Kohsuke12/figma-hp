import Link from "next/link";

const SERVICES = [
  {
    number: "01",
    category: "DX Strategy",
    title: "DXコンサルティング",
    body: "経営戦略とデジタルを直結させ、アジャイルな組織変革とイノベーション創出を伴走支援します。",
  },
  {
    number: "02",
    category: "Cloud & Modernization",
    title: "クラウドインテグレーション",
    body: "セキュアかつ堅牢なAWS / Azure環境の設計・構築から、レガシーシステムの移行、最適化までワンストップで対応。",
  },
  {
    number: "03",
    category: "Tailored Development",
    title: "カスタムシステム開発",
    body: "最先端技術（AI・データ分析）を取り入れ、顧客の真の競争力となる独自コアシステムを高速開発します。",
  },
];

export function ServicesSection() {
  return (
    <section className="flex w-full flex-col items-start gap-8 px-5 py-14 lg:gap-12 lg:px-20 lg:py-[100px]">
      <div className="flex flex-col items-start gap-2">
        <p className="font-heading text-[12px] font-bold text-[#0a1c36] lg:text-[14px]">
          OUR SERVICES
        </p>
        <p className="text-[24px] leading-[34px] font-bold text-[#111827] lg:text-[28px] lg:leading-normal">
          事業領域
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-4 lg:flex-row lg:gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="flex w-full flex-col items-start gap-4 rounded border border-[#e5e7eb] bg-white p-6 lg:flex-1 lg:gap-6 lg:p-8"
          >
            <p className="font-heading text-[28px] font-bold text-[#0a1c36] opacity-30 lg:text-[32px]">
              {service.number}
            </p>
            <div className="flex flex-col items-start gap-1 lg:gap-2">
              <p className="font-heading text-[12px] font-bold text-[#4b5563]">
                {service.category}
              </p>
              <p className="text-[18px] leading-[26px] font-bold text-[#111827] lg:text-[20px] lg:leading-normal">
                {service.title}
              </p>
            </div>
            <p className="text-[14px] leading-[24px] text-[#4b5563] lg:leading-[1.6]">
              {service.body}
            </p>
            <Link
              href="/services"
              className="flex items-center gap-2 pt-0 text-[#0a1c36] lg:pt-3"
            >
              <span className="text-[13px] font-bold">詳しく見る</span>
              <span className="text-[12px]">→</span>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
