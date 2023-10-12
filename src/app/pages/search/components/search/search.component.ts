import {Component, OnInit} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {FormControl, FormControlName, FormGroup, Validators} from "@angular/forms";
import {SearchMovieService} from "../../../../shared/services/search-movie.service";
import {SearchFormInterface} from "../../../../shared/types/search-form.interface";
import {SearchResponseResults} from "../../../../shared/types/search-response.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit{

  searchForm!: FormGroup
  searchResults!: SearchResponseResults[]

  constructor(private title: Title,
              private searchMovieService: SearchMovieService) {
  }

  ngOnInit() {
    this.title.setTitle('Search');
    this.initialForm()
  }

  initialForm(){
    this.searchForm = new FormGroup({
      movieName: new FormControl(null, [Validators.required])
    })
  }

  submitForm() {
    const formValue: SearchFormInterface = {...this.searchForm.value}
    this.searchMovieService.getSearchMovie(formValue.movieName).subscribe(res => {
      this.searchResults = res.results
      console.log(this.searchResults)

    })
  }
}
