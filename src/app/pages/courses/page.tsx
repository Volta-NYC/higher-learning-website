"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Course {
  id: string;
  tag: string;
  grades: string;
  title: string;
  description: string;
  bullets: string[];
  accent: string;
  accentBg: string;
  discount?: boolean;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const courses: Course[] = [
  {
    id: "shsat",
    tag: "Flagship Program",
    grades: "Grades 7 – 8",
    title: "SHSAT Preparation",
    description:
      "Comprehensive preparation for the Specialized High School Admissions Test — the gateway to NYC's eight elite specialized high schools. Our proven curriculum covers both the English Language Arts and Mathematics sections with intensive practice and test-taking strategy.",
    bullets: [
      "Full ELA & Mathematics coverage",
      "Weekly timed practice exams",
      "75% acceptance rate to specialized schools",
      "Personalized performance tracking",
    ],
    accent: "#c8922a",
    accentBg: "rgba(200,146,42,0.08)",
    discount: true,
  },
  {
    id: "sat",
    tag: "College Prep",
    grades: "Grades 9 – 12",
    title: "PSAT & SAT Preparation",
    description:
      "Targeted preparation for the SAT — the standardized college admissions exam that colleges nationwide use to compare applicants. We focus on critical reading, evidence-based writing, and advanced mathematics to maximize your score and open more doors.",
    bullets: [
      "Reading, Writing & Language sections",
      "Advanced math through pre-calculus",
      "Official College Board practice tests",
      "Score improvement guarantee",
    ],
    accent: "#2563eb",
    accentBg: "rgba(37,99,235,0.07)",
    discount: true,
  },
  {
    id: "reading-writing-math",
    tag: "Core Academics",
    grades: "Grades 2 – 7",
    title: "Reading, Writing & Math",
    description:
      "Our foundational academic program builds the essential literacy and numeracy skills students need to excel in school and beyond. Classes are structured around NYS learning standards with an emphasis on comprehension, critical thinking, and mathematical reasoning.",
    bullets: [
      "Comprehension & critical reading",
      "Grammar and vocabulary development",
      "Writing skills from sentence to essay",
      "Mathematics fluency and problem-solving",
    ],
    accent: "#059669",
    accentBg: "rgba(5,150,105,0.07)",
  },
  {
    id: "nys-test",
    tag: "State Exams",
    grades: "Grades 3 – 7",
    title: "NYS Test Preparation",
    description:
      "Targeted preparation for the New York State ELA and Mathematics assessments. Our goal is straightforward: help every student achieve a Level 4 — the highest possible score. We align instruction directly with the state testing framework.",
    bullets: [
      "NYS ELA and Math standards aligned",
      "Targeted toward Level 4 achievement",
      "Past exam question practice",
      "Regular diagnostic assessments",
    ],
    accent: "#7c3aed",
    accentBg: "rgba(124,58,237,0.07)",
  },
  {
    id: "algebra-regents",
    tag: "Advanced Math",
    grades: "Grades 8 – 10",
    title: "Algebra I Regents Prep",
    description:
      "Designed for students taking the NYS Algebra I Regents exam, this course delivers rigorous instruction in algebraic thinking, functions, and reasoning. Even students not sitting the Regents will gain significant mathematical maturity from this curriculum.",
    bullets: [
      "Linear equations and inequalities",
      "Functions and graphing",
      "Statistical analysis and modeling",
      "Full Regents exam simulation",
    ],
    accent: "#db2777",
    accentBg: "rgba(219,39,119,0.07)",
  },
  {
    id: "summer",
    tag: "Summer Program",
    grades: "Grades 2 – 8",
    title: "Summer Intensive",
    description:
      "Keep the momentum going over summer with our intensive academic program. Designed to prevent learning loss and accelerate progress, students work on core skills across reading, writing, and mathematics in an engaging structured environment.",
    bullets: [
      "Comprehension and writing skills",
      "Grammar and vocabulary",
      "Mathematics review and enrichment",
      "Engaging, structured environment",
    ],
    accent: "#0891b2",
    accentBg: "rgba(8,145,178,0.07)",
  },
];

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

// ─── Sub-components ──────────────────────────────────────────────────────────

