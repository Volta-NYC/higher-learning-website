"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.08) {
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

const SESSION_DATES = [
  { date: "Jan 24", day: "Sat", month: "Jan" },
  { date: "Jan 31", day: "Sat", month: "Jan" },
  { date: "Feb 7",  day: "Sat", month: "Feb" },
  { date: "Feb 28", day: "Sat", month: "Feb" },
  { date: "Mar 7",  day: "Sat", month: "Mar" },
  { date: "Mar 14", day: "Sat", month: "Mar" },
  { date: "Mar 21", day: "Sat", month: "Mar" },
  { date: "Mar 28", day: "Sat", month: "Mar" },
  { date: "Apr 11", day: "Sat", month: "Apr" },
  { date: "Apr 18", day: "Sat", month: "Apr" },
  { date: "Apr 25", day: "Sat", month: "Apr" },
  { date: "May 2",  day: "Sat", month: "May" },
  { date: "May 9",  day: "Sat", month: "May" },
  { date: "May 16", day: "Sat", month: "May" },
];

const MONTH_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  Jan: { bg: "rgba(200,146,42,0.12)", border: "rgba(200,146,42,0.3)", text: "#c8922a" },
  Feb: { bg: "rgba(15,32,68,0.08)",   border: "rgba(15,32,68,0.2)",   text: "#0f2044" },
  Mar: { bg: "rgba(200,146,42,0.08)", border: "rgba(200,146,42,0.2)", text: "#a87828" },
  Apr: { bg: "rgba(15,32,68,0.06)",   border: "rgba(15,32,68,0.15)",  text: "#162a58" },
  May: { bg: "rgba(200,146,42,0.15)", border: "rgba(200,146,42,0.35)", text: "#c8922a" },
};

const HIGHLIGHTS = [
  { icon: "📖", label: "Focus Areas", value: "SAT Reading & Writing, Math" },
  { icon: "👥", label: "Class Size",  value: "Small group setting" },
  { icon: "📊", label: "Testing",     value: "Diagnostic + monthly practice tests" },
  { icon: "💬", label: "Support",     value: "Personalized feedback every session" },
  { icon: "🎓", label: "Instructor",  value: "Experienced, dedicated tutor" },
];

