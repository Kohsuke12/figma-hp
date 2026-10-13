export const NEWS_CATEGORIES = [
  { key: "notice", label: "お知らせ" },
  { key: "press", label: "プレスリリース" },
  { key: "ir", label: "IR情報" },
] as const;

export type NewsCategoryKey = (typeof NEWS_CATEGORIES)[number]["key"];

export type NewsBlock =
  | { type: "paragraph"; lines: string[] }
  | { type: "heading"; text: string }
  | { type: "list"; items: { label: string; text: string }[] };

export type NewsItem = {
  slug: string;
  date: string;
  category: NewsCategoryKey;
  title: string;
  image?: string;
  // サンプルデータ用の本文
  body?: NewsBlock[];
  // microCMSのリッチエディタで書いた本文（HTML）
  bodyHtml?: string;
};

// microCMSの接続情報が無いときに表示するサンプルデータ
const SAMPLE_NEWS: NewsItem[] = [
  {
    slug: "new-management",
    date: "2024.11.01",
    category: "notice",
    title: "代表取締役の交代および新経営体制に関するお知らせ",
  },
  {
    slug: "nexus-ai",
    date: "2024.10.15",
    category: "press",
    title:
      "生成AIを活用したエンタープライズ向け新ソリューション「NEXUS-AI」の提供開始",
    image: "/images/news-nexus-ai.png",
    body: [
      {
        type: "paragraph",
        lines: [
          "ネクサス株式会社（本社：東京都港区、代表取締役：佐藤 拓也、以下「当社」）は、高度なセキュリティ環境下で生成AI技術を安全かつ効率的に業務活用できる、大企業向け統合ソリューション「NEXUS-AI（ネクサス・エーアイ）」の提供を本日より開始することをお知らせいたします。",
        ],
      },
      { type: "heading", text: "1. 開発の背景と目的" },
      {
        type: "paragraph",
        lines: [
          "昨今、LLM（大規模言語モデル）に代表される生成AI技術は、企業の生産性向上を強力に支援する一方、情報漏洩やデータセキュリティに対する懸念が障壁となり、導入をためらうエンタープライズ顧客が多く存在していました。",
          "「NEXUS-AI」は、企業の機密情報や社内ノウハウをセキュアに学習・参照可能なアーキテクチャを採用。堅牢なクラウドインフラ（AWS/Azure）とのシームレスな統合を実現することで、この課題を解決しました。",
        ],
      },
      { type: "heading", text: "2. 「NEXUS-AI」の主な特長" },
      {
        type: "list",
        items: [
          {
            label: "セキュアな社内情報へのアクセス（RAG対応）",
            text: "外部に漏洩させたくない独自のドキュメントファイル（PDF、社内社則、技術マニュアル等）をセキュアにモデルと連携し、高い精度で解答を生成。",
          },
          {
            label: "エンタープライズ向けの権限管理",
            text: "Active Directoryや主要なIDプロバイダーとの統合により、ユーザーグループや役職に応じたきめ細かなアクセス制限を提供。",
          },
          {
            label: "フルマネージドな移行およびカスタムチューニング支援",
            text: "当社の専門コンサルタントが初期のシナリオ設計からデータクレンジング、現場への定着化まで伴走支援します。",
          },
        ],
      },
      {
        type: "paragraph",
        lines: [
          "今後とも、ネクサス株式会社は最新テクノロジーを軸とした、付加価値の高いソリューション開発・提供を通じて、お客様のさらなる事業成長と競争力の強化に貢献してまいります。",
        ],
      },
    ],
  },
  {
    slug: "q2-results",
    date: "2024.09.30",
    category: "ir",
    title: "2024年12月期 第2四半期決算短信（日本基準）の発表",
  },
  {
    slug: "aws-select-tier",
    date: "2024.09.15",
    category: "press",
    title:
      "AWSセレクトティア認定取得ならびにクラウドコンサルティング提携強化について",
  },
  {
    slug: "summer-holiday",
    date: "2024.08.10",
    category: "notice",
    title: "夏季休業期間中の営業スケジュールに関するご案内",
  },
  {
    slug: "egm-resolution",
    date: "2024.07.25",
    category: "ir",
    title: "臨時株主総会決議事項に関するお知らせ",
  },
  {
    slug: "site-renewal",
    date: "2024.07.01",
    category: "notice",
    title: "オフィシャルサイト全面リニューアル公開のお知らせ",
  },
  {
    slug: "nexus-academy",
    date: "2024.06.18",
    category: "press",
    title: "DX人材育成プログラム「NEXUS Academy」第一期生募集開始",
  },
];

