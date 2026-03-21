"use client";

import { trpc } from "@/lib/trpc";
import { Episode } from "@/lib/validators";

export function EpisodeCard({ episode }: { episode: Episode }) {
  const utils = trpc.useUtils();

  const { mutate: publishEpisode } = trpc.episodes.publish.useMutation({
    onSuccess: () => {
      utils.episodes.getAll.invalidate();
    },
  });

  return (
    <li className="p-4 border rounded-lg flex justify-between items-start">
      <div>
        <h2 className="font-medium">{episode.title}</h2>
        <p className="text-sm text-zinc-600 mt-1 break-words max-w-sm">{episode.description}</p>
        <span className="text-xs text-zinc-400">{episode.status}</span>
      </div>
      {episode.status === "draft" && (
        <button
          onClick={() => publishEpisode({ id: episode.id })}
          className="px-3 py-1 text-sm border rounded-lg hover:bg-zinc-50"
        >
          Publish
        </button>
      )}
    </li>
  );
}
