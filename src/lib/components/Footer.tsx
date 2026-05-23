"use client";

import Link from "next/link";
import { ExternalLink, Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Courses", href: "/pages/courses" },
  { label: "Schedules", href: "/pages/class-schedules" },
  { label: "Teachers", href: "/pages/teachers" },
  { label: "Gallery", href: "/pages/gallery" },
  { label: "Blog", href: "/pages/blog" },
  { label: "About", href: "/pages/about" },
  { label: "Contact", href: "/pages/contact" },
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
    icon: ExternalLink,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/higherlearning84/",
    icon: ExternalLink,
  },
  {
    label: "Yelp",
    href: "https://www.yelp.com/biz/higher-learning-tutoring-center-new-york-3",
    icon: ExternalLink,
  },
  {
    label: "Email",
    href: "mailto:higherlearningny@yahoo.com",
    icon: Mail,
  },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#080f24] text-white">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e8b84b]/60 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_0%,rgba(232,184,75,0.12),transparent_26%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-12 sm:px-8 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.25fr_0.8fr_0.8fr_0.75fr]">
          <div>
            <Link href="/" className="inline-flex flex-col hover:text-white">
              <span className="font-serif text-2xl font-bold tracking-normal text-white">Higher Learning</span>
              <span className="zh mt-1 text-xs tracking-[0.28em] text-[#e8b84b]">春苗补习</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/52">
              33 years of academic excellence for NYC students preparing for SHSAT, SAT, PSAT, NYS exams, and core academic growth.
            </p>
            <div className="mt-6 grid gap-3 text-sm text-white/58">
              <a href="tel:2129410695" className="inline-flex items-center gap-3 text-white/58 hover:text-[#e8b84b]">
                <Phone size={17} className="text-[#e8b84b]" />
                212-941-0695
              </a>
              <a href="mailto:higherlearningny@yahoo.com" className="inline-flex items-center gap-3 text-white/58 hover:text-[#e8b84b]">
                <Mail size={17} className="text-[#e8b84b]" />
                higherlearningny@yahoo.com
              </a>
              <span className="inline-flex items-start gap-3">
                <MapPin size={17} className="mt-1 flex-none text-[#e8b84b]" />
                84 Bowery, 3FL · New York, NY 10013
              </span>
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

        .hl-footer-volta {
          font-size: 0.65rem;
          color: rgba(255,255,255,0.2);
          letter-spacing: 0.04em;
          white-space: nowrap;
        }

        .hl-footer-volta a {
          color: rgba(255,255,255,0.2);
          text-decoration: none;
          transition: color 0.2s;
        }

        .hl-footer-volta a:hover { color: rgba(255,255,255,0.45); }

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
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8b84b]">Explore</h2>
            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {navLinks.slice(0, 4).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-white/55 hover:text-[#e8b84b]">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8b84b]">Center</h2>
            <nav className="mt-5 grid gap-3" aria-label="Footer secondary navigation">
              {navLinks.slice(4).map((link) => (
                <Link key={link.href} href={link.href} className="text-sm font-medium text-white/55 hover:text-[#e8b84b]">
                  {link.label}
                </Link>
          {/* Bottom bar */}
          <div className="hl-footer-bottom">
            <div style={{ display: "flex", flexDirection: "column", gap: "3px" }}>
              <span className="hl-footer-copy">
                © {new Date().getFullYear()} Higher Learning Tutoring Center · Est. 1993
              </span>
              <span className="hl-footer-volta">
                Built by <a href="https://voltanyc.org/" target="_blank" rel="noopener noreferrer">VoltaNYC</a>
              </span>
            </div>
            <nav className="hl-footer-legal" aria-label="Legal">
              {legal.map((l) => (
                <Link key={l.href} href={l.href}>{l.label}</Link>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-[#e8b84b]">Connect</h2>
            <div className="mt-5 flex flex-wrap gap-3">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                    aria-label={social.label}
                    className="flex h-11 w-11 items-center justify-center rounded-[8px] border border-white/10 bg-white/6 text-white/58 transition duration-300 hover:-translate-y-1 hover:border-[#e8b84b]/35 hover:bg-[#e8b84b]/12 hover:text-[#e8b84b]"
                  >
                    <Icon size={19} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/8 pt-7 text-sm text-white/36 md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Higher Learning Tutoring Center · Est. 1993</span>
          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-white/40 hover:text-[#e8b84b]">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
