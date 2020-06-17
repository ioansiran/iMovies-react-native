export class Movie {
  popularity: number | undefined;
  vote_count: number | undefined;
  video: boolean | undefined;
  poster_path: string | undefined;
  id: number | undefined;
  adult: boolean | undefined;
  backdrop_path: string | undefined;
  original_language: string | undefined;
  original_title: string | undefined;
  genre_ids: number[] | undefined;
  title: string | undefined;
  vote_average: number | undefined;
  overview: string | undefined;
  release_date: string | undefined;
}

export class TvShow {
  original_name: string;
  genre_ids: number[];
  name: string;
  popularity: number;
  origin_country: string[];
  vote_count: number;
  first_air_date: string;
  backdrop_path?: any;
  original_language: string;
  id: number;
  vote_average: number;
  overview: string;
  poster_path: string;
}
export class Genre {
  id: number;
  name: string;
}
