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
