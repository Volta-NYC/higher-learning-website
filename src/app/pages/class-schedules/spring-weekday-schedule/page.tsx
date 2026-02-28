"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Shared hook
───────────────────────────────────────────── */
function useInView(threshold = 0.06) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
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
interface WeekdayClass {
  subject: string;
  subjectZh: string;
  grade: string;
  gradeZh: string;
  dayLabel: string;
  dayZh: string;
  time: string;
  regularDates: string[];
  specialLabel?: string;
  specialDates?: string[];
  afterSpecialDates?: string[];
  sessions: number;
  color: string;
}

const WEEKDAY_CLASSES: WeekdayClass[] = [
  {
    subject: "NY State Test Preparation — ELA & Math",
    subjectZh: "四年級紐約州考試加強班（英文 & 數學）",
    grade: "Grade 4",
    gradeZh: "四年級",
    dayLabel: "Wednesday",
    dayZh: "星期三",
    time: "3:45 – 5:45 pm",
    regularDates: ["1/28", "2/04", "2/11", "2/25", "3/04", "3/11", "3/18", "3/25", "4/01"],
    specialLabel: "Special Monday Classes",
    specialDates: ["4/13", "4/20", "4/27"],
    afterSpecialDates: ["5/06", "5/13", "5/20"],
    sessions: 15,
    color: "#c8922a",
  },
  {
    subject: "NY State Test Preparation — ELA & Math",
    subjectZh: "五年級紐約州考試加強班（英文 & 數學）",
    grade: "Grade 5",
    gradeZh: "五年級",
    dayLabel: "Thursday",
    dayZh: "星期四",
    time: "4:00 – 6:00 pm",
    regularDates: ["1/29", "2/05", "2/12", "2/26", "3/05", "3/12", "3/19", "3/26"],
    specialLabel: "Special Monday Classes",
    specialDates: ["4/13", "4/20", "4/27"],
    afterSpecialDates: ["4/30", "5/07", "5/14", "5/21"],
    sessions: 15,
    color: "#0f2044",
  },
  {
    subject: "NY State Test Preparation — ELA & Math",
    subjectZh: "六年級紐約州考試加強班",
    grade: "Grade 6",
    gradeZh: "六年級",
    dayLabel: "Wednesday",
    dayZh: "星期三",
    time: "4:00 – 6:00 pm",
    regularDates: ["1/28", "2/04", "2/11", "2/25", "3/04", "3/11", "3/18", "3/25", "4/01", "4/15", "4/22", "4/29", "5/06", "5/13", "5/20"],
    sessions: 15,
    color: "#162a58",
  },
  {
    subject: "NY State Test + SHSAT Preparation",
    subjectZh: "七年級州考試 + 特殊高中考試準備班",
    grade: "Grade 7",
    gradeZh: "七年級",
    dayLabel: "Thursday",
    dayZh: "星期四",
    time: "4:00 – 6:00 pm",
    regularDates: ["1/29", "2/05", "2/12", "2/26", "3/05", "3/12", "3/19", "3/26"],
    specialLabel: "Special Monday Classes",
    specialDates: ["4/13", "4/20", "4/27"],
    afterSpecialDates: ["4/30", "5/07", "5/14", "5/21"],
    sessions: 15,
    color: "#c8922a",
  },
];

const DAY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  Wednesday: { bg: "rgba(15,32,68,0.07)",    text: "#0f2044",  border: "rgba(15,32,68,0.18)"    },
  Thursday:  { bg: "rgba(200,146,42,0.1)",   text: "#c8922a",  border: "rgba(200,146,42,0.25)"  },
  Monday:    { bg: "rgba(200,146,42,0.15)",  text: "#a07020",  border: "rgba(200,146,42,0.3)"   },
};

