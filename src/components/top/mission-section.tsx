const MISSION_ITEMS = [
  {
    title: "価値創造のインフラとなる",
    body: "私たちの使命は、単なる技術の導入にとどまりません。クライアント企業の経営課題を深く理解し、社会全体、そして人々に本質的な「価値」をもたらす持続可能なデジタルインフラを構築することが目的です。",
  },
  {
    title: "日本企業の真のポテンシャルを解き放つ",
    body: "私たちが持つ国内外のネットワーク、そして最前線で培われたITの知見を惜しみなく注ぎ込むことで、国内企業がふたたび世界の主役に躍り出るための土台を、パートナーの皆様と共に創り上げます。",
  },
];

export function MissionSection() {
  return (
    <section className="flex w-full flex-col items-start gap-8 bg-[#f3f4f6] px-5 py-14 lg:gap-10 lg:px-20 lg:py-[100px]">
      <div className="flex flex-col items-start gap-2">
        <p className="font-heading text-[12px] font-bold text-[#0a1c36] lg:text-[14px]">
          MISSION &amp; VISION
        </p>
        <p className="text-[24px] leading-[34px] font-bold text-[#111827] lg:text-[28px] lg:leading-normal">
          技術と信頼を結び、持続可能な未来を創る。
        </p>
      </div>

      <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:gap-12">
        {MISSION_ITEMS.map((item) => (
          <div
            key={item.title}
            className="flex flex-1 flex-col items-start gap-3 lg:gap-6"
          >
            <p className="text-[18px] leading-[26px] font-bold text-[#0a1c36] lg:text-[20px] lg:leading-normal">
              {item.title}
            </p>
            <p className="text-[14px] leading-[24px] text-[#4b5563] lg:text-[15px] lg:leading-[1.8]">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
