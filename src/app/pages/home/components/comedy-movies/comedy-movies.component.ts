import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {MovieApiService} from "../../../../shared/services/movie-api.service";

@Component({
  selector: 'app-comedy-movies',
  templateUrl: './comedy-movies.component.html',
  styleUrls: ['./comedy-movies.component.scss']
})
export class ComedyMoviesComponent implements OnInit{
  comedyMoviesResults$!: Observable<DataResultsInterface[]>

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.comedyMoviesResults$ = this.movieService.getComedyMovie()
  }

}
