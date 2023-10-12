import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {MovieApiService} from "../../../../shared/services/movie-api.service";

@Component({
  selector: 'app-triller-movies',
  templateUrl: './triller-movies.component.html',
  styleUrls: ['./triller-movies.component.scss']
})
export class TrillerMoviesComponent implements OnInit{

  trillerMoviesResults$!: Observable<DataResultsInterface[]>

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.trillerMoviesResults$ = this.movieService.getTrillerMovie()
  }


}
