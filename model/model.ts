export class Movie {
  popularity: number = 0;
  vote_count: number = 0;
  video: boolean = false;
  poster_path: string = '';
  id: number = 0;
  adult: boolean = false;
  backdrop_path: string = '';
  original_language: string = '';
  original_title: string = '';
  genre_ids: number[] = [];
  title: string = '';
  vote_average: number = 0;
  overview: string = '';
  release_date: string = '';
}

export class TvShow {
  original_name: string = '';
  genre_ids: number[] = [];
  name: string = '';
  popularity: number = 0;
  origin_country: string[] = [];
  vote_count: number = 0;
  first_air_date: string = '';
  backdrop_path?: any;
  original_language: string = '';
  id: number = 0;
  vote_average: number = 0;
  overview: string = '';
  poster_path: string = '';
}
export class Genre {
  id: number = 0;
  name: string = '';
}
