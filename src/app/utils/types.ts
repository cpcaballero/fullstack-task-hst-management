export interface FilmProps {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  created: string;
  edited: string;
  url: string;
}

export interface CharacterProps {
  name: string;
  height: string; // Height in centimeters
  mass: string; // Mass in kilograms
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string; // Format: "YYYYBBY"
  gender: string; // "male", "female", etc.
  homeworld: string; // URL to homeworld
  films: string[]; // Array of film URLs
  species: string[]; // Array of species URLs
  vehicles: string[]; // Array of vehicle URLs
  starships: string[]; // Array of starship URLs
  created: string; // Date created
  edited: string; // Date edited
  url: string; // URL to the character
}
