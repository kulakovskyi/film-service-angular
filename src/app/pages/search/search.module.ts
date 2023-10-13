import {NgModule} from "@angular/core";
import {SearchComponent} from "./components/search/search.component";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SearchMovieService} from "../../shared/services/search-movie.service";
import {LoaderComponent} from "../../shared/blocks/loader/loader.component";

@NgModule({
  declarations: [
    SearchComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '', component: SearchComponent}
    ]),
      FormsModule,
      ReactiveFormsModule
  ],
  providers:[SearchMovieService]
})


export class SearchModule{}
