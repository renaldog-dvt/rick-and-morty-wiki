import type { StoreApi } from "zustand";
import type { AppState } from "../useAppStore";

export const createEpisodesSlice = (set: StoreApi<AppState>["setState"]) => ({
    episodes: [{id: 0}],
    setEpisodes: () => set((state: AppState) => ({ episodes: state.episodes })),
  });