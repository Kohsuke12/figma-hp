import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  current: number;
  total: number;
  buildHref: (page: number) => string;
};

const BASE =
  "flex size-8 items-center justify-center rounded text-[13px] lg:size-9";

export function Pagination({ current, total, buildHref }: Props) {
  const pages = Array.from({ length: total }, (_, i) => i + 1);
  const prev = current > 1 ? current - 1 : null;
  const next = current < total ? current + 1 : null;

  return (
    <nav
      aria-label="ページ送り"
      className="flex w-full items-start justify-center gap-2 px-5 pb-12 lg:pb-20"
    >
      <PageArrow page={prev} label="前のページ" buildHref={buildHref}>
        &lt;
      </PageArrow>
      {pages.map((page) =>
        page === current ? (
          <span
            key={page}
            aria-current="page"
            className={`${BASE} bg-[#0a1c36] font-semibold text-white`}
          >
            {page}
          </span>
        ) : (
          <Link
            key={page}
            href={buildHref(page)}
            className={`${BASE} border border-[#e5e7eb] bg-white font-semibold text-[#111827]`}
          >
            {page}
          </Link>
        ),
      )}
      <PageArrow page={next} label="次のページ" buildHref={buildHref}>
        &gt;
      </PageArrow>
    </nav>
  );
}

function PageArrow({
  page,
  label,
  buildHref,
  children,
}: {
  page: number | null;
  label: string;
  buildHref: (page: number) => string;
  children: ReactNode;
}) {
  const className = `${BASE} border border-[#e5e7eb] text-[#4b5563]`;
  if (page === null) {
    return (
      <span aria-label={label} aria-disabled className={className}>
        {children}
      </span>
    );
  }
  return (
    <Link href={buildHref(page)} aria-label={label} className={className}>
      {children}
    </Link>
  );
}
