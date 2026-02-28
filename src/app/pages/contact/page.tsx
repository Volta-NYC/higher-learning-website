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

// ─── Contact Form ─────────────────────────────────────────────────────────────

function ContactForm() {
  const [fields, setFields] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleSubmit = async () => {
    setStatus("sending");
    // Simulate submission — wire up to real endpoint
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    padding: "0.75rem 1rem",
    fontSize: "0.9rem",
    fontFamily: "'DM Sans', system-ui, sans-serif",
    color: "#0f2044",
    background: focused === name ? "#fff" : "#faf8f4",
    border: `1.5px solid ${focused === name ? "#c8922a" : "rgba(15,32,68,0.12)"}`,
    borderRadius: "10px",
    outline: "none",
    transition: "border-color 0.2s, background 0.2s",
    boxSizing: "border-box",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontSize: "0.75rem",
    fontWeight: 600,
    color: "rgba(15,32,68,0.55)",
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    marginBottom: "0.4rem",
    fontFamily: "'DM Sans', system-ui, sans-serif",
  };

  if (status === "sent") {
    return (
      <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
        <div style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>✓</div>
        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", color: "#0f2044", margin: "0 0 0.75rem" }}>
          Message Sent!
        </h3>
        <p style={{ fontSize: "0.9rem", color: "rgba(15,32,68,0.55)", lineHeight: 1.7 }}>
          Thank you for reaching out. Our team will get back to you as soon as possible.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }} className="hl-form-row">
        <div>
          <label style={labelStyle}>Your Name</label>
          <input
            type="text"
            placeholder="Jane Smith"
            value={fields.name}
            onChange={(e) => setFields({ ...fields, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            style={inputStyle("name")}
          />
        </div>
        <div>
          <label style={labelStyle}>Your Email</label>
          <input
            type="email"
            placeholder="jane@example.com"
            value={fields.email}
            onChange={(e) => setFields({ ...fields, email: e.target.value })}
            onFocus={() => setFocused("email")}
            onBlur={() => setFocused(null)}
            style={inputStyle("email")}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Subject</label>
        <input
          type="text"
          placeholder="Enrollment inquiry, SHSAT prep, etc."
          value={fields.subject}
          onChange={(e) => setFields({ ...fields, subject: e.target.value })}
          onFocus={() => setFocused("subject")}
          onBlur={() => setFocused(null)}
          style={inputStyle("subject")}
        />
      </div>

      <div>
        <label style={labelStyle}>Your Message (optional)</label>
        <textarea
          rows={6}
          placeholder="Tell us about your student, the grade level, and what you're looking for…"
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          style={{ ...inputStyle("message"), resize: "vertical", minHeight: "120px" }}
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={status === "sending"}
        style={{
          padding: "0.875rem 2rem",
          background: status === "sending"
            ? "rgba(200,146,42,0.6)"
            : "linear-gradient(135deg, #c8922a, #e8b84b)",
          color: "#0f2044",
          fontWeight: 700,
          fontSize: "0.9rem",
          borderRadius: "10px",
          border: "none",
          cursor: status === "sending" ? "not-allowed" : "pointer",
          fontFamily: "'DM Sans', system-ui, sans-serif",
          letterSpacing: "0.02em",
          transition: "filter 0.2s, transform 0.2s",
          alignSelf: "flex-start",
        }}
        className="hl-submit-btn"
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>
    </div>
  );
}

// ─── Contact Info Item ────────────────────────────────────────────────────────

function InfoItem({ icon, label, value, href, delay }: {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
  href?: string;
  delay: number;
}) {
  const { ref, inView } = useInView(0.1);
  const content = (
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginBottom: "0.25rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {label}
      </div>
      <div style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.9)", lineHeight: 1.6, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
        {value}
      </div>
    </div>
  );

  return (
    <div
      ref={ref}
      style={{
        display: "flex",
        alignItems: "flex-start",
        gap: "0.875rem",
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0)" : "translateX(-16px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      <div style={{
        width: "38px",
        height: "38px",
        borderRadius: "10px",
        background: "rgba(200,146,42,0.15)",
        border: "1px solid rgba(200,146,42,0.25)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        marginTop: "0.1rem",
      }}>
        {icon}
      </div>
      {href ? (
        <a href={href} style={{ flex: 1, textDecoration: "none" }}>{content}</a>
      ) : content}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [mounted, setMounted] = useState(false);
  const formRef = useInView(0.06);
  const mapRef = useInView(0.06);

  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&display=swap');

        .hl-contact-page {
          font-family: 'DM Sans', system-ui, sans-serif;
          background: #faf8f4;
          min-height: 100vh;
        }

        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(20px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .hl-animate { animation: heroFadeUp 0.75s cubic-bezier(0.22,1,0.36,1) both; }

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
        .hl-eyebrow::before, .hl-eyebrow::after {
          content: '';
          display: block;
          width: 22px;
          height: 1px;
          background: #c8922a;
          opacity: 0.6;
        }

        .hl-submit-btn:hover:not(:disabled) {
          filter: brightness(1.08);
          transform: translateY(-1px);
        }

        @media (max-width: 780px) {
          .hl-contact-split { grid-template-columns: 1fr !important; }
          .hl-form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <main className="hl-contact-page">

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
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
              Contact{" "}
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
                maxWidth: "500px",
                margin: 0,
                animationDelay: "0.3s",
                opacity: mounted ? undefined : 0,
              }}
            >
              We're here to help! Fill out the form or reach out directly — our team will get back to you as soon as possible.
            </p>
          </div>
        </section>

        {/* Wave divider */}
        <div style={{ background: "linear-gradient(160deg, #080f24 0%, #162a58 100%)", marginBottom: "-1px" }}>
          <svg viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: "block", width: "100%" }}>
            <path d="M0,48 C360,0 1080,0 1440,48 L1440,48 L0,48 Z" fill="#faf8f4" />
          </svg>
        </div>

        {/* ── Main Split ───────────────────────────────────────────────────── */}
        <section style={{ maxWidth: "1160px", margin: "0 auto", padding: "4rem clamp(1.25rem, 5vw, 3rem) 5rem" }}>
          <div
            className="hl-contact-split"
            style={{ display: "grid", gridTemplateColumns: "1fr 380px", gap: "3.5rem", alignItems: "start" }}
          >
            {/* Left — Contact Form */}
            <div
              ref={formRef.ref}
              style={{
                background: "#fff",
                borderRadius: "20px",
                border: "1px solid rgba(15,32,68,0.07)",
                boxShadow: "0 4px 24px rgba(15,32,68,0.07)",
                padding: "2.5rem",
                opacity: formRef.inView ? 1 : 0,
                transform: formRef.inView ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.65s ease, transform 0.65s ease",
              }}
            >
              <div style={{ marginBottom: "2rem" }}>
                <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#c8922a", marginBottom: "0.6rem" }}>
                  <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                  Get In Touch
                  <span style={{ display: "block", width: "18px", height: "1px", background: "#c8922a", opacity: 0.6 }} />
                </div>
                <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.5rem, 2.5vw, 2rem)", fontWeight: 700, color: "#0f2044", margin: "0 0 0.5rem", lineHeight: 1.2 }}>
                  Send Us a Message
                </h2>
                <p style={{ fontSize: "0.875rem", color: "rgba(15,32,68,0.5)", margin: 0, lineHeight: 1.6 }}>
                  Ask about enrollment, class schedules, or anything else — we'll respond promptly.
                </p>
              </div>

              <ContactForm />
            </div>

            {/* Right — Info Panel */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              {/* Dark info card */}
              <div style={{
                background: "linear-gradient(160deg, #080f24 0%, #0f2044 70%, #162a58 100%)",
                borderRadius: "20px",
                border: "1px solid rgba(200,146,42,0.15)",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}>
                <div aria-hidden="true" style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ marginBottom: "1.75rem" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8b84b", marginBottom: "0.4rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                      Higher Learning Tutoring Center
                    </div>
                    <div style={{ width: "32px", height: "1.5px", background: "linear-gradient(to right, #c8922a, #e8b84b)", borderRadius: "2px" }} />
                  </div>

                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <InfoItem
                      delay={0}
                      label="Address"
                      icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
                        </svg>
                      }
                      value={<>84 Bowery, 3rd Floor<br />New York, NY 10013</>}
                      href="https://maps.google.com/?q=84+Bowery+New+York+NY+10013"
                    />
                    <InfoItem
                      delay={80}
                      label="Phone"
                      icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 9.81 19.79 19.79 0 0 1 1.27 3.2 2 2 0 0 1 3.24 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                      }
                      value="+1 212-941-0695"
                      href="tel:+12129410695"
                    />
                    <InfoItem
                      delay={160}
                      label="Email"
                      icon={
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#e8b84b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>
                        </svg>
                      }
                      value="higherlearningny@yahoo.com"
                      href="mailto:higherlearningny@yahoo.com"
                    />
                  </div>

                  {/* Social links */}
                  <div style={{ marginTop: "1.75rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.3)", marginBottom: "0.85rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                      Follow Us
                    </div>
                    <div style={{ display: "flex", gap: "0.6rem" }}>
                      {[
                        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100083688844598", icon: "f" },
                        { label: "Instagram", href: "https://www.instagram.com/higherlearning84/", icon: "ig" },
                        { label: "Yelp", href: "https://www.yelp.com/biz/higher-learning-tutoring-center-new-york-3", icon: "y" },
                      ].map((s) => (
                        <a
                          key={s.label}
                          href={s.href}
                          aria-label={s.label}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{
                            width: "34px",
                            height: "34px",
                            borderRadius: "8px",
                            background: "rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "rgba(255,255,255,0.6)",
                            fontSize: "0.7rem",
                            fontWeight: 700,
                            textDecoration: "none",
                            transition: "background 0.2s, border-color 0.2s",
                          }}
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours card */}
              <div style={{
                background: "#fff",
                borderRadius: "16px",
                border: "1px solid rgba(15,32,68,0.07)",
                boxShadow: "0 2px 12px rgba(15,32,68,0.05)",
                padding: "1.5rem",
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.1rem" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "8px", background: "linear-gradient(135deg, rgba(200,146,42,0.12), rgba(232,184,75,0.08))", border: "1px solid rgba(200,146,42,0.2)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8922a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                  </div>
                  <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#0f2044", fontFamily: "'DM Sans', system-ui, sans-serif" }}>Office Hours</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.55rem" }}>
                  {[
                    { day: "Monday – Friday", hours: "3:00 PM – 7:00 PM" },
                    { day: "Saturday", hours: "9:00 AM – 5:00 PM" },
                    { day: "Sunday", hours: "Closed" },
                  ].map((h) => (
                    <div key={h.day} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ fontSize: "0.8rem", color: "rgba(15,32,68,0.6)", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{h.day}</span>
                      <span style={{ fontSize: "0.8rem", fontWeight: 600, color: h.hours === "Closed" ? "rgba(15,32,68,0.3)" : "#0f2044", fontFamily: "'DM Sans', system-ui, sans-serif" }}>{h.hours}</span>
                    </div>
                  ))}
                </div>
                <p style={{ margin: "1rem 0 0", fontSize: "0.75rem", color: "rgba(15,32,68,0.4)", lineHeight: 1.6, fontFamily: "'DM Sans', system-ui, sans-serif" }}>
                  * Hours may vary during school breaks and holidays.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Map Section ──────────────────────────────────────────────────── */}
        <section
          ref={mapRef.ref}
          style={{
            opacity: mapRef.inView ? 1 : 0,
            transform: mapRef.inView ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          {/* Map header bar */}
          <div style={{
            background: "linear-gradient(135deg, #080f24 0%, #0f2044 100%)",
            padding: "2.5rem clamp(1.25rem, 5vw, 3rem)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "1rem",
          }}>
            <div>
              <div style={{ fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#e8b84b", marginBottom: "0.35rem", fontFamily: "'DM Sans', system-ui, sans-serif" }}>Find Us</div>
              <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.3rem, 2.5vw, 1.7rem)", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.2 }}>
                84 Bowery, 3FL · New York, NY 10013
              </h2>
            </div>
            <a
              href="https://maps.google.com/?q=84+Bowery+New+York+NY+10013"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.7rem 1.4rem",
                background: "linear-gradient(135deg, #c8922a, #e8b84b)",
                color: "#0f2044",
                fontWeight: 700,
                fontSize: "0.825rem",
                borderRadius: "10px",
                textDecoration: "none",
                fontFamily: "'DM Sans', system-ui, sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              Get Directions →
            </a>
          </div>

          {/* Embedded map */}
          <div style={{ position: "relative", width: "100%", height: "380px", overflow: "hidden" }}>
            <iframe
              loading="lazy"
              src="https://maps.google.com/maps?q=84%20Bowery%2C%203FL%20New%20York%2C%20NY%2010013&t=m&z=17&output=embed&iwloc=near"
              title="84 Bowery, 3FL New York, NY 10013"
              aria-label="84 Bowery, 3FL New York, NY 10013"
              style={{ width: "100%", height: "100%", border: 0, display: "block" }}
            />
          </div>
        </section>

      </main>
    </>
  );
}