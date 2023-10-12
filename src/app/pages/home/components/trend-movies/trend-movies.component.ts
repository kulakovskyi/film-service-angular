import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MovieApiService} from "../../../../shared/services/movie-api.service";
import {DataResultsInterface} from "../../../../shared/types/data.interface";

@Component({
  selector: 'app-trend-movies',
  templateUrl: './trend-movies.component.html',
  styleUrls: ['./trend-movies.component.scss']
})
export class TrendMoviesComponent implements OnInit{

  trendMoviesResults$!: Observable<DataResultsInterface[]>

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.trendMoviesResults$ = this.movieService.getTrendMovies()
  }

}
