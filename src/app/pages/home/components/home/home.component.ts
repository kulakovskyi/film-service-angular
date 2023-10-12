import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {MovieApiService} from "../../../../shared/services/movie-api.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit{

  constructor(private title: Title) {
  }

  ngOnInit() {
    this.title.setTitle('Home');
  }
}
