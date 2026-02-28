"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Shared hook: fade-up on scroll into view
───────────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setInView(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const SESSION_DATES = [
  { label: "Jan 24", month: "Jan" },
  { label: "Jan 31", month: "Jan" },
  { label: "Feb 7",  month: "Feb" },
  { label: "Feb 28", month: "Feb" },
  { label: "Mar 7",  month: "Mar" },
  { label: "Mar 14", month: "Mar" },
  { label: "Mar 21", month: "Mar" },
  { label: "Mar 28", month: "Mar" },
  { label: "Apr 11", month: "Apr" },
  { label: "Apr 18", month: "Apr" },
  { label: "Apr 25", month: "Apr" },
  { label: "May 2",  month: "May" },
  { label: "May 9",  month: "May" },
  { label: "May 16", month: "May" },
];

const MONTH_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  Jan: { bg: "rgba(200,146,42,0.12)",  border: "rgba(200,146,42,0.3)",  text: "#c8922a" },
  Feb: { bg: "rgba(15,32,68,0.08)",    border: "rgba(15,32,68,0.2)",    text: "#0f2044" },
  Mar: { bg: "rgba(200,146,42,0.08)",  border: "rgba(200,146,42,0.2)",  text: "#a87828" },
  Apr: { bg: "rgba(15,32,68,0.06)",    border: "rgba(15,32,68,0.15)",   text: "#162a58" },
  May: { bg: "rgba(200,146,42,0.15)",  border: "rgba(200,146,42,0.35)", text: "#c8922a" },
};

interface ClassRow {
  subject: string;
  subjectZh: string;
  grade: string;
  gradeZh: string;
  time: string;
  sessions: string;
  highlight?: boolean;
}

const SATURDAY_CLASSES: ClassRow[] = [
  {
    subject: "English Language Arts & Math",
    subjectZh: "英文和數學",
    grade: "Grade 2",
    gradeZh: "二年級",
    time: "10:00 – 12:30 pm",
    sessions: "14 sessions · Jan 24 – May 16",
    highlight: true,
  },
  {
    subject: "NY State Test Preparation",
    subjectZh: "州考試準備班",
    grade: "Grade 3",
    gradeZh: "三年級",
    time: "10:00 – 12:30 pm",
    sessions: "14 sessions",
    highlight: true,
  },
  {
    subject: "NY State Test Preparation",
    subjectZh: "州考試準備班",
    grade: "Grade 3",
    gradeZh: "三年級",
    time: "1:30 – 4:00 pm",
    sessions: "14 sessions",
  },
  {
    subject: "NY State Test Preparation",
    subjectZh: "州考試準備班",
    grade: "Grade 4",
    gradeZh: "四年級",
    time: "10:00 – 12:30 pm",
    sessions: "14 sessions",
    highlight: true,
  },
  {
    subject: "NY State Test Preparation",
    subjectZh: "州考試準備班",
    grade: "Grade 4",
    gradeZh: "四年級",
    time: "1:30 – 4:00 pm",
    sessions: "14 sessions",
  },
  {
    subject: "English Writing & Grammar",
    subjectZh: "英文寫作和文法",
    grade: "Grade 5",
    gradeZh: "五年級",
    time: "9:30 – 11:30 am",
    sessions: "14 sessions",
  },
  {
    subject: "NY State Test Prep — English & Math",
    subjectZh: "英文和數學",
    grade: "Grade 5",
    gradeZh: "五年級",
    time: "9:30 – 12:30 pm",
    sessions: "14 sessions",
  },
  {
    subject: "NY State Test Preparation",
    subjectZh: "六年級州考試準備班",
    grade: "Grade 6",
    gradeZh: "六年級",
    time: "10:00 – 12:30 pm",
    sessions: "14 sessions",
  },
  {
    subject: "NY State Test Preparation",
    subjectZh: "六年級州考試準備班",
    grade: "Grade 6",
    gradeZh: "六年級",
    time: "1:30 – 4:00 pm",
    sessions: "14 sessions",
  },
  {
    subject: "NY State Test Prep & SHSAT — ELA & Math",
    subjectZh: "英文和數學 / 特殊高中考試",
    grade: "Grade 7",
    gradeZh: "七年級",
    time: "1:30 – 4:00 pm",
    sessions: "14 sessions · Jan 24 – May 16",
    highlight: true,
  },
];