/* ─────────────────────────────────────────────
   ClassCard
───────────────────────────────────────────── */
function WeekdayCard({ cls, index, inView }: { cls: WeekdayClass; index: number; inView: boolean }) {
  const dayCol = DAY_COLORS[cls.dayLabel];

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid rgba(15,32,68,0.07)",
        borderRadius: "20px",
        overflow: "hidden",
        boxShadow: "0 4px 20px rgba(15,32,68,0.06)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.6s ease ${index * 100}ms, transform 0.6s ease ${index * 100}ms`,
        position: "relative" as const,
      }}
    >
      {/* Top accent bar */}
      <div style={{
        height: "3px",
        background: `linear-gradient(to right, ${cls.color}, ${cls.color}88)`,
      }} />

      {/* Header */}
      <div style={{
        padding: "1.4rem 1.6rem 1.1rem",
        borderBottom: "1px solid rgba(15,32,68,0.05)",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        gap: "1rem",
        flexWrap: "wrap" as const,
      }}>
        <div style={{ flex: 1, minWidth: "200px" }}>
          <div style={{
            fontSize: "1rem",
            fontWeight: 700,
            color: "#0f2044",
            lineHeight: 1.3,
            marginBottom: "0.25rem",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}>
            {cls.subject}
          </div>
          <div style={{
            fontSize: "0.76rem",
            color: "rgba(15,32,68,0.4)",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}>
            {cls.subjectZh}
          </div>
        </div>

        <div style={{ display: "flex", gap: "0.5rem", flexShrink: 0, flexWrap: "wrap" as const, alignItems: "center" }}>
          {/* Grade badge */}
          <div style={{
            padding: "0.3rem 0.85rem",
            background: "rgba(15,32,68,0.05)",
            border: "1px solid rgba(15,32,68,0.09)",
            borderRadius: "20px",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#0f2044",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}>
            {cls.grade}
            <span style={{ color: "rgba(15,32,68,0.38)", fontWeight: 400, marginLeft: "0.3rem" }}>
              {cls.gradeZh}
            </span>
          </div>
          {/* Session count */}
          <div style={{
            padding: "0.3rem 0.85rem",
            background: `rgba(${cls.color === "#c8922a" ? "200,146,42" : "15,32,68"},0.08)`,
            border: `1px solid rgba(${cls.color === "#c8922a" ? "200,146,42" : "15,32,68"},0.18)`,
            borderRadius: "20px",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: cls.color,
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}>
            {cls.sessions} Sessions
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{
        padding: "1.25rem 1.6rem 1.5rem",
        display: "grid",
        gridTemplateColumns: "auto 1fr",
        gap: "1.25rem",
        alignItems: "start",
      }}>
        {/* Left: day + time */}
        <div style={{ minWidth: "130px" }}>
          <div style={{
            display: "inline-flex",
            flexDirection: "column" as const,
            alignItems: "center",
            padding: "0.75rem 1.1rem",
            background: dayCol.bg,
            border: `1px solid ${dayCol.border}`,
            borderRadius: "14px",
            textAlign: "center" as const,
            marginBottom: "0.6rem",
          }}>
            <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: dayCol.text, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              {cls.dayLabel}
            </div>
            <div style={{ fontSize: "0.65rem", color: "rgba(15,32,68,0.35)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              {cls.dayZh}
            </div>
          </div>
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "0.3rem",
            padding: "0.35rem 0.7rem",
            background: "rgba(200,146,42,0.07)",
            border: "1px solid rgba(200,146,42,0.18)",
            borderRadius: "10px",
            fontSize: "0.78rem",
            fontWeight: 700,
            color: "#c8922a",
            fontFamily: "'DM Sans', system-ui, sans-serif",
            whiteSpace: "nowrap" as const,
          }}>
            🕐 {cls.time}
          </div>
        </div>

        {/* Right: date groups */}
        <div style={{ display: "flex", flexDirection: "column" as const, gap: "0.875rem" }}>
          {/* Regular dates */}
          <DateGroup
            label={cls.dayLabel}
            labelZh={cls.dayZh}
            dates={cls.regularDates}
            color={DAY_COLORS[cls.dayLabel]}
          />

          {/* Special Monday classes */}
          {cls.specialDates && (
            <DateGroup
              label="Special Monday"
              labelZh="特別星期一"
              dates={cls.specialDates}
              color={DAY_COLORS["Monday"]}
              special
            />
          )}

          {/* After-special dates */}
          {cls.afterSpecialDates && (
            <DateGroup
              label={cls.dayLabel}
              labelZh={cls.dayZh}
              dates={cls.afterSpecialDates}
              color={DAY_COLORS[cls.dayLabel]}
            />
          )}
        </div>
      </div>
    </div>
  );
}

function DateGroup({
  label, labelZh, dates, color, special,
}: {
  label: string; labelZh: string; dates: string[];
  color: { bg: string; text: string; border: string };
  special?: boolean;
}) {
  return (
    <div>
      <div style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.4rem",
        fontSize: "0.65rem",
        fontWeight: 700,
        letterSpacing: "0.1em",
        textTransform: "uppercase" as const,
        color: color.text,
        marginBottom: "0.5rem",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}>
        {special && <span style={{ fontSize: "0.7rem" }}>✦</span>}
        {label}
        <span style={{ fontWeight: 400, color: "rgba(15,32,68,0.35)", fontSize: "0.62rem" }}>
          · {labelZh}
        </span>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap" as const, gap: "0.35rem" }}>
        {dates.map((d) => (
          <span
            key={d}
            style={{
              padding: "0.22rem 0.6rem",
              background: color.bg,
              border: `1px solid ${color.border}`,
              borderRadius: "7px",
              fontSize: "0.76rem",
              fontWeight: 600,
              color: color.text,
              fontFamily: "'DM Sans', system-ui, sans-serif",
              whiteSpace: "nowrap" as const,
            }}
          >
            {d}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   Page
───────────────────────────────────────────── */
export default function SpringWeekdaySchedulePage() {
  const [mounted, setMounted] = useState(false);
  const cardsRef = useInView(0.04);
  const sideRef  = useInView(0.06);
  const ctaRef   = useInView(0.06);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .hlw-page { font-family: 'DM Sans', system-ui, sans-serif; background: #faf8f4; min-height: 100vh; }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hlw-anim { animation: heroFadeUp 0.78s cubic-bezier(0.22,1,0.36,1) both; }

        .hlw-register-btn { transition: filter 0.2s, transform 0.2s; }
        .hlw-register-btn:hover { filter: brightness(1.09); transform: translateY(-2px); }

        .hlw-card-hover { transition: box-shadow 0.22s ease, transform 0.22s ease; }
        .hlw-card-hover:hover { box-shadow: 0 10px 32px rgba(15,32,68,0.11) !important; transform: translateY(-2px) !important; }

        @media (max-width: 920px) {
          .hlw-split { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .hlw-card-body { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main className="hlw-page">

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
            position: "absolute", top: "-10%", right: "8%",
            width: "520px", height: "520px",
            background: "radial-gradient(ellipse at center, rgba(200,146,42,0.08) 0%, transparent 68%)",
            pointerEvents: "none",
          }} />
          {/* bottom-left dark fade */}
          <div aria-hidden style={{
            position: "absolute", bottom: "-8%", left: "-4%",
            width: "380px", height: "380px",
            background: "radial-gradient(ellipse at center, rgba(8,15,36,0.7) 0%, transparent 70%)",
            pointerEvents: "none",
          }} />

          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)", position: "relative", zIndex: 1 }}>

            {/* Eyebrow */}
            <div className="hlw-anim" style={{ animationDelay: "0.08s", opacity: mounted ? undefined : 0 }}>
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

            {/* Title */}
            <h1
              className="hlw-anim"
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
                maxWidth: "740px",
              }}
            >
              Spring 2026{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(to right, #c8922a, #e8b84b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Weekday
              </em>{" "}
              Schedule
            </h1>

            {/* Subtitle */}
            <p
              className="hlw-anim"
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
              After-school weekday classes for Grades 4–7. NY State Test Preparation and SHSAT — 15 sessions per grade, beginning late January 2026.
            </p>

            {/* Stat pills */}
            <div
              className="hlw-anim"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.7rem",
                animationDelay: "0.38s",
                opacity: mounted ? undefined : 0,
              }}
            >
              {[
                { label: "Grades",   value: "4th – 7th"    },
                { label: "Days",     value: "Wed & Thu"     },
                { label: "Sessions", value: "15 Classes"    },
                { label: "Duration", value: "2 Hours"       },
                { label: "Subjects", value: "ELA & Math"    },
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

        {/* Discounts strip */}
        <div style={{ background: "#fff", borderBottom: "1px solid rgba(15,32,68,0.06)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "1rem clamp(1.25rem, 5vw, 3rem)", display: "flex", flexWrap: "wrap", gap: "0.75rem 2.5rem", alignItems: "center" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span>⭐</span>
              <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "#0f2044", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Early bird by <span style={{ color: "#c8922a" }}>Dec 23, 2025</span> → $60 off
              </span>
            </div>
            <div style={{ width: "1px", height: "18px", background: "rgba(15,32,68,0.12)" }} />
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
              <span>👨‍👧‍👦</span>
              <span style={{ fontSize: "0.84rem", fontWeight: 700, color: "#0f2044", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Sibling discount: <span style={{ color: "#c8922a" }}>5% off</span>
              </span>
            </div>
          </div>
        </div>

        {/* ────────────────── MAIN CONTENT ────────────────── */}
        <section style={{ maxWidth: "1240px", margin: "0 auto", padding: "3.5rem clamp(1.25rem, 5vw, 3rem) 2rem" }}>
          <div
            className="hlw-split"
            style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "3rem", alignItems: "start" }}
          >

            {/* ── LEFT: Class cards ── */}
            <div>
              <div style={{ marginBottom: "1.75rem" }}>
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                  textTransform: "uppercase" as const, color: "#c8922a", marginBottom: "0.5rem",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}>
                  <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                  Weekday Classes · 平日課程
                  <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                </div>
                <h2 style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.25rem, 2.5vw, 1.65rem)",
                  fontWeight: 700,
                  color: "#0f2044",
                  margin: 0,
                  lineHeight: 1.2,
                }}>
                  Spring 2026 Weekday Schedule
                </h2>
                <p style={{ fontSize: "0.84rem", color: "rgba(15,32,68,0.45)", margin: "0.4rem 0 0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  15 sessions per grade · January – May 2026
                </p>
              </div>

              {/* Legend */}
              <div style={{ display: "flex", gap: "0.55rem", flexWrap: "wrap", marginBottom: "1.5rem" }}>
                {[
                  { color: DAY_COLORS["Wednesday"], label: "Wednesday classes" },
                  { color: DAY_COLORS["Thursday"],  label: "Thursday classes"  },
                  { color: DAY_COLORS["Monday"],    label: "Special Monday classes" },
                ].map((item) => (
                  <div key={item.label} style={{
                    display: "flex", alignItems: "center", gap: "0.4rem",
                    padding: "0.28rem 0.75rem",
                    background: "rgba(15,32,68,0.03)",
                    border: "1px solid rgba(15,32,68,0.07)",
                    borderRadius: "20px",
                    fontSize: "0.71rem", fontWeight: 600,
                    color: "#0f2044",
                    fontFamily: "'DM Sans', system-ui, sans-serif",
                  }}>
                    <span style={{
                      display: "inline-block", width: "9px", height: "9px",
                      borderRadius: "50%",
                      background: item.color.text,
                      opacity: 0.75,
                    }} />
                    {item.label}
                  </div>
                ))}
              </div>

              {/* Cards */}
              <div
                ref={cardsRef.ref}
                style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
              >
                {WEEKDAY_CLASSES.map((cls, i) => (
                  <div key={i} className="hlw-card-hover">
                    <WeekdayCard cls={cls} index={i} inView={cardsRef.inView} />
                  </div>
                ))}
              </div>
            </div>

            {/* ── RIGHT: Sidebar ── */}
            <div
              ref={sideRef.ref}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "2rem" }}
            >

              {/* Quick info */}
              <div style={{
                background: "linear-gradient(160deg, #080f24 0%, #0f2044 70%, #162a58 100%)",
                borderRadius: "20px",
                border: "1px solid rgba(200,146,42,0.15)",
                padding: "1.75rem",
                position: "relative",
                overflow: "hidden",
                opacity: sideRef.inView ? 1 : 0,
                transform: sideRef.inView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.65s ease, transform 0.65s ease",
              }}>
                <div aria-hidden style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#e8b84b", marginBottom: "0.3rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    Program Overview
                  </div>
                  <div style={{ fontSize: "1rem", fontWeight: 700, color: "#fff", fontFamily: "'Playfair Display', Georgia, serif", marginBottom: "0.5rem" }}>
                    After-School Weekdays
                  </div>
                  <div style={{ width: "32px", height: "1.5px", background: "linear-gradient(to right, #c8922a, #e8b84b)", borderRadius: "2px", marginBottom: "1.25rem" }} />

                  {[
                    { icon: "📅", label: "Days",      value: "Wednesdays & Thursdays" },
                    { icon: "🕐", label: "Duration",  value: "2 hours per session"    },
                    { icon: "📚", label: "Sessions",  value: "15 sessions per grade"  },
                    { icon: "🎓", label: "Grades",    value: "4th – 7th Grade"        },
                    { icon: "📝", label: "Focus",     value: "ELA, Math, & SHSAT"     },
                  ].map((item) => (
                    <div key={item.label} style={{
                      display: "flex", alignItems: "center", gap: "0.75rem",
                      padding: "0.65rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.055)",
                    }}>
                      <span style={{ fontSize: "0.9rem", flexShrink: 0 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: "0.58rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(255,255,255,0.35)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                          {item.label}
                        </div>
                        <div style={{ fontSize: "0.84rem", fontWeight: 600, color: "#fff", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                          {item.value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact card */}
              <div style={{
                background: "#fff",
                borderRadius: "20px",
                border: "1px solid rgba(15,32,68,0.07)",
                boxShadow: "0 4px 24px rgba(15,32,68,0.06)",
                overflow: "hidden",
                opacity: sideRef.inView ? 1 : 0,
                transform: sideRef.inView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.65s ease 0.1s, transform 0.65s ease 0.1s",
              }}>
                <div style={{ padding: "1.1rem 1.35rem", background: "linear-gradient(135deg, rgba(200,146,42,0.07), rgba(232,184,75,0.03))", borderBottom: "1px solid rgba(200,146,42,0.1)" }}>
                  <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#c8922a", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    Location &amp; Contact
                  </div>
                </div>
                {[
                  { icon: "📍", label: "Address",  value: "84 Bowery, 3rd Floor\nNew York, NY 10013" },
                  { icon: "📞", label: "Phone",    value: "(212) 941-0695"                           },
                  { icon: "✉️", label: "Email",    value: "higherlearningny@yahoo.com"              },
                ].map((item) => (
                  <div key={item.label} style={{
                    padding: "0.9rem 1.35rem",
                    borderBottom: "1px solid rgba(15,32,68,0.05)",
                    display: "flex", alignItems: "flex-start", gap: "0.75rem",
                  }}>
                    <span style={{ fontSize: "0.95rem", flexShrink: 0, marginTop: "1px" }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "rgba(15,32,68,0.35)", marginBottom: "0.15rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{item.label}</div>
                      <div style={{ fontSize: "0.83rem", fontWeight: 600, color: "#0f2044", lineHeight: 1.5, fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "pre-line" as const }}>{item.value}</div>
                    </div>
                  </div>
                ))}
                <div style={{ padding: "1rem 1.35rem" }}>
                  <a
                    href="/pages/contact"
                    className="hlw-register-btn"
                    style={{
                      display: "flex", justifyContent: "center", alignItems: "center", gap: "0.4rem",
                      padding: "0.75rem 1.25rem",
                      background: "linear-gradient(135deg, #0f2044, #162a58)",
                      color: "#fff", fontWeight: 700, fontSize: "0.84rem",
                      borderRadius: "10px", textDecoration: "none",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}
                  >
                    Enroll / New Admission →
                  </a>
                </div>
              </div>

              {/* Test dates */}
              <div style={{
                background: "linear-gradient(135deg, rgba(200,146,42,0.07), rgba(232,184,75,0.03))",
                border: "1px solid rgba(200,146,42,0.18)",
                borderRadius: "16px",
                padding: "1.25rem 1.4rem",
                opacity: sideRef.inView ? 1 : 0,
                transform: sideRef.inView ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
              }}>
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#c8922a", marginBottom: "0.75rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
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
                  Our weekday program includes special Monday sessions in April aligned to test windows.
                </p>
              </div>

              {/* Special Mondays callout */}
              <div style={{
                background: "#fff",
                border: "1px solid rgba(15,32,68,0.07)",
                borderRadius: "16px",
                padding: "1.25rem 1.4rem",
                borderLeft: "3px solid #c8922a",
                opacity: sideRef.inView ? 1 : 0,
                transform: sideRef.inView ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 0.6s ease 0.28s, transform 0.6s ease 0.28s",
              }}>
                <div style={{ fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" as const, color: "#c8922a", marginBottom: "0.5rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  ✦ Special April Monday Sessions
                </div>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                  {["Apr 13", "Apr 20", "Apr 27"].map((d) => (
                    <span key={d} style={{
                      padding: "0.25rem 0.65rem",
                      background: "rgba(200,146,42,0.1)",
                      border: "1px solid rgba(200,146,42,0.25)",
                      borderRadius: "8px",
                      fontSize: "0.78rem",
                      fontWeight: 700,
                      color: "#c8922a",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}>{d}</span>
                  ))}
                </div>
                <p style={{ fontSize: "0.78rem", color: "rgba(15,32,68,0.5)", margin: 0, lineHeight: 1.6, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  Grades 4, 5, and 7 hold special Monday sessions in place of their regular weekday during the April test-prep window.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ────────────────── CHINESE SECTION ────────────────── */}
        <section style={{ background: "#fff", borderTop: "1px solid rgba(15,32,68,0.06)", padding: "3rem clamp(1.25rem, 5vw, 3rem)" }}>
          <div style={{ maxWidth: "1240px", margin: "0 auto" }}>
            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase" as const, color: "#c8922a", marginBottom: "0.5rem",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                中文資訊
                <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.2rem, 2vw, 1.5rem)", fontWeight: 700, color: "#0f2044", margin: 0 }}>
                春季班 · 平日課程時間表
              </h2>
              <p style={{ fontSize: "0.85rem", color: "rgba(15,32,68,0.45)", margin: "0.3rem 0 0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                星期一至星期五課程 · 共15堂課
              </p>
            </div>

            <div style={{ overflowX: "auto", borderRadius: "16px", border: "1px solid rgba(15,32,68,0.07)", overflow: "hidden", boxShadow: "0 2px 16px rgba(15,32,68,0.05)" }}>
              <table style={{ width: "100%", borderCollapse: "collapse" as const }}>
                <thead>
                  <tr>
                    {["科目", "年級", "上課日", "時間", "堂數"].map((h) => (
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
                        whiteSpace: "nowrap" as const,
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {WEEKDAY_CLASSES.map((cls, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? "#fff" : "rgba(15,32,68,0.015)" }}>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.84rem", color: "#0f2044", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif", fontWeight: 600 }}>
                        {cls.subject}
                        <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(15,32,68,0.38)", fontWeight: 400, marginTop: "2px" }}>{cls.subjectZh}</span>
                      </td>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.84rem", color: "#0f2044", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
                        {cls.grade}
                        <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(15,32,68,0.38)", marginTop: "2px" }}>{cls.gradeZh}</span>
                      </td>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.84rem", fontWeight: 700, color: "#0f2044", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
                        {cls.dayLabel}
                        <span style={{ display: "block", fontSize: "0.72rem", color: "rgba(15,32,68,0.38)", fontWeight: 400, marginTop: "2px" }}>{cls.dayZh}</span>
                      </td>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.84rem", fontWeight: 700, color: "#c8922a", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif", whiteSpace: "nowrap" as const }}>
                        {cls.time}
                      </td>
                      <td style={{ padding: "0.875rem 1.2rem", fontSize: "0.82rem", color: "#0f2044", borderBottom: "1px solid rgba(15,32,68,0.05)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                        {cls.sessions}堂
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div style={{ marginTop: "1.25rem", display: "flex", flexDirection: "column" as const, gap: "0.35rem" }}>
              {[
                "* 提早在2025年12月23日前報名可享$60折扣。",
                "* 同一家庭兄弟姐妹可享九五折 (5% off)。",
                "* 紐約州英文考試：2026年4月14日–4月24日 ｜ 數學考試：4月28日–5月8日",
                "* 四年級、五年級及七年級同學：4月份有三堂特別星期一課（4/13, 4/20, 4/27）。",
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
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.55rem", fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" as const, color: "#e8b84b", marginBottom: "1rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              Enroll for Spring 2026
              <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
            </div>

            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)",
              fontWeight: 800, color: "#fff",
              margin: "0 0 0.85rem", lineHeight: 1.15,
            }}>
              Give Your Child the Edge They Need
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.78, margin: "0 0 2rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              Limited spots available. Register by December 23, 2025 to save $60 on tuition.
            </p>

            <div style={{ display: "flex", gap: "0.875rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="/contact"
                className="hlw-register-btn"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9rem 2rem",
                  background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                  color: "#0f2044", fontWeight: 700, fontSize: "0.9rem",
                  borderRadius: "12px", textDecoration: "none",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                New Admission →
              </a>
              <a
                href="tel:+12129410695"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.9rem 1.75rem",
                  background: "rgba(255,255,255,0.065)",
                  color: "#fff", fontWeight: 600, fontSize: "0.9rem",
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