"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  Award,
  BookOpenCheck,
  CalendarDays,
  Check,
  ChevronRight,
  GraduationCap,
  MapPin,
  PenLine,
  Phone,
  Quote,
  School,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Users,
} from "lucide-react";

const stats = [
  { value: "33", suffix: "+", label: "Years of Excellence" },
  { value: "75", suffix: "%", label: "SHSAT Acceptance Rate" },
  { value: "4.9", suffix: "★", label: "Google Rating" },
  { value: "1993", suffix: "", label: "Established" },
];

const courses = [
  {
    tag: "Grades 9-12",
    title: "PSAT & SAT Prep",
    desc: "Master reading comprehension, grammar, and advanced math. Build the test-taking strategies colleges reward.",
    items: ["Reading & Evidence Analysis", "Writing & Language Mechanics", "Algebra, Data & Trigonometry"],
    accent: "#c8922a",
    icon: PenLine,
  },
  {
    tag: "Grades 7-8",
    title: "SHSAT Prep",
    desc: "Our flagship program with a proven 75% admission rate to NYC's elite specialized high schools.",
    items: ["Full-length practice exams", "Critical reasoning & logic", "Time management strategies"],
    accent: "#0f2044",
    icon: Trophy,
  },
  {
    tag: "Grades 2-7",
    title: "Reading, Writing & Math",
    desc: "Core academic skills aligned to New York State Common Core standards - building the foundation for long-term success.",
    items: ["Argument analysis & fluency", "Grammar & sentence structure", "Problem-solving & geometry"],
    accent: "#1d6a4a",
    icon: BookOpenCheck,
  },
  {
    tag: "Grades 3-7",
    title: "NYS Test Prep",
    desc: "Targeted preparation for New York State exams. Build confidence, reduce test anxiety, and outperform the curve.",
    items: ["ELA & Math exam strategies", "Practice under real conditions", "Progress tracking & feedback"],
    accent: "#7c3d8c",
    icon: Target,
  },
  {
    tag: "All Grades",
    title: "Writing Class",
    desc: "From sentence structure to full essays - our writing classes take students through the complete writing process.",
    items: ["Grammar & punctuation mastery", "Drafting, editing & revising", "Multiple writing forms & styles"],
    accent: "#b84a62",
    icon: PenLine,
  },
  {
    tag: "Grades 2-8",
    title: "Summer Program",
    desc: "Full-day and half-day intensive sessions to prevent the summer slide and launch students ahead of their peers.",
    items: ["English & Math intensives", "Full-day or half-day options", "School-year readiness"],
    accent: "#2563a8",
    icon: CalendarDays,
  },
];

const pillars = [
  {
    icon: GraduationCap,
    title: "33 Years of Quality Teaching",
    desc: "Since 1993, we've refined our curriculum and teaching methods to deliver consistent, measurable results for every student.",
    tone: "from-amber-50 to-white",
  },
  {
    icon: TrendingUp,
    title: "Guaranteed Results",
    desc: "75% of our SHSAT prep students gain admission to specialized high schools. Our track record speaks for itself.",
    tone: "from-blue-50 to-white",
  },
  {
    icon: School,
    title: "Licensed & Experienced Teachers",
    desc: "Our certified educators provide not just academic support, but the moral support students need to thrive under pressure.",
    tone: "from-emerald-50 to-white",
  },
];

const reviews = [
  {
    name: "Jordan Huang",
    rating: 5,
    text: "Higher Learning is the best - it got me to my dream school. They're very good in SHSAT and helped me build great skills.",
    date: "Jul 2025",
  },
  {
    name: "Jasmine Huang",
    rating: 5,
    text: "Learning here feels like water - gentle yet powerful. The lessons flow with ease, washing away confusion and leaving behind clarity.",
    date: "Jul 2025",
  },
  {
    name: "UZ",
    rating: 5,
    text: "I got into Stuyvesant! Very thankful to Mr. Roda - his teaching style and materials were very helpful for me and my classmates.",
    date: "Jul 2025",
  },
  {
    name: "L. Deng",
    rating: 5,
    text: "Higher Learning is a top-notch tutoring center that helps you master material for your upcoming grade, enabling you to stay ahead.",
    date: "Nov 2024",
  },
  {
    name: "Chloe Chu",
    rating: 5,
    text: "Great place for kids looking to take the SHSAT. Teachers are nice, knowledgeable, and willing to help. Highly recommend!",
    date: "Aug 2024",
  },
  {
    name: "Madison Lee",
    rating: 5,
    text: "My experience here was amazing. The teachers taught me so much - and in fun, engaging ways. I recommend this tutoring center.",
    date: "Jul 2024",
  },
];

