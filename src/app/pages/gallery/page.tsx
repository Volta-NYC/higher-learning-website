"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

function useInView(threshold = 0.06) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

const CATEGORY_TILES = [
  { label: "Group Study",         sub: "Collaborative Learning"  },
  { label: "Presentation Skills", sub: "Public Speaking"         },
  { label: "Focused Learning",    sub: "Intensive Class"         },
  { label: "Independent Reading", sub: "Quiet Study"             },
  { label: "Peer Tutoring",       sub: "Interactive Learning"    },
  { label: "Class Discussion",    sub: "Sharing Ideas"           },
];

export default function ClassGalleryPage() {
  const [mounted, setMounted] = useState(false);
  const feat1 = useInView(0.05);
  const feat2 = useInView(0.05);
  const tilesRef = useInView(0.04);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .hlg-page { font-family: 'DM Sans', system-ui, sans-serif; background: #faf8f4; }

        @keyframes hlgFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0);    }
        }
        .hlg-anim { animation: hlgFadeUp 0.72s cubic-bezier(0.22,1,0.36,1) both; }

        .hlg-tile {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          aspect-ratio: 4/3;
          background: linear-gradient(135deg, #0f2044 0%, #162a58 100%);
          cursor: pointer;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .hlg-tile:hover { transform: translateY(-3px); box-shadow: 0 14px 36px rgba(15,32,68,0.18); }
        .hlg-tile-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(160deg, rgba(8,15,36,0.55) 0%, rgba(15,32,68,0.82) 100%);
          display: flex; flex-direction: column;
          align-items: center; justify-content: center;
          text-align: center; padding: 1.5rem;
          transition: background 0.22s ease;
        }
        .hlg-tile:hover .hlg-tile-overlay {
          background: linear-gradient(160deg, rgba(8,15,36,0.45) 0%, rgba(200,146,42,0.35) 100%);
        }
        .hlg-tile-grid {
          position: absolute; inset: 0;
          background-image: linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 32px 32px;
          pointer-events: none;
        }
        .hlg-tile-accent {
          width: 28px; height: 2px;
          background: linear-gradient(to right, #c8922a, #e8b84b);
          border-radius: 2px;
          margin-bottom: 0.75rem;
          transition: width 0.22s ease;
        }
        .hlg-tile:hover .hlg-tile-accent { width: 42px; }

        @media (max-width: 720px) {
          .hlg-feature-grid { grid-template-columns: 1fr !important; }
          .hlg-feature-img-order { order: -1 !important; }
          .hlg-tile-grid-6 { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .hlg-tile-grid-6 { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main className="hlg-page">

        {/* ── HERO ── */}
        <section style={{
          background: "linear-gradient(160deg, #080f24 0%, #0f2044 60%, #162a58 100%)",
          padding: "5rem 0 4.5rem",
          position: "relative",
          overflow: "hidden",
          textAlign: "center",
        }}>
          <div aria-hidden style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }} />
          <div aria-hidden style={{
            position: "absolute", top: "50%", left: "50%",
            transform: "translate(-50%,-50%)",
            width: "600px", height: "300px",
            background: "radial-gradient(ellipse at center, rgba(200,146,42,0.07) 0%, transparent 70%)",
          }} />

          <div style={{ position: "relative", zIndex: 1, padding: "0 clamp(1.25rem, 5vw, 3rem)" }}>
            <div
              className="hlg-anim"
              style={{ animationDelay: "0.08s", opacity: mounted ? undefined : 0 }}
            >
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.55rem",
                fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#e8b84b", marginBottom: "1rem",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                Higher Learning Tutoring Center
                <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              </div>
            </div>

            <h1
              className="hlg-anim"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 auto",
                lineHeight: 1.08,
                animationDelay: "0.18s",
                opacity: mounted ? undefined : 0,
              }}
            >
              Class{" "}
              <em style={{
                fontStyle: "italic",
                background: "linear-gradient(to right, #c8922a, #e8b84b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}>
                Gallery
              </em>
            </h1>

            <p
              className="hlg-anim"
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.45)",
                margin: "1rem auto 0",
                maxWidth: "460px",
                lineHeight: 1.75,
                animationDelay: "0.28s",
                opacity: mounted ? undefined : 0,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              A look inside our classrooms — celebrating student achievement and the learning that happens every day.
            </p>
          </div>

          {/* Wave */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, lineHeight: 0 }}>
            <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
              <path d="M0,40 C360,0 1080,0 1440,40 L1440,40 L0,40 Z" fill="#faf8f4" />
            </svg>
          </div>
        </section>

        {/* ── SECTION 1: Celebrating Excellence ── */}
        <section style={{ padding: "5rem clamp(1.25rem, 5vw, 3rem)" }}>
          <div
            ref={feat1.ref}
            className="hlg-feature-grid"
            style={{
              maxWidth: "1200px", margin: "0 auto",
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "center",
            }}
          >
            {/* Image */}
            <div style={{
              borderRadius: "20px", overflow: "hidden",
              boxShadow: "0 12px 40px rgba(15,32,68,0.12)",
              opacity: feat1.inView ? 1 : 0,
              transform: feat1.inView ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
              aspectRatio: "6/5",
              position: "relative",
              background: "rgba(15,32,68,0.04)",
            }}>
              <Image
                src="https://higherlearningnyc.com/wp-content/uploads/2025/07/2025-05-14.webp"
                alt="Students celebrating SHSAT success"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 720px) 100vw, 50vw"
              />
            </div>

            {/* Text */}
            <div style={{
              opacity: feat1.inView ? 1 : 0,
              transform: feat1.inView ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#c8922a", marginBottom: "0.75rem",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                Student Achievement
              </div>

              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                fontWeight: 700, color: "#0f2044",
                margin: "0 0 1.1rem", lineHeight: 1.2,
              }}>
                Celebrating Academic Excellence
              </h2>

              <div style={{ width: "36px", height: "2px", background: "linear-gradient(to right, #c8922a, #e8b84b)", borderRadius: "2px", marginBottom: "1.25rem" }} />

              <p style={{
                fontSize: "0.95rem", color: "rgba(15,32,68,0.6)",
                lineHeight: 1.8, margin: 0,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                We proudly honor our students who have achieved outstanding results in the Specialized High School Admissions Test. Their dedication and hard work have earned them places at some of New York's top specialized high schools. Congratulations to all recipients — your success is our greatest pride!
              </p>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Focused Learning ── */}
        <section style={{ padding: "0 clamp(1.25rem, 5vw, 3rem) 5rem", background: "#fff" }}>
          <div
            ref={feat2.ref}
            className="hlg-feature-grid"
            style={{
              maxWidth: "1200px", margin: "0 auto",
              display: "grid", gridTemplateColumns: "1fr 1fr",
              gap: "clamp(2rem, 5vw, 4rem)",
              alignItems: "center",
              paddingTop: "5rem",
            }}
          >
            {/* Text */}
            <div style={{
              opacity: feat2.inView ? 1 : 0,
              transform: feat2.inView ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#c8922a", marginBottom: "0.75rem",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                Inside Our Classrooms
              </div>

              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.5rem, 2.8vw, 2.1rem)",
                fontWeight: 700, color: "#0f2044",
                margin: "0 0 1.1rem", lineHeight: 1.2,
              }}>
                Focused Learning Environment
              </h2>

              <div style={{ width: "36px", height: "2px", background: "linear-gradient(to right, #c8922a, #e8b84b)", borderRadius: "2px", marginBottom: "1.25rem" }} />

              <p style={{
                fontSize: "0.95rem", color: "rgba(15,32,68,0.6)",
                lineHeight: 1.8, margin: 0,
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                Our classrooms are designed to foster concentration, participation, and engagement. With experienced teachers guiding every lesson, students receive personalized instruction and support, helping them reach their highest academic potential in a collaborative and respectful setting.
              </p>
            </div>

            {/* Image */}
            <div
              className="hlg-feature-img-order"
              style={{
                borderRadius: "20px", overflow: "hidden",
                boxShadow: "0 12px 40px rgba(15,32,68,0.12)",
                opacity: feat2.inView ? 1 : 0,
                transform: feat2.inView ? "translateX(0)" : "translateX(20px)",
                transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
                aspectRatio: "4/3",
                position: "relative",
                background: "rgba(15,32,68,0.04)",
              }}
            >
              <Image
                src="https://higherlearningnyc.com/wp-content/uploads/2025/07/476125740_590579863741637_4187456394183132726_n-1024x768.jpg"
                alt="Students in a focused classroom environment"
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 720px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        {/* ── CATEGORY TILES ── */}
        <section style={{ padding: "5rem clamp(1.25rem, 5vw, 3rem)" }}>
          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

            <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.55rem",
                fontSize: "0.62rem", fontWeight: 700, letterSpacing: "0.18em",
                textTransform: "uppercase", color: "#c8922a", marginBottom: "0.6rem",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}>
                <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                Gallery Categories
                <span style={{ display: "block", width: "22px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              </div>
              <h2 style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)",
                fontWeight: 700, color: "#0f2044", margin: 0,
              }}>
                Learning in Action
              </h2>
            </div>

            <div
              ref={tilesRef.ref}
              className="hlg-tile-grid-6"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "1.1rem",
              }}
            >
              {CATEGORY_TILES.map((tile, i) => (
                <div
                  key={tile.label}
                  className="hlg-tile"
                  style={{
                    opacity: tilesRef.inView ? 1 : 0,
                    transform: tilesRef.inView ? "translateY(0)" : "translateY(18px)",
                    transition: `opacity 0.55s ease ${i * 70}ms, transform 0.55s ease ${i * 70}ms`,
                  }}
                >
                  <div className="hlg-tile-grid" />
                  {/* subtle radial glow */}
                  <div aria-hidden style={{
                    position: "absolute", inset: 0,
                    background: "radial-gradient(ellipse at 30% 30%, rgba(200,146,42,0.06) 0%, transparent 65%)",
                    pointerEvents: "none",
                  }} />
                  <div className="hlg-tile-overlay">
                    <div className="hlg-tile-accent" />
                    <div style={{
                      fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                      fontWeight: 700,
                      color: "#fff",
                      fontFamily: "'Playfair Display', Georgia, serif",
                      lineHeight: 1.2,
                      marginBottom: "0.35rem",
                    }}>
                      {tile.label}
                    </div>
                    <div style={{
                      fontSize: "0.73rem",
                      color: "rgba(255,255,255,0.42)",
                      fontWeight: 500,
                      letterSpacing: "0.06em",
                      fontFamily: "'DM Sans', system-ui, sans-serif",
                    }}>
                      {tile.sub}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
    </>
  );
}