const GRADE_GROUPS = [
  { grades: "Grades 2–4", label: "Elementary", color: "#c8922a" },
  { grades: "Grades 5–6", label: "Upper Elem.", color: "#0f2044" },
  { grades: "Grade 7",    label: "Middle / SHSAT", color: "#162a58" },
];

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
function Eyebrow({ children, right }: { children: React.ReactNode; right?: boolean }) {
  return (
    <div style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "0.55rem",
      fontSize: "0.62rem",
      fontWeight: 700,
      letterSpacing: "0.18em",
      textTransform: "uppercase" as const,
      color: "#e8b84b",
      marginBottom: "0.5rem",
      fontFamily: "'DM Sans', system-ui, sans-serif",
    }}>
      {!right && <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />}
      {children}
      <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
    </div>
  );
}

function SectionHeading({ children, light }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2 style={{
      fontFamily: "'Playfair Display', Georgia, serif",
      fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
      fontWeight: 700,
      color: light ? "#fff" : "#0f2044",
      margin: 0,
      lineHeight: 1.2,
    }}>
      {children}
    </h2>
  );
}

function ClassCard({ row, index, inView }: { row: ClassRow; index: number; inView: boolean }) {
  return (
    <div
      style={{
        background: row.highlight
          ? "linear-gradient(135deg, rgba(200,146,42,0.07), rgba(232,184,75,0.03))"
          : "#fff",
        border: row.highlight
          ? "1px solid rgba(200,146,42,0.22)"
          : "1px solid rgba(15,32,68,0.07)",
        borderRadius: "16px",
        padding: "1.25rem 1.4rem",
        display: "grid",
        gridTemplateColumns: "1fr auto",
        gap: "0.75rem 1.25rem",
        alignItems: "start",
        boxShadow: row.highlight
          ? "0 4px 20px rgba(200,146,42,0.08)"
          : "0 2px 12px rgba(15,32,68,0.04)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.55s ease ${index * 55}ms, transform 0.55s ease ${index * 55}ms`,
        position: "relative" as const,
        overflow: "hidden",
      }}
    >
      {row.highlight && (
        <div style={{
          position: "absolute",
          top: 0, left: 0,
          width: "3px",
          height: "100%",
          background: "linear-gradient(to bottom, #c8922a, #e8b84b)",
          borderRadius: "16px 0 0 16px",
        }} />
      )}
      <div style={{ paddingLeft: row.highlight ? "0.4rem" : 0 }}>
        <div style={{
          fontSize: "0.92rem",
          fontWeight: 700,
          color: "#0f2044",
          lineHeight: 1.3,
          marginBottom: "0.25rem",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}>
          {row.subject}
        </div>
        <div style={{
          fontSize: "0.75rem",
          color: "rgba(15,32,68,0.4)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}>
          {row.subjectZh}
        </div>
      </div>

      <div style={{ textAlign: "right" as const, flexShrink: 0 }}>
        <div style={{
          display: "inline-block",
          padding: "0.2rem 0.65rem",
          background: "rgba(15,32,68,0.06)",
          borderRadius: "8px",
          fontSize: "0.75rem",
          fontWeight: 700,
          color: "#0f2044",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          whiteSpace: "nowrap" as const,
          marginBottom: "0.3rem",
        }}>
          {row.grade}
        </div>
        <div style={{
          fontSize: "0.65rem",
          color: "rgba(15,32,68,0.35)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          display: "block",
        }}>
          {row.gradeZh}
        </div>
      </div>

      <div style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        gridColumn: "1 / -1",
        paddingLeft: row.highlight ? "0.4rem" : 0,
        flexWrap: "wrap" as const,
      }}>
        <span style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.3rem",
          padding: "0.3rem 0.7rem",
          background: row.highlight
            ? "rgba(200,146,42,0.12)"
            : "rgba(15,32,68,0.04)",
          border: `1px solid ${row.highlight ? "rgba(200,146,42,0.25)" : "rgba(15,32,68,0.08)"}`,
          borderRadius: "8px",
          fontSize: "0.78rem",
          fontWeight: 700,
          color: row.highlight ? "#c8922a" : "#0f2044",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          whiteSpace: "nowrap" as const,
        }}>
          🕐 {row.time}
        </span>
        <span style={{
          fontSize: "0.73rem",
          color: "rgba(15,32,68,0.45)",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}>
          {row.sessions}
        </span>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function SpringWeekendSchedulePage() {
  const [mounted, setMounted] = useState(false);
  const cardsRef   = useInView(0.04);
  const infoRef    = useInView(0.06);
  const calRef     = useInView(0.06);
  const testRef    = useInView(0.06);
  const ctaRef     = useInView(0.06);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .hl-page { font-family: 'DM Sans', system-ui, sans-serif; background: #faf8f4; min-height: 100vh; }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hl-anim { animation: heroFadeUp 0.78s cubic-bezier(0.22,1,0.36,1) both; }

        .hl-eyebrow-dark {
          display: inline-flex; align-items: center; gap: 0.55rem;
          font-size: 0.62rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: #c8922a;
          font-family: 'DM Sans', system-ui, sans-serif;
          margin-bottom: 0.5rem;
        }
        .hl-eyebrow-dark::before, .hl-eyebrow-dark::after {
          content: ''; display: block; width: 18px; height: 1px;
          background: #c8922a; opacity: 0.6;
        }

        .hl-class-card:hover {
          box-shadow: 0 8px 28px rgba(15,32,68,0.1) !important;
          transform: translateY(-2px) !important;
          transition: box-shadow 0.22s ease, transform 0.22s ease !important;
        }

        .hl-session-dot { transition: transform 0.2s, box-shadow 0.2s; }
        .hl-session-dot:hover { transform: translateY(-3px) scale(1.05) !important; }

        .hl-register-btn { transition: filter 0.2s, transform 0.2s; }
        .hl-register-btn:hover { filter: brightness(1.09); transform: translateY(-2px); }

        .hl-tab { cursor: pointer; transition: all 0.2s ease; }
        .hl-tab:hover { background: rgba(200,146,42,0.08) !important; }

        @media (max-width: 900px) {
          .hl-split { grid-template-columns: 1fr !important; }
          .hl-stat-row { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 580px) {
          .hl-sessions-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .hl-stat-row { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      <main className="hl-page">

        {/* ────────────────── HERO ────────────────── */}
        <section style={{
          background: "linear-gradient(160deg, #080f24 0%, #0f2044 60%, #162a58 100%)",
          padding: "5.5rem 0 5rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* grid texture */}
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            pointerEvents: "none",
          }} />
          {/* glow */}
          <div aria-hidden style={{
            position: "absolute", top: "-15%", right: "10%",
            width: "560px", height: "560px",
            background: "radial-gradient(ellipse at center, rgba(200,146,42,0.08) 0%, transparent 68%)",
            pointerEvents: "none",
          }} />
          <div aria-hidden style={{
            position: "absolute", bottom: "-10%", left: "-5%",
            width: "400px", height: "400px",
            background: "radial-gradient(ellipse at center, rgba(22,42,88,0.6) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)", position: "relative", zIndex: 1 }}>
            <div className="hl-anim" style={{ animationDelay: "0.08s", opacity: mounted ? undefined : 0 }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.55rem",
                fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#e8b84b", marginBottom: "1rem",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                2026 Class Schedules · Higher Learning Tutoring Center
                <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              </div>
            </div>

            <h1
              className="hl-anim"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.3rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                margin: "0 0 1.35rem",
                animationDelay: "0.18s",
                opacity: mounted ? undefined : 0,
                maxWidth: "720px",
              }}
            >
              Spring 2026{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(to right, #c8922a, #e8b84b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Weekend
              </em>{" "}
              Schedule
            </h1>

            <p
              className="hl-anim"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.52)",
                lineHeight: 1.78,
                maxWidth: "560px",
                margin: "0 0 2.25rem",
                animationDelay: "0.28s",
                opacity: mounted ? undefined : 0,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              Saturday classes for Grades 2–7. ELA, Math, and NY State Test Preparation — 14 sessions across the spring semester, starting January 24, 2026.
            </p>

            {/* Stat pills */}
            <div
              className="hl-anim"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.7rem",
                animationDelay: "0.38s",
                opacity: mounted ? undefined : 0,
              }}
            >
              {[
                { label: "Grades",   value: "2nd – 7th" },
                { label: "Day",      value: "Saturday" },
                { label: "Sessions", value: "14 Classes" },
                { label: "Start",    value: "Jan 24, 2026" },
                { label: "Subjects", value: "ELA & Math" },
              ].map((s) => (
                <div key={s.label} style={{
                  padding: "0.55rem 1rem",
                  background: "rgba(255,255,255,0.055)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "10px",
                  backdropFilter: "blur(4px)",
                }}>
                  <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8b84b", marginBottom: "0.12rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{s.label}</div>
                  <div style={{ fontSize: "0.86rem", fontWeight: 700, color: "#fff", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave divider */}
        <div style={{ background: "linear-gradient(160deg, #080f24 0%, #162a58 100%)", marginBottom: "-1px" }}>
          <svg viewBox="0 0 1440 52" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0,52 C360,0 1080,0 1440,52 L1440,52 L0,52 Z" fill="#faf8f4" />
          </svg>
        </div>

        {/* ────────────────── DISCOUNTS BANNER ────────────────── */}
        <div style={{ background: "#fff", borderBottom: "1px solid rgba(15,32,68,0.06)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "1rem clamp(1.25rem, 5vw, 3rem)", display: "flex", flexWrap: "wrap", gap: "0.75rem 2.5rem", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "1rem" }}>⭐</span>
              <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "#0f2044", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Early bird by <span style={{ color: "#c8922a" }}>Dec 23, 2025</span> → $60 off
              </span>
            </div>
            <div style={{ width: "1px", height: "18px", background: "rgba(15,32,68,0.12)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span style={{ fontSize: "1rem" }}>👨‍👧‍👦</span>
              <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "#0f2044", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Sibling discount: <span style={{ color: "#c8922a" }}>5% off</span>
              </span>
            </div>
          </div>
        </div>

        {/* ────────────────── MAIN CONTENT ────────────────── */}
        <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "3.5rem clamp(1.25rem, 5vw, 3rem) 2rem" }}>
          <div
            className="hl-split"
            style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "3rem", alignItems: "start" }}
          >

            {/* ── LEFT: Class Cards ── */}
            <div>
              <div style={{ marginBottom: "1.75rem" }}>
                <div className="hl-eyebrow-dark">Saturday Classes · 星期六課程</div>
                <SectionHeading>Spring 2026 Saturday Schedule</SectionHeading>
                <p style={{ fontSize: "0.84rem", color: "rgba(15,32,68,0.45)", margin: "0.4rem 0 0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  All sessions are 14 weeks · January 24 – May 16, 2026
                </p>
              </div>

              {/* Grade group labels */}
              <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                {GRADE_GROUPS.map((g) => (
                  <div key={g.label} style={{
                    padding: "0.3rem 0.85rem",
                    background: "rgba(15,32,68,0.04)",
                    border: "1px solid rgba(15,32,68,0.08)",
                    borderRadius: "20px",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "#0f2044",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                  }}>
                    <span style={{ color: g.color, marginRight: "0.3rem" }}>●</span>
                    {g.grades} — {g.label}
                  </div>
                ))}
              </div>

              {/* Cards */}
              <div
                ref={cardsRef.ref}
                style={{ display: "flex", flexDirection: "column", gap: "0.875rem" }}
              >
                {SATURDAY_CLASSES.map((row, i) => (
                  <div key={i} className="hl-class-card">
                    <ClassCard row={row} index={i} inView={cardsRef.inView} />
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "2rem" }}>

              {/* Session Calendar card */}
              <div
                ref={calRef.ref}
                style={{
                  background: "linear-gradient(160deg, #080f24 0%, #0f2044 70%, #162a58 100%)",
                  borderRadius: "20px",
                  border: "1px solid rgba(200,146,42,0.15)",
                  padding: "1.75rem",
                  position: "relative",
                  overflow: "hidden",
                  opacity: calRef.inView ? 1 : 0,
                  transform: calRef.inView ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.65s ease, transform 0.65s ease",
                }}
              >
                <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: "1.25rem" }}>
                    <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8b84b", marginBottom: "0.3rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                      Session Calendar
                    </div>
                    <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', Georgia, serif" }}>
                      14 Saturdays · Jan – May 2026
                    </div>
                    <div style={{ width: "32px", height: "1.5px", background: "linear-gradient(to right, #c8922a, #e8b84b)", borderRadius: "2px", marginTop: "0.5rem" }} />
                  </div>

                  <div
                    className="hl-sessions-grid"
                    style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "0.45rem" }}
                  >
                    {SESSION_DATES.map((s, i) => {
                      const c = MONTH_COLORS[s.month];
                      return (
                        <div
                          key={i}
                          className="hl-session-dot"
                          style={{
                            background: c.bg,
                            border: `1px solid ${c.border}`,
                            borderRadius: "10px",
                            padding: "0.5rem 0.3rem",
                            textAlign: "center",
                            cursor: "default",
                          }}
                        >
                          <div style={{ fontSize: "0.52rem", fontWeight: 700, letterSpacing: "0.05em", textTransform: "uppercase", color: c.text, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                            {s.month}
                          </div>
                          <div style={{ fontSize: "0.92rem", fontWeight: 800, color: "#fff", lineHeight: 1.1, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                            {s.label.split(" ")[1]}
                          </div>
                          <div style={{ fontSize: "0.48rem", color: "rgba(255,255,255,0.28)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>Sat</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* No class note */}
                  <div style={{
                    marginTop: "1rem",
                    padding: "0.65rem 0.9rem",
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.06)",
                    borderRadius: "10px",
                    fontSize: "0.72rem",
                    color: "rgba(255,255,255,0.4)",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                    lineHeight: 1.6,
                  }}>
                    <span style={{ color: "rgba(200,146,42,0.7)", marginRight: "0.3rem" }}>*</span>
                    No class Feb 14 & 21 (winter recess) or Apr 4 (spring recess).
                  </div>
                </div>
              </div>

              {/* Quick info card */}
              <div
                ref={infoRef.ref}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  border: "1px solid rgba(15,32,68,0.07)",
                  boxShadow: "0 4px 24px rgba(15,32,68,0.07)",
                  overflow: "hidden",
                  opacity: infoRef.inView ? 1 : 0,
                  transform: infoRef.inView ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
                }}
              >
                <div style={{ padding: "1.1rem 1.35rem", background: "linear-gradient(135deg, rgba(200,146,42,0.07), rgba(232,184,75,0.03))", borderBottom: "1px solid rgba(200,146,42,0.1)" }}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#c8922a", fontFamily: "'DM Sans', system-ui, sans-serif" }}>Location &amp; Contact</div>
                </div>
                {[
                  { icon: "📍", label: "Address",  value: "84 Bowery, 3rd Floor\nNew York, NY 10013" },
                  { icon: "📞", label: "Phone",    value: "(212) 941-0695" },
                  { icon: "✉️", label: "Email",    value: "higherlearningny@yahoo.com" },
                ].map((item) => (
                  <div key={item.label} style={{
                    padding: "0.9rem 1.35rem",
                    borderBottom: "1px solid rgba(15,32,68,0.05)",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "0.75rem",
                  }}>
                    <span style={{ fontSize: "0.95rem", flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(15,32,68,0.35)", marginBottom: "0.15rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{item.label}</div>
                      <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "#0f2044", lineHeight: 1.5, fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "pre-line" as const }}>{item.value}</div>
                    </div>
                  </div>
                ))}
                <div style={{ padding: "1rem 1.35rem" }}>
                  <a
                    href="/pages/contact"
                    className="hl-register-btn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "0.4rem",
                      padding: "0.75rem 1.25rem",
                      background: "linear-gradient(135deg, #0f2044, #162a58)",
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "0.84rem",
                      borderRadius: "10px",
                      textDecoration: "none",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}
                  >
                    Enroll / New Admission →
                  </a>
                </div>
              </div>

              {/* Test dates card */}
              <div
                ref={testRef.ref}
                style={{
                  background: "linear-gradient(135deg, rgba(200,146,42,0.07), rgba(232,184,75,0.03))",
                  border: "1px solid rgba(200,146,42,0.18)",
                  borderRadius: "16px",
                  padding: "1.25rem 1.4rem",
                  opacity: testRef.inView ? 1 : 0,
                  transform: testRef.inView ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease 0.18s, transform 0.6s ease 0.18s",
                }}
              >
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.75rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  📝 NY State Test Dates 2026
                </div>
                {[
                  { subject: "ELA Test",  dates: "Apr 14 – Apr 24, 2026" },
                  { subject: "Math Test", dates: "Apr 28 – May 8, 2026"  },
                ].map((t) => (
                  <div key={t.subject} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "0.5rem 0", borderBottom: "1px solid rgba(200,146,42,0.1)" }}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0f2044", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{t.subject}</span>
                    <span style={{ fontSize: "0.76rem", color: "#c8922a", fontWeight: 600, fontFamily: "'DM Sans', system-ui, sans-serif" }}>{t.dates}</span>
                  </div>
                ))}
                <p style={{ fontSize: "0.75rem", color: "rgba(15,32,68,0.4)", margin: "0.65rem 0 0", lineHeight: 1.6, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  Our Spring program is carefully aligned to conclude right before ELA and Math testing windows.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────── CHINESE SECTION ────────────────── */}
        <section style={{ background: "#fff", borderTop: "1px solid rgba(15,32,68,0.06)", padding: "3rem clamp(1.25rem, 5vw, 3rem)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div className="hl-eyebrow-dark" style={{ color: "#c8922a" }}>中文資訊</div>
              <SectionHeading>春季班 · 星期六課程表</SectionHeading>
              <p style={{ fontSize: "0.85rem", color: "rgba(15,32,68,0.45)", margin: "0.3rem 0 0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                2026年1月24日 開始 · 共14堂課
              </p>
            </div>

            <div style={{ overflowX: "auto", borderRadius: "16px", border: "1px solid rgba(15,32,68,0.07)", overflow: "hidden", boxShadow: "0 2px 16px rgba(15,32,68,0.05)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
                <thead>
                  <tr>
                    {["科目", "年級", "時間", "堂數"].map((h) => (
                      <th key={h} style={{
                        background: "linear-gradient(135deg, #080f24, #0f2044)",
                        color: "rgba(255,255,255,0.82)",
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase" as const,
                        padding: "0.9rem 1.2rem",
                        textAlign: "left" as const,
                        fontFamily: "'DM Sans', system-ui, sans-serif",
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {SATURDAY_CLASSES.map((row, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "rgba(15,32,68,0.015)" }}>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.84rem", color: "#0f2044", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600 }}>
                        {row.subject}
                        <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(15,32,68,0.38)", fontWeight: 400, marginTop: "2px" }}>{row.subjectZh}</span>
                      </td>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.84rem", color: "#0f2044", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
                        {row.grade}
                        <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(15,32,68,0.38)", marginTop: "2px" }}>{row.gradeZh}</span>
                      </td>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.84rem", fontWeight: 700, color: "#c8922a", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
                        {row.time}
                      </td>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.82rem", color: "#0f2044", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                        14堂
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column", gap: "0.35rem" }}>
              {[
                "* 提早在2025年12月23日前報名可享$60折扣。",
                "* 同一家庭兄弟姐妹可享九五折 (5% off)。",
                "* 紐約州英文考試：2026年4月14日–4月24日 ｜ 數學考試：4月28日–5月8日",
              ].map((note, i) => (
                <p key={i} style={{ fontSize: "0.82rem", color: "rgba(15,32,68,0.5)", margin: 0, lineHeight: 1.65, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  {note}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ────────────────── CTA ────────────────── */}
        <section
          ref={ctaRef.ref}
          style={{
            background: "linear-gradient(135deg, #080f24 0%, #0f2044 60%, #162a58 100%)",
            padding: "4.5rem clamp(1.25rem, 5vw, 3rem)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            opacity: ctaRef.inView ? 1 : 0,
            transform: ctaRef.inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div aria-hidden style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "600px", height: "300px", background: "radial-gradient(ellipse at center, rgba(200,146,42,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", margin: "0 auto" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8b84b", marginBottom: "1rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              Enroll for Spring 2026
              <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
              fontWeight: 800,
              color: "#fff",
              margin: "0 0 0.85rem",
              lineHeight: 1.15,
            }}>
              Secure Your Child's Spot Today
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.78, margin: "0 0 2rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Classes fill quickly. Register early to lock in the $60 discount — available until December 23, 2025.
            </p>

            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/contact"
                className="hl-register-btn"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 2rem",
                  background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                  color: "#0f2044",
                  fontWeight: 700,
                  fontSize: "0.9rem",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                New Admission →
              </a>
              <a
                href="tel:+12129410695"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.9rem 1.75rem",
                  background: "rgba(255,255,255,0.065)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: "0.9rem",
                  borderRadius: "12px",
                  border: "1px solid rgba(255,255,255,0.14)",
                  textDecoration: "none",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                  transition: "background 0.2s",
                }}
              >
                📞 212-941-0695
              </a>
            </div>
            <p style={{ margin: "1.75rem 0 0", fontSize: "0.78rem", color: "rgba(255,255,255,0.28)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              84 Bowery, 3rd Floor · New York, NY 10013 · higherlearningny@yahoo.com
            </p>
          </div>
        </section>

      </main>
    </>
  );
}