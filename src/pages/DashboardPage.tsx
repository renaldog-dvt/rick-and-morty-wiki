import { useQuery } from "@tanstack/react-query";
import CharacterCard from "../components/display/CharacterCard";
import EpisodesCard from "../components/display/EpisodesCard";
import LocationCard from "../components/display/LocationCard";
import CharacterSearch from "../components/filter/CharacterSearch";
import { useAppStore } from "../store/useAppStore";
import type { Character } from "../types/character";
import type { Episode } from "../types/episode";
import type { Location } from "../types/location";
import { API_BASE_URL, CHARACTER_ENDPOINT, EPISODE_ENDPOINT, LOCATION_ENDPOINT } from "../constants/Endpoints";

export default function DashboardPage() {
    const character: Character = useAppStore((state) => state.character);
    const location: Location = useAppStore((state) => state.location);
    const episodes: Episode[] = useAppStore((state) => state.episodes);

    const fetchCharacterApi = (character: Character) => {
        return fetch(`${API_BASE_URL}${CHARACTER_ENDPOINT}/${character}`)
        .then((response) => response.json());
    }

    const fetchCharacter = useQuery(
        {
            queryKey: ['character'], 
            queryFn: () => fetchCharacterApi(character)
        });

    const fetchLocationApi = (locationId: number) => {
        return fetch(`${API_BASE_URL}${LOCATION_ENDPOINT}/${locationId}`)
        .then((response) => response.json());
    }

    const fetchLocation = useQuery(
        {
            queryKey: ['location'], 
            queryFn: () => fetchLocationApi(character.location.id)
        });

    const getEpisodeIdsFromUrls = (episodeUrls: string[]): string => {
        return episodeUrls
            .map((url) => url.split("/").pop() ?? "")
            .filter(Boolean)
            .join(",");
    }

    const fetchEpisodesApi = (episodes: string[]) => {
        const episodeIds: string = getEpisodeIdsFromUrls(episodes);
        return fetch(`${API_BASE_URL}${EPISODE_ENDPOINT}/${episodeIds}`)
        .then((response) => response.json())
        .then((data) => (Array.isArray(data) ? data : [data]));
    }

    const fetchEpisodes = useQuery(
        {
            queryKey: ['location'], 
            queryFn: () => fetchEpisodesApi(character.episodes)
        });


  return (
    <main className="flex flex-col gap-2 h-full w-full shadow-md">
      <header className="bg-base-100 flex flex-col gap-2 max-h-max w-full p-2 ">
        <h1>Character Selection</h1>
        <CharacterSearch />
      </header>
      <div className="flex flex-col h-full w-full flex flex-row gap-2 p-2">
        <section className="bg-base-100 w-1/2 p-2">
          <h1>Character Details</h1>
          <CharacterCard />
        </section>
        <div className="flex flex-col gap-2 w-1/2">
          <section className="bg-base-100 p-2">
            <h1>Location Details</h1>
            <LocationCard />
          </section>
          <section className="bg-base-100 p-2">
            <h1>Episode Details</h1>
            <EpisodesCard />
          </section>
        </div>
      </div>
    </main>
  );
}
