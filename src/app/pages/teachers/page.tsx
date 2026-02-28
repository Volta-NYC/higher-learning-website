"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Teacher {
  id: string;
  name: string;
  title: string;
  years: string;
  grades: string;
  subjects: string[];
  bio: string;
  highlight: string;
  imageSrc: string;
  imageAlt: string;
}

// ─── Data ────────────────────────────────────────────────────────────────────

const teachers: Teacher[] = [
  {
    id: "mr-roda",
    name: "Mr. Roda",
    title: "Lead Instructor",
    years: "33 Years",
    grades: "Grades 6 – 8",
    subjects: ["English Language Arts", "Mathematics", "SHSAT Prep", "Algebra I Regents"],
    bio: "Mr. Roda has been teaching at Higher Learning since its founding in 1993 — over 33 years of dedicated service. He teaches English Language Arts and Mathematics to 6th and 7th grade students, and provides expert preparation for both the Specialized High School Admissions Test (SHSAT) and the Algebra I Regents Exam for 8th graders. With a deep passion for teaching and an encyclopedic knowledge of the curriculum, Mr. Roda has guided approximately 75% of his SHSAT students to earn admission into NYC's specialized high schools.",
    highlight: "75% of SHSAT students accepted to specialized high schools",
    imageSrc: "https://higherlearningnyc.com/wp-content/uploads/2025/07/b5c7ba_cb570241e6c348f5b07b35bad3dfe8b8mv2.avif",
    imageAlt: "Mr. Roda, Lead Instructor at Higher Learning",
  },
  {
    id: "mrs-roda",
    name: "Mrs. Roda",
    title: "Elementary Specialist",
    years: "30+ Years",
    grades: "Grades 3 – 4",
    subjects: ["English Language Arts", "Mathematics"],
    bio: "Mrs. Roda has been teaching at Higher Learning for over 30 years. She specializes in working with young learners — particularly third and fourth graders — in English Language Arts and Mathematics. Known for her optimism, patience, and genuine care for every student, Mrs. Roda fosters a supportive and encouraging classroom environment where children build confidence, develop a love for learning, and achieve measurable academic success.",
    highlight: "Renowned for patience and nurturing young learners",
    imageSrc: "https://higherlearningnyc.com/wp-content/uploads/2025/07/b5c7ba_78ade1d59ff740ceacb752dd2f2c19c3mv2.avif",
    imageAlt: "Mrs. Roda, Elementary Specialist at Higher Learning",
  },
  {
    id: "mr-siu",
    name: "Mr. Siu",
    title: "Upper Elementary Instructor",
    years: "20+ Years",
    grades: "Grades 5 – 6",
    subjects: ["English Language Arts", "Mathematics"],
    bio: "Mr. Siu has been a dedicated educator at Higher Learning for over 20 years. He specializes in teaching English Language Arts and Mathematics to 5th and 6th grade students. Known for his patience and infectious sense of humor, Mr. Siu creates an engaging and enjoyable learning environment where students genuinely look forward to class. His approachable style makes challenging material feel accessible and even fun.",
    highlight: "Known for making learning engaging and enjoyable",
    imageSrc: "https://higherlearningnyc.com/wp-content/uploads/2025/07/b5c7ba_87632bfc2e16450aa6ac303f41150bbcmv2.avif",
    imageAlt: "Mr. Siu, Upper Elementary Instructor at Higher Learning",
  },
  {
    id: "ms-yang",
    name: "Ms. Yang",
    title: "Early Childhood Educator",
    years: "14+ Years",
    grades: "Grade 2",
    subjects: ["English Language Arts", "Mathematics"],
    bio: "Ms. Yang has been teaching at Higher Learning for over 14 years. With extensive experience working with young children, she currently teaches English Language Arts and Mathematics to 2nd grade students. Ms. Yang is a compassionate educator dedicated to helping her students build a strong academic foundation while also nurturing their creativity and natural love for learning. Her classroom is a place where curiosity is celebrated.",
    highlight: "Dedicated to building strong foundations in young learners",
    imageSrc: "https://higherlearningnyc.com/wp-content/uploads/2025/07/b5c7ba_b51646328bce4ec09ef764c4d2c6a0f5mv2.avif",
    imageAlt: "Ms. Yang, Early Childhood Educator at Higher Learning",
  },
];

// ─── Hook ─────────────────────────────────────────────────────────────────────

