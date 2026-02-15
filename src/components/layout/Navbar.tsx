"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-xl font-bold">
          Higher Learning
        </Link>

        <div className="flex gap-6 text-sm font-medium">
          <Link href="/courses">Courses</Link>
          <Link href="/class-schedules">Schedules</Link>
          <Link href="/teachers">Teachers</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
