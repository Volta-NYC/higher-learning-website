export type SiteLanguage = "en" | "zh";

const translations: Record<string, string> = {
  "Courses": "课程",
  "Schedules": "时间表",
  "Teachers": "老师",
  "Gallery": "相册",
  "Blog": "资讯",
  "About": "关于",
  "Contact": "联系",
  "2026 Spring PSAT & SAT": "2026 春季 PSAT / SAT",
  "2026 Spring Weekend Schedule": "2026 春季周末课程",
  "2026 Spring Weekday Schedule": "2026 春季平日课程",
  "Visit Us In Person": "亲临咨询",
  "Visit Us In Person ·": "亲临咨询 ·",
  "Toggle menu": "切换菜单",
  "Switch to Simplified Chinese": "切换到简体中文",
  "Switch to English": "切换到英文",
  "Explore": "浏览",
  "Center": "中心",
  "Connect": "联系",
  "Footer navigation": "页脚导航",
  "Footer secondary navigation": "页脚辅助导航",
  "Legal": "法律信息",
  "Privacy Policy": "隐私政策",
  "Terms and Conditions": "条款与条件",
  "Refund Policy / Class Rules": "退款政策 / 课堂规则",
  "All rights reserved.": "版权所有。",
  "Higher Learning": "春苗补习",

  "Established 1993 · New York City": "创立于 1993 年 · 纽约市",
  "Where Students": "让学生",
  "Rise": "提升",
  "to Their Full Potential": "发挥全部潜力",
  "33 years of academic excellence preparing NYC students for SHSAT, SAT, PSAT, and state exams. Small classes. Certified teachers. Proven results.": "33 年教学经验，帮助纽约学生准备 SHSAT、SAT、PSAT 和州考。小班教学，持证老师，成绩有目共睹。",
  "View Courses": "查看课程",
  "View 2026 Schedules": "查看 2026 时间表",
  "Admissions Focus": "升学重点",
  "SHSAT Acceptance": "SHSAT 录取率",
  "SHSAT acceptance rate into NYC specialized high schools.": "SHSAT 学生录取纽约特殊高中的比例。",
  "Why Higher Learning": "为什么选择春苗",
  "Every Student. Every Goal.": "每位学生，每个目标。",
  "Ready to Get Ahead?": "准备好更进一步了吗？",
  "Google Review": "Google 评价",

  "Programs for": "适合",
  "Every": "每个",
  "Stage of Learning": "学习阶段的课程",
  "Our Programs": "我们的课程",
  "Sibling Discount:": "兄弟姐妹优惠：",
  "Families with more than one enrolled student receive a 5% discount on SHSAT and SAT/PSAT programs.": "同一家庭有多名学生报名 SHSAT 或 SAT/PSAT 课程，可享 5% 优惠。",

  "About Us": "关于我们",
  "Us": "我们",
  "Higher Learning Tutoring Center": "春苗补习中心",
  "Our Mission": "我们的使命",
  "Our Vision": "我们的愿景",
  "Join Our Community": "加入我们的学习社区",
  "Contact Us to Enroll →": "联系我们报名 →",
  "Meet Our Teachers": "认识我们的老师",

  "Meet Our": "认识我们的",
  "View Our Courses": "查看我们的课程",
  "Licensed Teachers": "持证老师",
  "Combined Years": "合计教龄",
  "Teaching Since": "开始教学年份",
  "Grade Coverage": "覆盖年级",

  "Class": "课堂",
  "Insights &": "学习",
  "Resources": "资讯",
  "Your Name": "姓名",
  "Your Email": "电子邮箱",
  "Subject": "咨询主题",
  "Your Message (optional)": "留言（可选）",
  "Jane Smith / 学生或家长姓名": "学生或家长姓名",
  "Enrollment inquiry, SHSAT prep, etc. / 报名、课程或考试辅导": "报名、SHSAT 辅导或其他课程咨询",
  "Tell us about your student, the grade level, and what you're looking for… / 请告诉我们学生年级和需要的课程": "请告诉我们学生年级和需要的课程",
  "Send Message → 发送留言": "发送留言 →",
  "Sending… 发送中": "发送中…",
  "Office Hours": "办公时间",
  "Find Us": "地址",
  "Location & Contact": "地址与联系方式",
  "84 Bowery, 3FL New York, NY 10013": "纽约市包厘街 84 号 3 楼，NY 10013",

  "Information We Collect": "我们收集的信息",
  "How We Use Information": "我们如何使用信息",

  "Class Schedules": "课程时间表",
  "Spring 2026 Saturday Schedule": "2026 春季周六课程表",
  "Saturday Classes · 星期六課程": "周六课程 · 星期六课程",
  "Category": "类别",
  "Details": "详情",
  "Schedule": "时间",
  "ELA (Reading & Writing) and Math": "ELA 阅读、写作和数学",
  "Class begins:": "开课日期：",
  "Register by": "请于以下日期前报名",
  "to receive a discount off the regular rate.": "即可享受常规价格折扣。",
  "Time": "时间",
  "Duration": "时长",
  "Location": "地址",
  "Early bird by": "早鸟截止",
  "off": "优惠",
  "Sat": "周六",

  "Years Teaching": "年教学经验",
  "Programs Offered": "课程项目",
  "Grade Range": "年级范围",
  "Page": "第",
};

