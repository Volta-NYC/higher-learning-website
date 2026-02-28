"use client";

import Link from "next/link";

const navLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Schedules", href: "/class-schedules" },
  { label: "Teachers", href: "/teachers" },
  { label: "Gallery", href: "/gallery" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms and Conditions", href: "/terms-and-conditions" },
  { label: "Refund Policy / Class Rules", href: "/refund-policy-class-rules" },
];

const socials = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100083688844598",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M20,10.1c0-5.5-4.5-10-10-10S0,4.5,0,10.1c0,5,3.7,9.1,8.4,9.9v-7H5.9v-2.9h2.5V7.9C8.4,5.4,9.9,4,12.2,4c1.1,0,2.2,0.2,2.2,0.2v2.5h-1.3c-1.2,0-1.6,0.8-1.6,1.6v1.9h2.8L13.9,13h-2.3v7C16.3,19.2,20,15.1,20,10.1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/higherlearning84/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <circle cx="10" cy="10" r="3.3" />
        <path d="M14.2,0H5.8C2.6,0,0,2.6,0,5.8v8.3C0,17.4,2.6,20,5.8,20h8.3c3.2,0,5.8-2.6,5.8-5.8V5.8C20,2.6,17.4,0,14.2,0zM10,15c-2.8,0-5-2.2-5-5s2.2-5,5-5s5,2.2,5,5S12.8,15,10,15z M15.8,5C15.4,5,15,4.6,15,4.2s0.4-0.8,0.8-0.8s0.8,0.4,0.8,0.8S16.3,5,15.8,5z" />
      </svg>
    ),
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/higher-learning-tutoring-center-new-york-3",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M18.8 14.4c0 .4-.3.8-.3.9l-2.1 2.9-.1.1c-.1 0-.5.3-1 .3s-1-.6-1.1-.7l-2.7-4.2c-.3-.3-.3-1 .1-1.5.3-.3.5-.3.9-.3h.3l5 1.5c.3.1 1 .3 1 1zm-6.1-3.3l5-1.4c.2-.1.9-.3 1-.9.2-.5-.1-1-.2-1 0 0 0-.1-.1-.1L16 5.2c0-.1-.3-.5-1-.5s-1 .6-1 .7l-2.8 4.2c-.2.3-.3.8 0 1.2.3.2.6.3 1.1.3h.4zM9.9.2C9.3 0 8.9 0 8.6.1L4.4 1.4c-.1 0-.5.2-.9.6-.4.8.4 1.6.4 1.6l4.4 5.5c.1.1.4.4 1 .4h.3c.7-.2 1-.9 1-1.3V1.6c-.1-.2-.2-1.1-.7-1.4zM8 12.6c.3-.1.7-.3.7-1.1s-.8-1.1-.9-1.2L3.4 8.2c-.1 0-1-.3-1.3-.1-.2.1-.7.5-.7.9l-.3 3.3c0 .2 0 .7.2 1 .1.2.3.4.8.4.3 0 .6-.1.6-.1l5.1-1c.2.1.2 0 .2 0zm1.8.3c-.2-.1-.3-.1-.4-.1-.5 0-1 .3-1 .4l-3.5 3.6c-.1.2-.5.8-.3 1.3.2.4.3.7.8.9l3.5 1h.4c.2 0 .3 0 .4-.1.5-.2.7-.8.7-1.2l.1-4.9c0-.2-.2-.7-.7-.9z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:higherlearningny@yahoo.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
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
          position: relative;
        }

        .hl-footer::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(200,146,42,0.4), transparent);
        }

        .hl-footer-inner {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 clamp(1.25rem, 5vw, 3rem);
        }

        .hl-footer-main {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
          padding: 1.6rem 0;
          flex-wrap: wrap;
        }

        .hl-footer-brand {
          display: flex;
          align-items: center;
          gap: 1.1rem;
          flex-shrink: 0;
        }

        .hl-footer-logo-wrap { text-decoration: none; line-height: 1; }

        .hl-footer-logo-en {
          font-family: 'Playfair Display', Georgia, serif;
          font-size: 1rem;
          font-weight: 700;
          color: #fff;
        }

        .hl-footer-logo-zh {
          font-family: 'PingFang SC', 'Microsoft YaHei', sans-serif;
          font-size: 0.58rem;
          color: #e8b84b;
          letter-spacing: 0.2em;
          margin-top: 2px;
        }

        .hl-footer-sep {
          width: 1px;
          height: 26px;
          background: rgba(255,255,255,0.1);
          flex-shrink: 0;
        }

        .hl-footer-meta {
          display: flex;
          flex-direction: column;
          gap: 1px;
        }

        .hl-footer-meta span,
        .hl-footer-meta a {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          text-decoration: none;
          letter-spacing: 0.02em;
          transition: color 0.2s;
        }

        .hl-footer-meta a:hover { color: #e8b84b; }

        .hl-footer-nav {
          display: flex;
          align-items: center;
          gap: 0.1rem;
          flex-wrap: wrap;
          justify-content: center;
        }

        .hl-footer-nav a {
          font-size: 0.68rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.38);
          text-decoration: none;
          padding: 0.3rem 0.55rem;
          border-radius: 4px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }

        .hl-footer-nav a:hover {
          color: #e8b84b;
          background: rgba(200,146,42,0.08);
        }

        .hl-footer-socials {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          flex-shrink: 0;
        }

        .hl-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          border-radius: 7px;
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          border: 1px solid rgba(255,255,255,0.07);
          transition: background 0.2s, color 0.2s, transform 0.2s, border-color 0.2s;
        }

        .hl-social-btn:hover {
          background: rgba(200,146,42,0.14);
          color: #e8b84b;
          border-color: rgba(200,146,42,0.25);
          transform: translateY(-2px);
        }

        .hl-footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 0.8rem 0;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .hl-footer-copy {
          font-size: 0.7rem;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.04em;
        }

        .hl-footer-legal {
          display: flex;
          gap: 1.25rem;
          flex-wrap: wrap;
        }

        .hl-footer-legal a {
          font-size: 0.72rem;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: color 0.2s;
          white-space: nowrap;
        }

        .hl-footer-legal a:hover { color: #e8b84b; }

        @media (max-width: 860px) {
          .hl-footer-main { flex-direction: column; align-items: flex-start; gap: 1rem; padding: 1.25rem 0; }
          .hl-footer-nav { justify-content: flex-start; }
        }
      `}</style>

      <footer className="hl-footer">
        <div className="hl-footer-inner">

          <div className="hl-footer-main">
            {/* Logo + contact */}
            <div className="hl-footer-brand">
              <Link href="/" className="hl-footer-logo-wrap">
                <div className="hl-footer-logo-en">Higher Learning</div>
                <div className="hl-footer-logo-zh">春苗补习</div>
              </Link>
              <div className="hl-footer-sep" />
              <div className="hl-footer-meta">
                <span>84 Bowery, 3FL · New York, NY 10013</span>
                <a href="tel:2129410695">212-941-0695</a>
                <a href="mailto:higherlearningny@yahoo.com">higherlearningny@yahoo.com</a>
              </div>
            </div>

            {/* Nav */}
            <nav className="hl-footer-nav" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>{link.label}</Link>
              ))}
            </nav>

            {/* Socials */}
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

          {/* Bottom bar */}
          <div className="hl-footer-bottom">
            <span className="hl-footer-copy">
              © {new Date().getFullYear()} Higher Learning Tutoring Center · Est. 1993
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