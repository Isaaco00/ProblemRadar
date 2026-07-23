"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const trendingTopics = [
  "AI Agents",
  "Meal Planning",
  "Study Apps",
  "Fitness",
  "Personal Finance",
  "Remote Work",
];

export default function Home() {
  const router = useRouter();
    const [topic, setTopic] = useState("");
    const [loading, setLoading] = useState(false);

    const loadingMessages = [
      "Analyzing discussions...",
      "Searching Reddit...",
      "Clustering problems...",
      "Calculating opportunity score...",
    ];

    const [messageIndex, setMessageIndex] = useState(0);

async function search() {
  if (!topic.trim() || loading) return;

  setLoading(true);

  let index = 0;

  const interval = setInterval(() => {
    index++;

    if (index < loadingMessages.length) {
      setMessageIndex(index);
    }
  }, 500);

  await new Promise((resolve) => setTimeout(resolve, 2000));

  clearInterval(interval);

  router.push(`/results?topic=${encodeURIComponent(topic)}`);
}

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white">

      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <h1 className="text-2xl font-bold">ProblemRadar</h1>

        <a
          href="https://github.com/Isaaco00/ProblemRadar"
          target="_blank"
          className="rounded-lg border border-[#2A2B31] px-4 py-2 text-sm hover:bg-[#17181C]"
        >
          GitHub
        </a>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-5xl flex-col items-center px-8 pt-24 text-center">

        <div className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
          Evidence-first product research
        </div>

        <h2 className="mt-8 text-6xl font-extrabold leading-tight">
          Discover real problems
          <br />
          worth solving.
        </h2>

        <p className="mt-8 max-w-2xl text-lg text-gray-400">
          Search millions of discussions, reviews and communities to uncover
          evidence-backed opportunities before you build.
        </p>

        {/* Search */}
        <div className="mt-12 flex w-full max-w-3xl gap-4">

          <input
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && search()}
            placeholder="Search 'meal planning', 'fitness', 'job search'..."
            className="flex-1 rounded-xl border border-[#2A2B31] bg-[#141416] px-6 py-4 text-lg outline-none transition focus:border-indigo-500"
          />

          <button
            onClick={search}
            className="rounded-xl bg-indigo-600 px-8 py-4 font-semibold transition hover:bg-indigo-500"
          >
            Find Problems
          </button>

        </div>

      </section>

      {/* Trending */}
      <section className="mx-auto mt-20 max-w-5xl px-8">

        <h3 className="mb-6 text-left text-lg font-semibold text-gray-300">
          Trending Searches
        </h3>

        <div className="flex flex-wrap gap-3">

          {trendingTopics.map((item) => (
            <button
              key={item}
              onClick={() => setTopic(item)}
              className="rounded-full border border-[#2A2B31] bg-[#141416] px-5 py-2 text-sm transition hover:border-indigo-500 hover:text-indigo-300"
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {/* Features */}
      <section className="mx-auto mt-24 grid max-w-6xl gap-6 px-8 pb-24 md:grid-cols-3">

        <div className="rounded-2xl border border-[#26272B] bg-[#141416] p-6">
          <h4 className="text-xl font-semibold">🔎 Evidence</h4>
          <p className="mt-4 text-gray-400">
            Discover recurring problems from real online discussions instead of
            relying on assumptions.
          </p>
        </div>

        <div className="rounded-2xl border border-[#26272B] bg-[#141416] p-6">
          <h4 className="text-xl font-semibold">📈 Opportunity</h4>
          <p className="mt-4 text-gray-400">
            See which problems appear most often and identify opportunities
            backed by evidence.
          </p>
        </div>

        <div className="rounded-2xl border border-[#26272B] bg-[#141416] p-6">
          <h4 className="text-xl font-semibold">💡 Build Smarter</h4>
          <p className="mt-4 text-gray-400">
            Validate ideas before spending months building something nobody
            needs.
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-[#26272B] py-8 text-center text-sm text-gray-500">
        Built from evidence. Not assumptions.
      </footer>

    </main>
  );
}