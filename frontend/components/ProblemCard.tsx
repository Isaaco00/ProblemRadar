type ProblemCardProps = {
  title: string;
  mentions: number;
  evidence: string;
  source: string;
  score: string;
  pain: string;
  trend: string;
};

export default function ProblemCard({
  title,
  mentions,
  evidence,
  source,
  score,
  pain,
  trend,
}: ProblemCardProps) {
  return (
    <div className="rounded-2xl border border-[#26272B] bg-[#141416] p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-500">

      {/* Header */}
      <div className="flex items-start justify-between">

        <h2 className="text-2xl font-bold max-w-xl">
          {title}
        </h2>

        <span className="rounded-full bg-linear-to-r from-indigo-500 to-purple-600 px-4 py-2 text-sm font-semibold shadow-lg">
          {score}/10
        </span>

      </div>

      {/* Evidence Quote */}
      <p className="mt-6 text-lg leading-8 italic text-gray-300">
        "{evidence}"
      </p>

      {/* Badges */}
      <div className="mt-6 flex flex-wrap gap-3">

        <span className="rounded-full bg-gray-800 px-4 py-2 text-sm font-medium">
          📊 {mentions} mentions
        </span>

        <span className="rounded-full bg-red-900/40 px-4 py-2 text-sm font-medium text-red-300">
          🔥 {pain}
        </span>

        <span className="rounded-full bg-green-900/40 px-4 py-2 text-sm font-medium text-green-300">
          📈 {trend}
        </span>

      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between">

        <span className="text-sm text-gray-500">
          Source: {source}
        </span>

        <button className="rounded-xl bg-linear-to-r from-indigo-500 to-purple-600 px-8 py-3 text-sm font-semibold transition-all duration-300 hover:scale-105">
          View Evidence →
        </button>

      </div>

    </div>
  );
}