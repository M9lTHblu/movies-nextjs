export type Movie = {
  id: number,
  title: string,
  year: number,
  actors: string[],
  id_kinopoisk: number,
  description: string,
  genres: string[],
  directors: string[],
  collapse: {duration: string[]},
}

export type Movies = {
  movies: Movie[]
}
