export default function Home() {
  return (
    <main className="min-h-screen bg-white text-black flex flex-col items-center justify-center px-6">
      <h1 className="text-6xl font-extrabold tracking-tight">
        ProblemRadar
      </h1>

      <p className="mt-5 max-w-2xl text-center text-xl text-gray-600">
        Stop guessing what to build.
        <br />
        Start with evidence.
      </p>

      <div className="mt-12 w-full max-w-2xl">
        <input
          type="text"
          placeholder="Search any topic..."
          className="w-full rounded-xl border border-gray-300 px-5 py-4 text-lg outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      <button
        className="mt-6 rounded-xl bg-black px-8 py-4 text-lg font-semibold text-white hover:bg-gray-800"
      >
        Find Problems
      </button>

      <p className="mt-12 text-sm text-gray-500">
        Powered by evidence, not guesses.
      </p>
    </main>
  );
}