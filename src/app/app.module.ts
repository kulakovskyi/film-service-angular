import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NavbarModule} from "./shared/blocks/navbar/navbar.module";
import {HttpClientModule} from "@angular/common/http";
import {CarouselModule} from "ngx-bootstrap/carousel";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    AppRoutingModule,
    NavbarModule,
      CarouselModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
