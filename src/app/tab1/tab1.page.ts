import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  movies: any[] = [];

  page = 1;

  constructor(private movieService: MovieService, private router: Router) { }

  ionViewWillEnter() {

    this.movies = [];

    this.movieService.getPopularMovies().then(movies => 
      {
        console.log(movies);

        //le setTimeout va nous permettre de tester le skeleton
        setTimeout(() => this.movies = movies['results'], 2000); //ou users.results
        
      });


  }

  ngOnInit() {
  
  }

  openMovie(movie) {

    console.log(movie);
    this.router.navigate(['/movie-detail'], {state : {keyMovie: movie}});

  }


}



