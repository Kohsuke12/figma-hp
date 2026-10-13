import { SectionHeading } from "@/components/common/section-heading";

const PHILOSOPHIES = [
  {
    title: "ミッション：価値の創出を加速する",
    body: "テクノロジーの力を最大限に引き出し、全ての企業の持続可能な価値創出プロセスを圧倒的にスピードアップします。",
  },
  {
    title: "ビジョン：信頼で結ぶデジタルインフラ",
    body: "単にコードを書くのではなく、人、組織、社会が本当に「信頼」して乗ることのできる真のデジタル土台を築き上げます。",
  },
];

export function PhilosophySection() {
  return (
    <section className="flex w-full flex-col items-start gap-6 px-5 py-12 lg:gap-10 lg:p-20">
      <SectionHeading en="PHILOSOPHY" title="企業理念" />
      <div className="flex w-full flex-col items-start gap-6 lg:flex-row">
        {PHILOSOPHIES.map((item) => (
          <div
            key={item.title}
            className="flex w-full flex-col items-start gap-3 rounded bg-[#f3f4f6] p-6 lg:flex-1 lg:gap-4 lg:p-8"
          >
            <h3 className="text-[16px] font-bold text-[#0a1c36] lg:text-[18px]">
              {item.title}
            </h3>
            <p className="text-[13px] leading-[1.6] text-[#4b5563] lg:text-[14px] lg:leading-[1.7]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
