import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Observable, Subscription} from "rxjs";
import {MovieApiService} from "../../../../shared/services/movie-api.service";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-trend-movies',
  templateUrl: './trend-movies.component.html',
  styleUrls: ['./trend-movies.component.scss']
})
export class TrendMoviesComponent implements OnInit{

  trendMoviesResults$!: Observable<DataResultsInterface[]>

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 15000,
    stagePadding: 60,
    margin: 30,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
        stagePadding: 30,
        margin: 15,

      },
      670: {
        items: 3
      },
      1024: {
        items: 4
      },
      1270: {
        items: 5
      }
    },
    nav: true
  }

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.trendMoviesResults$ = this.movieService.getTrendMovies()
  }

}
