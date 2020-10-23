import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../database.service';

@Component({
  selector: 'app-listmovies',
  templateUrl: './listmovies.component.html',
  styleUrls: ['./listmovies.component.css']
})
export class ListmoviesComponent implements OnInit {

  moviesDB: any[] = [];
  selectedMovie = null;

  constructor(private db: DatabaseService) { }

  ngOnInit(): void {
    this.getMovies();
    console.log("Hi From ListMovies ngIOnit");
  }

  getMovies(){
    this.db.getMovies().subscribe((data: any[]) => {
      this.moviesDB=data;
    })

  }

  selectMovie(movie){
    this.selectedMovie = movie;
  }

}
