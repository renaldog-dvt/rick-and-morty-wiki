import type { StoreApi } from "zustand";
import type { AppState } from "../useAppStore";

export const createLocationSlice = (set: StoreApi<AppState>["setState"]) => ({
    location: {id: 0},
    setLocation: () => set((state: AppState) => ({ location: state.location })),
  });