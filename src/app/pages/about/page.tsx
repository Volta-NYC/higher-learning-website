"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.08) {
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

// ─── Stat Card ────────────────────────────────────────────────────────────────

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  const { ref, inView } = useInView(0.1);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(200,146,42,0.2)",
        borderRadius: "14px",
        padding: "1.5rem 1.25rem",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "clamp(2rem, 4vw, 2.8rem)",
          fontWeight: 800,
          color: "#e8b84b",
          lineHeight: 1,
          marginBottom: "0.4rem",
        }}
      >
        {value}
      </div>
      <div
        style={{
          fontSize: "0.7rem",
          fontWeight: 600,
          color: "rgba(255,255,255,0.45)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          fontFamily: "'DM Sans', system-ui, sans-serif",
        }}
      >
        {label}
      </div>
    </div>
  );
}

// ─── Value Card ───────────────────────────────────────────────────────────────

function ValueCard({ icon, title, body, index }: { icon: string; title: string; body: string; index: number }) {
  const { ref, inView } = useInView(0.08);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 100}ms`,
        background: "#fff",
        borderRadius: "16px",
        border: "1px solid rgba(15,32,68,0.07)",
        boxShadow: "0 2px 12px rgba(15,32,68,0.05)",
        padding: "2rem",
      }}
      className="hl-value-card"
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          borderRadius: "12px",
          background: "linear-gradient(135deg, rgba(200,146,42,0.12), rgba(232,184,75,0.08))",
          border: "1px solid rgba(200,146,42,0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "1.3rem",
          marginBottom: "1.25rem",
        }}
      >
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: "1.05rem",
          fontWeight: 700,
          color: "#0f2044",
          margin: "0 0 0.65rem",
          lineHeight: 1.3,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontSize: "0.85rem",
          color: "rgba(15,32,68,0.6)",
          lineHeight: 1.75,
          margin: 0,
        }}
      >
        {body}
      </p>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  const [mounted, setMounted] = useState(false);
  const missionRef = useInView(0.06);
  const visionRef = useInView(0.06);
  const ctaRef = useInView(0.1);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .hl-about-page {
          font-family: 'DM Sans', system-ui, sans-serif;
          background: #faf8f4;
          min-height: 100vh;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hl-animate {
          animation: heroFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) both;
        }

        .hl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e8b84b;
        }
        .hl-eyebrow::before,
        .hl-eyebrow::after {
          content: '';
          display: block;
          width: 22px;
          height: 1px;
          background: #c8922a;
          opacity: 0.6;
        }

        .hl-values-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.25rem;
        }

        .hl-value-card:hover {
          box-shadow: 0 8px 36px rgba(15,32,68,0.11) !important;
        }

        .hl-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        @media (max-width: 860px) {
          .hl-values-grid { grid-template-columns: repeat(2, 1fr); }
          .hl-about-split { grid-template-columns: 1fr !important; }
          .hl-about-img-col { position: static !important; max-height: 420px !important; order: -1; }
          .hl-stats-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 540px) {
          .hl-values-grid { grid-template-columns: 1fr; }
          .hl-hero-stats { grid-template-columns: repeat(2, 1fr) !important; }
        }

        .hl-mv-card {
          transition: box-shadow 0.3s ease !important;
        }
        .hl-mv-card:hover {
          box-shadow: 0 8px 36px rgba(15,32,68,0.11) !important;
        }

        .hl-cta-btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          background: linear-gradient(135deg, #c8922a, #e8b84b);
          color: #0f2044;
          font-weight: 700;
          font-size: 0.875rem;
          border-radius: 10px;
          text-decoration: none;
          transition: filter 0.2s, transform 0.2s;
          letter-spacing: 0.02em;
          font-family: 'DM Sans', system-ui, sans-serif;
        }
        .hl-cta-btn-primary:hover { filter: brightness(1.08); transform: translateY(-1px); }

        .hl-cta-btn-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.85rem 1.75rem;
          background: transparent;
          color: #fff;
          font-weight: 600;
          font-size: 0.875rem;
          border-radius: 10px;
          border: 1.5px solid rgba(255,255,255,0.25);
          text-decoration: none;
          transition: border-color 0.2s, background 0.2s;
          letter-spacing: 0.02em;
          font-family: 'DM Sans', system-ui, sans-serif;
        }
        .hl-cta-btn-secondary:hover { border-color: rgba(255,255,255,0.65); background: rgba(255,255,255,0.05); }
      `}</style>

      <main className="hl-about-page">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(160deg, #080f24 0%, #0f2044 60%, #162a58 100%)",
            padding: "5rem 0 4.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "48px 48px", pointerEvents: "none" }} />
          <div aria-hidden="true" style={{ position: "absolute", top: "-20%", left: "50%", transform: "translateX(-50%)", width: "700px", height: "400px", background: "radial-gradient(ellipse at center, rgba(200,146,42,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />

          <div style={{ maxWidth: "1240px", margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)", position: "relative", zIndex: 1 }}>
            <div className="hl-animate" style={{ animationDelay: "0.1s", opacity: mounted ? undefined : 0 }}>
              <div className="hl-eyebrow" style={{ marginBottom: "1rem" }}>Higher Learning Tutoring Center</div>
            </div>

            <h1
              className="hl-animate"
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
                maxWidth: "620px",
              }}
            >
              About{" "}
              <em style={{ fontStyle: "italic", background: "linear-gradient(to right, #c8922a, #e8b84b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Us
              </em>
            </h1>

            <p
              className="hl-animate"
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                maxWidth: "520px",
                margin: "0 0 2.5rem",
                animationDelay: "0.3s",
                opacity: mounted ? undefined : 0,
              }}
            >
              For over three decades, Higher Learning has been the trusted academic partner for families in Chinatown, NYC — delivering real results through experienced teachers, proven methods, and genuine care.
            </p>

            {/* Stats */}
            <div
              className="hl-animate hl-hero-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, auto)",
                gap: "2rem 3rem",
                animationDelay: "0.4s",
                opacity: mounted ? undefined : 0,
              }}
            >
              {[
                { value: "32+", label: "Years in Chinatown" },
                { value: "~70%", label: "SHSAT Acceptance" },
                { value: "G2–G8", label: "Grade Coverage" },
                { value: "4", label: "Licensed Teachers" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.7rem", fontWeight: 700, color: "#e8b84b", lineHeight: 1 }}>{s.value}</span>
                  <span style={{ fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.07em", textTransform: "uppercase", fontWeight: 600 }}>{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wave divider */}
        <div style={{ background: "linear-gradient(160deg, #080f24 0%, #162a58 100%)", marginBottom: "-1px" }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#faf8f4" />
          </svg>
        </div>

        {/* ── Main Split ───────────────────────────────────────────────────── */}
        <section style={{ maxWidth: "1160px", margin: "0 auto", padding: "4rem clamp(1.25rem, 5vw, 3rem) 0" }}>
          <div
            className="hl-about-split"
            style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: "4rem", alignItems: "start" }}
          >
            {/* Left — story */}
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.75rem" }}>
                <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                Our Story
                <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              </div>

              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3vw, 2.5rem)", fontWeight: 800, color: "#0f2044", margin: "0 0 1.25rem", lineHeight: 1.15 }}>
                Higher Learning: Where Students Succeed
              </h2>

              <div style={{ width: "40px", height: "2px", background: "linear-gradient(to right, #c8922a, #e8b84b)", borderRadius: "2px", marginBottom: "1.5rem" }} />

              <p style={{ fontSize: "1rem", color: "rgba(15,32,68,0.7)", lineHeight: 1.85, margin: "0 0 1.25rem" }}>
                Founded in 1993 and rooted in the heart of Chinatown at 84 Bowery, Higher Learning Tutoring Center has spent over three decades earning the trust of NYC families. What began as a single classroom has grown into one of the neighborhood's most respected academic institutions — without ever losing the personal touch that makes us different.
              </p>

              <p style={{ fontSize: "1rem", color: "rgba(15,32,68,0.7)", lineHeight: 1.85, margin: "0 0 1.75rem" }}>
                With over 32 years of expertise, we equip students in Grades 2 through 8 with the strategies, skills, and confidence that last a lifetime. Nearly 70% of our SHSAT students earn admission to NYC's specialized high schools each year — a testament to our licensed, experienced teachers who provide both academic instruction and genuine personal support.
              </p>

              {/* Highlight callout */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: "0.85rem", padding: "1.1rem 1.25rem", background: "linear-gradient(135deg, rgba(200,146,42,0.06), rgba(232,184,75,0.04))", borderRadius: "12px", border: "1px solid rgba(200,146,42,0.18)", marginBottom: "2rem" }}>
                <span style={{ fontSize: "1.1rem", flexShrink: 0, marginTop: "0.1rem" }}>✦</span>
                <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 600, color: "#9a6e20", lineHeight: 1.6, fontStyle: "italic" }}>
                  "Every teacher at Higher Learning is licensed, experienced, and genuinely invested in each student's success — academically and personally."
                </p>
              </div>

              {/* Mission */}
              <div
                ref={missionRef.ref}
                className="hl-mv-card"
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  border: "1px solid rgba(15,32,68,0.07)",
                  boxShadow: "0 2px 12px rgba(15,32,68,0.05)",
                  padding: "1.5rem",
                  marginBottom: "1rem",
                  opacity: missionRef.inView ? 1 : 0,
                  transform: missionRef.inView ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease, box-shadow 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "linear-gradient(135deg, #0f2044, #162a58)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#0f2044", margin: 0 }}>Our Mission</h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "rgba(15,32,68,0.6)", lineHeight: 1.75, margin: 0 }}>
                  To empower students with effective study skills and learning strategies that foster academic excellence and personal growth — ensuring every student is prepared for lifelong success.
                </p>
              </div>

              {/* Vision */}
              <div
                ref={visionRef.ref}
                className="hl-mv-card"
                style={{
                  background: "#fff",
                  borderRadius: "14px",
                  border: "1px solid rgba(15,32,68,0.07)",
                  boxShadow: "0 2px 12px rgba(15,32,68,0.05)",
                  padding: "1.5rem",
                  opacity: visionRef.inView ? 1 : 0,
                  transform: visionRef.inView ? "translateY(0)" : "translateY(16px)",
                  transition: "opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s, box-shadow 0.3s ease",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <div style={{ width: "36px", height: "36px", borderRadius: "8px", background: "linear-gradient(135deg, #c8922a, #e8b84b)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0f2044" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="4" />
                      <line x1="12" y1="2" x2="12" y2="4" /><line x1="12" y1="20" x2="12" y2="22" />
                      <line x1="2" y1="12" x2="4" y2="12" /><line x1="20" y1="12" x2="22" y2="12" />
                    </svg>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 700, color: "#0f2044", margin: 0 }}>Our Vision</h3>
                </div>
                <p style={{ fontSize: "0.875rem", color: "rgba(15,32,68,0.6)", lineHeight: 1.75, margin: 0 }}>
                  To be a trusted leader in education, inspiring confidence, perseverance, and achievement in every learner we serve. We aim to nurture future leaders — supporting their academic and personal development to help them reach their fullest potential.
                </p>
              </div>
            </div>

            {/* Right — photo */}
            <div
              className="hl-about-img-col"
              style={{ position: "sticky", top: "2rem", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 48px rgba(15,32,68,0.14)" }}
            >
              <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 1, borderRadius: "20px", border: "1px solid rgba(200,146,42,0.2)", pointerEvents: "none" }} />
              <div style={{ position: "absolute", top: "1.25rem", left: "1.25rem", zIndex: 2, padding: "0.4rem 1rem", background: "rgba(8,15,36,0.75)", backdropFilter: "blur(8px)", borderRadius: "50px", border: "1px solid rgba(200,146,42,0.35)", fontSize: "0.68rem", fontWeight: 700, color: "#e8b84b", letterSpacing: "0.1em", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Est. 1993 · Chinatown, NYC
              </div>
              <img
                src="https://higherlearningnyc.com/wp-content/uploads/2025/08/2025-05-14-3-e1755885423707.webp"
                alt="Higher Learning classroom in Chinatown NYC"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", minHeight: "560px" }}
              />
            </div>
          </div>
        </section>

        {/* ── What Sets Us Apart ────────────────────────────────────────────── */}
        <section style={{ maxWidth: "1160px", margin: "0 auto", padding: "5rem clamp(1.25rem, 5vw, 3rem)" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.75rem" }}>
              <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              The Higher Learning Difference
              <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.25rem)", fontWeight: 700, color: "#0f2044", margin: "0 0 0.5rem", lineHeight: 1.2 }}>
              Why Families Choose Us
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(15,32,68,0.5)", maxWidth: "480px", margin: 0, lineHeight: 1.7 }}>
              Three decades of refinement have shaped an approach that consistently produces results — for students of every level.
            </p>
          </div>

          <div className="hl-values-grid">
            {[
              { icon: "🏫", title: "30+ Years in the Community", body: "Since 1993, we've been an anchor institution in Chinatown — trusted by generations of families who grew up here and now return with their own children." },
              { icon: "📜", title: "Licensed, Experienced Teachers", body: "Every instructor holds a teaching license and brings deep expertise in the NYC curriculum — from 2nd grade foundations to 8th grade Regents prep." },
              { icon: "🎯", title: "~70% SHSAT Acceptance Rate", body: "Our rigorous preparation has helped nearly 70% of our students each year earn admission to NYC's specialized high schools, including Stuyvesant and Bronx Science." },
              { icon: "📚", title: "Grades 2–8 Coverage", body: "From building foundational skills in 2nd grade to mastering Algebra I Regents in 8th grade, our curriculum spans the entire middle school journey." },
              { icon: "🤝", title: "Personal, Caring Support", body: "Our teachers know their students by name, learning style, and goals — providing mentorship that goes far beyond what the classroom alone can offer." },
              { icon: "📍", title: "Conveniently Located", body: "At 84 Bowery, 3rd Floor, we're accessible from across lower Manhattan, with both weekend and weekday programs available to fit your family's schedule." },
            ].map((v, i) => (
              <ValueCard key={v.title} icon={v.icon} title={v.title} body={v.body} index={i} />
            ))}
          </div>
        </section>

        {/* ── Stats Banner ─────────────────────────────────────────────────── */}
        <section style={{ background: "linear-gradient(160deg, #080f24 0%, #0f2044 60%, #162a58 100%)", padding: "4rem 0", position: "relative", overflow: "hidden" }}>
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
          <div style={{ maxWidth: "1160px", margin: "0 auto", padding: "0 clamp(1.25rem, 5vw, 3rem)", position: "relative", zIndex: 1 }}>
            <div className="hl-stats-grid">
              <StatCard value="1993" label="Year Founded" delay={0} />
              <StatCard value="32+" label="Years of Service" delay={80} />
              <StatCard value="~70%" label="SHSAT Acceptance" delay={160} />
              <StatCard value="97+" label="Combined Teaching Yrs" delay={240} />
            </div>
          </div>
        </section>

        {/* ── CTA Banner ────────────────────────────────────────────────────── */}
        <section
          ref={ctaRef.ref}
          style={{ background: "linear-gradient(135deg, #080f24 0%, #0f2044 100%)", padding: "4.5rem 0", position: "relative", overflow: "hidden" }}
        >
          <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
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
            <div className="hl-eyebrow" style={{ justifyContent: "center", marginBottom: "1rem" }}>Join Our Community</div>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)", fontWeight: 700, color: "#fff", margin: "0 0 1rem", lineHeight: 1.2 }}>
              Give Your Child a Foundation That Lasts
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.5)", maxWidth: "460px", margin: "0 auto 2.25rem", lineHeight: 1.75 }}>
              Over 30 years of proven results in Chinatown. Contact us today to find the right program for your student.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pages/contact" className="hl-cta-btn-primary">Contact Us to Enroll →</Link>
              <Link href="/pages/teachers" className="hl-cta-btn-secondary">Meet Our Teachers</Link>
            </div>
            <p style={{ marginTop: "2rem", fontSize: "0.75rem", color: "rgba(255,255,255,0.2)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
              84 Bowery, 3FL · New York, NY 10013 · 212-941-0695
            </p>
          </div>
        </section>

      </main>
    </>
  );
}