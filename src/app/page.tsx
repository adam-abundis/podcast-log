export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center
  min-h-screen p-8"
    >
      <h1 className="text-3xl font-semibold tracking-tight">Podcast Log</h1>
      <p className="mt-4 text-zinc-600">Track and manage your podcast episodes.</p>
      <a
        href="/episodes"
        className="mt-8 px-6 py-3 bg-black text-white rounded-full
  hover:bg-zinc-800 transition-colors"
      >
        View Episodes
      </a>
    </main>
  );
}
