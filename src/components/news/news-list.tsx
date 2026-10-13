import Link from "next/link";
import type { NewsItem } from "@/lib/news";
import { NewsTag } from "@/components/news/news-tag";

export function NewsList({ items }: { items: NewsItem[] }) {
  return (
    <div className="flex w-full flex-col items-start px-5 pb-8 lg:px-20 lg:pb-[60px]">
      {items.map((item) => (
        <Link
          key={item.slug}
          href={`/news/${item.slug}`}
          className="group flex w-full flex-col items-start gap-2 border-b border-[#e5e7eb] py-5 lg:flex-row lg:items-center lg:gap-6 lg:py-6"
        >
          <div className="flex items-center gap-2 lg:contents">
            <p className="font-heading shrink-0 text-[12px] text-[#4b5563] lg:w-[100px] lg:text-[14px]">
              {item.date}
            </p>
            <NewsTag category={item.category} />
          </div>
          <p className="text-[14px] font-medium text-[#111827] group-hover:font-bold group-hover:text-[#0a1c36] lg:flex-1 lg:text-[16px]">
            {item.title}
          </p>
          <span className="hidden text-[16px] text-[#4b5563] lg:block">→</span>
        </Link>
      ))}
      {items.length === 0 && (
        <p className="py-10 text-[14px] text-[#4b5563]">
          該当するニュースはありません。
        </p>
      )}
    </div>
  );
}
