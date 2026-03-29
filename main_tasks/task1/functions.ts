import type { Genre, Movie, SortBy, MovieCard } from "./models";

export const filterByGenre = (movies: Movie[], genre: Genre): Movie[] => {
  return movies.filter((movie) => movie.genre === genre);
};

export const sortMovies = (movies: Movie[], by: SortBy): Movie[] => {
  return [...movies].sort((a, b) => {
    const aValue = a[by];
    const bValue = b[by];

    if (typeof aValue === "number" && typeof bValue === "number") {
      return aValue - bValue;
    }

    if (typeof aValue === "string" && typeof bValue === "string") {
      return aValue.localeCompare(bValue);
    }

    return 0;
  });
};

export const toCard = (movie: Movie): MovieCard => {
  return {
    id: movie.id,
    title: movie.title,
    year: movie.year,
    rating: movie.rating,
  };
};
