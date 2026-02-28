"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

/* ─── Data ─────────────────────────────────────────────────── */

const stats = [
  { value: "33", suffix: "+", label: "Years of Excellence" },
  { value: "75", suffix: "%", label: "SHSAT Acceptance Rate" },
  { value: "4.9", suffix: "★", label: "Google Rating" },
  { value: "1993", suffix: "", label: "Established" },
];

const courses = [
  {
    tag: "Grades 9–12",
    title: "PSAT & SAT Prep",
    desc: "Master reading comprehension, grammar, and advanced math. Build the test-taking strategies colleges reward.",
    items: ["Reading & Evidence Analysis", "Writing & Language Mechanics", "Algebra, Data & Trigonometry"],
    accent: "#c8922a",
  },
  {
    tag: "Grades 7–8",
    title: "SHSAT Prep",
    desc: "Our flagship program with a proven 75% admission rate to NYC's elite specialized high schools.",
    items: ["Full-length practice exams", "Critical reasoning & logic", "Time management strategies"],
    accent: "#0f2044",
  },
  {
    tag: "Grades 2–7",
    title: "Reading, Writing & Math",
    desc: "Core academic skills aligned to New York State Common Core standards — building the foundation for long-term success.",
    items: ["Argument analysis & fluency", "Grammar & sentence structure", "Problem-solving & geometry"],
    accent: "#1d6a4a",
  },
  {
    tag: "Grades 3–7",
    title: "NYS Test Prep",
    desc: "Targeted preparation for New York State exams. Build confidence, reduce test anxiety, and outperform the curve.",
    items: ["ELA & Math exam strategies", "Practice under real conditions", "Progress tracking & feedback"],
    accent: "#7c3d8c",
  },
  {
    tag: "All Grades",
    title: "Writing Class",
    desc: "From sentence structure to full essays — our writing classes take students through the complete writing process.",
    items: ["Grammar & punctuation mastery", "Drafting, editing & revising", "Multiple writing forms & styles"],
    accent: "#b84a62",
  },
  {
    tag: "Grades 2–8",
    title: "Summer Program",
    desc: "Full-day and half-day intensive sessions to prevent the summer slide and launch students ahead of their peers.",
    items: ["English & Math intensives", "Full-day or half-day options", "School-year readiness"],
    accent: "#2563a8",
  },
];

const pillars = [
  {
    icon: "🎓",
    title: "33 Years of Quality Teaching",
    desc: "Since 1993, we've refined our curriculum and teaching methods to deliver consistent, measurable results for every student.",
  },
  {
    icon: "📈",
    title: "Guaranteed Results",
    desc: "75% of our SHSAT prep students gain admission to specialized high schools. Our track record speaks for itself.",
  },
  {
    icon: "🏫",
    title: "Licensed & Experienced Teachers",
    desc: "Our certified educators provide not just academic support, but the moral support students need to thrive under pressure.",
  },
];

