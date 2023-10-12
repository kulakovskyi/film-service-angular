import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieApiService} from "../../../../shared/services/movie-api.service";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {CarouselConfig} from "ngx-bootstrap/carousel";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 1000 } }]
})
export class BannerComponent implements OnInit, OnDestroy{

  bannerResults!: DataResultsInterface[]
  bSub$!: Subscription

  constructor(private movieService: MovieApiService) {
  }

  ngOnInit() {
    this.bSub$ = this.movieService.getBannerData().subscribe(res => {
      this.bannerResults = res.results
    })
  }

  ngOnDestroy() {
    this.bSub$.unsubscribe()
  }

}
