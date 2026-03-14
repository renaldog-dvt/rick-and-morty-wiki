import CharacterCard from "../components/display/CharacterCard";
import EpisodesCard from "../components/display/EpisodesCard";
import LocationCard from "../components/display/LocationCard";
import CharacterSearch from "../components/filter/CharacterSearch";
import { useAppStore } from "../store/useAppStore";
import type { Character } from "../types/character";
import type { Episode } from "../types/episode";
import type { Location } from "../types/location";

export default function DashboardPage() {
    const character: Character = useAppStore((state) => state.character);
    const location: Location = useAppStore((state) => state.location);
    const episodes: Episode[] = useAppStore((state) => state.episodes);

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
