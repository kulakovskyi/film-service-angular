import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieApiService} from "../../../../shared/services/movie-api.service";
import {DataResultsInterface} from "../../../../shared/types/data.interface";
import {CarouselConfig} from "ngx-bootstrap/carousel";
import {Subscription} from "rxjs";
import {OwlOptions} from "ngx-owl-carousel-o";


@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  providers: [{ provide: CarouselConfig, useValue: { interval: 1000 } }]
})
export class BannerComponent implements OnInit, OnDestroy{

  bannerResults!: DataResultsInterface[]
  bSub$!: Subscription
  swiper!: any

  constructor(private movieService: MovieApiService) {
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: true,
    autoplaySpeed: 3000,
    autoplayTimeout: 3000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }


  ngOnInit() {
    this.bSub$ = this.movieService.getBannerData().subscribe(res => {
      this.bannerResults = res.results
    })

  }

  ngOnDestroy() {
    this.bSub$.unsubscribe()
  }

  getShortenedOverview(overview: string, maxLength: number): string {
    if (overview.length <= maxLength) {
      return overview;
    } else {
      return overview.substring(0, maxLength) + '...';
    }
  }

}
