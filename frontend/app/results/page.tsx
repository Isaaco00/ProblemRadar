export default function ResultsPage() {
  return (
    <main className="min-h-screen p-10">

      <h1 className="text-5xl font-bold">
        Problem Results
      </h1>

      <p className="mt-4 text-gray-600">
        This is where validated problems will appear.
      </p>

      <div className="mt-12 rounded-xl border p-6">

        <h2 className="text-2xl font-bold">
          Meal planning takes too much time
        </h2>

        <p className="mt-3">
          Evidence Count: 327
        </p>

        <p className="mt-2">
          Opportunity Score: 9.2 / 10
        </p>

      </div>

    </main>
  );
}