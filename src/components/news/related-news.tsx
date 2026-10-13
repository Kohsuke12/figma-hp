import Link from "next/link";
import { getCategoryLabel, type NewsItem } from "@/lib/news";

export function RelatedNews({ items }: { items: NewsItem[] }) {
  return (
    <aside className="flex w-full flex-col items-start gap-5 bg-[#f3f4f6] px-5 pt-8 pb-12 lg:w-[340px] lg:shrink-0 lg:gap-8 lg:bg-transparent lg:p-0">
      <h2 className="text-[16px] font-bold text-[#111827] lg:text-[18px]">
        関連記事
      </h2>
      <div className="flex w-full flex-col items-start gap-3 lg:gap-5">
        {items.map((item, i) => (
          <Link
            key={item.slug}
            href={`/news/${item.slug}`}
            className={`w-full flex-col items-start gap-2 rounded border border-[#e5e7eb] bg-white p-4 lg:gap-3 lg:border-0 lg:bg-[#f3f4f6] lg:p-5 ${
              i >= 2 ? "hidden lg:flex" : "flex"
            }`}
          >
            <div className="flex items-center gap-2 whitespace-nowrap">
              <time className="font-heading text-[12px] text-[#4b5563]">
                {item.date}
              </time>
              <span className="text-[10px] font-semibold text-[#0a1c36] lg:text-[11px]">
                {getCategoryLabel(item.category)}
              </span>
            </div>
            <p className="line-clamp-2 text-[13px] leading-[18px] font-semibold text-[#111827] lg:text-[14px] lg:leading-normal">
              {item.title}
            </p>
          </Link>
        ))}
      </div>
    </aside>
  );
}
