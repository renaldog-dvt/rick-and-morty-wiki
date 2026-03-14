import type { Location } from './location';
// import type { Episode } from './episode';

export interface Character {
    id: number;
    name: string;
    status: string;
    species: string;
    gender: string;
    location: Location;
    episodes: string[];//Episode[];
    image: string;
}