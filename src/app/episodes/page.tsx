import { EpisodeList } from "@/components/episodes/EpisodeList";
import { AddEpisodeForm } from "@/components/episodes/AddEpisodeForm";

export default function EpisodePage() {
  return (
    <main className="max-w-3xl mx-auto p-8">
      <h1 className="text-2xl font-semibold mb-6">Episodes</h1>
      <AddEpisodeForm />
      <div className="mt-8">
        <EpisodeList />
      </div>
    </main>
  );
}
