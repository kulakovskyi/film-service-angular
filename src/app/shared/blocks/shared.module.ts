import {NgModule} from "@angular/core";
import {LoaderComponent} from "./loader/loader.component";
import {CommonModule} from "@angular/common";

@NgModule({
  imports:[
    CommonModule,

  ],
  declarations:[LoaderComponent],
  exports:[LoaderComponent]
})

export class SharedModule{}
