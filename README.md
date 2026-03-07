# Higher Learning Tutoring Center · 春苗补习

Official website for **Higher Learning Tutoring Center**, an academic prep center at 84 Bowery, 3FL in Manhattan. Established 1993. Specializing in SHSAT, SAT, PSAT, and NYS exam preparation for grades 2–12.

Live site: [higher-learning.vercel.app](https://higher-learning.vercel.app)

---

## 🚀 Overview

Higher Learning has been preparing NYC students for the city's most competitive academic exams since 1993. With a 75% SHSAT acceptance rate, small classes, and licensed teachers, the site serves as the center's primary enrollment and information hub — covering programs, schedules, teachers, and a student gallery.

---

## 🛠 Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Hosted on Vercel**

---

## 📂 Project Structure

```
src/
├── app/
│   ├── page.tsx                        → Homepage
│   ├── layout.tsx                      → Root layout + metadata
│   ├── globals.css                     → Design system (colors, fonts, tokens)
│   └── pages/
│       ├── courses/                    → All academic programs
│       ├── teachers/                   → Teacher profiles
│       ├── gallery/                    → Student photo gallery
│       ├── blog/                       → Blog / news
│       ├── about/                      → About the center
│       ├── contact/                    → Enrollment + contact form
│       ├── privacy-policy/             → Privacy policy
│       ├── terms-and-conditions/       → Terms
│       ├── refund-policy-class-rules/  → Refund & class rules
│       └── class-schedules/
│           ├── spring-psat-sat/        → 2026 Spring PSAT & SAT schedule
│           ├── spring-weekend-schedule/→ 2026 Spring weekend schedule
│           └── spring-weekday-schedule/→ 2026 Spring weekday schedule
├── lib/
│   └── components/
│       ├── Navbar.tsx                  → Site navigation (with Schedules dropdown)
│       ├── Footer.tsx                  → Site footer
│       └── pageStyles.ts              → Shared inline CSS string for page components
public/
└── (favicon, static assets)
```

---

## 📄 Pages

| Route | Description |
|---|---|
| `/` | Homepage — hero, programs overview, differentiators, admissions roll, reviews, CTA |
| `/pages/courses` | Full academic program listings |
| `/pages/teachers` | Teacher bios and credentials |
| `/pages/gallery` | Student and event photo gallery |
| `/pages/blog` | News, tips, and center updates |
| `/pages/about` | Center history and mission |
| `/pages/contact` | Enrollment inquiry and contact info |
| `/pages/class-schedules` | Schedule index |
| `/pages/class-schedules/spring-psat-sat` | 2026 Spring PSAT & SAT schedule |
| `/pages/class-schedules/spring-weekend-schedule` | 2026 Spring weekend class schedule |
| `/pages/class-schedules/spring-weekday-schedule` | 2026 Spring weekday class schedule |
| `/privacy-policy` | Privacy policy |
| `/terms-and-conditions` | Terms and conditions |
| `/refund-policy-class-rules` | Refund policy and class rules |

---

## 🎓 Programs Offered

| Program | Grades | Description |
|---|---|---|
| PSAT & SAT Prep | 9–12 | Reading, writing, advanced math, test strategy |
| SHSAT Prep | 7–8 | Flagship program · 75% specialized HS acceptance rate |
| Reading, Writing & Math | 2–7 | Core skills aligned to NYS Common Core |
| NYS Test Prep | 3–7 | ELA & Math state exam preparation |
| Writing Class | All | Grammar through full essay composition |
| Summer Program | 2–8 | Full-day and half-day intensive sessions |

---

## ✏️ Customization Checklist

- [ ] Replace business name and Chinese subtitle in `Navbar.tsx` + `Footer.tsx`
- [ ] Update metadata in `src/app/layout.tsx`
- [ ] Replace homepage content in `src/app/page.tsx`
- [ ] Update program listings in `src/app/pages/courses`
- [ ] Update teacher profiles in `src/app/pages/teachers`
- [ ] Update schedules in `src/app/pages/class-schedules/*`
- [ ] Replace gallery assets in `src/app/pages/gallery`
- [ ] Update admissions roll (student name ticker) on homepage
- [ ] Replace favicon + assets in `public/`
- [ ] Update SEO metadata (title, description, OG image)
- [ ] Update Google Reviews link with correct Place ID
- [ ] Update footer credit link (`VoltaNYC`) if needed
- [ ] Update legal pages (privacy policy, terms, refund policy)

---

## ⚙️ Config Notes

**`next.config.ts`** — Update `images.remotePatterns` with the correct hostname for any external images used. Empty strings in `hostname` or `pathname` will cause a build failure with `"Expected a non-empty string"`.

**Navbar dropdown** — The Schedules nav item uses a dropdown. New semester schedules should be added as new routes under `src/app/pages/class-schedules/` and registered in `Navbar.tsx`.

---

## 📬 Contact

- **Address:** 84 Bowery, 3FL · New York, NY 10013
- **Phone:** 212-941-0695
- **Email:** higherlearningny@yahoo.com

---

*Built by [VoltaNYC](https://voltanyc.org/)*
