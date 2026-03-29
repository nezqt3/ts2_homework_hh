export interface Movie {
  id: number;
  title: string;
  year: number;
  rating: number;
  genre: Genre;
  description?: string;
  director?: string;
}

export type MovieCard = Pick<Movie, "id" | "title" | "year" | "rating">;
export type MovieFull = Readonly<Movie>;

export const GENRES = [
  "comedy",
  "drama",
  "action",
  "horror",
  "sci-fi",
] as const;

export type Genre = (typeof GENRES)[number];

export type SortBy = "year" | "rating" | "title";

export const GENRE_EMOJI = {
  comedy: "😂",
  drama: "🎭",
  action: "💥",
  horror: "👻",
  "sci-fi": "🚀",
} satisfies GenreMap;

export type GenreMap = {
  [K in Genre]: string;
};
