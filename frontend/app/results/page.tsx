import ProblemCard from "@/components/ProblemCard";
import { mockProblems } from "@/lib/mockData";
import StatsCard from "@/components/StatsCard";

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


        
      
         <div className="mt-10 grid gap-6 md:grid-cols-4">

          <StatsCard
            label="Opportunity"
            value={opportunityScore}
            color="text-indigo-400"
          />

          <StatsCard
            label="Mentions"
            value={totalMentions}
          />

          <StatsCard
            label="Problems"
            value={mockProblems.length}
          />

          <StatsCard
            label="Trend"
            value="Growing"
            color="text-green-400"
          />

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