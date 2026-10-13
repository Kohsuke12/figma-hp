import Link from "next/link";
import { Fragment } from "react";

type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav
      aria-label="パンくずリスト"
      className="flex w-full flex-wrap items-center gap-2 bg-white px-5 py-3 text-[12px] lg:px-20 lg:py-4"
    >
      <Link href="/" className="text-[#4b5563]">
        ホーム
      </Link>
      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <Fragment key={item.label}>
            <span className="text-[#4b5563]">&gt;</span>
            {isLast || !item.href ? (
              <span
                className={
                  isLast ? "font-semibold text-[#111827]" : "text-[#4b5563]"
                }
              >
                {item.label}
              </span>
            ) : (
              <Link href={item.href} className="text-[#4b5563]">
                {item.label}
              </Link>
            )}
          </Fragment>
        );
      })}
    </nav>
  );
}
