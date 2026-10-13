import { SectionHeading } from "@/components/common/section-heading";

const ENVIRONMENT_ROWS = [
  { label: "勤務地", value: "東京都港区虎ノ門(リモートワーク併用可)" },
  { label: "勤務時間", value: "フレックスタイム制(コアタイム 11:00〜15:00)" },
  { label: "休日・休暇", value: "完全週休2日制(土日祝)、年末年始、有給休暇、特別休暇" },
  { label: "給与", value: "経験・能力を考慮のうえ決定。年1回の改定、賞与は年2回" },
  { label: "福利厚生", value: "各種社会保険、資格取得支援、書籍購入補助、リモートワーク手当" },
];

export function EnvironmentSection() {
  return (
    <section className="flex w-full flex-col items-start gap-6 px-5 py-12 lg:gap-10 lg:p-20">
      <SectionHeading en="WORK STYLE" title="働く環境・制度" />
      <dl className="flex w-full flex-col items-start text-[13px] lg:text-[15px]">
        {ENVIRONMENT_ROWS.map((row) => (
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
