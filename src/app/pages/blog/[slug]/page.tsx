import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type BlogArticle = {
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  imageSrc?: string;
  sections: Array<{
    heading: string;
    body: string;
  }>;
};

const articles: BlogArticle[] = [
  {
    slug: "nyc-state-test-strategies",
    category: "Study Tips",
    title: "NYC State Test Strategies",
    excerpt: "Practical ways students can prepare for New York State ELA and Math exams with more confidence.",
    sections: [
      {
        heading: "Start With The Test Format",
        body: "Students do best when they know what the exam asks of them. We review question types, timing, reading passages, multi-step math prompts, and the habits that help students stay calm when the test feels long.",
      },
      {
        heading: "Practice With Feedback",
        body: "Practice only works when students understand why an answer is right or wrong. Our teachers use targeted review to help students spot patterns, strengthen weak areas, and improve accuracy over time.",
      },
      {
        heading: "Build A Steady Routine",
        body: "Short, consistent study blocks are more useful than last-minute cramming. Families should focus on reading stamina, math fluency, vocabulary, and careful written explanations each week.",
      },
    ],
  },
  {
    slug: "preparing-for-standardized-tests",
    category: "Test Prep",
    title: "Preparing for Standardized Tests",
    excerpt: "Standardized tests measure content knowledge, pacing, and decision-making under pressure.",
    sections: [
      {
        heading: "Content Comes First",
        body: "A strong foundation in reading, grammar, and math is the most important part of test prep. Strategies help, but students need real command of the material before shortcuts can work.",
      },
      {
        heading: "Timing Is A Skill",
        body: "Timed practice helps students learn when to move on, when to check work, and how to avoid spending too much time on a single question.",
      },
      {
        heading: "Review Makes Scores Grow",
        body: "After each practice set, students should review missed questions carefully. That reflection is where stronger habits are built.",
      },
    ],
  },
  {
    slug: "tutoring-near-me-a-parents-guide-to-choosing-excellence",
    category: "Higher Learning",
    title: "Tutoring Near Me - A Parent's Guide to Choosing Excellence",
    excerpt: "A practical guide for families comparing tutoring options in New York City.",
    imageSrc: "/images/higher-learning/2025-05-14-1-768x432.webp",
    sections: [
      {
        heading: "Look For Experience",
        body: "The right tutoring center should understand local schools, state standards, and competitive admissions exams. Higher Learning has served Chinatown families since 1993.",
      },
      {
        heading: "Ask About Class Size",
        body: "Small classes help teachers notice how each student thinks. That attention makes it easier to correct misunderstandings early.",
      },
      {
        heading: "Choose A Program With Results",
        body: "Families should look for steady progress, clear communication, and a curriculum that prepares students for both school and future exams.",
      },
    ],
  },
  {
    slug: "shsat-nyc",
    category: "SHSAT Prep",
    title: "SHSAT NYC - Everything You Need to Know",
    excerpt: "What families should know about the Specialized High School Admissions Test.",
    imageSrc: "/images/higher-learning/0b4d3da40646462f99177b0d7db4697f-768x504.avif",
    sections: [
      {
        heading: "What The SHSAT Measures",
        body: "The SHSAT focuses on English Language Arts and Mathematics. Students need reading precision, editing skills, arithmetic fluency, algebra readiness, and strong problem-solving habits.",
      },
      {
        heading: "Preparation Takes Time",
        body: "The best results come from months of practice, review, and correction. Students should build pacing slowly while also strengthening core academic skills.",
      },
      {
        heading: "Support Matters",
        body: "A calm teacher, consistent routine, and realistic practice tests help students enter the exam with confidence.",
      },
    ],
  },
  {
    slug: "best-higher-learning-in-chinatown-nyc",
    category: "Higher Learning",
    title: "Best Higher Learning in Chinatown NYC",
    excerpt: "Why generations of Chinatown families have trusted Higher Learning.",
    imageSrc: "/images/higher-learning/2025-05-14-1-768x432.webp",
    sections: [
      {
        heading: "Rooted In The Community",
        body: "Higher Learning is located at 84 Bowery and has worked with New York City families for more than three decades.",
      },
      {
        heading: "Focused On Students",
        body: "Our teachers help students build academic habits, confidence, and readiness for demanding exams.",
      },
      {
        heading: "Clear Next Steps",
        body: "Families can contact us to discuss placement, schedules, and the program that best fits their student's grade level.",
      },
    ],
  },
  {
    slug: "shsat-2025-admission",
    category: "SHSAT Prep",
    title: "SHSAT Admission - Expert Preparation for NYC Specialized High Schools",
    excerpt: "How focused SHSAT prep helps students aim for NYC's specialized high schools.",
    imageSrc: "/images/higher-learning/498557831_661835789949377_2234153109830365154_n-e1753449905619-1-e1755876994617.jpg",
    sections: [
      {
        heading: "Know The Goal",
        body: "Students preparing for Stuyvesant, Bronx Science, Brooklyn Tech, and other specialized high schools need a clear plan and consistent effort.",
      },
      {
        heading: "Train Both Sections",
        body: "Strong SHSAT prep balances ELA and Math. Students should practice revising/editing, reading comprehension, arithmetic, algebra, and word problems.",
      },
      {
        heading: "Use Practice Tests Carefully",
        body: "Practice exams show progress, but the real growth comes from reviewing mistakes and learning better strategies.",
      },
    ],
  },
  {
    slug: "2025-fall-weekend-tutoring-schedule-in-nyc-higher-learning",
    category: "Schedules",
    title: "Fall Weekend Tutoring Schedule in NYC",
    excerpt: "Weekend options for ELA, Mathematics, Reading, Writing, Grammar, SAT, and SHSAT preparation.",
    imageSrc: "/images/higher-learning/475799580_590582457074711_281516345249048325_n-768x576.jpg",
    sections: [
      {
        heading: "Weekend Classes",
        body: "Weekend programs give families a steady option for academic support without adding another weekday commitment.",
      },
      {
        heading: "Grades 2 Through 8",
        body: "Students can strengthen ELA, math, reading, writing, grammar, and SHSAT readiness in grade-appropriate groups.",
      },
      {
        heading: "How To Enroll",
        body: "Contact Higher Learning to confirm current availability and find the right class time for your student.",
      },
    ],
  },
  {
    slug: "higher-learning-2025-fall-weekend-schedule",
    category: "Schedules",
    title: "Higher Learning Fall Weekend Schedule",
    excerpt: "A quick overview of weekend academic support at Higher Learning.",
    imageSrc: "/images/higher-learning/476274718_590582123741411_8368425015554476117_n-768x576.jpg",
    sections: [
      {
        heading: "Academic Support That Fits Weekends",
        body: "Saturday and Sunday classes help students keep momentum while families manage busy school-week schedules.",
      },
      {
        heading: "Built Around Core Skills",
        body: "Our programs focus on reading, writing, grammar, mathematics, and exam readiness.",
      },
      {
        heading: "Visit Us In Person",
        body: "Families can visit 84 Bowery, 3FL or contact us by phone to discuss enrollment.",
      },
    ],
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

        <div className="grid gap-9">
          {article.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">{section.heading}</h2>
              <p className="mt-4 text-base leading-8 text-slate-600">{section.body}</p>
            </section>
          ))}
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
