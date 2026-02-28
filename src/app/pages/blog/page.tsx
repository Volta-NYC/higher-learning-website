"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Post {
  id: string;
  category: string;
  categoryColor?: string;
  title: string;
  excerpt: string;
  href: string;
  imageSrc?: string;
  featured?: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const posts: Post[] = [
  {
    id: "nyc-state-test-strategies",
    category: "Study Tips",
    title: "NYC State Test Strategies",
    excerpt:
      "Discover the most effective techniques our teachers use to prepare students for New York State standardized exams — from time management to question triage.",
    href: "/pages/blog/nyc-state-test-strategies",
    featured: true,
  },
  {
    id: "preparing-for-standardized-tests",
    category: "Test Prep",
    title: "Preparing for Standardized Tests",
    excerpt:
      "Tutoring Q&A: Standardized tests measure not only content knowledge but also test-taking skills. Personalized instruction, targeted strategies, and structured practice make the difference.",
    href: "/pages/blog/preparing-for-standardized-tests",
  },
  {
    id: "tutoring-near-me",
    category: "Higher Learning",
    title: "Tutoring Near Me — A Parent's Guide to Choosing Excellence",
    excerpt:
      "When parents search for tutoring near me, they're looking for more than extra lessons. They seek a proven system, caring teachers, and real results — here's what to look for.",
    href: "/pages/blog/tutoring-near-me-a-parents-guide-to-choosing-excellence",
    imageSrc:
      "https://higherlearningnyc.com/wp-content/uploads/2025/08/ChatGPT-Image-Aug-19-2025-02_09_29-PM.png",
  },
  {
    id: "shsat-nyc",
    category: "SHSAT Prep",
    title: "SHSAT NYC — Everything You Need to Know for 2025",
    excerpt:
      "The SHSAT is now fully digital with 114 items across ELA and Math. Learn exactly what's tested, how scoring works, and how Higher Learning's 75% acceptance rate speaks for itself.",
    href: "/pages/blog/shsat-nyc",
    imageSrc:
      "https://higherlearningnyc.com/wp-content/uploads/2025/07/0b4d3da40646462f99177b0d7db4697f-768x504.avif",
  },
  {
    id: "best-higher-learning-chinatown",
    category: "Higher Learning",
    title: "Best Higher Learning in Chinatown NYC",
    excerpt:
      "Conveniently located at 84 Bowery, we've been at the heart of Chinatown for over 30 years — helping students from Grades 2 through 8 build confidence and academic excellence.",
    href: "/pages/blog/best-higher-learning-in-chinatown-nyc",
    imageSrc:
      "https://higherlearningnyc.com/wp-content/uploads/2025/07/2025-05-14-1-768x432.webp",
  },
  {
    id: "shsat-2025-admission",
    category: "SHSAT Prep",
    title: "SHSAT 2025 Admission — Expert Preparation for NYC Specialized High Schools",
    excerpt:
      "Aiming for Stuyvesant, Bronx Science, or Brooklyn Tech? Excelling on the SHSAT requires targeted preparation. Here's how we approach it.",
    href: "/pages/blog/shsat-2025-admission",
    imageSrc:
      "https://higherlearningnyc.com/wp-content/uploads/2025/07/498557831_661835789949377_2234153109830365154_n-e1753449905619-1-e1755876994617.jpg",
  },
  {
    id: "fall-weekend-tutoring-schedule",
    category: "Schedules",
    title: "2025 Fall Weekend Tutoring Schedule in NYC",
    excerpt:
      "Our Fall 2025 Weekend Program covers ELA, Mathematics, Reading, Writing, and Grammar for Grades 2–8. See times, grade levels, and how to enroll.",
    href: "/pages/blog/2025-fall-weekend-tutoring-schedule-in-nyc-higher-learning",
    imageSrc:
      "https://higherlearningnyc.com/wp-content/uploads/2025/07/475799580_590582457074711_281516345249048325_n-768x576.jpg",
  },
  {
    id: "higher-learning-fall-weekend-schedule",
    category: "Schedules",
    title: "Higher Learning 2025 Fall Weekend Schedule",
    excerpt:
      "Strong academic support in ELA, Mathematics, Reading, and more — our weekend programs are designed around the specific needs of NYC students.",
    href: "/pages/blog/higher-learning-2025-fall-weekend-schedule",
    imageSrc:
      "https://higherlearningnyc.com/wp-content/uploads/2025/07/476274718_590582123741411_8368425015554476117_n-768x576.jpg",
  },
];

