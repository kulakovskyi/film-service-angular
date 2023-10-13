import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {map, Observable, tap} from "rxjs";
import {Environment} from "../../../environment/environment";
import {DataInterface, DataResultsInterface} from "../types/data.interface";

@Injectable({
  providedIn: 'root'
})

export class MovieApiService{

  constructor(private http: HttpClient) {
  }


  getBannerData(): Observable<DataInterface>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/trending/all/week?api_key=${Environment.apikey}`)
  }




  getTrendMovies(): Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/trending/movie/day?api_key=${Environment.apikey}`)
        .pipe(
            map(data => data.results)
        )

  }

  getActionMovie() : Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/discover/movie?api_key=${Environment.apikey}&with_genres=28`)
        .pipe(
            map(data => data.results)
        )
  }

  getAdventureMovie() : Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/discover/movie?api_key=${Environment.apikey}&with_genres=16`)
        .pipe(
            map(data => data.results)
        )
  }

  getAnimationMovie() : Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/discover/movie?api_key=${Environment.apikey}&with_genres=16`)
        .pipe(
            map(data => data.results)
        )
  }

  getComedyMovie() : Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/discover/movie?api_key=${Environment.apikey}&with_genres=35`)
        .pipe(
            map(data => data.results)
        )
  }

  getDocumentaryMovie() : Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/discover/movie?api_key=${Environment.apikey}&with_genres=99`)
        .pipe(
            map(data => data.results)
        )
  }

  getScienceMovie() : Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/discover/movie?api_key=${Environment.apikey}&with_genres=878`)
        .pipe(
            map(data => data.results)
        )
  }

  getTrillerMovie() : Observable<DataResultsInterface[]>{
    return this.http.get<DataInterface>(`${Environment.baseurl}/discover/movie?api_key=${Environment.apikey}&with_genres=53`)
        .pipe(
            map(data => data.results)
        )
  }





}
