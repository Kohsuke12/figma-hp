import { getCategoryLabel, type NewsCategoryKey } from "@/lib/news";

const TAG_STYLES: Record<NewsCategoryKey, string> = {
  notice: "bg-[rgba(10,28,54,0.04)] text-[#0a1c36] lg:text-[#111827]",
  press: "bg-[#e5e7eb] text-[#111827]",
  ir: "bg-[#fef3c7] text-[#111827]",
};

export function NewsTag({ category }: { category: NewsCategoryKey }) {
  return (
    <span
      className={`shrink-0 rounded-sm px-2 py-0.5 text-[10px] font-semibold whitespace-nowrap lg:px-3 lg:py-1 lg:text-[11px] ${TAG_STYLES[category]}`}
    >
      {getCategoryLabel(category)}
    </span>
  );
}
