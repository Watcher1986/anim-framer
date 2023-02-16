import { api_key } from "../db-meta";

export const fetchPopular = async (setMovies, setFiltered) => {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`
  );
  const movies = await response.json();
  setMovies(movies.results);
  setFiltered(movies.results);
};
