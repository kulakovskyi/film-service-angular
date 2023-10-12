import {NgModule} from "@angular/core";
import {HomeComponent} from "./components/home/home.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MovieApiService} from "../../shared/services/movie-api.service";
import {BannerComponent} from './components/banner/banner.component';
import {CarouselModule} from "ngx-bootstrap/carousel";
import {TrendMoviesComponent} from './components/trend-movies/trend-movies.component';
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {ComedyMoviesComponent} from './components/comedy-movies/comedy-movies.component';
import {ActionMoviesComponent} from './components/action-movies/action-movies.component';
import {AdventureMoviesComponent} from './components/adventure-movies/adventure-movies.component';
import {AnimationMoviesComponent} from './components/animation-movies/animation-movies.component';
import {DocumentaryMoviesComponent} from './components/documentary-movies/documentary-movies.component';
import {ScienceMoviesComponent} from './components/science-movies/science-movies.component';
import {TrillerMoviesComponent} from './components/triller-movies/triller-movies.component';


@NgModule({
    declarations: [
        HomeComponent,
        BannerComponent,
        TrendMoviesComponent,
        ComedyMoviesComponent,
        ActionMoviesComponent,
        AdventureMoviesComponent,
        AnimationMoviesComponent,
        DocumentaryMoviesComponent,
        ScienceMoviesComponent,
        TrillerMoviesComponent],

    imports: [
        CommonModule,
        RouterModule.forChild([
            {path: '', component: HomeComponent}
        ]),
        CarouselModule.forRoot(),
    ],

    providers: [MovieApiService]

})

export class HomeModule {
}
