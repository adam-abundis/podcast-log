"use client";

import { trpc } from "@/lib/trpc";

export function EpisodeList() {
  const { data: episodes = [], isLoading } = trpc.episodes.getAll.useQuery();

  if (isLoading) return <p>Loading...</p>;
  if (!episodes.length) return <p>No episodes found</p>;

  return (
    <ul className="flex flex-col gap-4">
      {episodes.map((episode) => (
        <li key={episode.id} className="p-4 border rounded-lg">
          <h2 className="font-medium">{episode.title}</h2>
          <p className="text-sm text-zinc-600">{episode.description}</p>
          <span className="text-xs text-zinc-400">{episode.status}</span>
        </li>
      ))}
    </ul>
  );
}
