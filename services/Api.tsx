import {apiHost, apiKey} from './../config';

export class Api {
  static getTopRatedMovies() {
    return fetch(
      `${apiHost}/movie/top_rated?api_key=${apiKey}`,
    ).then((response) => response.json());
  }

  static getTopRatedTvShows() {
    return fetch(`${apiHost}/tv/top_rated?api_key=${apiKey}`).then((response) =>
      response.json(),
    );
  }

  static getAllGenres() {
    return fetch(
      `${apiHost}/genre/movie/list?language=en&api_key=${apiKey}`,
    ).then((response) => response.json());
  }

  static searchAllMovies(text: string) {
    return fetch(
      `${apiHost}/search/movie/?api_key=${apiKey}&query=${text}`,
    ).then((response) => response.json());
  }

  static searchAllTvShows(text: string) {
    return fetch(
      `${apiHost}/search/tv/?api_key=${apiKey}&query=${text}`,
    ).then((response) => response.json());
  }
}
