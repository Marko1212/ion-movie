import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http:  HttpClient) { }
/* 
  getUsers() {
    //on transforme l'Observable en Promise, parce que par défaut
    //la méthode retourne un Observable
    //Site web : https://randomuser.me/
    //l'API correspondante : https://randomuser.me/api/
    return this.http.get(`https://randomuser.me/api/?results=100`).toPromise();
  } */

  getPopularMovies() {
    //on transforme l'Observable en Promise, parce que par défaut
    //la méthode retourne un Observable
    //Site web : https://randomuser.me/
    //l'API correspondante : https://randomuser.me/api/
    return this.http.get('https://api.themoviedb.org/3/movie/popular?api_key=9289c923c40615789ad8475b87f1347f&language=en-US&page=1').toPromise();
  }

 
}
