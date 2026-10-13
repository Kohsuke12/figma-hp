import Link from "next/link";

const FOOTER_NAVS = [
  {
    title: "企業情報",
    links: [
      { label: "トップページ", href: "/" },
      { label: "会社概要", href: "/company" },
      { label: "代表メッセージ", href: "/company#message" },
      { label: "アクセス", href: "/company#access" },
      { label: "採用情報", href: "/recruit" },
    ],
  },
  {
    title: "サービス",
    links: [
      { label: "DXコンサルティング", href: "/services" },
      { label: "クラウド構築・移行・運用", href: "/services" },
      { label: "システム開発", href: "/services" },
      { label: "セキュリティアドバイザリー", href: "/services" },
    ],
  },
  {
    title: "ニュース",
    links: [
      { label: "プレスリリース", href: "/news?category=press" },
      { label: "重要なお知らせ", href: "/news?category=notice" },
      { label: "IR情報", href: "/news?category=ir" },
      { label: "メディア掲載", href: "/news" },
    ],
  },
];

const SUBLINKS = ["プライバシーポリシー", "情報セキュリティ基本方針", "サイトマップ"];

export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col items-start gap-10 bg-[#0a1c36] px-5 pt-12 pb-8 lg:gap-16 lg:px-20 lg:pt-20 lg:pb-10">
      <div className="flex w-full flex-col items-start gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-0">
        <div className="flex w-full flex-col items-start gap-4 lg:w-[400px] lg:gap-6">
          <div className="flex items-center gap-2">
            <span className="flex size-7 items-center justify-center rounded bg-white lg:size-8">
              <span className="font-heading text-[16px] font-bold text-[#0a1c36] lg:text-[18px]">
                N
              </span>
            </span>
            <span className="font-heading text-[18px] font-bold text-white lg:text-[20px]">
              NEXUS
            </span>
          </div>
          <div className="text-[13px] leading-[1.6] text-white/70 lg:text-[14px]">
            <p>ネクサス株式会社 (NEXUS Corporation)</p>
            <p>〒105-6321 東京都港区虎ノ門1-23-1</p>
            <p className="lg:inline">虎ノ門ヒルズ森タワー 21階</p>
            <p>TEL: 03-1234-5678 (代表)</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:w-auto lg:flex-row lg:gap-20">
          {FOOTER_NAVS.map((nav) => (
            <div
              key={nav.title}
              className="flex flex-col items-start gap-3 lg:gap-4"
            >
              <p className="text-[14px] font-bold text-white">{nav.title}</p>
              {nav.links.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[13px] text-white/60"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="h-px w-full bg-white/10" />

      <div className="flex w-full flex-col-reverse items-start gap-4 text-[12px] text-white lg:flex-row lg:items-center lg:justify-between">
        <p className="opacity-50 lg:text-[12px]">
          © 2026 NEXUS Corporation. All Rights Reserved.
        </p>
        <div className="flex flex-col items-start gap-2.5 lg:flex-row lg:items-center lg:gap-6">
          {SUBLINKS.map((link) => (
            <Link key={link} href="#" className="opacity-50">
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
