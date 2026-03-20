import { z } from "zod";

export const EpisodeSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string().optional(),
  url: z.url().optional(),
  publishedAt: z.iso.datetime().optional(),
  status: z.enum(["draft", "published"]),
});

export type Episode = z.infer<typeof EpisodeSchema>;
