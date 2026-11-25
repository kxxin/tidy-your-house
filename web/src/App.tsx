import { ComingSoonCard } from './components/ComingSoonCard'

function App() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Tidy Your House</h1>
          <p className="mt-2 text-slate-600 dark:text-slate-300">
            A first-person 3D tidy-up game made in Unity, running inside a React page.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-[1fr_16rem]">
          <ComingSoonCard />
          <aside className="space-y-4">
            <section className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800">
              <h2 className="font-semibold">House progress</h2>
              <p className="text-sm text-slate-500">Coming in week 3</p>
            </section>
            <section className="rounded-xl bg-white p-4 shadow-sm dark:bg-slate-800">
              <h2 className="font-semibold">Leaderboard</h2>
              <p className="text-sm text-slate-500">Coming in week 4</p>
            </section>
          </aside>
        </div>
      </div>
    </main>
  )
}

export default App
