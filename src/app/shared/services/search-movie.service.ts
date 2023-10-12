import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Environment} from "../../../environment/environment";
import {HttpClient} from "@angular/common/http";
import {SearchResponseInterface} from "../types/search-response.interface";

@Injectable({
    providedIn: 'root'
})

export class SearchMovieService {

    constructor(private http: HttpClient) {
    }

    getSearchMovie(search: string ): Observable<SearchResponseInterface> {
        return this.http.get<SearchResponseInterface>(`${Environment.baseurl}/search/movie?api_key=${Environment.apikey}&query=${search}`);
    }

}
