import { SectionHeading } from "@/components/common/section-heading";

const VALUES = [
  {
    title: "お客様の課題に、本気で向き合う",
    body: "技術ありきではなく、事業の課題から考える姿勢を大切にしています。",
  },
  {
    title: "学び続け、挑戦し続ける",
    body: "変化の速いIT領域だからこそ、新しい技術や手法を自ら学び、試せる人を求めています。",
  },
  {
    title: "チームで、信頼を積み上げる",
    body: "職種や立場を越えて助け合い、お客様から信頼されるデジタルの土台をともに築きます。",
  },
];

export function RecruitMessageSection() {
  return (
    <section className="flex w-full flex-col items-start gap-6 px-5 py-12 lg:gap-10 lg:p-20">
      <SectionHeading en="MESSAGE" title="求める人物像" />
      <p className="text-[14px] leading-[1.7] text-[#4b5563] lg:text-[16px] lg:leading-[1.8]">
        ネクサスは、テクノロジーの力で企業の変革を支えるパートナーです。
        経験や専門領域はさまざまですが、次の3つの価値観に共感してくれる方とともに働きたいと考えています。
      </p>
      <div className="flex w-full flex-col items-start gap-6 lg:flex-row">
        {VALUES.map((item) => (
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
