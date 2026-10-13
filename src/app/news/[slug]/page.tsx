import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/top/site-header";
import { SiteFooter } from "@/components/top/site-footer";
import { Breadcrumb } from "@/components/common/breadcrumb";
import { NewsArticle } from "@/components/news/news-article";
import { RelatedNews } from "@/components/news/related-news";
import { getAllNews, getNewsBySlug, getRelatedNews } from "@/lib/news";

export async function generateStaticParams() {
  const items = await getAllNews();
  return items.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata(
  props: PageProps<"/news/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const item = await getNewsBySlug(slug);
  return { title: `${item?.title ?? "ニュース"} | NEXUS Corporation` };
}

export default async function NewsDetailPage(
  props: PageProps<"/news/[slug]">,
) {
  const { slug } = await props.params;
  const item = await getNewsBySlug(slug);
  if (!item) notFound();
  const related = await getRelatedNews(item.slug);

  return (
    <div className="flex min-h-full w-full flex-col items-start bg-white">
      <SiteHeader />
      <main className="flex w-full flex-col items-start">
        <Breadcrumb
          items={[
            { label: "ニュース", href: "/news" },
            { label: "ニュース詳細" },
          ]}
        />
        <div className="flex w-full flex-col items-start lg:flex-row lg:gap-[60px] lg:px-20 lg:pt-10 lg:pb-[100px]">
          <NewsArticle item={item} />
          <RelatedNews items={related} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
