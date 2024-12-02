import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PopularMoviesResponse } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=31a52518ebb0142bb261a1a66a7fb144`;
    return this.http.get<PopularMoviesResponse>(url);
  }


}
