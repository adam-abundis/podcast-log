"use client";

import { EpisodeCard } from "@/components/episodes/EpisodeCard";
import { trpc } from "@/lib/trpc";

export function EpisodeList() {
  const { data: episodes = [], isLoading } = trpc.episodes.getAll.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!episodes.length) return <p>No episodes found</p>;

  return (
    <ul className="flex flex-col gap-4">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.id} episode={episode} />
      ))}
    </ul>
  );
}
