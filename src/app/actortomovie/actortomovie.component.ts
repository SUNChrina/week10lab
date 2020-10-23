import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actortomovie',
  templateUrl: './actortomovie.component.html',
  styleUrls: ['./actortomovie.component.css']
})
export class ActortomovieComponent implements OnInit {
  moviesDB: any[] = [];
  actorsDB: any[] = [];
  section = 1;
  title: string = "";
  year: number = 0;

  movieId = "";
  actorId = "";
  movieTitle = "";
  actorName= "";

  constructor(private db: DatabaseService, private router: Router) { }

  ngOnInit(){
    this.getActors();
    this.getMovies();
  }
  

  getActors(){
    this.db.getActors().subscribe((data: any[]) => {
      this.actorsDB=data;
    })

  }

  getMovies(){
    this.db.getMovies().subscribe((data: any[]) => {
      this.moviesDB=data;
    })

  }

  saveMovieID(movieId, movieName){
    this.movieId = movieId;
    this.movieTitle = movieName;

  }

  saveActorID(ActorId, actorName){
    this.actorId = ActorId;
    this.actorName = actorName;

  }

  addMovietoActor(){
    let movie = {id: this.movieId};
    let actor = {id: this.actorId};
    console.log(movie, actor);

    this.db.addMovieToActor(this.actorId, movie).subscribe(data=> {

    this.db.addActorToMovie(this.movieId, actor).subscribe(data=> {
      this.getActors();
      this.getMovies();

      this.router.navigate(["/listmovies"]);
    })    
    })
  }
}
