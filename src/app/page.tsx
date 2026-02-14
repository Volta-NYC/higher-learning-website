export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">
          Higher Learning NYC
        </h1>
        <p className="max-w-2xl text-lg text-zinc-600">
          32+ years of academic excellence helping students succeed in SHSAT,
          SAT, and advanced academic programs.
        </p>
        <div className="flex gap-4 pt-4">
          <button className="rounded-md bg-black px-6 py-3 text-white">
            View Courses
          </button>
          <button className="rounded-md border px-6 py-3">
            Contact Us
          </button>
        </div>
      </section>
    </main>
  );
}