const textOriginals = new WeakMap<Text, string>();
const attributeOriginals = new WeakMap<Element, Map<string, string>>();
const translatedValues = new Set(Object.values(translations));

function normalize(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function translateValue(value: string) {
  const normalized = normalize(value);
  if (!normalized) return value;

  const translated = translations[normalized];
  if (!translated) return value;

  return value.replace(normalized, translated);
}

function shouldTranslateNode(node: Text) {
  if (!node.nodeValue?.trim()) return false;

  const parent = node.parentElement;
  if (!parent) return false;

  if (parent.closest("[data-no-translate]")) return false;

  return !["SCRIPT", "STYLE", "NOSCRIPT", "TEXTAREA"].includes(parent.tagName);
}

function translateTextNodes(root: HTMLElement, language: SiteLanguage) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      return shouldTranslateNode(node as Text)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });

  const textNodes: Text[] = [];
  let current = walker.nextNode();
  while (current) {
    textNodes.push(current as Text);
    current = walker.nextNode();
  }

  textNodes.forEach((node) => {
    if (!textOriginals.has(node)) {
      textOriginals.set(node, node.nodeValue ?? "");
    }

    const original = textOriginals.get(node) ?? "";
    const nextValue = language === "zh" ? translateValue(original) : original;

    if (node.nodeValue !== nextValue) {
      node.nodeValue = nextValue;
    }
  });
}

function translateAttributes(root: HTMLElement, language: SiteLanguage) {
  const elements = root.querySelectorAll<HTMLElement>("[placeholder], [aria-label], [title], [alt]");
  const attributes = ["placeholder", "aria-label", "title", "alt"];

  elements.forEach((element) => {
    if (element.closest("[data-no-translate]")) return;

    if (!attributeOriginals.has(element)) {
      attributeOriginals.set(element, new Map());
    }

    const originals = attributeOriginals.get(element);
    if (!originals) return;

    attributes.forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (!value) return;

      if (!originals.has(attribute) && !translatedValues.has(normalize(value))) {
        originals.set(attribute, value);
      }

      const original = originals.get(attribute);
      if (!original) return;

      const nextValue =
        language === "zh" ? translateValue(original) : original;

      if (value !== nextValue) {
        element.setAttribute(attribute, nextValue);
      }
    });
  });
}

export function applySiteLanguage(language: SiteLanguage) {
  if (typeof document === "undefined" || !document.body) return;

  document.documentElement.lang = language === "zh" ? "zh-Hans" : "en";
  document.documentElement.dataset.language = language;

  translateTextNodes(document.body, language);
  translateAttributes(document.body, language);
}
