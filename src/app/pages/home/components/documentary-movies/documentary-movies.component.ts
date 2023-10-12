import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {MovieApiService} from "../../../../shared/services/movie-api.service";

@Component({
  selector: 'app-documentary-movies',
  templateUrl: './documentary-movies.component.html',
  styleUrls: ['./documentary-movies.component.scss']
})
export class DocumentaryMoviesComponent implements OnInit{

  documentaryMoviesResults$!: Observable<DataResultsInterface[]>

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.documentaryMoviesResults$ = this.movieService.getDocumentaryMovie()
  }


}
