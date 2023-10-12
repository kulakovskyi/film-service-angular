import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {MovieApiService} from "../../../../shared/services/movie-api.service";

@Component({
  selector: 'app-science-movies',
  templateUrl: './science-movies.component.html',
  styleUrls: ['./science-movies.component.scss']
})
export class ScienceMoviesComponent implements OnInit{

  scienceMoviesResults$!: Observable<DataResultsInterface[]>

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.scienceMoviesResults$ = this.movieService.getScienceMovie()
  }

}
