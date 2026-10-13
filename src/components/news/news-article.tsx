import Image from "next/image";
import Link from "next/link";
import { getCategoryLabel, type NewsBlock, type NewsItem } from "@/lib/news";

function Block({ block }: { block: NewsBlock }) {
  switch (block.type) {
    case "heading":
      return (
        <h2 className="text-[16px] font-bold text-[#0a1c36] lg:text-[20px]">
          {block.text}
        </h2>
      );
    case "paragraph":
      return (
        <div>
          {block.lines.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      );
    case "list":
      return (
        <ul>
          {block.items.map((item) => (
            <li key={item.label}>
              ・ <strong>{item.label}</strong>: {item.text}
            </li>
          ))}
        </ul>
      );
  }
}

export function NewsArticle({ item }: { item: NewsItem }) {
  return (
    <article className="flex w-full flex-col items-start gap-6 px-5 pt-6 pb-12 lg:flex-1 lg:gap-8 lg:p-0">
      <header className="flex w-full flex-col items-start gap-3 lg:gap-8">
        <div className="flex items-center gap-3 lg:gap-4">
          <time className="font-heading text-[12px] text-[#4b5563] lg:text-[14px]">
            {item.date}
          </time>
          <span className="rounded-sm bg-[rgba(10,28,54,0.04)] px-2 py-0.5 text-[11px] font-semibold text-[#0a1c36] lg:px-3 lg:py-1 lg:text-[12px]">
            {getCategoryLabel(item.category)}
          </span>
        </div>
        <h1 className="text-[20px] leading-[28px] font-bold text-[#111827] lg:text-[32px] lg:leading-normal">
          {item.title}
        </h1>
      </header>

      <div className="h-px w-full bg-[#e5e7eb]" />

      {item.image && (
        <div className="relative h-[180px] w-full overflow-hidden rounded-md lg:h-[400px] lg:rounded-lg">
          <Image
            src={item.image}
            alt=""
            fill
            sizes="(min-width: 1024px) 880px, 100vw"
            className="object-cover"
          />
        </div>
      )}

      <div className="flex w-full flex-col items-start gap-5 text-[14px] leading-[1.7] text-[#111827] lg:gap-6 lg:text-[16px] lg:leading-[1.8]">
        {item.bodyHtml ? (
          <div
            className="flex w-full flex-col gap-5 lg:gap-6 [&_a]:text-[#0a1c36] [&_a]:underline [&_h2]:text-[16px] [&_h2]:font-bold [&_h2]:text-[#0a1c36] lg:[&_h2]:text-[20px] [&_h3]:text-[15px] [&_h3]:font-bold [&_h3]:text-[#0a1c36] lg:[&_h3]:text-[18px] [&_img]:h-auto [&_img]:max-w-full [&_ol]:list-decimal [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:pl-6"
            dangerouslySetInnerHTML={{ __html: item.bodyHtml }}
          />
        ) : item.body ? (
          item.body.map((block, i) => <Block key={i} block={block} />)
        ) : (
          <p>本記事の詳細は準備中です。</p>
        )}
      </div>

      <div className="flex w-full justify-center pt-4 lg:pt-[72px]">
        <Link
          href="/news"
          className="flex w-full items-center justify-center rounded border border-[#0a1c36] px-8 py-3 text-[13px] font-semibold text-[#0a1c36] lg:w-auto lg:px-10 lg:py-3.5 lg:text-[14px]"
        >
          ニュース一覧へ戻る
        </Link>
      </div>
    </article>
  );
}
