import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../shared/services/movies.service';
import { Movie } from '../../shared/models/movie';

@Component({
  selector: 'app-popular-movies',
  standalone: true,
  imports: [],
  templateUrl: './popular-movies.component.html',
  styleUrl: './popular-movies.component.scss'
})
export class PopularMoviesComponent implements OnInit {

  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) { }


  ngOnInit(): void {
    this.moviesService.getPopularMovies().subscribe({
      next: (response: any) => {
        console.log("todobienpajaro!", response);

        this.movies = response.results;
      },
      error: (error: any) => {
        console.log(error);
      }
    })
  }

}
