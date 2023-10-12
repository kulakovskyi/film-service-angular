import {NgModule} from "@angular/core";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {CommonModule} from "@angular/common";
import {RouterLink} from "@angular/router";

@NgModule({
  declarations: [NavbarComponent],

  imports: [
    CommonModule,
    RouterLink
  ],

  exports: [NavbarComponent]
})

export class NavbarModule{}