function useInView(threshold = 0.1) {
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

// ─── Teacher Card ─────────────────────────────────────────────────────────────

function TeacherCard({ teacher, index }: { teacher: Teacher; index: number }) {
  const { ref, inView } = useInView(0.08);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1.4fr",
        gap: "0",
        background: isEven ? "#fff" : "#faf8f4",
        borderRadius: "20px",
        overflow: "hidden",
        border: "1px solid rgba(15,32,68,0.07)",
        boxShadow: "0 2px 12px rgba(15,32,68,0.06)",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 0.7s cubic-bezier(0.22,1,0.36,1), transform 0.7s cubic-bezier(0.22,1,0.36,1)",
        transitionDelay: `${index * 100}ms`,
      }}
      className="hl-teacher-card"
    >
      {/* Image pane */}
      <div
        style={{
          position: "relative",
          background: "linear-gradient(145deg, #0f2044 0%, #162a58 100%)",
          minHeight: "380px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        {/* Decorative gold arc */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            bottom: "-40px",
            left: "-40px",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "40px solid rgba(200,146,42,0.1)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: "-30px",
            right: "-30px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            border: "25px solid rgba(200,146,42,0.07)",
            pointerEvents: "none",
          }}
        />

        {/* Teacher photo */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            minHeight: "380px",
          }}
        >
          {teacher.imageSrc ? (
            <Image
              src={teacher.imageSrc}
              alt={teacher.imageAlt}
              fill
              style={{ objectFit: "cover", objectPosition: "top center" }}
              sizes="(max-width: 768px) 100vw, 400px"
            />
          ) : (
            /* ── Placeholder when no image ── */
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  background: "rgba(200,146,42,0.15)",
                  border: "2px dashed rgba(200,146,42,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="rgba(200,146,42,0.6)" strokeWidth="1.5" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </div>
              <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.75rem", textAlign: "center", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                Photo coming soon
              </p>
            </div>
          )}
        </div>

        {/* Years badge overlaid on image */}
        <div
          style={{
            position: "absolute",
            top: "1.25rem",
            left: "1.25rem",
            padding: "0.35rem 0.9rem",
            background: "rgba(8,15,36,0.7)",
            backdropFilter: "blur(8px)",
            borderRadius: "50px",
            border: "1px solid rgba(200,146,42,0.35)",
            fontSize: "0.68rem",
            fontWeight: 700,
            color: "#e8b84b",
            letterSpacing: "0.1em",
            fontFamily: "'DM Sans', system-ui, sans-serif",
          }}
        >
          {teacher.years} at Higher Learning
        </div>
      </div>

      {/* Content pane */}
      <div
        style={{
          padding: "2.5rem 2.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Header */}
        <div style={{ marginBottom: "1.5rem" }}>
          <span
            style={{
              display: "inline-block",
              fontSize: "0.65rem",
              fontWeight: 700,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#c8922a",
              marginBottom: "0.5rem",
            }}
          >
            {teacher.title}
          </span>
          <h2
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.1rem)",
              fontWeight: 700,
              color: "#0f2044",
              margin: "0 0 0.4rem",
              lineHeight: 1.1,
            }}
          >
            {teacher.name}
          </h2>

          {/* Grade & subject tags */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginTop: "0.75rem" }}>
            <span
              style={{
                padding: "0.2rem 0.7rem",
                borderRadius: "50px",
                background: "rgba(15,32,68,0.06)",
                border: "1px solid rgba(15,32,68,0.1)",
                fontSize: "0.7rem",
                fontWeight: 600,
                color: "#0f2044",
                letterSpacing: "0.04em",
              }}
            >
              {teacher.grades}
            </span>
            {teacher.subjects.map((s) => (
              <span
                key={s}
                style={{
                  padding: "0.2rem 0.7rem",
                  borderRadius: "50px",
                  background: "rgba(200,146,42,0.07)",
                  border: "1px solid rgba(200,146,42,0.18)",
                  fontSize: "0.7rem",
                  fontWeight: 500,
                  color: "#9a6e20",
                  letterSpacing: "0.02em",
                }}
              >
                {s}
              </span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ width: "40px", height: "2px", background: "linear-gradient(to right, #c8922a, #e8b84b)", borderRadius: "2px", marginBottom: "1.25rem" }} />

        {/* Bio */}
        <p
          style={{
            fontSize: "0.875rem",
            color: "rgba(15,32,68,0.65)",
            lineHeight: 1.8,
            margin: "0 0 1.5rem",
          }}
        >
          {teacher.bio}
        </p>

        {/* Highlight callout */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "0.75rem",
            padding: "0.9rem 1.1rem",
            background: "linear-gradient(135deg, rgba(200,146,42,0.06), rgba(232,184,75,0.04))",
            borderRadius: "10px",
            border: "1px solid rgba(200,146,42,0.18)",
          }}
        >
          <span style={{ fontSize: "1rem", flexShrink: 0, marginTop: "0.05rem" }}>✦</span>
          <p
            style={{
              margin: 0,
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "#9a6e20",
              lineHeight: 1.5,
              fontStyle: "italic",
            }}
          >
            {teacher.highlight}
          </p>
        </div>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function TeachersPage() {
  const [mounted, setMounted] = useState(false);
  const ctaRef = useInView(0.1);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .hl-teachers-page {
          font-family: 'DM Sans', system-ui, sans-serif;
          background: #faf8f4;
          min-height: 100vh;
        }

        .hl-teacher-card {
          transition: box-shadow 0.3s ease !important;
        }

        .hl-teacher-card:hover {
          box-shadow: 0 8px 40px rgba(15,32,68,0.12) !important;
        }

        @media (max-width: 760px) {
          .hl-teacher-card {
            grid-template-columns: 1fr !important;
          }
          .hl-teacher-card > div:first-child {
            min-height: 260px !important;
          }
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
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #e8b84b;
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
          font-family: 'DM Sans', system-ui, sans-serif;
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
          font-family: 'DM Sans', system-ui, sans-serif;
        }
        .hl-cta-btn-secondary:hover { border-color: rgba(255,255,255,0.7); background: rgba(255,255,255,0.05); }
      `}</style>

      <main className="hl-teachers-page">

        {/* ── Hero ── */}
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

          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 clamp(1.25rem, 5vw, 3rem)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div className="hl-animate" style={{ animationDelay: "0.1s", opacity: mounted ? undefined : 0 }}>
              <div className="hl-eyebrow">Higher Learning Tutoring Center</div>
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
                maxWidth: "680px",
              }}
            >
              Meet Our{" "}
              <em style={{ fontStyle: "italic", background: "linear-gradient(to right, #c8922a, #e8b84b)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Teachers
              </em>
            </h1>

            <p
              className="hl-animate"
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.6)",
                lineHeight: 1.75,
                maxWidth: "540px",
                margin: "0 0 2.25rem",
                animationDelay: "0.3s",
                opacity: mounted ? undefined : 0,
              }}
            >
              Our educators have spent decades teaching in Chinatown, New York. They know the curriculum, the exams, and — most importantly — the students.
            </p>

            {/* Aggregate stats */}
            <div
              className="hl-animate"
              style={{
                display: "flex",
                gap: "2.5rem",
                flexWrap: "wrap",
                animationDelay: "0.4s",
                opacity: mounted ? undefined : 0,
              }}
            >
              {[
                { value: "4", label: "Licensed Teachers" },
                { value: "97+", label: "Combined Years" },
                { value: "1993", label: "Teaching Since" },
                { value: "G2–G8", label: "Grade Coverage" },
              ].map((s) => (
                <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
                  <span style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.6rem", fontWeight: 700, color: "#e8b84b", lineHeight: 1 }}>
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

        {/* Wave divider */}
        <div style={{ background: "linear-gradient(160deg, #080f24 0%, #162a58 100%)", marginBottom: "-1px" }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#faf8f4" />
          </svg>
        </div>

        {/* ── Teacher Cards ── */}
        <section
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "4rem clamp(1.25rem, 5vw, 3rem) 5rem",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          {/* Section header */}
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "#c8922a",
                marginBottom: "0.75rem",
              }}
            >
              <span style={{ display: "block", width: "24px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              Our Faculty
              <span style={{ display: "block", width: "24px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "#0f2044",
                margin: "0 0 0.6rem",
                lineHeight: 1.2,
              }}
            >
              Decades of Experience, Proven Results
            </h2>
            <p style={{ fontSize: "0.95rem", color: "rgba(15,32,68,0.55)", maxWidth: "520px", lineHeight: 1.7, margin: 0 }}>
              Every teacher at Higher Learning is licensed and has spent years refining their craft specifically for our students and the exams they face.
            </p>
          </div>

          {teachers.map((teacher, i) => (
            <TeacherCard key={teacher.id} teacher={teacher} index={i} />
          ))}
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
            <div className="hl-eyebrow" style={{ justifyContent: "center" }}>
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
              Learn From the Best
            </h2>
            <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.55)", maxWidth: "480px", margin: "0 auto 2.25rem", lineHeight: 1.75 }}>
              Our teachers are the heart of Higher Learning. Contact us to enroll your student and find the right fit.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pages/contact" className="hl-cta-btn-primary">Contact Us to Enroll →</Link>
              <Link href="/pages/courses" className="hl-cta-btn-secondary">View Our Courses</Link>
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