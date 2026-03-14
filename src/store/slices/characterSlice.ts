import type { StoreApi } from "zustand";
import type { AppState } from "../useAppStore";

export const createCharacterSlice = (set: StoreApi<AppState>["setState"]) => ({
    character: {id: 0},
    setCharacter: () => set((state: AppState) => ({ character: state.character })),
  });