const students = [
  "Aaron Lu","Aiden Wen","Alexis Jung","Allyson Yip","Andrew Chin","Andrew Xiong",
  "Ann Zhuo","Anderson Chen","Auden Gage","Ava Lam","Benjamin Klare","Bianca Beleffi",
  "Bowen Zheng","Brendan Tan","Brian Yu","Bryce Wong","Caleb Lu","Carson Mui",
  "Chase Ma","Charles Sockey","Chloe Chu","Danny Chen","David Knobel","Devin Zheng",
  "Eason Chen","Eileen Feng","Eric Li","Gorden Hui","Grace Feng","Jason Dong",
  "Jay Chen","Jaydon Mei","Jennifer Zheng","Jonathan Sanger","Jordan Huang","Jordan Kuang",
  "Joseph Kennedy","Joy Lamboy","Jody Li","Kaitlin Lam","Kama Pan","Keaton Wen",
  "Krish Patni","Kyla Lee","Leo Gao","Lianna Ho","Liam Chen","Lilianne Wu",
  "Lisa Burdi","Liya Zhu","Louie Wang","Lucas Bark","Macallan Yu","Maggie Miao",
  "Marcus Lei","Maya Chou","Micheal Deng","Nye Totte","Qi Lin Wu","Raphael Stoynov",
  "Rahui Lee","Rinka Shimizu","Ryan Chen","Sebastian Waldman","Shea Li","Soyun Han",
  "Taewoo Kim","Taylor Lee","Teddy Hui","Timothy Gough","Victoria Chu","Vincent Zhao",
  "Wen Hui Huang","Yuan Yuan Cheng","Yu Sen Dong","Yu Ying Yang","Yuze Chen",
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function useCountUp(target: number, decimals = 0, active: boolean) {
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!active) return;
    let start = 0;
    const duration = 1600;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start = Math.min(start + increment, target);
      setVal(start);
      if (start >= target) clearInterval(timer);
    }, step);

    return () => clearInterval(timer);
  }, [target, active]);

  return decimals ? val.toFixed(decimals) : Math.floor(val).toString();
}

