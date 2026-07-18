type ProblemCardProps = {
  title: string;
  mentions: number;
  evidence: string;
  source: string;
};

export default function ProblemCard({
  title,
  mentions,
  evidence,
  source,
}: ProblemCardProps) {
  return (
    <div className="rounded-xl border border-gray-700 bg-[#141416] p-6">
      <h2 className="text-xl font-bold">{title}</h2>

      <p className="mt-2 text-indigo-400">
        {mentions} mentions
      </p>

      <p className="mt-4 text-gray-300">
        "{evidence}"
      </p>

      <p className="mt-4 text-sm text-gray-500">
        Source: {source}
      </p>
    </div>
  );
}