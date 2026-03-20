import { router } from "@/server/trpc";
import { episodeRouter } from "./episode";

export const appRouter = router({
  episodes: episodeRouter,
});

export type AppRouter = typeof appRouter;
