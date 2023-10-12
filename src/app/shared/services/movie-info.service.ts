import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Environment} from "../../../environment/environment";
import {MovieInfoInterface} from "../types/movie-info.interface";
import {MovieInterface} from "../types/movie.interface";
import {MovieCastInterface} from "../types/movie-cast.interface";

@Injectable({
    providedIn: 'root'
})

export class MovieInfoService{

    constructor(private http: HttpClient) {
    }

    getMovieDetails(id: string| null): Observable<MovieInfoInterface>{
        return this.http.get<MovieInfoInterface>(`${Environment.baseurl}/movie/${id}?api_key=${Environment.apikey}`)
    }

    getMovieVideo(id: string | null): Observable<MovieInterface> {
        return this.http.get<MovieInterface>(`${Environment.baseurl}/movie/${id}/videos?api_key=${Environment.apikey}`)
    }


    getMovieCast(id: string | null): Observable<MovieCastInterface> {
        return this.http.get<MovieCastInterface>(`${Environment.baseurl}/movie/${id}/credits?api_key=${Environment.apikey}`)
    }
}
