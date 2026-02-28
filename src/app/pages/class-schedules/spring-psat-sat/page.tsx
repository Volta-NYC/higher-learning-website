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

const SESSION_DATES = [
  { date: "Jan 24", day: "Sat", month: "Jan" },
  { date: "Jan 31", day: "Sat", month: "Jan" },
  { date: "Feb 7",  day: "Sat", month: "Feb" },
  { date: "Feb 28", day: "Sat", month: "Feb" },
  { date: "Mar 7",  day: "Sat", month: "Mar" },
  { date: "Mar 14", day: "Sat", month: "Mar" },
  { date: "Mar 21", day: "Sat", month: "Mar" },
  { date: "Mar 28", day: "Sat", month: "Mar" },
  { date: "Apr 11", day: "Sat", month: "Apr" },
  { date: "Apr 18", day: "Sat", month: "Apr" },
  { date: "Apr 25", day: "Sat", month: "Apr" },
  { date: "May 2",  day: "Sat", month: "May" },
  { date: "May 9",  day: "Sat", month: "May" },
  { date: "May 16", day: "Sat", month: "May" },
];

const MONTH_COLORS: Record<string, { bg: string; border: string; text: string }> = {
  Jan: { bg: "rgba(200,146,42,0.12)", border: "rgba(200,146,42,0.3)", text: "#c8922a" },
  Feb: { bg: "rgba(15,32,68,0.08)",   border: "rgba(15,32,68,0.2)",   text: "#0f2044" },
  Mar: { bg: "rgba(200,146,42,0.08)", border: "rgba(200,146,42,0.2)", text: "#a87828" },
  Apr: { bg: "rgba(15,32,68,0.06)",   border: "rgba(15,32,68,0.15)",  text: "#162a58" },