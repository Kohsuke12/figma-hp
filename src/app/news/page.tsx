import type { Metadata } from "next";
import { SiteHeader } from "@/components/top/site-header";
import { SiteFooter } from "@/components/top/site-footer";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { PageHeader } from "@/components/common/page-header";
import { NewsTabs } from "@/components/news/news-tabs";
import { NewsList } from "@/components/news/news-list";
import { Pagination } from "@/components/news/pagination";
import { NEWS_PER_PAGE, getAllNews, isNewsCategory } from "@/lib/news";

export const metadata: Metadata = {
  title: "ニュース | NEXUS Corporation",
};

export default async function NewsPage(props: PageProps<"/news">) {
  const searchParams = await props.searchParams;
  const category = isNewsCategory(searchParams.category)
    ? searchParams.category
    : undefined;

  const allNews = await getAllNews();
  const filtered = category
    ? allNews.filter((item) => item.category === category)
    : allNews;
  const totalPages = Math.max(1, Math.ceil(filtered.length / NEWS_PER_PAGE));
  const page = Math.min(
    Math.max(1, Number(searchParams.page) || 1),
    totalPages,
  );
  const items = filtered.slice(
    (page - 1) * NEWS_PER_PAGE,
    page * NEWS_PER_PAGE,
  );

  const buildHref = (p: number) => {
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (p > 1) params.set("page", String(p));
    const query = params.toString();
    return query ? `/news?${query}` : "/news";
  };

  return (
    <div className="flex min-h-full w-full flex-col items-start bg-white">
      <SiteHeader />
      <main className="flex w-full flex-col items-start">
        <Breadcrumb items={[{ label: "ニュース" }]} />
        <PageHeader en="NEWS" title="ニュース" />
        <NewsTabs current={category} />
        <NewsList items={items} />
        <Pagination current={page} total={totalPages} buildHref={buildHref} />
      </main>
      <SiteFooter />
    </div>
  );
}
