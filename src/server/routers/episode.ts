import { z } from "zod";
import { router, publicProcedure } from "@/server/trpc";
import { EpisodeSchema } from "@/lib/validators";

const episodes: z.infer<typeof EpisodeSchema>[] = [];

export const episodeRouter = router({
  getAll: publicProcedure.query(() => {
    return episodes;
  }),
  add: publicProcedure.input(EpisodeSchema).mutation(({ input }) => {
    episodes.push(input);
    return input;
  }),
  publish: publicProcedure.input(z.object({ id: z.string() })).mutation(({ input }) => {
    const episode = episodes.find((e) => e.id === input.id);
    if (!episode) throw new Error("Episode not found");
    episode.status = "published";
    episode.publishedAt = new Date().toISOString();
    return episode;
  }),
});