const categoryColors: Record<string, string> = {
  "SHSAT Prep": "#c8922a",
  "Higher Learning": "#1a6b4a",
  "Test Prep": "#2855a0",
  "Study Tips": "#7c3aed",
  Schedules: "#0e7490",
};

const allCategories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

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

// ─── Category Badge ────────────────────────────────────────────────────────────

function CategoryBadge({ category }: { category: string }) {
  const color = categoryColors[category] ?? "#555";
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "0.3rem",
        padding: "0.2rem 0.65rem",
        borderRadius: "50px",
        background: `${color}15`,
        border: `1px solid ${color}30`,
        fontSize: "0.62rem",
        fontWeight: 700,
        color,
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontFamily: "'DM Sans', system-ui, sans-serif",
      }}
    >
      {category}
    </span>
  );
}

// ─── Featured Post ─────────────────────────────────────────────────────────────

function FeaturedPost({ post }: { post: Post }) {
  const { ref, inView } = useInView(0.05);
  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transition: "opacity 0.8s cubic-bezier(0.22,1,0.36,1), transform 0.8s cubic-bezier(0.22,1,0.36,1)",
      }}
    >
      <Link href={post.href} className="hl-featured-post" style={{ textDecoration: "none", display: "block" }}>
        <div
          style={{
            background: "linear-gradient(135deg, #0f2044 0%, #162a58 100%)",
            borderRadius: "20px",
            overflow: "hidden",
            padding: "clamp(2rem, 5vw, 3.5rem)",
            position: "relative",
            border: "1px solid rgba(200,146,42,0.15)",
            boxShadow: "0 4px 32px rgba(15,32,68,0.12)",
          }}
        >
          {/* Grid accent */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
              pointerEvents: "none",
            }}
          />
          {/* Gold orb */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-20%",
              right: "-5%",
              width: "400px",
              height: "400px",
              background: "radial-gradient(ellipse at center, rgba(200,146,42,0.12) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1, maxWidth: "680px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <span
                style={{
                  padding: "0.25rem 0.75rem",
                  background: "rgba(200,146,42,0.2)",
                  border: "1px solid rgba(200,146,42,0.4)",
                  borderRadius: "50px",
                  fontSize: "0.6rem",
                  fontWeight: 800,
                  color: "#e8b84b",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                ✦ Featured
              </span>
              <CategoryBadge category={post.category} />
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                fontWeight: 800,
                color: "#fff",
                margin: "0 0 1rem",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              {post.title}
            </h2>

            <p
              style={{
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                margin: "0 0 1.75rem",
                maxWidth: "520px",
              }}
            >
              {post.excerpt}
            </p>

            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.75rem 1.5rem",
                background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                color: "#0f2044",
                fontWeight: 700,
                fontSize: "0.85rem",
                borderRadius: "10px",
                letterSpacing: "0.02em",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              Read Article →
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

// ─── Post Card ────────────────────────────────────────────────────────────────

function PostCard({ post, index }: { post: Post; index: number }) {
  const { ref, inView } = useInView(0.06);
  const hasImage = Boolean(post.imageSrc);

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${index * 80}ms`,
      }}
    >
      <Link href={post.href} className="hl-post-card" style={{ textDecoration: "none", display: "block", height: "100%" }}>
        <article
          style={{
            height: "100%",
            background: "#fff",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid rgba(15,32,68,0.07)",
            boxShadow: "0 2px 12px rgba(15,32,68,0.05)",
            display: "flex",
            flexDirection: "column",
            transition: "box-shadow 0.3s ease, transform 0.3s ease",
          }}
          className="hl-card-inner"
        >
          {/* Image */}
          {hasImage && (
            <div
              style={{
                position: "relative",
                paddingBottom: "56.25%",
                overflow: "hidden",
                background: "linear-gradient(145deg, #0f2044, #162a58)",
                flexShrink: 0,
              }}
            >
              <img
                src={post.imageSrc}
                alt={post.title}
                loading="lazy"
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center",
                  transition: "transform 0.5s ease",
                }}
                className="hl-card-img"
              />
            </div>
          )}

          {/* No image placeholder */}
          {!hasImage && (
            <div
              style={{
                background: "linear-gradient(145deg, #0f2044 0%, #162a58 100%)",
                padding: "2rem",
                flexShrink: 0,
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
                    "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
                  backgroundSize: "32px 32px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  height: "64px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "2rem",
                    fontWeight: 700,
                    color: "rgba(200,146,42,0.3)",
                    letterSpacing: "-0.02em",
                    lineHeight: 1,
                  }}
                >
                  HL
                </span>
              </div>
            </div>
          )}

          {/* Content */}
          <div
            style={{
              padding: "1.5rem",
              display: "flex",
              flexDirection: "column",
              flex: 1,
            }}
          >
            <div style={{ marginBottom: "0.75rem" }}>
              <CategoryBadge category={post.category} />
            </div>

            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "1.05rem",
                fontWeight: 700,
                color: "#0f2044",
                margin: "0 0 0.65rem",
                lineHeight: 1.35,
              }}
            >
              {post.title}
            </h3>

            <p
              style={{
                fontSize: "0.8rem",
                color: "rgba(15,32,68,0.55)",
                lineHeight: 1.75,
                margin: "0",
                flex: 1,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {post.excerpt}
            </p>

            <div
              style={{
                marginTop: "1.25rem",
                paddingTop: "1rem",
                borderTop: "1px solid rgba(15,32,68,0.06)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  color: "#c8922a",
                  letterSpacing: "0.04em",
                  fontFamily: "'DM Sans', system-ui, sans-serif",
                }}
              >
                Read More →
              </span>
              <span
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "50%",
                  background: "rgba(200,146,42,0.1)",
                  border: "1px solid rgba(200,146,42,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M2 8L8 2M8 2H3M8 2V7" stroke="#c8922a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </div>
        </article>
      </Link>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const ctaInView = useInView(0.1);

  useEffect(() => {
    setMounted(true);
  }, []);

  const featured = posts.find((p) => p.featured);
  const filteredPosts = posts
    .filter((p) => !p.featured)
    .filter((p) => activeCategory === "All" || p.category === activeCategory);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .hl-blog-page {
          font-family: 'DM Sans', system-ui, sans-serif;
          background: #faf8f4;
          min-height: 100vh;
        }

        .hl-card-inner:hover {
          box-shadow: 0 12px 40px rgba(15,32,68,0.13) !important;
          transform: translateY(-3px) !important;
        }

        .hl-card-inner:hover .hl-card-img {
          transform: scale(1.04) !important;
        }

        .hl-featured-post > div:hover {
          box-shadow: 0 12px 48px rgba(15,32,68,0.18) !important;
        }

        .hl-filter-btn {
          padding: 0.4rem 1rem;
          border-radius: 50px;
          border: 1px solid rgba(15,32,68,0.12);
          background: transparent;
          color: rgba(15,32,68,0.55);
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          cursor: pointer;
          transition: all 0.2s ease;
          font-family: 'DM Sans', system-ui, sans-serif;
        }

        .hl-filter-btn:hover {
          border-color: rgba(200,146,42,0.4);
          color: #c8922a;
          background: rgba(200,146,42,0.05);
        }

        .hl-filter-btn.active {
          background: linear-gradient(135deg, #c8922a, #e8b84b);
          border-color: transparent;
          color: #0f2044;
          font-weight: 700;
        }

        .hl-blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        @media (max-width: 900px) {
          .hl-blog-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .hl-blog-grid {
            grid-template-columns: 1fr;
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

        .hl-empty-state {
          grid-column: 1 / -1;
          text-align: center;
          padding: 4rem 2rem;
        }
      `}</style>

      <main className="hl-blog-page">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "linear-gradient(160deg, #080f24 0%, #0f2044 60%, #162a58 100%)",
            padding: "5rem 0 4.5rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Grid overlay */}
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
          {/* Gold glow */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "700px",
              height: "400px",
              background: "radial-gradient(ellipse at center, rgba(200,146,42,0.1) 0%, transparent 70%)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              maxWidth: "1240px",
              margin: "0 auto",
              padding: "0 clamp(1.25rem, 5vw, 3rem)",
              position: "relative",
              zIndex: 1,
            }}
          >
            <div
              className="hl-animate"
              style={{ animationDelay: "0.1s", opacity: mounted ? undefined : 0 }}
            >
              <div className="hl-eyebrow" style={{ marginBottom: "1rem" }}>
                Higher Learning Tutoring Center
              </div>
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
              Insights &{" "}
              <em
                style={{
                  fontStyle: "italic",
                  background: "linear-gradient(to right, #c8922a, #e8b84b)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Resources
              </em>
            </h1>

            <p
              className="hl-animate"
              style={{
                fontSize: "1.05rem",
                color: "rgba(255,255,255,0.55)",
                lineHeight: 1.75,
                maxWidth: "500px",
                margin: "0",
                animationDelay: "0.3s",
                opacity: mounted ? undefined : 0,
              }}
            >
              Expert guidance on test prep, study strategies, NYC exam schedules, and everything families need to support their students' success.
            </p>
          </div>
        </section>

        {/* Wave divider */}
        <div style={{ background: "linear-gradient(160deg, #080f24 0%, #162a58 100%)", marginBottom: "-1px" }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#faf8f4" />
          </svg>
        </div>

        {/* ── Content Area ─────────────────────────────────────────────────── */}
        <section
          style={{
            maxWidth: "1160px",
            margin: "0 auto",
            padding: "3.5rem clamp(1.25rem, 5vw, 3rem) 5rem",
          }}
        >

          {/* Featured Post */}
          {featured && (
            <div style={{ marginBottom: "3rem" }}>
              <FeaturedPost post={featured} />
            </div>
          )}

          {/* Section header + filters */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "2rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  fontSize: "0.65rem",
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#c8922a",
                  marginBottom: "0.5rem",
                }}
              >
                <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                All Articles
                <span style={{ display: "block", width: "20px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
              </div>
              <h2
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 700,
                  color: "#0f2044",
                  margin: 0,
                  lineHeight: 1.2,
                }}
              >
                Browse Our Latest Posts
              </h2>
            </div>

            {/* Category filters */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  className={`hl-filter-btn${activeCategory === cat ? " active" : ""}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Grid */}
          <div className="hl-blog-grid">
            {filteredPosts.length > 0 ? (
              filteredPosts.map((post, i) => (
                <PostCard key={post.id} post={post} index={i} />
              ))
            ) : (
              <div className="hl-empty-state">
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: "1.25rem",
                    color: "#0f2044",
                    opacity: 0.4,
                    margin: 0,
                  }}
                >
                  No posts in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA Banner ───────────────────────────────────────────────────── */}
        <section
          ref={ctaInView.ref}
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
              opacity: ctaInView.inView ? 1 : 0,
              transform: ctaInView.inView ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div className="hl-eyebrow" style={{ justifyContent: "center", marginBottom: "1rem" }}>
              Ready to Start?
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.75rem, 3.5vw, 2.6rem)",
                fontWeight: 700,
                color: "#fff",
                margin: "0 0 1rem",
                lineHeight: 1.2,
              }}
            >
              Give Your Child the Higher Learning Advantage
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                maxWidth: "460px",
                margin: "0 auto 2.25rem",
                lineHeight: 1.75,
              }}
            >
              Over 30 years of proven results in Chinatown, NYC. Contact us to find the right program for your student.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link href="/pages/contact" className="hl-cta-btn-primary">
                Contact Us to Enroll →
              </Link>
              <Link href="/pages/courses" className="hl-cta-btn-secondary">
                View Our Courses
              </Link>
            </div>
            <p
              style={{
                marginTop: "2rem",
                fontSize: "0.75rem",
                color: "rgba(255,255,255,0.2)",
                fontFamily: "'DM Sans', system-ui, sans-serif",
              }}
            >
              84 Bowery, 3FL · New York, NY 10013 · 212-941-0695
            </p>
          </div>
        </section>

      </main>
    </>
  );
}