"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const scheduleItems = [
  { label: "2026 Spring PSAT & SAT", href: "/pages/class-schedules/spring-psat-sat" },
  { label: "2026 Spring Weekend Schedule", href: "/pages/class-schedules/spring-weekend-schedule" },
  { label: "2026 Spring Weekday Schedule", href: "/pages/class-schedules/spring-weekday-schedule" },
];

const navLinks = [
  { label: "Courses", href: "/pages/courses" },
  { label: "Schedules", href: "/pages/class-schedules", dropdown: scheduleItems },
  { label: "Teachers", href: "/pages/teachers" },
  { label: "Gallery", href: "/pages/gallery" },
  { label: "Blog", href: "/pages/blog" },
  { label: "About", href: "/pages/about" },
  { label: "Contact", href: "/pages/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileScheduleOpen, setMobileScheduleOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --navy: #0f2044;
          --gold: #c8922a;
          --gold-light: #e8b84b;
          --cream: #faf8f4;
          --text: #1a1a2e;
        }

        .hl-nav {
          font-family: 'DM Sans', sans-serif;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hl-nav.scrolled {
          background: rgba(15, 32, 68, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 40px rgba(0,0,0,0.2);
        }

        .hl-nav.top {
          background: rgba(15, 32, 68, 0.85);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .hl-nav-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 2rem;
        }

        /* Logo */
        .hl-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          line-height: 1;
          flex-shrink: 0;
        }

        .hl-logo-en {
          font-family: 'Playfair Display', serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #fff;
          letter-spacing: 0.01em;
          transition: color 0.2s;
        }

        .hl-logo-zh {
          font-size: 0.7rem;
          font-weight: 300;
          color: var(--gold-light);
          letter-spacing: 0.2em;
          margin-top: 1px;
          transition: color 0.2s;
        }

        .hl-logo:hover .hl-logo-en { color: var(--gold-light); }
        .hl-logo:hover .hl-logo-zh { color: #fff; }

        /* Desktop Nav */
        .hl-nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .hl-nav-link {
          position: relative;
        }

        .hl-nav-link a,
        .hl-nav-link button {
          display: flex;
          align-items: center;
          gap: 0.3rem;
          padding: 0.45rem 0.75rem;
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.8);
          text-decoration: none;
          border: none;
          background: none;
          cursor: pointer;
          border-radius: 6px;
          transition: color 0.2s, background 0.2s;
          white-space: nowrap;
        }

        .hl-nav-link a:hover,
        .hl-nav-link button:hover,
        .hl-nav-link a.active,
        .hl-nav-link button.active {
          color: var(--gold-light);
          background: rgba(200, 146, 42, 0.1);
        }

        .hl-nav-link a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) scaleX(0);
          width: 60%;
          height: 2px;
          background: var(--gold);
          border-radius: 2px;
          transition: transform 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .hl-nav-link a:hover::after { transform: translateX(-50%) scaleX(1); }

        /* Dropdown chevron */
        .chevron {
          width: 12px;
          height: 12px;
          transition: transform 0.25s ease;
          opacity: 0.7;
          flex-shrink: 0;
        }

        .chevron.open { transform: rotate(180deg); }

        /* Dropdown menu */
        .hl-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          min-width: 220px;
          background: var(--navy);
          border: 1px solid rgba(200, 146, 42, 0.2);
          border-radius: 12px;
          padding: 0.5rem;
          box-shadow: 0 20px 60px rgba(0,0,0,0.4);
          opacity: 0;
          visibility: hidden;
          transform: translateX(-50%) translateY(-8px);
          transition: opacity 0.2s ease, transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), visibility 0.2s;
        }

        .hl-dropdown.open {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        .hl-dropdown a {
          display: block;
          padding: 0.65rem 1rem;
          font-size: 0.82rem;
          font-weight: 400;
          letter-spacing: 0.03em;
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          border-radius: 8px;
          transition: color 0.15s, background 0.15s;
        }

        .hl-dropdown a:hover {
          color: var(--gold-light);
          background: rgba(200, 146, 42, 0.12);
        }

        /* Gold divider line */
        .hl-gold-line {
          width: 1px;
          height: 24px;
          background: linear-gradient(to bottom, transparent, var(--gold), transparent);
          opacity: 0.4;
          flex-shrink: 0;
        }

        /* CTA */
        .hl-cta {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.5rem 1.1rem;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--navy) !important;
          font-weight: 600 !important;
          font-size: 0.78rem !important;
          letter-spacing: 0.06em !important;
          text-transform: uppercase !important;
          border-radius: 50px !important;
          text-decoration: none !important;
          transition: transform 0.2s, box-shadow 0.2s !important;
          box-shadow: 0 4px 16px rgba(200, 146, 42, 0.35);
        }

        .hl-cta::after { display: none !important; }

        .hl-cta:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 24px rgba(200, 146, 42, 0.5) !important;
          color: var(--navy) !important;
          background: linear-gradient(135deg, var(--gold), var(--gold-light)) !important;
        }

        /* Hamburger */
        .hl-hamburger {
          display: none;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          gap: 5px;
          width: 40px;
          height: 40px;
          border: none;
          background: none;
          cursor: pointer;
          padding: 0;
          border-radius: 8px;
          transition: background 0.2s;
        }

        .hl-hamburger:hover { background: rgba(255,255,255,0.08); }

        .hl-hamburger span {
          display: block;
          width: 22px;
          height: 2px;
          background: rgba(255,255,255,0.85);
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: center;
        }

        .hl-hamburger.open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
        .hl-hamburger.open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
        .hl-hamburger.open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

        /* Mobile drawer */
        .hl-mobile-drawer {
          position: fixed;
          top: 72px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(10, 20, 50, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          padding: 1.5rem 1.5rem 2rem;
          overflow-y: auto;
          transform: translateY(-100%);
          opacity: 0;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.3s ease;
          pointer-events: none;
        }

        .hl-mobile-drawer.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }

        .hl-mobile-link {
          display: block;
          padding: 1rem 0;
          font-size: 1.3rem;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          transition: color 0.15s, padding-left 0.2s;
          letter-spacing: 0.02em;
        }

        .hl-mobile-link:hover { color: var(--gold-light); padding-left: 0.5rem; }

        .hl-mobile-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 1rem 0;
          font-size: 1.3rem;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          background: none;
          border: none;
          border-bottom: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          letter-spacing: 0.02em;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.15s;
        }

        .hl-mobile-toggle:hover { color: var(--gold-light); }

        .hl-mobile-sub {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .hl-mobile-sub.open { max-height: 300px; }

        .hl-mobile-sub a {
          display: block;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.15s;
        }

        .hl-mobile-sub a:hover { color: var(--gold-light); }

        .hl-mobile-cta {
          display: block;
          margin-top: 1.5rem;
          padding: 1rem;
          text-align: center;
          background: linear-gradient(135deg, var(--gold), var(--gold-light));
          color: var(--navy);
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          border-radius: 50px;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(200, 146, 42, 0.3);
        }

        /* Responsive */
        @media (max-width: 900px) {
          .hl-desktop-nav { display: none; }
          .hl-hamburger { display: flex; }
        }
      `}</style>

      <nav className={`hl-nav ${scrolled ? "scrolled" : "top"}`}>
        {/* Gold top accent bar */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "2px",
          background: "linear-gradient(to right, transparent, #c8922a, #e8b84b, #c8922a, transparent)",
          opacity: 0.8,
        }} />

        <div className="hl-nav-inner">
          {/* Logo */}
          <Link href="/" className="hl-logo">
            <span className="hl-logo-en">Higher Learning</span>
            <span className="hl-logo-zh">春苗补习</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hl-desktop-nav" style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <ul className="hl-nav-links">
              {navLinks.map((link) =>
                link.dropdown ? (
                  <li key={link.label} className="hl-nav-link" ref={dropdownRef}>
                    <button
                      className={dropdownOpen ? "active" : ""}
                      onClick={() => setDropdownOpen((v) => !v)}
                      aria-expanded={dropdownOpen}
                    >
                      {link.label}
                      <svg className={`chevron ${dropdownOpen ? "open" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="2,4 6,8 10,4" />
                      </svg>
                    </button>
                    <div className={`hl-dropdown ${dropdownOpen ? "open" : ""}`}>
                      {link.dropdown.map((sub) => (
                        <Link key={sub.href} href={sub.href} onClick={() => setDropdownOpen(false)}>
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  </li>
                ) : (
                  <li key={link.label} className="hl-nav-link">
                    <Link href={link.href}>{link.label}</Link>
                  </li>
                )
              )}
            </ul>

            <div className="hl-gold-line" />

            <Link href="/pages/contact" className="hl-cta">
              Enroll Now
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`hl-hamburger ${mobileOpen ? "open" : ""}`}
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`hl-mobile-drawer ${mobileOpen ? "open" : ""}`}>
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.label}>
              <button
                className="hl-mobile-toggle"
                onClick={() => setMobileScheduleOpen((v) => !v)}
              >
                {link.label}
                <svg
                  style={{ width: 18, height: 18, transition: "transform 0.25s", transform: mobileScheduleOpen ? "rotate(180deg)" : "none", opacity: 0.6 }}
                  viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="2"
                >
                  <polyline points="2,4 6,8 10,4" />
                </svg>
              </button>
              <div className={`hl-mobile-sub ${mobileScheduleOpen ? "open" : ""}`}>
                {link.dropdown.map((sub) => (
                  <Link key={sub.href} href={sub.href} onClick={() => setMobileOpen(false)}>
                    {sub.label}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link
              key={link.label}
              href={link.href}
              className="hl-mobile-link"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </Link>
          )
        )}
        <Link href="/contact" className="hl-mobile-cta" onClick={() => setMobileOpen(false)}>
          Enroll Now
        </Link>
      </div>
    </>
  );
}