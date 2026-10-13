import Link from "next/link";
import { getAllNews, getCategoryLabel } from "@/lib/news";

export async function NewsSection() {
  const items = (await getAllNews()).slice(0, 3);

  return (
    <section className="flex w-full flex-col items-start gap-6 bg-[#f3f4f6] px-5 py-14 lg:gap-8 lg:px-20 lg:py-[100px]">
      <div className="flex w-full items-end justify-between">
        <div className="flex flex-col items-start gap-2">
          <p className="font-heading text-[12px] font-bold text-[#0a1c36] lg:text-[14px]">
            LATEST NEWS
          </p>
          <p className="text-[24px] leading-[34px] font-bold text-[#111827] lg:text-[28px] lg:leading-normal">
            最新のお知らせ
          </p>
        </div>
        <Link
          href="/news"
          className="hidden items-center gap-2 text-[14px] text-[#0a1c36] lg:flex"
        >
          <span className="font-semibold">ニュース一覧へ</span>
          <span>→</span>
        </Link>
      </div>

      <div className="flex w-full flex-col items-start">
        {items.map((item) => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className="flex w-full flex-col items-start gap-2 border-b border-[#e5e7eb] py-4 lg:flex-row lg:items-center lg:gap-6 lg:py-6"
          >
            <div className="flex items-center gap-2 lg:contents">
              <p className="font-heading w-auto shrink-0 text-[12px] text-[#4b5563] lg:w-[100px] lg:text-[14px]">
                {item.date}
              </p>
              <span className="shrink-0 rounded-sm bg-[rgba(10,28,54,0.04)] px-2 py-0.5 text-[11px] font-semibold text-[#0a1c36] lg:px-3 lg:py-1 lg:text-[12px]">
                {getCategoryLabel(item.category)}
              </span>
            </div>
            <p className="flex-1 text-[14px] font-medium text-[#111827] lg:text-[16px]">
              {item.title}
            </p>
            <p className="hidden text-[16px] text-[#4b5563] lg:block">→</p>
          </Link>
        ))}
      </div>

      <Link
        href="/news"
        className="flex items-center gap-2 text-[14px] text-[#0a1c36] lg:hidden"
      >
        <span className="font-semibold">ニュース一覧へ</span>
        <span>→</span>
      </Link>
    </section>
  );
}