const reviews = [
  {
    name: "Jordan Huang",
    rating: 5,
    text: "Higher Learning is the best — it got me to my dream school. They're very good in SHSAT and helped me build great skills.",
    date: "Jul 2025",
  },
  {
    name: "Jasmine Huang",
    rating: 5,
    text: "Learning here feels like water — gentle yet powerful. The lessons flow with ease, washing away confusion and leaving behind clarity.",
    date: "Jul 2025",
  },
  {
    name: "UZ",
    rating: 5,
    text: "I got into Stuyvesant! Very thankful to Mr. Roda — his teaching style and materials were very helpful for me and my classmates.",
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
    text: "My experience here was amazing. The teachers taught me so much — and in fun, engaging ways. I recommend this tutoring center.",
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

/* ─── Hooks ─────────────────────────────────────────────────── */

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
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
    const end = target;
    const duration = 1800;
    const step = 16;
    const increment = end / (duration / step);
    const timer = setInterval(() => {
      start = Math.min(start + increment, end);
      setVal(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [target, active]);
  return decimals ? val.toFixed(decimals) : Math.floor(val).toString();
}

/* ─── Sub-components ─────────────────────────────────────────── */

function Stars({ n }: { n: number }) {
  return (
    <span style={{ color: "#c8922a", fontSize: "1rem", letterSpacing: "2px" }}>
      {"★".repeat(n)}{"☆".repeat(5 - n)}
    </span>
  );
}

function StatCard({ value, suffix, label, active }: { value: string; suffix: string; label: string; active: boolean }) {
  const isDecimal = value.includes(".");
  const numVal = parseFloat(value);
  const counted = useCountUp(numVal, isDecimal ? 1 : 0, active);
  const isYear = label === "Established";

  return (
    <div style={{
      textAlign: "center",
      padding: "2rem 1rem",
      position: "relative",
    }}>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
        fontWeight: 700,
        color: "#c8922a",
        lineHeight: 1,
        letterSpacing: "-0.02em",
      }}>
        {isYear ? value : counted}{suffix}
      </div>
      <div style={{
        marginTop: "0.5rem",
        fontSize: "0.78rem",
        fontWeight: 600,
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: "rgba(255,255,255,0.55)",
      }}>
        {label}
      </div>
    </div>
  );
}

function ReviewCard({ review, delay }: { review: typeof reviews[0]; delay: number }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} style={{
      background: "#fff",
      borderRadius: 16,
      padding: "1.75rem",
      boxShadow: "0 4px 24px rgba(15,32,68,0.08)",
      border: "1px solid rgba(200,146,42,0.1)",
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(28px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
    }}>
      <Stars n={review.rating} />
      <p style={{ color: "#3a3844", fontSize: "0.9rem", lineHeight: 1.7, fontStyle: "italic", margin: 0 }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto" }}>
        <span style={{ fontWeight: 600, fontSize: "0.85rem", color: "#0f2044" }}>{review.name}</span>
        <span style={{ fontSize: "0.72rem", color: "#9e9ca4", letterSpacing: "0.05em" }}>{review.date}</span>
      </div>
    </div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const statsSection = useInView(0.2);
  const [reviewPage, setReviewPage] = useState(0);
  const reviewsPerPage = 3;
  const totalPages = Math.ceil(reviews.length / reviewsPerPage);
  const visibleReviews = reviews.slice(reviewPage * reviewsPerPage, (reviewPage + 1) * reviewsPerPage);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy: #0f2044;
          --gold: #c8922a;
          --gold-light: #e8b84b;
          --cream: #faf8f4;
        }

        .hl-hero-bg {
          background: linear-gradient(160deg, #080f24 0%, #0f2044 40%, #162a58 70%, #0f2044 100%);
          position: relative;
          overflow: hidden;
        }

        .hl-hero-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 80% 60% at 70% 50%, rgba(200,146,42,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .hl-hero-bg::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 120px;
          background: linear-gradient(to bottom, transparent, #faf8f4);
          pointer-events: none;
        }

        /* Grid lines decoration */
        .hl-grid-lines {
          position: absolute;
          inset: 0;
          opacity: 0.04;
          background-image:
            linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .fade-up {
          opacity: 0;
          transform: translateY(32px);
          transition: opacity 0.7s ease, transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }

        .fade-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .course-card {
          background: #fff;
          border-radius: 20px;
          padding: 2rem;
          border: 1px solid rgba(15,32,68,0.07);
          box-shadow: 0 2px 16px rgba(15,32,68,0.06);
          transition: transform 0.25s cubic-bezier(0.16,1,0.3,1), box-shadow 0.25s ease;
          position: relative;
          overflow: hidden;
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--accent, #c8922a);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.35s cubic-bezier(0.16,1,0.3,1);
        }

        .course-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 16px 48px rgba(15,32,68,0.12);
        }

        .course-card:hover::before {
          transform: scaleX(1);
        }

        .pillar-card {
          background: #fff;
          border-radius: 20px;
          padding: 2.5rem 2rem;
          text-align: center;
          border: 1px solid rgba(200,146,42,0.1);
          box-shadow: 0 2px 16px rgba(15,32,68,0.05);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .pillar-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(15,32,68,0.1);
        }

        .student-name {
          display: inline-block;
          padding: 0.3rem 0.9rem;
          background: rgba(15,32,68,0.05);
          border-radius: 50px;
          font-size: 0.82rem;
          font-weight: 500;
          color: #0f2044;
          transition: background 0.15s, color 0.15s;
          white-space: nowrap;
        }

        .student-name:hover {
          background: #c8922a;
          color: #fff;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c8922a;
          margin-bottom: 0.75rem;
        }

        .section-label::before, .section-label::after {
          content: '';
          display: block;
          width: 20px;
          height: 1px;
          background: #c8922a;
          opacity: 0.6;
        }

        .review-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: rgba(15,32,68,0.2);
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
        }

        .review-dot.active {
          background: #c8922a;
          transform: scale(1.3);
        }

        .cta-section {
          background: linear-gradient(135deg, #0f2044 0%, #162a58 50%, #0a1530 100%);
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(200,146,42,0.12) 0%, transparent 70%);
          pointer-events: none;
        }

        @keyframes heroFadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        @keyframes scrollMarquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-23%); }
        }

        .marquee-track {
          display: flex;
          gap: 1rem;
          animation: scrollMarquee 30s linear infinite;
          width: max-content;
        }

        .marquee-track:hover { animation-play-state: paused; }

        @keyframes goldPulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(200,146,42,0.4); }
          50% { box-shadow: 0 0 0 12px rgba(200,146,42,0); }
        }

        .btn-primary-hl {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: linear-gradient(135deg, #c8922a, #e8b84b);
          color: #0f2044;
          font-family: 'DM Sans', sans-serif;
          font-weight: 700;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 50px;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 20px rgba(200,146,42,0.35);
        }

        .btn-primary-hl:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 32px rgba(200,146,42,0.5);
        }

        .btn-outline-hl {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 2rem;
          background: transparent;
          color: rgba(255,255,255,0.85);
          font-family: 'DM Sans', sans-serif;
          font-weight: 600;
          font-size: 0.82rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 50px;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.25);
          cursor: pointer;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }

        .btn-outline-hl:hover {
          border-color: rgba(255,255,255,0.6);
          color: #fff;
          background: rgba(255,255,255,0.06);
        }
      `}</style>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className="hl-hero-bg" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "8rem 0 10rem", fontFamily: "'DM Sans', sans-serif" }}>
        <div className="hl-grid-lines" />
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)", position: "relative", zIndex: 1, width: "100%" }}>
          <div style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "none" : "translateY(24px)",
            transition: "opacity 0.8s ease 0.1s, transform 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 32, height: 2, background: "linear-gradient(to right, #c8922a, #e8b84b)" }} />
              <span style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "#e8b84b" }}>
                Established 1993 · New York City
              </span>
            </div>

            {/* Main heading */}
            <h1 style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(3rem, 7vw, 5.5rem)",
              fontWeight: 700,
              color: "#fff",
              lineHeight: 1.08,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "800px",
            }}>
              Where Students
              <br />
              <em style={{ color: "#e8b84b", fontStyle: "italic" }}>Rise to Their</em>
              <br />
              Full Potential
            </h1>

            {/* Chinese name */}
            <div style={{
              marginTop: "1.25rem",
              fontSize: "1.1rem",
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.35em",
              fontFamily: "'PingFang SC', 'Microsoft YaHei', sans-serif",
            }}>
              春苗补习 · Higher Learning
            </div>

            {/* Description */}
            <p style={{
              marginTop: "2rem",
              maxWidth: 520,
              color: "rgba(255,255,255,0.65)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
            }}>
              33 years of academic excellence preparing NYC students for SHSAT, SAT, PSAT, and state exams.
              Small classes. Certified teachers. Proven results.
            </p>

            {/* Address + phone */}
            <div style={{ marginTop: "1.5rem", display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
              {[
                { icon: "📍", text: "84 Bowery, 3FL · New York, NY 10013" },
                { icon: "📞", text: "212-941-0695" },
              ].map((item) => (
                <span key={item.text} style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.85rem", color: "rgba(255,255,255,0.5)" }}>
                  <span>{item.icon}</span> {item.text}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div style={{ marginTop: "2.5rem", display: "flex", flexWrap: "wrap", gap: "1rem" }}>
              <Link href="/pages/contact" className="btn-primary-hl">
                Enroll Now →
              </Link>
              <Link href="/pages/courses" className="btn-outline-hl">
                View Courses
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ──────────────────────────────────────────── */}
      <section ref={statsSection.ref} style={{ background: "#0f2044", padding: "0" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 0,
          }}>
            {stats.map((s, i) => (
              <div key={s.label} style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
              }}>
                <StatCard {...s} active={statsSection.visible} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COURSES ─────────────────────────────────────────────── */}
      <Section id="courses" bg="#faf8f4" label="Academic Programs" title="Every Student. Every Goal." subtitle="Curriculum built around New York State Common Core standards and NYC's most competitive exams.">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {courses.map((course, i) => (
            <CourseCard key={course.title} course={course} delay={i * 80} />
          ))}
        </div>
      </Section>

      {/* ── WHY US ──────────────────────────────────────────────── */}
      <Section id="why" bg="#0f2044" label="Why Higher Learning" title="The Difference Is Results." subtitle="We don't just prepare students for tests — we build the academic confidence and habits that last a lifetime." dark>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.5rem",
        }}>
          {pillars.map((p, i) => (
            <PillarCard key={p.title} pillar={p} delay={i * 100} />
          ))}
        </div>
      </Section>

      {/* ── SUCCESS WALL ────────────────────────────────────────── */}
      <Section id="success" bg="#faf8f4" label="Class of 2024 & 2025" title="Specialized High School Admissions" subtitle="Congratulations to our students accepted into NYC's elite specialized high schools. Pick up your gifts and celebrate with us — you've earned it.">
        {/* Marquee of names */}
        <div style={{ overflow: "hidden", marginTop: "1rem" }}>
          <div className="marquee-track">
            {[...students, ...students].map((name, i) => (
              <span key={i} className="student-name">{name}</span>
            ))}
          </div>
        </div>

        {/* Highlight numbers */}
        <div style={{ display: "flex", justifyContent: "center", gap: "3rem", marginTop: "3rem", flexWrap: "wrap" }}>
          {[
            { n: "79+", label: "Students Accepted" },
            { n: "75%", label: "SHSAT Acceptance Rate" },
            { n: "10+", label: "Schools Including Stuyvesant" },
          ].map((item) => (
            <div key={item.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: "2.5rem", fontWeight: 700, color: "#c8922a" }}>{item.n}</div>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "#5a5860", marginTop: "0.25rem", fontWeight: 600 }}>{item.label}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── REVIEWS ─────────────────────────────────────────────── */}
      <Section id="reviews" bg="#fff" label="Google Reviews" title="What Families Are Saying" subtitle="Rated 4.9 stars across 45+ reviews. Our students and parents say it best.">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "1.25rem",
        }}>
          {visibleReviews.map((r, i) => (
            <ReviewCard key={r.name + reviewPage} review={r} delay={i * 100} />
          ))}
        </div>

        {/* Pagination dots */}
        <div style={{ display: "flex", justifyContent: "center", gap: "0.5rem", marginTop: "2rem" }}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`review-dot ${i === reviewPage ? "active" : ""}`}
              onClick={() => setReviewPage(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>

        {/* Google attribution */}
        <div style={{ textAlign: "center", marginTop: "1.5rem" }}>
          <a
            href="https://search.google.com/local/reviews?placeid=ChIJI3T2lZVbwokR11FLjw6rAsw"
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontSize: "0.8rem", color: "#c8922a", fontWeight: 600, textDecoration: "none", letterSpacing: "0.05em" }}
          >
            Read all reviews on Google →
          </a>
        </div>
      </Section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="cta-section" style={{ padding: "6rem 0", fontFamily: "'DM Sans', sans-serif" }}>
        <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)", textAlign: "center", position: "relative", zIndex: 1 }}>
          <div className="section-label" style={{ justifyContent: "center" }}>Begin Your Journey</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 700,
            color: "#fff",
            marginTop: "0.5rem",
            letterSpacing: "-0.02em",
          }}>
            Ready to Get Ahead?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1rem", maxWidth: 480, margin: "1rem auto 2.5rem", lineHeight: 1.75 }}>
            Schedule a free consultation and find the right program for your student. Limited spots available each semester.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn-primary-hl" style={{ animation: "goldPulse 2.5s ease infinite" }}>
              Schedule a Consultation
            </Link>
            <Link href="/pages/class-schedules" className="btn-outline-hl">
              View 2026 Schedules
            </Link>
          </div>
          {/* Address repeat */}
          <p style={{ marginTop: "2.5rem", color: "rgba(255,255,255,0.3)", fontSize: "0.8rem", letterSpacing: "0.08em" }}>
            84 Bowery, 3FL · New York, NY 10013 · 212-941-0695
          </p>
        </div>
      </section>
    </>
  );
}

/* ─── Section wrapper ────────────────────────────────────────── */
function Section({
  id, bg, label, title, subtitle, children, dark,
}: {
  id?: string;
  bg: string;
  label: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  const { ref, visible } = useInView();
  return (
    <section id={id} style={{ background: bg, padding: "6rem 0", fontFamily: "'DM Sans', sans-serif" }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)" }}>
        <div ref={ref} style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "none" : "translateY(24px)",
          transition: "opacity 0.6s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)",
          marginBottom: "3rem",
        }}>
          <div className="section-label">{label}</div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
            fontWeight: 700,
            color: dark ? "#fff" : "#0f2044",
            letterSpacing: "-0.02em",
            margin: "0 0 1rem",
            maxWidth: 600,
          }}>
            {title}
          </h2>
          {subtitle && (
            <p style={{ color: dark ? "rgba(255,255,255,0.5)" : "#5a5860", maxWidth: 560, lineHeight: 1.75 }}>
              {subtitle}
            </p>
          )}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ─── Course Card ────────────────────────────────────────────── */
function CourseCard({ course, delay }: { course: typeof courses[0]; delay: number }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className="course-card" style={{
      "--accent": course.accent,
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(24px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    } as React.CSSProperties}>
      <div style={{
        display: "inline-block",
        padding: "0.25rem 0.75rem",
        borderRadius: 50,
        background: course.accent + "15",
        color: course.accent,
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        marginBottom: "0.75rem",
      }}>
        {course.tag}
      </div>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.25rem",
        fontWeight: 700,
        color: "#0f2044",
        margin: "0 0 0.75rem",
      }}>
        {course.title}
      </h3>
      <p style={{ color: "#5a5860", fontSize: "0.88rem", lineHeight: 1.7, margin: "0 0 1.25rem" }}>{course.desc}</p>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
        {course.items.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.5rem", fontSize: "0.82rem", color: "#3a3844" }}>
            <span style={{ color: course.accent, flexShrink: 0, marginTop: "2px" }}>✓</span>
            {item}
          </li>
        ))}
      </ul>
      <div style={{ marginTop: "1.5rem" }}>
        <Link href="/pages/courses" style={{
          fontSize: "0.78rem",
          fontWeight: 600,
          color: course.accent,
          letterSpacing: "0.06em",
          textDecoration: "none",
          textTransform: "uppercase",
        }}>
          Learn More →
        </Link>
      </div>
    </div>
  );
}

/* ─── Pillar Card ────────────────────────────────────────────── */
function PillarCard({ pillar, delay }: { pillar: typeof pillars[0]; delay: number }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className="pillar-card" style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "none" : "translateY(24px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
    }}>
      <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>{pillar.icon}</div>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: "1.2rem",
        fontWeight: 700,
        color: "#0f2044",
        margin: "0 0 0.75rem",
      }}>
        {pillar.title}
      </h3>
      <p style={{ color: "#5a5860", fontSize: "0.88rem", lineHeight: 1.75, margin: 0 }}>{pillar.desc}</p>
    </div>
  );
}