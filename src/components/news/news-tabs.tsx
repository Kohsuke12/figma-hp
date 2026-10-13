import Link from "next/link";
import { NEWS_CATEGORIES, type NewsCategoryKey } from "@/lib/news";

const TABS = [{ key: undefined, label: "すべて" }, ...NEWS_CATEGORIES];

export function NewsTabs({ current }: { current?: NewsCategoryKey }) {
  return (
    <div className="flex w-full items-start gap-2 overflow-x-auto px-5 pt-5 pb-3 lg:gap-3 lg:px-20 lg:pt-10 lg:pb-5">
      {TABS.map((tab) => {
        const active = tab.key === current;
        return (
          <Link
            key={tab.label}
            href={tab.key ? `/news?category=${tab.key}` : "/news"}
            aria-current={active ? "page" : undefined}
            className={`shrink-0 rounded px-4 py-2 text-[13px] font-semibold whitespace-nowrap lg:px-6 lg:py-2.5 lg:text-[14px] ${
              active ? "bg-[#0a1c36] text-white" : "bg-[#f3f4f6] text-[#111827]"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
