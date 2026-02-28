"use client";

import Link from "next/link";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Class Schedules", href: "/class-schedules" },
  { label: "Teachers", href: "/teachers" },
  { label: "Class Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

const schedules = [
  { label: "2026 Spring PSAT & SAT", href: "/class-schedules/spring-psat-sat" },
  { label: "2026 Spring Weekend Schedule", href: "/class-schedules/spring-weekend" },
  { label: "2026 Fall Weekday Schedule", href: "/class-schedules/fall-weekday" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy", href: "/refund-policy-class-rules" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100083688844598",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/higherlearning84/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <circle cx="10" cy="10" r="3.3" />
        <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z" />
      </svg>
    ),
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/higher-learning-tutoring-center-new-york-3",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M18.8 14.4c0 .4-.3.8-.3.9l-2.1 2.9-.1.1c-.1 0-.5.3-1 .3s-1-.6-1.1-.7l-2.7-4.2c-.3-.3-.3-1 .1-1.5.3-.3.5-.3.9-.3h.3l5 1.5c.3.1 1 .3 1 1zm-6.1-3.3l5-1.4c.2-.1.9-.3 1-.9.2-.5-.1-1-.2-1 0 0 0-.1-.1-.1L16 5.2c0-.1-.3-.5-1-.5s-1 .6-1 .7l-2.8 4.2c-.2.3-.3.8 0 1.2.3.2.6.3 1.1.3h.4zM9.9.2C9.3 0 8.9 0 8.6.1L4.4 1.4c-.1 0-.5.2-.9.6-.4.8.4 1.6.4 1.6l4.4 5.5c.1.1.4.4 1 .4h.3c.7-.2 1-.9 1-1.3V1.6c-.1-.2-.2-1.1-.7-1.4zM8 12.6c.3-.1.7-.3.7-1.1s-.8-1.1-.9-1.2L3.4 8.2c-.1 0-1-.3-1.3-.1-.2.1-.7.5-.7.9l-.3 3.3c0 .2 0 .7.2 1 .1.2.3.4.8.4.3 0 .6-.1.6-.1l5.1-1c.2.1.2 0 .2 0zm1.8.3c-.2-.1-.3-.1-.4-.1-.5 0-1 .3-1 .4l-3.5 3.6c-.1.2-.5.8-.3 1.3.2.4.3.7.8.9l3.5 1h.4c.2 0 .3 0 .4-.1.5-.2.7-.8.7-1.2l.1-4.9c0-.2-.2-.7-.7-.9z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:higherlearningny@yahoo.com",
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M10,10.1L0,4.7C0.1,3.2,1.4,2,3,2h14c1.6,0,2.9,1.2,3,2.8L10,10.1z M10,11.8c-0.1,0-0.2,0-0.4-0.1L0,6.4V15c0,1.7,1.3,3,3,3h4.9h4.3H17c1.7,0,3-1.3,3-3V6.4l-9.6,5.2C10.2,11.7,10.1,11.7,10,11.8z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        .hl-footer {
          background: #080f24;
          font-family: 'DM Sans', system-ui, sans-serif;
          color: rgba(255,255,255,0.55);
          position: relative;
          overflow: hidden;
        }

        .hl-footer::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(200,146,42,0.5), transparent);
        }

        .hl-footer::after {
          content: '';
          position: absolute;
          bottom: -200px;
          right: -200px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(200,146,42,0.04) 0%, transparent 70%);
          pointer-events: none;
        }

        .hl-footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 5vw, 3rem);
          position: relative;
          z-index: 1;
        }

        .hl-footer-top {
          padding: 4rem 0 3rem;
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr;
          gap: 4rem;
        }

        @media (max-width: 900px) {
          .hl-footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
          .hl-footer-brand { grid-column: 1 / -1; }
        }

        @media (max-width: 560px) {
          .hl-footer-top {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }

        .hl-footer-logo-en {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
          line-height: 1;
        }

        .hl-footer-logo-zh {
          font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
          font-size: 0.72rem;
          color: #e8b84b;
          letter-spacing: 0.25em;
          margin-top: 3px;
        }

        .hl-footer-tagline {
          margin-top: 1rem;
          font-size: 0.85rem;
          line-height: 1.75;
          color: rgba(255,255,255,0.4);
          max-width: 300px;
        }

        .hl-footer-contact {
          margin-top: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .hl-footer-contact a,
        .hl-footer-contact span {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.82rem;
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: color 0.2s;
        }

        .hl-footer-contact a:hover { color: #e8b84b; }

        .hl-footer-contact-icon {
          width: 16px;
          text-align: center;
          font-size: 0.75rem;
          opacity: 0.7;
          flex-shrink: 0;
        }

        .hl-footer-socials {
          display: flex;
          gap: 0.6rem;
          margin-top: 1.75rem;
        }

        .hl-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          background: rgba(255,255,255,0.06);
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: background 0.2s, color 0.2s, transform 0.2s;
          border: 1px solid rgba(255,255,255,0.06);
        }

        .hl-social-btn:hover {
          background: rgba(200,146,42,0.15);
          color: #e8b84b;
          border-color: rgba(200,146,42,0.3);
          transform: translateY(-2px);
        }

        .hl-footer-col-title {
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 1.25rem;
        }

        .hl-footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .hl-footer-links a {
          font-size: 0.85rem;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: color 0.2s, padding-left 0.2s;
          display: block;
        }

        .hl-footer-links a:hover {
          color: #e8b84b;
          padding-left: 4px;
        }

        .hl-footer-divider {
          height: 1px;
          background: rgba(255,255,255,0.06);
          margin: 0;
        }

        .hl-footer-bottom {
          padding: 1.5rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hl-footer-copy {
          font-size: 0.75rem;
          color: rgba(255,255,255,0.25);
          letter-spacing: 0.04em;
        }

        .hl-footer-legal {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .hl-footer-legal a {
          font-size: 0.72rem;
          color: rgba(255,255,255,0.25);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }

        .hl-footer-legal a:hover { color: rgba(255,255,255,0.55); }

        .hl-footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0.35rem 0.9rem;
          background: rgba(200,146,42,0.1);
          border: 1px solid rgba(200,146,42,0.2);
          border-radius: 50px;
          font-size: 0.7rem;
          font-weight: 600;
          color: #e8b84b;
          letter-spacing: 0.08em;
          margin-top: 1.25rem;
          width: fit-content;
        }
      `}</style>

      <footer className="hl-footer">
        <div className="hl-footer-inner">

          {/* Top grid */}
          <div className="hl-footer-top">

            {/* Brand column */}
            <div className="hl-footer-brand">
              <Link href="/" style={{ textDecoration: "none" }}>
                <div className="hl-footer-logo-en">Higher Learning</div>
                <div className="hl-footer-logo-zh">春苗补习</div>
              </Link>

              <p className="hl-footer-tagline">
                33 years of academic excellence preparing NYC students for the exams and schools that shape their futures.
              </p>

              <div className="hl-footer-badge">
                <span>★</span> 4.9 · Google Reviews
              </div>

              <div className="hl-footer-contact">
                <span>
                  <span className="hl-footer-contact-icon">📍</span>
                  84 Bowery, 3FL · New York, NY 10013
                </span>
                <a href="tel:2129410695">
                  <span className="hl-footer-contact-icon">📞</span>
                  212-941-0695
                </a>
                <a href="mailto:higherlearningny@yahoo.com">
                  <span className="hl-footer-contact-icon">✉</span>
                  higherlearningny@yahoo.com
                </a>
              </div>

              <div className="hl-footer-socials">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    className="hl-social-btn"
                    target={s.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={s.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation column */}
            <div>
              <div className="hl-footer-col-title">Navigation</div>
              <ul className="hl-footer-links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Schedules column */}
            <div>
              <div className="hl-footer-col-title">2026 Schedules</div>
              <ul className="hl-footer-links">
                {schedules.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href}>{s.label}</Link>
                  </li>
                ))}
              </ul>

              <div className="hl-footer-col-title" style={{ marginTop: "2rem" }}>Programs</div>
              <ul className="hl-footer-links">
                {["PSAT & SAT Prep", "SHSAT Prep", "Reading, Writing & Math", "NYS Test Prep", "Writing Class", "Summer Program"].map((p) => (
                  <li key={p}>
                    <Link href="/courses">{p}</Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          <div className="hl-footer-divider" />

          {/* Bottom bar */}
          <div className="hl-footer-bottom">
            <span className="hl-footer-copy">
              © {new Date().getFullYear()} Higher Learning Tutoring Center · Established 1993
            </span>
            <nav className="hl-footer-legal" aria-label="Legal">
              {legal.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </nav>
          </div>

        </div>
      </footer>
    </>
  );
}