function HighlightCard({ icon, label, value, delay, inView }: {
  icon: string; label: string; value: string; delay: number; inView: boolean;
}) {
  return (
    <div style={{
      background: "#fff",
      borderRadius: "14px",
      border: "1px solid rgba(15,32,68,0.07)",
      boxShadow: "0 2px 12px rgba(15,32,68,0.05)",
      padding: "1.25rem 1.4rem",
      display: "flex",
      alignItems: "flex-start",
      gap: "0.85rem",
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(16px)",
      transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
    }}>
      <div style={{
        fontSize: "1.3rem",
        width: "40px",
        height: "40px",
        borderRadius: "10px",
        background: "linear-gradient(135deg, rgba(200,146,42,0.12), rgba(232,184,75,0.07))",
        border: "1px solid rgba(200,146,42,0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(15,32,68,0.4)", marginBottom: "0.2rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{label}</div>
        <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#0f2044", lineHeight: 1.4, fontFamily: "'DM Sans', system-ui, sans-serif" }}>{value}</div>
      </div>
    </div>
  );
}

export default function PSATSATPage() {
  const [mounted, setMounted] = useState(false);
  const highlightRef = useInView(0.06);
  const scheduleRef  = useInView(0.06);
  const ctaRef       = useInView(0.06);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .hl-sat-page { font-family: 'DM Sans', system-ui, sans-serif; background: #faf8f4; min-height: 100vh; }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hl-animate { animation: heroFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) both; }

        .hl-eyebrow {
          display: inline-flex; align-items: center; gap: 0.6rem;
          font-size: 0.65rem; font-weight: 700; letter-spacing: 0.18em;
          text-transform: uppercase; color: #e8b84b;
        }
        .hl-eyebrow::before, .hl-eyebrow::after {
          content: ''; display: block; width: 22px; height: 1px;
          background: #c8922a; opacity: 0.6;
        }

        .hl-session-dot:hover { transform: translateY(-3px) scale(1.04); box-shadow: 0 6px 20px rgba(15,32,68,0.12) !important; }

        .hl-register-btn:hover { filter: brightness(1.08); transform: translateY(-1px); }

        .hl-info-table th {
          background: linear-gradient(135deg, #080f24, #0f2044);
          color: rgba(255,255,255,0.85);
          font-size: 0.7rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 0.9rem 1.25rem;
          text-align: left;
          font-family: 'DM Sans', system-ui, sans-serif;
        }
        .hl-info-table td {
          padding: 0.9rem 1.25rem;
          font-size: 0.875rem;
          color: #0f2044;
          border-bottom: 1px solid rgba(15,32,68,0.06);
          vertical-align: top;
          font-family: 'DM Sans', system-ui, sans-serif;
          line-height: 1.6;
        }
        .hl-info-table tr:last-child td { border-bottom: none; }
        .hl-info-table tr:nth-child(even) td { background: rgba(15,32,68,0.015); }
        .hl-info-table .label-cell {
          font-weight: 700;
          color: #0f2044;
          white-space: nowrap;
          width: 160px;
        }
        .hl-info-table .zh { display: block; font-size: 0.75rem; color: rgba(15,32,68,0.4); font-weight: 400; margin-top: 2px; }

        @media (max-width: 860px) {
          .hl-sat-split { grid-template-columns: 1fr !important; }
          .hl-highlights-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 540px) {
          .hl-sessions-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>

      <main className="hl-sat-page">

        {/* ── Hero ──────────────────────────────────────────────────────────── */}
        <section style={{
          background: "linear-gradient(160deg, #080f24 0%, #0f2044 60%, #162a58 100%)",
          padding: "5rem 0 4.5rem",
          position: "relative",
          overflow: "hidden",
        }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse at center, rgba(200,146,42,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)", position: "relative", zIndex: 1 }}>
            <div className="hl-animate" style={{ animationDelay: "0.1s", opacity: mounted ? undefined : 0 }}>
              <div className="hl-eyebrow" style={{ marginBottom: "1rem" }}>2026 Class Schedules · Higher Learning Tutoring Center</div>
            </div>

            <h1
              className="hl-animate"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)",
                fontWeight: 800,
                color: "#fff",
                lineHeight: 1.1,
                letterSpacing: "-0.01em",
                margin: "0 0 1.25rem",
                animationDelay: "0.2s",
                opacity: mounted ? undefined : 0,
                maxWidth: "680px",
              }}
            >
              2026 Spring{" "}
              <em style={{ fontStyle: "italic", background: "linear-gradient(to right, #c8922a, #e8b84b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                PSAT &amp; SAT
              </em>{" "}
              Prep
            </h1>

            <p
              className="hl-animate"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                maxWidth: "520px",
                margin: "0 0 2rem",
                animationDelay: "0.3s",
                opacity: mounted ? undefined : 0,
              }}
            >
              Prepare for the SAT with expert instruction in Reading, Writing, and Math. Small class sizes, diagnostic testing, and personalized feedback — 14 sessions starting January 24, 2026.
            </p>

            {/* Quick stats bar */}
            <div
              className="hl-animate"
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.75rem",
                animationDelay: "0.4s",
                opacity: mounted ? undefined : 0,
              }}
            >
              {[
                { label: "Grades", value: "9th – 12th" },
                { label: "Sessions", value: "14 Classes" },
                { label: "Time", value: "Sat 1–4 PM" },
                { label: "Subjects", value: "ELA & Math" },
              ].map((s) => (
                <div key={s.label} style={{
                  padding: "0.6rem 1.1rem",
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "10px",
                  backdropFilter: "blur(4px)",
                }}>
                  <div style={{ fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#e8b84b", marginBottom: "0.15rem" }}>{s.label}</div>
                  <div style={{ fontSize: "0.875rem", fontWeight: 700, color: "#fff" }}>{s.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave */}
        <div style={{ background: "linear-gradient(160deg, #080f24 0%, #162a58 100%)", marginBottom: "-1px" }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#faf8f4" />
          </svg>
        </div>

        {/* ── Main Content ──────────────────────────────────────────────────── */}
        <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "4rem clamp(1.25rem, 5vw, 3rem) 3rem" }}>
          <div
            className="hl-sat-split"
            style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: "3rem", alignItems: "start" }}
          >

            {/* Left — Schedule details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>

              {/* Program info table */}
              <div
                ref={highlightRef.ref}
                style={{
                  background: "#fff",
                  borderRadius: "20px",
                  border: "1px solid rgba(15,32,68,0.07)",
                  boxShadow: "0 4px 24px rgba(15,32,68,0.07)",
                  overflow: "hidden",
                  opacity: highlightRef.inView ? 1 : 0,
                  transform: highlightRef.inView ? "translateY(0)" : "translateY(20px)",
                  transition: "opacity 0.65s ease, transform 0.65s ease",
                }}
              >
                <div style={{ padding: "1.5rem 1.5rem 1rem", borderBottom: "1px solid rgba(15,32,68,0.06)" }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.4rem" }}>
                    <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                    Program Details
                    <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 2vw, 1.65rem)", fontWeight: 700, color: "#0f2044", margin: 0, lineHeight: 1.2 }}>
                    SAT Prep Test Program — Spring 2026
                  </h2>
                  <p style={{ fontSize: "0.82rem", color: "rgba(15,32,68,0.45)", margin: "0.4rem 0 0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    Class begins: <strong style={{ color: "#c8922a" }}>January 24, 2026 (Saturday)</strong>
                  </p>
                </div>

                <div style={{ overflowX: "auto" }}>
                  <table className="hl-info-table" style={{ width: "100%", borderCollapse: "collapse" }}>
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Details</th>
                        <th>Schedule</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="label-cell">
                          Grade <span className="zh">年級</span>
                        </td>
                        <td>9th, 10th, 11th, 12th Grade</td>
                        <td rowSpan={3} style={{ verticalAlign: "middle" }}>
                          <div style={{ fontWeight: 700, color: "#c8922a", fontSize: "0.95rem", marginBottom: "0.35rem" }}>1:00 PM – 4:00 PM</div>
                          <div style={{ fontSize: "0.75rem", color: "rgba(15,32,68,0.5)", marginBottom: "0.5rem" }}>3 hours · Every Saturday</div>
                          <div style={{ fontSize: "0.8rem", color: "#0f2044", lineHeight: 1.7 }}>
                            1/24, 31<br />
                            2/07, 28<br />
                            3/07, 14, 21, 28<br />
                            4/11, 18, 25<br />
                            5/02, 09, 16
                          </div>
                          <div style={{ marginTop: "0.6rem", display: "inline-block", padding: "0.3rem 0.7rem", background: "rgba(200,146,42,0.1)", border: "1px solid rgba(200,146,42,0.25)", borderRadius: "6px", fontSize: "0.75rem", fontWeight: 700, color: "#c8922a" }}>
                            14 Sessions Total
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="label-cell">
                          Subject <span className="zh">科目</span>
                        </td>
                        <td>ELA (Reading & Writing) and Math</td>
                      </tr>
                      <tr>
                        <td className="label-cell">
                          Duration <span className="zh">時長</span>
                        </td>
                        <td>Jan 24 – May 16, 2026</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Early registration callout */}
                <div style={{
                  margin: "0 1.5rem 1.5rem",
                  padding: "1rem 1.25rem",
                  background: "linear-gradient(135deg, rgba(200,146,42,0.08), rgba(232,184,75,0.05))",
                  border: "1px solid rgba(200,146,42,0.2)",
                  borderRadius: "12px",
                  borderLeft: "3px solid #c8922a",
                }}>
                  <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c8922a", marginBottom: "0.25rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    ✦ Early Registration Discount
                  </div>
                  <p style={{ fontSize: "0.85rem", color: "#0f2044", margin: 0, lineHeight: 1.6, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    Register by <strong>December 23, 2025</strong> to receive a discount off the regular rate.
                  </p>
                  <p style={{ fontSize: "0.8rem", color: "rgba(15,32,68,0.5)", margin: "0.25rem 0 0", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                    提早在12月23號之前報名可以享有優惠。
                  </p>
                </div>
              </div>
