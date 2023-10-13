import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {MovieApiService} from "../../../../shared/services/movie-api.service";
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-comedy-movies',
  templateUrl: './comedy-movies.component.html',
  styleUrls: ['./comedy-movies.component.scss']
})
export class ComedyMoviesComponent implements OnInit{
  comedyMoviesResults$!: Observable<DataResultsInterface[]>
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 14000,
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
    this.comedyMoviesResults$ = this.movieService.getComedyMovie()
  }

}
