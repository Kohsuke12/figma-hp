import Image from "next/image";
import { SectionHeading } from "@/components/common/section-heading";

export function AccessSection() {
  return (
    <section
      id="access"
      className="flex w-full scroll-mt-20 flex-col items-start gap-6 bg-[#f3f4f6] px-5 py-12 lg:gap-10 lg:p-20"
    >
      <SectionHeading en="ACCESS" title="所在地" />
      <div className="flex w-full flex-col items-start gap-6 lg:gap-4">
        <div className="relative h-[220px] w-full overflow-hidden rounded-md lg:h-[360px] lg:rounded-lg">
          <Image
            src="/images/access-map.png"
            alt="虎ノ門ヒルズ森タワー周辺の地図"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <p className="text-[12px] leading-[1.5] text-[#4b5563] lg:text-[14px] lg:leading-normal">
          ※ 虎ノ門ヒルズ森タワー 21階
          （受付は2階オフィスエントランスにて行っていただけます）
        </p>
      </div>
    </section>
  );
}
