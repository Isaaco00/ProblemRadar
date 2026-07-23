import ProblemCard from "@/components/ProblemCard";
import { mockProblems } from "@/lib/mockData";

export default async function ResultsPage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const params = await searchParams;
  const topic = params.topic ?? "Unknown Topic";

  const totalMentions = mockProblems.reduce(
    (sum, problem) => sum + problem.mentions,
    0
  );

  const opportunityScore = Math.min(
    100,
    Math.round(totalMentions / 6)
  );

  return (
    <main className="min-h-screen bg-[#0B0B0C] text-white px-8 py-12">

      <div className="mx-auto max-w-5xl">

        <a
          href="/"
          className="text-indigo-400 hover:underline"
        >
          ← Back
        </a>

         <div className="mt-8">

          <p className="text-indigo-400 font-medium uppercase tracking-widest">
            Research Results
          </p>

          <h1 className="mt-3 text-6xl font-extrabold">
            {topic}
          </h1>

          <p className="mt-5 max-w-2xl text-lg text-gray-400 leading-8">
            We analyzed hundreds of real discussions across communities to
            uncover recurring pain points and opportunities before you build.
          </p>

        </div>


        
      
         <div className="mt-10 grid grid-cols-4 gap-6">

          <div className="rounded-2xl border border-gray-800 bg-[#151517] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">
            <p className="text-gray-400">Opportunity</p>
            <h3 className="mt-2 text-4xl font-bold text-indigo-400">
              {opportunityScore}
            </h3>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#151517] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">
            <p className="text-gray-400">Mentions</p>
            <h3 className="mt-2 text-4xl font-bold">
              {totalMentions}
            </h3>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#151517] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">
            <p className="text-gray-400">Problems</p>
            <h3 className="mt-2 text-4xl font-bold">
              {mockProblems.length}
            </h3>
          </div>

          <div className="rounded-2xl border border-gray-800 bg-[#151517] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/10">
            <p className="text-gray-400">Trend</p>
            <h3 className="mt-2 text-4xl font-bold text-green-400">
              Growing
            </h3>
          </div>

        </div>

        <div className="mt-12 space-y-6">

          {mockProblems.map((problem) => (
        <ProblemCard
          key={problem.id}
          title={problem.title}
          mentions={problem.mentions}
          evidence={problem.evidence}
          source={problem.source}
          score={problem.score}
          pain={problem.pain}
          trend={problem.trend}
        />
          ))}

        </div>

      </div>

    </main>
  );
}