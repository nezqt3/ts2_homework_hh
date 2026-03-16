import type { Genre, Movie, MovieCard, MovieFull } from "./models";
import { Genres } from "./models";
import { filterByGenre } from "./functions";

/**
 * GENRES — readonly tuple
 */
const genres = Genres;

// нельзя менять readonly массив
// @ts-expect-error
genres.push("romance");

// проверка что это именно tuple
const tupleCheck: readonly ["comedy", "drama", "action", "horror", "sci-fi"] =
  Genres;

/**
 * Проверка Genre union
 */

const goodGenre: Genre = "comedy";

// @ts-expect-error
const badGenre: Genre = "romance";

/**
 * filterByGenre принимает только Genre
 */

const movies: Movie[] = [
  {
    id: 1,
    title: "Movie",
    year: 2020,
    rating: 8,
    genre: "comedy",
  },
];

filterByGenre(movies, "comedy");

// @ts-expect-error
filterByGenre(movies, "romance");

/**
 * MovieCard содержит только нужные поля
 */

const card: MovieCard = {
  id: 1,
  title: "Test",
  year: 2020,
  rating: 9,
};

// @ts-expect-error
card.genre = "comedy";

/**
 * MovieFull readonly
 */

const movieFull: MovieFull = {
  id: 1,
  title: "Test",
  year: 2020,
  rating: 10,
  genre: "drama",
};

// @ts-expect-error
movieFull.title = "Changed";
