import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  movie : any = {};
  //si on met juste : user; là c'est comme si on écrivait : user = null; mieux vaut éviter celà
  // on type user avec any
  //puis on initialise l'objet user comme un objet vide

  constructor(private router: Router) { }

  ngOnInit() {
    console.log(this.router.getCurrentNavigation().extras.state.keyMovie);

    this.movie = this.router.getCurrentNavigation().extras.state.keyMovie;

  }

}

