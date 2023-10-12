import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {MovieApiService} from "../../../../shared/services/movie-api.service";

@Component({
  selector: 'app-adventure-movies',
  templateUrl: './adventure-movies.component.html',
  styleUrls: ['./adventure-movies.component.scss']
})
export class AdventureMoviesComponent implements OnInit{

  adventureMoviesResults$!: Observable<DataResultsInterface[]>

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.adventureMoviesResults$ = this.movieService.getAdventureMovie()
  }

}
