// dead and useless file idek why its here
"use client";

import { useEffect, useState } from "react";

const SCHEDULES = [
  {
    href: "/pages/class-schedules/spring-psat-sat",
    eyebrow: "Grades 9–12",
    title: "Spring PSAT & SAT Prep",
    titleItalic: "PSAT & SAT",
    desc: "14 Saturday sessions of expert ELA and Math instruction, starting January 24, 2026.",
    detail: "Saturdays · 1:00 – 4:00 pm",
    icon: "🎓",
  },
  {
    href: "/pages/class-schedules/spring-weekend-schedule",
    eyebrow: "Grades 2–7",
    title: "Spring Weekend Schedule",
    titleItalic: "Weekend",
    desc: "14 Saturday sessions covering NY State Test Prep, ELA, Math, and SHSAT preparation.",
    detail: "Saturdays · Various times",
    icon: "📚",
  },
  {
    href: "/pages/class-schedules/spring-weekday-schedule",
    eyebrow: "Grades 4–7",
    title: "Spring Weekday Schedule",
    titleItalic: "Weekday",
    desc: "15 after-school sessions on Wednesdays and Thursdays, aligned to NY State test windows.",
    detail: "Wed & Thu · 3:45 – 6:00 pm",
    icon: "📖",
  },
];

export default function ClassSchedulesPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,600;9..40,700&display=swap');

        .hl-hub { font-family: 'DM Sans', system-ui, sans-serif; background: #faf8f4; min-height: 100vh; display: flex; align-items: center; justify-content: center; padding: clamp(3rem, 8vw, 6rem) clamp(1.25rem, 5vw, 3rem); }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hl-hub-anim { animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both; }

        .hl-hub-card {
          display: block;
          background: #fff;
          border: 1px solid rgba(15,32,68,0.07);
          border-radius: 20px;
          padding: 1.75rem 1.85rem;
          text-decoration: none;
          box-shadow: 0 2px 16px rgba(15,32,68,0.05);
          transition: box-shadow 0.22s ease, transform 0.22s ease, border-color 0.22s ease;
          position: relative;
          overflow: hidden;
        }
        .hl-hub-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(to right, #c8922a, #e8b84b);
          opacity: 0;
          transition: opacity 0.22s ease;
        }
        .hl-hub-card:hover {
          box-shadow: 0 10px 32px rgba(15,32,68,0.11);
          transform: translateY(-3px);
          border-color: rgba(200,146,42,0.2);
        }
        .hl-hub-card:hover::before { opacity: 1; }
        .hl-hub-arrow { transition: transform 0.22s ease; }
        .hl-hub-card:hover .hl-hub-arrow { transform: translateX(4px); }
      `}</style>

      <main className="hl-hub">
        <div style={{ width: "100%", maxWidth: "860px" }}>

          {/* Header */}
          <div
            className="hl-hub-anim"
            style={{ textAlign: "center", marginBottom: "3rem", opacity: mounted ? undefined : 0 }}
          >
            <div style={{
              display: "inline-flex", alignItems: "center", gap: "0.55rem",
              fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
              textTransform: "uppercase", color: "#c8922a", marginBottom: "0.75rem",
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}>
              <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              Higher Learning Tutoring Center
              <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
            </div>
            <h1 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              fontWeight: 800,
              color: "#0f2044",
              margin: "0 0 0.75rem",
              lineHeight: 1.1,
            }}>
              2026{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(to right, #c8922a, #e8b84b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Class
              </em>{" "}
              Schedules
            </h1>
            <p style={{
              fontSize: "0.95rem",
              color: "rgba(15,32,68,0.45)",
              margin: 0,
              fontFamily: "'DM Sans', system-ui, sans-serif",
            }}>
              Choose a program below to view the full schedule and enrollment details.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {SCHEDULES.map((s, i) => (
              <a
                key={s.href}
                href={s.href}
                className="hl-hub-card hl-hub-anim"
                style={{
                  animationDelay: `${0.12 + i * 0.1}s`,
                  opacity: mounted ? undefined : 0,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "1.25rem" }}>
                  {/* Icon */}
                  <div style={{
                    width: "52px", height: "52px", flexShrink: 0,
                    background: "linear-gradient(135deg, rgba(200,146,42,0.1), rgba(232,184,75,0.05))",
                    border: "1px solid rgba(200,146,42,0.2)",
                    borderRadius: "14px",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.35rem",
                  }}>
                    {s.icon}
                  </div>

                  {/* Text */}
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.12em",
                      textTransform: "uppercase", color: "#c8922a", marginBottom: "0.2rem",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}>
                      {s.eyebrow}
                    </div>
                    <div style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: "clamp(1rem, 2vw, 1.2rem)",
                      fontWeight: 700, color: "#0f2044",
                      lineHeight: 1.2, marginBottom: "0.3rem",
                    }}>
                      {s.title}
                    </div>
                    <p style={{
                      fontSize: "0.82rem", color: "rgba(15,32,68,0.5)",
                      margin: "0 0 0.4rem", lineHeight: 1.55,
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}>
                      {s.desc}
                    </p>
                    <span style={{
                      display: "inline-flex", alignItems: "center", gap: "0.3rem",
                      padding: "0.2rem 0.65rem",
                      background: "rgba(15,32,68,0.04)",
                      border: "1px solid rgba(15,32,68,0.08)",
                      borderRadius: "8px",
                      fontSize: "0.73rem", fontWeight: 600, color: "#0f2044",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}>
                      🕐 {s.detail}
                    </span>
                  </div>

                  {/* Arrow */}
                  <div
                    className="hl-hub-arrow"
                    style={{
                      flexShrink: 0, width: "32px", height: "32px",
                      background: "rgba(200,146,42,0.08)",
                      border: "1px solid rgba(200,146,42,0.2)",
                      borderRadius: "50%",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "#c8922a", fontSize: "0.9rem",
                    }}
                  >
                    →
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Footer note */}
          <div
            className="hl-hub-anim"
            style={{
              marginTop: "2.5rem", textAlign: "center",
              animationDelay: "0.5s", opacity: mounted ? undefined : 0,
            }}
          >
            <p style={{
              fontSize: "0.78rem", color: "rgba(15,32,68,0.35)",
              margin: 0, fontFamily: "'DM Sans', system-ui, sans-serif",
            }}>
              84 Bowery, 3rd Floor · New York, NY 10013 ·{" "}
              <a href="tel:+12129410695" style={{ color: "#c8922a", textDecoration: "none", fontWeight: 600 }}>
                (212) 941-0695
              </a>
            </p>
          </div>

        </div>
      </main>
    </>
  );
}