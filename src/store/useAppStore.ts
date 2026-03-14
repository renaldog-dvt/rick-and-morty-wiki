import { create } from "zustand"
import type { Character } from "../types/character";
import type { Location } from "../types/location";
import type { Episode } from "../types/episode";
import { createCharacterSlice } from "./slices/characterSlice";
import { createEpisodesSlice } from "./slices/episodeSlice";
import { createLocationSlice } from "./slices/locationSlice";

export type AppState = {
    character: Character,
    location: Location,
    episodes: Episode[],
    setCharacter: (nextCharacter: Character) => void,
    setLocation: (nextLocation: Location) => void,
    setEpisodes: (nextEpisodes: Episode[]) => void
}

export const useAppStore = create<AppState>()((set) => ({
    ...createCharacterSlice(set),
    ...createEpisodesSlice(set),
    ...createLocationSlice(set),
  }));