import { EpisodeList } from "@/components/episodes/EpisodeList";

export default function EpisodePage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Episodes</h1>
      <EpisodeList />
    </main>
  );
}