function CourseCard({ course, index }: { course: Course; index: number }) {
  const { ref, inView } = useInView(0.1);

  return (
    <div
      ref={ref}
      style={{
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid rgba(15,32,68,0.08)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transitionDelay: `${index * 80}ms`,
        transitionProperty: "opacity, transform, box-shadow",
        transitionDuration: "0.55s",
        transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
        cursor: "default",
        position: "relative",
      }}
      className="hl-course-card"
    >
      {/* Top accent bar */}
      <div
        style={{
          height: "3px",
          background: course.accent,
          width: "100%",
          flexShrink: 0,
        }}
      />

      <div style={{ padding: "1.75rem 1.75rem 1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* Header row */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.75rem", marginBottom: "1rem" }}>
          <span
            style={{
              display: "inline-block",
              padding: "0.25rem 0.7rem",
              borderRadius: "50px",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              background: course.accentBg,
              color: course.accent,
              border: `1px solid ${course.accent}30`,
              whiteSpace: "nowrap",
            }}
          >
            {course.tag}
          </span>
          <span
            style={{
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "rgba(15,32,68,0.4)",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              marginTop: "0.15rem",
            }}
          >
            {course.grades}
          </span>
        </div>

        {/* Title */}
        <h2
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: "1.3rem",
            fontWeight: 700,
            color: "#0f2044",
            lineHeight: 1.2,
            margin: "0 0 0.85rem",
          }}
        >
          {course.title}
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "0.85rem",
            color: "rgba(15,32,68,0.6)",
            lineHeight: 1.75,
            margin: "0 0 1.25rem",
          }}
        >
          {course.description}
        </p>

        {/* Bullets */}
        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 auto",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
          }}
        >
          {course.bullets.map((b) => (
            <li
              key={b}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
                fontSize: "0.82rem",
                color: "rgba(15,32,68,0.65)",
                lineHeight: 1.5,
              }}
            >
              <span
                style={{
                  width: "5px",
                  height: "5px",
                  borderRadius: "50%",
                  background: course.accent,
                  flexShrink: 0,
                  marginTop: "0.45em",
                }}
              />
              {b}
            </li>
          ))}
        </ul>

        {/* Sibling discount badge */}
        {course.discount && (
          <div
            style={{
              marginTop: "1.25rem",
              padding: "0.5rem 0.85rem",
              borderRadius: "8px",
              background: "rgba(200,146,42,0.06)",
              border: "1px solid rgba(200,146,42,0.2)",
              fontSize: "0.72rem",
              color: "#c8922a",
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
            }}
          >
            <span style={{ fontSize: "0.85rem" }}>🎟</span>
            Siblings receive a 5% discount
          </div>
        )}

        {/* CTA */}
        <Link
          href="/contact"
          style={{
            display: "block",
            marginTop: "1.5rem",
            padding: "0.7rem 1.25rem",
            borderRadius: "8px",
            border: `1.5px solid ${course.accent}40`,
            background: course.accentBg,
            color: course.accent,
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.05em",
            textDecoration: "none",
            textAlign: "center",
            transition: "background 0.2s, border-color 0.2s",
          }}
          className="hl-card-btn"
          data-accent={course.accent}
        >
          Enroll in This Course →
        </Link>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function CoursesPage() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useInView(0.05);
  const gridRef = useInView(0.05);
  const ctaRef = useInView(0.1);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .hl-courses-page {
          font-family: 'DM Sans', system-ui, sans-serif;
          background: #faf8f4;
          min-height: 100vh;
        }

        .hl-course-card {
          box-shadow: 0 1px 3px rgba(15,32,68,0.06), 0 4px 12px rgba(15,32,68,0.04);
        }

        .hl-course-card:hover {
          transform: translateY(-4px) !important;
          box-shadow: 0 8px 32px rgba(15,32,68,0.12) !important;
        }

        .hl-card-btn:hover {
          filter: brightness(1.06);
          background: var(--accent-bg-hover) !important;
        }

        .hl-courses-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 1.5rem;
        }

        @media (max-width: 720px) {
          .hl-courses-grid {
            grid-template-columns: 1fr;
          }
          .hl-hero-title {
            font-size: clamp(2rem, 8vw, 3.2rem) !important;
          }
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hl-hero-animate {
          animation: heroFadeUp 0.8s cubic-bezier(0.22,1,0.36,1) both;
        }

        .hl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #c8922a;
          margin-bottom: 1rem;
        }
        .hl-eyebrow::before,
        .hl-eyebrow::after {
          content: '';
          display: block;
          width: 24px;
          height: 1px;
          background: #c8922a;
          opacity: 0.6;
        }

        .hl-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2rem;
          background: linear-gradient(135deg, #c8922a, #e8b84b);
          color: #0f2044;
          font-weight: 700;
          font-size: 0.9rem;
          border-radius: 10px;
          text-decoration: none;
          transition: filter 0.2s, transform 0.2s;
          letter-spacing: 0.02em;
        }
        .hl-cta-btn-primary:hover { filter: brightness(1.08); transform: translateY(-1px); }

        .hl-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.9rem 2rem;
          background: transparent;
          color: #fff;
          font-weight: 600;
          font-size: 0.9rem;
          border-radius: 10px;
          border: 1.5px solid rgba(255,255,255,0.3);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
          letter-spacing: 0.02em;
        }
        .hl-cta-btn-secondary:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.05); }
      `}</style>

      <main className="hl-courses-page">

        {/* ── Hero ── */}
        <section
          style={{
            background: "linear-gradient(160deg, #080f24 0%, #0f2044 60%, #162a58 100%)",
            padding: "5rem 0 4.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background grid texture */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              pointerEvents: "none",
            }}
          />
          {/* Radial glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "700px",
              height: "400px",
              background:
                "radial-gradient(ellipse at center, rgba(200,146,42,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            ref={heroRef.ref}
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 clamp(1.25rem, 5vw, 3rem)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              className="hl-hero-animate"
              style={{ animationDelay: "0.1s", opacity: mounted ? undefined : 0 }}
            >
              <div className="hl-eyebrow" style={{ color: "#e8b84b" }}>
                Higher Learning Tutoring Center
              </div>
            </div>

            <h1
              className="hl-hero-title hl-hero-animate"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                margin: "0 0 1.25rem",
                animationDelay: "0.2s",
                opacity: mounted ? undefined : 0,
                maxWidth: "700px",
              }}
            >
              Programs for{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(to right, #c8922a, #e8b84b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Every
              </em>{" "}
              Stage of Learning
            </h1>

            <p
              className="hl-hero-animate"
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                maxWidth: "560px",
                margin: "0 0 2.25rem",
                animationDelay: "0.3s",
                opacity: mounted ? undefined : 0,
              }}
            >
              From Grade 2 through Grade 12 — expert-led courses designed to build foundational skills, crack competitive exams, and prepare students for the schools and colleges that shape their futures.
            </p>

            {/* Stats strip */}
            <div
              className="hl-hero-animate"
              style={{
                display: "flex",
                gap: "2.5rem",
                flexWrap: "wrap",
                animationDelay: "0.4s",
                opacity: mounted ? undefined : 0,
              }}
            >
              {[
                { value: "33+", label: "Years Teaching" },
                { value: "75%", label: "SHSAT Acceptance" },
                { value: "6", label: "Programs Offered" },
                { value: "G2–G12", label: "Grade Range" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "1.6rem",
                      fontWeight: 700,
                      color: "#e8b84b",
                      lineHeight: 1,
                    }}
                  >
                    {s.value}
                  </span>
                  <span style={{ fontSize: "0.72rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase", fontWeight: 600 }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Wave divider ── */}
        <div style={{ background: "linear-gradient(160deg, #080f24 0%, #162a58 100%)", marginBottom: "-1px" }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#faf8f4" />
          </svg>
        </div>

        {/* ── Course Grid ── */}
        <section
          ref={gridRef.ref}
          style={{
            maxWidth: "1240px",
            margin: "0 auto",
            padding: "4rem clamp(1.25rem, 5vw, 3rem) 5rem",
          }}
        >
          {/* Section header */}
          <div
            style={{
              marginBottom: "3rem",
              opacity: gridRef.inView ? 1 : 0,
              transform: gridRef.inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s ease, transform 0.6s ease",
            }}
          >
            <div className="hl-eyebrow">Our Programs</div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "#0f2044",
                margin: "0 0 0.75rem",
                lineHeight: 1.2,
              }}
            >
              Expert Instruction, Proven Results
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(15,32,68,0.55)", maxWidth: "500px", lineHeight: 1.7, margin: 0 }}>
              Each program is designed around specific grade levels and exam goals, taught by licensed, experienced teachers who know how NYC's academic landscape works.
            </p>
          </div>

          {/* Cards */}
          <div className="hl-courses-grid">
            {courses.map((course, i) => (
              <CourseCard key={course.id} course={course} index={i} />
            ))}
          </div>

          {/* Note */}
          <div
            style={{
              marginTop: "2.5rem",
              padding: "1rem 1.5rem",
              borderRadius: "10px",
              background: "rgba(200,146,42,0.06)",
              border: "1px solid rgba(200,146,42,0.15)",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <span style={{ fontSize: "1.1rem" }}>🎟</span>
            <p style={{ margin: 0, fontSize: "0.82rem", color: "rgba(15,32,68,0.65)", lineHeight: 1.6 }}>
              <strong style={{ color: "#c8922a" }}>Sibling Discount:</strong> Families with more than one enrolled student receive a 5% discount on SHSAT and SAT/PSAT programs.
            </p>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section
          ref={ctaRef.ref}
          style={{
            background: "linear-gradient(135deg, #080f24 0%, #0f2044 100%)",
            padding: "4.5rem 0",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 clamp(1.25rem, 5vw, 3rem)",
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              opacity: ctaRef.inView ? 1 : 0,
              transform: ctaRef.inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="hl-eyebrow" style={{ justifyContent: "center", color: "#e8b84b" }}>
              Get Started
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 1rem",
                lineHeight: 1.2,
              }}
            >
              Ready to Enroll?
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                maxWidth: "480px",
                margin: "0 auto 2.25rem",
                lineHeight: 1.75,
              }}
            >
              Contact us to discuss which program is right for your student, review current schedules, and get registered.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/contact" className="hl-cta-btn-primary">
                Contact Us to Enroll →
              </Link>
              <Link href="/class-schedules" className="hl-cta-btn-secondary">
                View 2026 Schedules
              </Link>
            </div>
            <p style={{ marginTop: "2rem", fontSize: "0.78rem", color: "rgba(255,255,255,0.25)" }}>
              84 Bowery, 3FL · New York, NY 10013 · 212-941-0695
            </p>
          </div>
        </section>

      </main>
    </>
  );
}