import { fetchAPI } from "./api";
import { FilmProps } from "./types";

export const fetchCharacters = async (
  page: number,
  filters: {
    gender?: string;
    homeworld?: string;
  },
  searchQuery: string
) => {
  let url = `https://swapi.dev/api/people/?page=${page}`;

  if (searchQuery) url += `&search=${searchQuery}`;
  if (filters.gender) url += `&gender=${filters.gender}`;
  if (filters.homeworld) url += `&homeworld=${filters.homeworld}`;

  return await fetchAPI(url);
};

export const fetchFilmData = async (
  filmUrls: string[]
): Promise<FilmProps[]> => {
  const filmPromises = filmUrls.map(async (url) => {
    return await fetchAPI(url);
  });
  return Promise.all(filmPromises);
};