function StatCard({ value, suffix, label, active }: { value: string; suffix: string; label: string; active: boolean }) {
  const isDecimal = value.includes(".");
  const counted = useCountUp(parseFloat(value), isDecimal ? 1 : 0, active);
  const isYear = label === "Established";

  return (
    <div className="group relative overflow-hidden border-white/10 px-5 py-7 text-center sm:border-r lg:px-8">
      <div className="absolute inset-x-4 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b84b]/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <div className="font-serif text-4xl font-bold leading-none text-[#e8b84b] md:text-5xl">
        {isYear ? value : counted}{suffix}
      </div>
      <div className="mt-3 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-white/55">
        {label}
      </div>
    </div>
  );
}

function Section({
  id,
  label,
  title,
  subtitle,
  children,
  dark = false,
  className = "",
}: {
  id?: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}) {
  const { ref, visible } = useInView();

  return (
    <section id={id} className={`py-20 md:py-28 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
        <div
          ref={ref}
          className={`mb-12 max-w-3xl transition-all duration-700 ${
            visible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <div className={`mb-4 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] ${dark ? "text-[#e8b84b]" : "text-[#b27a16]"}`}>
            <span className="h-px w-8 bg-current opacity-60" />
            {label}
          </div>
          <h2 className={`font-serif text-4xl font-bold leading-tight tracking-normal md:text-5xl ${dark ? "text-white" : "text-[#0f2044]"}`}>
            {title}
          </h2>
          {subtitle && (
            <p className={`mt-5 max-w-2xl text-base leading-8 md:text-lg ${dark ? "text-white/62" : "text-slate-600"}`}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

function CourseCard({ course, delay }: { course: typeof courses[0]; delay: number }) {
  const { ref, visible } = useInView();
  const Icon = course.icon;

  return (
    <article
      ref={ref}
      className={`group relative flex min-h-[360px] flex-col overflow-hidden rounded-[8px] border border-slate-200 bg-white p-7 shadow-[0_16px_45px_rgba(15,32,68,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,32,68,0.16)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="absolute inset-x-0 top-0 h-1.5 transition-all duration-500 group-hover:h-2" style={{ backgroundColor: course.accent }} />
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-[8px] border" style={{ backgroundColor: `${course.accent}12`, borderColor: `${course.accent}30`, color: course.accent }}>
          <Icon size={23} strokeWidth={1.8} />
        </div>
        <span className="rounded-full border px-3 py-1 text-[0.66rem] font-bold uppercase tracking-[0.15em]" style={{ backgroundColor: `${course.accent}10`, borderColor: `${course.accent}24`, color: course.accent }}>
          {course.tag}
        </span>
      </div>
      <h3 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">{course.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">{course.desc}</p>
      <ul className="mt-6 flex flex-col gap-3">
        {course.items.map((item) => (
          <li key={item} className="flex gap-3 text-sm font-medium leading-6 text-slate-700">
            <Check className="mt-1 h-4 w-4 flex-none" style={{ color: course.accent }} />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <Link href="/pages/courses" className="mt-auto inline-flex items-center gap-2 pt-7 text-xs font-bold uppercase tracking-[0.16em] transition-colors" style={{ color: course.accent }}>
        Learn More <ChevronRight size={15} />
      </Link>
    </article>
  );
}

function PillarCard({ pillar, delay }: { pillar: typeof pillars[0]; delay: number }) {
  const { ref, visible } = useInView();
  const Icon = pillar.icon;

  return (
    <article
      ref={ref}
      className={`grid gap-6 rounded-[8px] border border-white/10 bg-gradient-to-br ${pillar.tone} p-7 shadow-[0_18px_55px_rgba(0,0,0,0.18)] transition-all duration-500 hover:-translate-y-1 md:grid-cols-[4rem_1fr] md:p-8 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-[8px] bg-[#0f2044] text-[#e8b84b] shadow-lg shadow-[#0f2044]/20">
        <Icon size={30} strokeWidth={1.7} />
      </div>
      <div>
        <h3 className="font-serif text-2xl font-bold tracking-normal text-[#0f2044]">{pillar.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-600 md:text-base">{pillar.desc}</p>
      </div>
    </article>
  );
}

function ReviewCard({ review, delay }: { review: typeof reviews[0]; delay: number }) {
  const { ref, visible } = useInView();

  return (
    <article
      ref={ref}
      className={`relative flex min-h-[300px] flex-col rounded-[8px] border border-[#d9c28e]/35 bg-white p-7 shadow-[0_18px_50px_rgba(15,32,68,0.09)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_65px_rgba(15,32,68,0.14)] ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <Quote className="absolute right-6 top-6 h-10 w-10 text-[#f0dfb4]" strokeWidth={1.4} />
      <div className="mb-6 flex gap-1 text-[#c8922a]" aria-label={`${review.rating} star review`}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} size={17} fill="currentColor" strokeWidth={1.5} />
        ))}
      </div>
      <p className="relative z-10 text-sm leading-7 text-slate-700 md:text-base">&ldquo;{review.text}&rdquo;</p>
      <div className="mt-auto flex items-end justify-between gap-4 pt-8">
        <div>
          <div className="font-bold text-[#0f2044]">{review.name}</div>
          <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Google Review</div>
        </div>
        <div className="text-sm font-semibold text-slate-400">{review.date}</div>
      </div>
    </article>
  );
}

export default function Home() {
  const { ref: statsRef, visible: statsVisible } = useInView(0.2);
  const [reviewPage, setReviewPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const visibleReviews = reviews.slice(reviewPage * reviewsPerPage, (reviewPage + 1) * reviewsPerPage);

  return (
    <>
      <style>{`
        @keyframes scrollMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          width: max-content;
          animation: scrollMarquee 42s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section className="relative isolate min-h-[calc(100vh-72px)] overflow-hidden bg-[#080f24] pb-24 pt-20 md:pb-28 md:pt-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(232,184,75,0.18),transparent_30%),radial-gradient(circle_at_20%_78%,rgba(80,124,190,0.22),transparent_32%),linear-gradient(145deg,#080f24_0%,#0f2044_46%,#172f65_100%)]" />
        <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.7)_1px,transparent_1px)] [background-size:72px_72px]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_26rem] lg:px-12">
          <div className="max-w-4xl">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#e8b84b]/25 bg-white/7 px-4 py-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-[#e8b84b] backdrop-blur">
              <Sparkles size={14} />
              Established 1993 · New York City
            </div>
            <h1 className="max-w-5xl font-serif text-[clamp(3rem,6.8vw,5.35rem)] font-bold leading-[0.98] tracking-normal text-white">
              Where Students <span className="italic text-[#e8b84b]">Rise</span> to Their Full Potential
            </h1>
            <div className="mt-7 flex flex-wrap items-center gap-4">
              <div className="zh text-2xl tracking-[0.42em] text-white/52 md:text-3xl">春苗补习</div>
              <div className="hidden h-px w-16 bg-[#e8b84b]/45 sm:block" />
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/42">Higher Learning</div>
            </div>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
              33 years of academic excellence preparing NYC students for SHSAT, SAT, PSAT, and state exams.
              Small classes. Certified teachers. Proven results.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-white/58">
              <span className="inline-flex items-center gap-2"><MapPin size={17} className="text-[#e8b84b]" />84 Bowery, 3FL · New York, NY 10013</span>
              <span className="inline-flex items-center gap-2"><Phone size={17} className="text-[#e8b84b]" />212-941-0695</span>
            </div>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/pages/contact" className="inline-flex h-13 items-center justify-center rounded-full bg-gradient-to-r from-[#c8922a] to-[#e8b84b] px-7 text-sm font-bold uppercase tracking-[0.14em] text-[#081126] shadow-[0_14px_35px_rgba(200,146,42,0.32)] transition duration-300 hover:-translate-y-1 hover:text-[#081126] hover:shadow-[0_18px_45px_rgba(200,146,42,0.48)]">
                Enroll Now <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
              <Link href="/pages/courses" className="inline-flex h-13 items-center justify-center rounded-full border border-white/28 px-7 text-sm font-bold uppercase tracking-[0.14em] text-white/86 transition duration-300 hover:-translate-y-1 hover:border-white/65 hover:bg-white/8 hover:text-white">
                View Courses
              </Link>
            </div>
          </div>

          <aside className="relative hidden rounded-[8px] border border-white/12 bg-white/8 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.25)] backdrop-blur-xl lg:block">
            <div className="rounded-[8px] border border-[#e8b84b]/25 bg-[#081126]/70 p-6">
              <div className="mb-8 flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#e8b84b]">Admissions Focus</span>
                <Award className="text-[#e8b84b]" size={24} />
              </div>
              <div className="font-serif text-5xl font-bold leading-none text-white">75%</div>
              <p className="mt-4 text-sm leading-7 text-white/58">SHSAT acceptance rate into NYC specialized high schools.</p>
              <div className="mt-8 grid gap-3">
                {["Stuyvesant", "Brooklyn Tech", "Bronx Science"].map((school) => (
                  <div key={school} className="flex items-center justify-between rounded-[8px] border border-white/8 bg-white/6 px-4 py-3 text-sm text-white/75">
                    {school}
                    <Check size={16} className="text-[#e8b84b]" />
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section ref={statsRef} className="relative z-20 bg-white px-5 sm:px-8 lg:px-12">
        <div className="mx-auto -mt-14 max-w-7xl overflow-hidden rounded-[8px] border border-white/10 bg-[#0f2044] shadow-[0_28px_90px_rgba(15,32,68,0.24)]">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} active={statsVisible} />
            ))}
          </div>
        </div>
      </section>

      <Section
        id="courses"
        className="bg-white"
        label="Academic Programs"
        title="Every Student. Every Goal."
        subtitle="Curriculum built around New York State Common Core standards and NYC's most competitive exams."
      >
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course, i) => (
            <CourseCard key={course.title} course={course} delay={i * 80} />
          ))}
        </div>
      </Section>

      <Section
        id="why"
        className="bg-[#0f2044] bg-[radial-gradient(circle_at_top_right,rgba(232,184,75,0.13),transparent_34%),linear-gradient(135deg,#0f2044,#081126)]"
        label="Why Higher Learning"
        title="The Difference Is Results."
        subtitle="We don't just prepare students for tests - we build the academic confidence and habits that last a lifetime."
        dark
      >
        <div className="grid gap-5 lg:grid-cols-3">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} delay={i * 100} />
          ))}
        </div>
      </Section>

      <Section
        id="success"
        className="overflow-hidden bg-[#080f24] bg-[radial-gradient(circle_at_20%_20%,rgba(232,184,75,0.16),transparent_26%),linear-gradient(145deg,#080f24,#121b34)]"
        label="Class of 2024 & 2025"
        title="Specialized High School Admissions"
        subtitle="Congratulations to our students accepted into NYC's elite specialized high schools. Pick up your gifts and celebrate with us - you've earned it."
        dark
      >
        <div className="relative -mx-5 overflow-hidden border-y border-white/10 py-6 sm:-mx-8 lg:-mx-12">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#080f24] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#080f24] to-transparent" />
          <div className="marquee-track flex gap-3">
            {[...students, ...students].map((name, i) => (
              <span key={`${name}-${i}`} className="whitespace-nowrap rounded-full border border-[#e8b84b]/20 bg-white/8 px-4 py-2 text-sm font-semibold text-white/75 shadow-sm backdrop-blur transition duration-300 hover:border-[#e8b84b]/60 hover:bg-[#e8b84b] hover:text-[#081126]">
                {name}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { n: "79+", label: "Students Accepted", icon: Users },
            { n: "75%", label: "SHSAT Acceptance Rate", icon: TrendingUp },
            { n: "10+", label: "Schools Including Stuyvesant", icon: School },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="rounded-[8px] border border-white/10 bg-white/8 p-7 text-center shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur">
                <Icon className="mx-auto mb-4 text-[#e8b84b]" size={28} />
                <div className="font-serif text-5xl font-bold leading-none text-[#e8b84b] md:text-6xl">{item.n}</div>
                <div className="mt-4 text-xs font-bold uppercase tracking-[0.18em] text-white/58">{item.label}</div>
              </div>
            );
          })}
        </div>
      </Section>

      <Section
        id="reviews"
        className="bg-[#fbf7ed]"
        label="Google Reviews"
        title="What Families Are Saying"
        subtitle="Rated 4.9 stars across 45+ reviews. Our students and parents say it best."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {visibleReviews.map((review, i) => (
            <ReviewCard key={review.name + reviewPage} review={review} delay={i * 100} />
          ))}
        </div>

        <div className="mt-9 flex justify-center gap-3">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`h-2.5 w-2.5 rounded-full transition duration-300 ${i === reviewPage ? "scale-125 bg-[#c8922a]" : "bg-[#0f2044]/20 hover:bg-[#0f2044]/40"}`}
              onClick={() => setReviewPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJI3T2lZVbwokR11FLjw6rAsw"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.14em] text-[#b27a16] transition hover:text-[#0f2044]"
          >
            Read all reviews on Google <ChevronRight size={16} />
          </a>
        </div>
      </Section>

      <section className="relative isolate overflow-hidden bg-[#0f2044] px-5 py-20 text-center sm:px-8 md:py-28 lg:px-12">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(232,184,75,0.18),transparent_32%),linear-gradient(135deg,#0f2044,#081126)]" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-3 text-[0.7rem] font-bold uppercase tracking-[0.22em] text-[#e8b84b]">
            <span className="h-px w-8 bg-current opacity-60" />
            Begin Your Journey
            <span className="h-px w-8 bg-current opacity-60" />
          </div>
          <h2 className="font-serif text-4xl font-bold leading-tight tracking-normal text-white md:text-6xl">Ready to Get Ahead?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/62">
            Schedule a free consultation and find the right program for your student. Limited spots available each semester.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/pages/contact" className="inline-flex h-13 items-center justify-center rounded-full bg-gradient-to-r from-[#c8922a] to-[#e8b84b] px-7 text-sm font-bold uppercase tracking-[0.14em] text-[#081126] shadow-[0_14px_35px_rgba(200,146,42,0.32)] transition duration-300 hover:-translate-y-1 hover:text-[#081126]">
              Schedule a Consultation
            </Link>
            <Link href="/pages/class-schedules" className="inline-flex h-13 items-center justify-center rounded-full border border-white/28 px-7 text-sm font-bold uppercase tracking-[0.14em] text-white/86 transition duration-300 hover:-translate-y-1 hover:border-white/65 hover:bg-white/8 hover:text-white">
              View 2026 Schedules
            </Link>
          </div>
          <p className="mt-10 text-sm font-medium tracking-[0.08em] text-white/38">
            84 Bowery, 3FL · New York, NY 10013 · 212-941-0695
          </p>
        </div>
      </section>
    </>
  );
}