export const NEWS_PER_PAGE = 8;

export function getCategoryLabel(key: NewsCategoryKey) {
  return NEWS_CATEGORIES.find((c) => c.key === key)?.label ?? "";
}

export function isNewsCategory(value: unknown): value is NewsCategoryKey {
  return NEWS_CATEGORIES.some((c) => c.key === value);
}

/* ------------------------------------------------------------------
 * microCMS
 * .env.local の MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY が
 * 両方入っているときだけ microCMS から取得する
 * ------------------------------------------------------------------ */

const SERVICE_DOMAIN = process.env.MICROCMS_SERVICE_DOMAIN;
const API_KEY = process.env.MICROCMS_API_KEY;
const ENDPOINT = process.env.MICROCMS_NEWS_ENDPOINT || "news";

// 更新を何秒ごとに取り込み直すか
const REVALIDATE_SECONDS = 60;

export const isMicroCMSEnabled = Boolean(SERVICE_DOMAIN && API_KEY);

type MicroCMSImage = { url: string; width?: number; height?: number };

type MicroCMSNews = {
  id: string;
  title: string;
  category?: string[] | string;
  image?: MicroCMSImage;
  body?: string;
  date?: string;
  publishedAt?: string;
  createdAt: string;
};

type MicroCMSList<T> = {
  contents: T[];
  totalCount: number;
  offset: number;
  limit: number;
};

async function fetchMicroCMS<T>(
  path: string,
  params: Record<string, string> = {},
): Promise<T | null> {
  const query = new URLSearchParams(params).toString();
  const url = `https://${SERVICE_DOMAIN}.microcms.io/api/v1/${path}${
    query ? `?${query}` : ""
  }`;
  const res = await fetch(url, {
    headers: { "X-MICROCMS-API-KEY": API_KEY ?? "" },
    next: { revalidate: REVALIDATE_SECONDS },
  });
  if (res.status === 404) return null;
  if (!res.ok) {
    throw new Error(
      `microCMSからの取得に失敗しました (${res.status})。.env.local のサービスID・APIキー・エンドポイント名を確認してください。`,
    );
  }
  return (await res.json()) as T;
}

function toCategoryKey(value: MicroCMSNews["category"]): NewsCategoryKey {
  const raw = Array.isArray(value) ? value[0] : value;
  const found = NEWS_CATEGORIES.find((c) => c.label === raw || c.key === raw);
  return found?.key ?? "notice";
}

function formatDate(iso: string) {
  const parts = new Intl.DateTimeFormat("ja-JP", {
    timeZone: "Asia/Tokyo",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(new Date(iso));
  const get = (type: string) => parts.find((p) => p.type === type)?.value;
  return `${get("year")}.${get("month")}.${get("day")}`;
}

function toNewsItem(content: MicroCMSNews): NewsItem {
  return {
    slug: content.id,
    date: formatDate(content.date ?? content.publishedAt ?? content.createdAt),
    category: toCategoryKey(content.category),
    title: content.title,
    image: content.image?.url,
    bodyHtml: content.body,
  };
}

export async function getAllNews(): Promise<NewsItem[]> {
  if (!isMicroCMSEnabled) return SAMPLE_NEWS;
  const data = await fetchMicroCMS<MicroCMSList<MicroCMSNews>>(ENDPOINT, {
    limit: "100",
    orders: "-publishedAt",
  });
  const items = (data?.contents ?? []).map(toNewsItem);
  // 「日付」項目で公開日を手動指定している記事もあるので、表示日付で並べ直す
  return items.sort((a, b) => b.date.localeCompare(a.date));
}

export async function getNewsBySlug(slug: string) {
  if (!isMicroCMSEnabled) return SAMPLE_NEWS.find((item) => item.slug === slug);
  const content = await fetchMicroCMS<MicroCMSNews>(
    `${ENDPOINT}/${encodeURIComponent(slug)}`,
  );
  return content ? toNewsItem(content) : undefined;
}

export async function getRelatedNews(slug: string, limit = 3) {
  const all = await getAllNews();
  return all.filter((item) => item.slug !== slug).slice(0, limit);
}
