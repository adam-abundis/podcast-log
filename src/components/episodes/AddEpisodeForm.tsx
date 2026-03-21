"use client";

import { useState } from "react";
import { trpc } from "@/lib/trpc";

export function AddEpisodeForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const utils = trpc.useUtils();

  const { mutate: addEpisode } = trpc.episodes.add.useMutation({
    onSuccess: () => {
      utils.episodes.getAll.invalidate();
      setTitle("");
      setDescription("");
    },
  });

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        e.preventDefault();
        if (!title.trim()) return;
        addEpisode({
          id: crypto.randomUUID(),
          title,
          description,
          status: "draft",
        });
      }}
    >
      <h2 className="text-lg font-medium">Add Episode</h2>
      <div className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Title</span>
          <input
            className="w-full border rounded-lg px-3 py-2"
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label className="flex flex-col gap-1">
          <span className="text-sm font-medium">Description</span>
          <input
            className="w-full border rounded-lg px-3 py-2"
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <button className="px-4 py-2 bg-black text-white rounded-lg" type="submit">
        Add Episode
      </button>
    </form>
  );
}
