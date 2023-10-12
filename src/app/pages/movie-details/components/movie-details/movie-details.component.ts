import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {MovieInfoService} from "../../../../shared/services/movie-info.service";
import {Subscription} from "rxjs";
import {MovieInfoInterface} from "../../../../shared/types/movie-info.interface";
import {MovieInterface} from "../../../../shared/types/movie.interface";
import {cast, MovieCastInterface} from "../../../../shared/types/movie-cast.interface";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit{

  getMovieDetailResult!: MovieInfoInterface
  getMovieVideoResult! : MovieInterface
  movieVideoResultKey! : string
  getMovieCastResult! : MovieCastInterface
  movieCastResultCasts!: cast[]
  constructor(private route: ActivatedRoute,
              private movieInfoService: MovieInfoService,
              private title: Title,
              private router: Router
              ) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0);
      }
    });
    let getParamId: string | null = this.route.snapshot.paramMap.get('id');
    this.getMovie(getParamId)
    this.getVideo(getParamId)
    this.getMovieCast(getParamId)
  }

  getMovie(id: string | null ){
    this.movieInfoService.getMovieDetails(id).subscribe((res: MovieInfoInterface ) => {
      this.getMovieDetailResult =  res;
      this.title.setTitle(`${this.getMovieDetailResult.original_title} | ${this.getMovieDetailResult.tagline}`)
    })
  }

  getVideo(id: string | null){
    this.movieInfoService.getMovieVideo(id).subscribe(res => {
      this.getMovieVideoResult = res
      res.results.forEach((element) => {
        if(element.type=="Trailer")
        {
          this.movieVideoResultKey = element.key;
        }
      });
    })
  }

  getMovieCast(id:string | null) {
    this.movieInfoService.getMovieCast(id).subscribe((res)=>{
      this.getMovieCastResult = res;
      this.movieCastResultCasts = res.cast
    });
  }
}
