import { router } from "@/server/trpc";
import { episodeRouter } from "./episode";

export const appRouter = router({
  episode: episodeRouter,
});

export type AppRouter = typeof appRouter;
