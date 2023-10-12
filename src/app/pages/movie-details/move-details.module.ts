import {NgModule} from "@angular/core";
import {MovieDetailsComponent} from "./components/movie-details/movie-details.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {MovieInfoService} from "../../shared/services/movie-info.service";

@NgModule({
  declarations:[
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:':id', component: MovieDetailsComponent}
    ])
  ],
  providers:[MovieInfoService]
})

export class MoveDetailsModule{}