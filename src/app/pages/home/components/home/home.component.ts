import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {MovieApiService} from "../../../../shared/services/movie-api.service";
import {DataInterface, DataResultsInterface} from "../../../../shared/types/data.interface";
import {Observable, Subscription} from "rxjs";


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
