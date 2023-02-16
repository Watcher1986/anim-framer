export const getMoviesByGenre = (movies, genre) => {
  return genre === 0
    ? movies
    : movies?.filter(({ genre_ids }) => genre_ids.includes(genre));
};
