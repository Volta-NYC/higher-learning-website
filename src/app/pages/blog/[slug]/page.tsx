import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  imageSrc?: string;
};

const articles: BlogArticle[] = [
  {
    slug: "nyc-state-test-strategies",
    category: "Study Tips",
    title: "NYC State Test Strategies",
    excerpt: "Article placeholder. Full content will be added soon.",
  },
  {
    slug: "preparing-for-standardized-tests",
    category: "Test Prep",
    title: "Preparing for Standardized Tests",
    excerpt: "Article placeholder. Full content will be added soon.",
  },
  {
    slug: "tutoring-near-me-a-parents-guide-to-choosing-excellence",
    category: "Higher Learning",
    title: "Tutoring Near Me - A Parent's Guide to Choosing Excellence",
    excerpt: "Article placeholder. Full content will be added soon.",
    imageSrc: "/images/higher-learning/2025-05-14-1-768x432.webp",
  },
  {
    slug: "shsat-nyc",
    category: "SHSAT Prep",
    title: "SHSAT NYC - Everything You Need to Know",
    excerpt: "Article placeholder. Full content will be added soon.",
    imageSrc: "/images/higher-learning/0b4d3da40646462f99177b0d7db4697f-768x504.avif",
  },
  {
    slug: "best-higher-learning-in-chinatown-nyc",
    category: "Higher Learning",
    title: "Best Higher Learning in Chinatown NYC",
    excerpt: "Article placeholder. Full content will be added soon.",
    imageSrc: "/images/higher-learning/2025-05-14-1-768x432.webp",
  },
  {
    slug: "shsat-2025-admission",
    category: "SHSAT Prep",
    title: "SHSAT Admission - Expert Preparation for NYC Specialized High Schools",
    excerpt: "Article placeholder. Full content will be added soon.",
    imageSrc: "/images/higher-learning/498557831_661835789949377_2234153109830365154_n-e1753449905619-1-e1755876994617.jpg",
  },
  {
    slug: "2025-fall-weekend-tutoring-schedule-in-nyc-higher-learning",
    category: "Schedules",
    title: "Fall Weekend Tutoring Schedule in NYC",
    excerpt: "Article placeholder. Full content will be added soon.",
    imageSrc: "/images/higher-learning/475799580_590582457074711_281516345249048325_n-768x576.jpg",
  },
  {
    slug: "higher-learning-2025-fall-weekend-schedule",
    category: "Schedules",
    title: "Higher Learning Fall Weekend Schedule",
    excerpt: "Article placeholder. Full content will be added soon.",
    imageSrc: "/images/higher-learning/476274718_590582123741411_8368425015554476117_n-768x576.jpg",
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-[#fffdf8]">
      <section className="relative isolate overflow-hidden bg-[#080f24] px-5 py-20 text-white sm:px-8 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,184,75,0.16),transparent_28%),linear-gradient(145deg,#080f24,#162a58)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link href="/pages/blog" className="text-sm font-bold uppercase tracking-[0.14em] text-[#e8b84b]">
            Back to Blog
          </Link>
          <div className="mt-8 text-xs font-bold uppercase tracking-[0.2em] text-[#e8b84b]">{article.category}</div>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-normal md:text-6xl">
            {article.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">{article.excerpt}</p>
        </div>
      </section>

      <article className="mx-auto max-w-4xl px-5 py-14 sm:px-8 lg:px-12">
        {article.imageSrc && (
          <div className="relative mb-10 aspect-[16/9] overflow-hidden rounded-[8px] border border-[#0f2044]/15 shadow-[0_18px_48px_rgba(15,32,68,0.14)]">
            <Image src={article.imageSrc} alt={article.title} fill className="object-cover" sizes="(max-width: 900px) 100vw, 900px" />
          </div>
        )}

        <div className="rounded-[8px] border border-[#0f2044]/10 bg-white p-8 shadow-[0_12px_36px_rgba(15,32,68,0.08)]">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-[#c8922a]">Placeholder</div>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-normal text-[#0f2044]">Article Coming Soon</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            This article page is a placeholder so the blog link works without showing a 404. The final article content has not been added yet.
          </p>
        </div>

        <div className="mt-12 rounded-[8px] border border-[#e8b84b]/30 bg-white p-6 shadow-[0_12px_36px_rgba(15,32,68,0.08)]">
          <h2 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">Ready to talk?</h2>
          <p className="mt-3 text-sm leading-7 text-slate-600">
            Contact Higher Learning to review schedules, placement, and enrollment options.
          </p>
          <Link
            href="/pages/contact"
            className="mt-5 inline-flex rounded-full bg-gradient-to-r from-[#c8922a] to-[#e8b84b] px-5 py-3 text-sm font-bold uppercase tracking-[0.12em] text-[#081126]"
          >
            Visit Us In Person
          </Link>
        </div>
      </article>
    </main>
  );
}
