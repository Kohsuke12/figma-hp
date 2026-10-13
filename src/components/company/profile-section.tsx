import { SectionHeading } from "@/components/common/section-heading";

const PROFILE_ROWS = [
  { label: "会社名", value: "ネクサス株式会社 (NEXUS Corporation)" },
  { label: "設立", value: "2018年4月1日" },
  { label: "資本金", value: "50,000,000円" },
  { label: "代表取締役", value: "佐藤 拓也 (Takuya Sato)" },
  { label: "従業員数", value: "120名（外部パートナー含む）" },
  {
    label: "所在地",
    value: "〒105-6321 東京都港区虎ノ門1-23-1 虎ノ門ヒルズ森タワー",
  },
  {
    label: "事業内容",
    value:
      "IT・DX戦略コンサルティング、クラウド導入支援、システム開発・保守、セキュリティ診断・構築支援",
  },
];

export function ProfileSection() {
  return (
    <section className="flex w-full flex-col items-start gap-6 px-5 py-12 lg:gap-10 lg:p-20">
      <SectionHeading en="COMPANY DATA" title="会社概要一覧" />
      <dl className="flex w-full flex-col items-start text-[13px] lg:text-[15px]">
        {PROFILE_ROWS.map((row) => (
          <div
            key={row.label}
            className="flex w-full flex-col items-start gap-1 border-b border-[#e5e7eb] py-4 lg:flex-row lg:items-center lg:gap-0 lg:py-5"
          >
            <dt className="shrink-0 font-bold text-[#111827] lg:w-[240px]">
              {row.label}
            </dt>
            <dd className="leading-[1.5] text-[#4b5563] lg:flex-1 lg:leading-[1.6]">
              {row.value}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
