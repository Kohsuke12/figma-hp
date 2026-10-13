import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";

const PARAGRAPHS = [
  "現在のビジネス市場において、デジタル技術の活用（DX）はもはや単なる手段ではなく、企業の存続そのものを決める重要な鍵となっています。",
  "私たちNEXUS Corporationは創業以来、「常にクライアントの期待を超える価値を提供し続ける」という不変の姿勢で歩んでまいりました。単なるシステムの納品にとどまらず、お客様の社内組織の変革、意思決定の迅速化まで一気通貫で伴走し、持続的な未来を共に構築いたします。",
  "お客様の成功が、私たちの成功です。私たちはこれからも、最良のテクノロジーパートナーであり続けることを約束します。",
];

export function MessageSection() {
  return (
    <section
      id="message"
      className="flex w-full scroll-mt-20 flex-col items-start gap-6 bg-[#f3f4f6] px-5 py-12 lg:gap-10 lg:p-20"
    >
      <SectionHeading en="MESSAGE" title="代表挨拶" />
      <div className="flex w-full flex-col items-start gap-6 lg:flex-row lg:items-center lg:gap-12">
        <div className="relative h-[260px] w-full shrink-0 overflow-hidden rounded lg:h-[480px] lg:w-[400px] lg:rounded-lg">
          <Image
            src="/images/ceo.png"
            alt="代表取締役社長 佐藤 拓也"
            fill
            sizes="(min-width: 1024px) 400px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-4 lg:flex-1 lg:gap-6">
          <p className="text-[16px] font-bold text-[#0a1c36] lg:text-[20px]">
            「変化する時代を切り拓き、真のDXをもたらす」
          </p>
          <div className="flex flex-col gap-[1lh] text-[13px] leading-[1.7] text-[#4b5563] lg:text-[15px] lg:leading-[1.8]">
            {PARAGRAPHS.map((text, i) => (
              <p key={i} className={i === 2 ? "hidden lg:block" : undefined}>
                {text}
              </p>
            ))}
          </div>
          <div className="flex flex-col items-start gap-1 pt-2 lg:pt-3">
            <p className="text-[12px] text-[#4b5563]">代表取締役社長</p>
            <p className="text-[16px] font-bold text-[#111827] lg:text-[18px]">
              佐藤 拓也 (Takuya Sato)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
