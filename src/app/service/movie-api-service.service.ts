import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 

@Injectable({
  providedIn: 'root'
})
export class MovieApiServiceService {

  constructor(private http:HttpClient) { }

  baseurl = "https://api.themoviedb.org/3";
  apikey = "045f428069697ad9a03c418ae94fc043"

  bannerApiData():Observable<any>
  {
    return this.http.get(`${this.baseurl}/trending/all/week?api_key=${this.apikey}`);
  }

  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }



}




// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class MovieApiServiceService {
//   bannerApiData() {
//     throw new Error('Method not implemented.');
//   }

//   apikey = "045f428069697ad9a03c418ae94fc043";
//   baseurl = `https://api.themoviedb.org/3/`;

//   constructor(private http: HttpClient) { }

//   getPopularData() {
//     let newPath = this.baseurl + `movie/popular?api_key=${this.apikey}`;
//     return this.http.get(newPath);
//   }

//   getNowPlayingData() {
//     let newPath = this.baseurl + `movie/now_playing?api_key=${this.apikey}`;
//     return this.http.get(newPath);
//   }

//   getUpComingData() {
//     let newPath = this.baseurl + `movie/upcoming?api_key=${this.apikey}`;
//     return this.http.get(newPath);
//   }

//   getTopRatedData() {
//     let newPath = this.baseurl + `movie/top_rated?api_key=${this.apikey}`;
//     return this.http.get(newPath);
//   }

//   getMovieById(movie_id: number) {
//     let newPath = this.baseurl + `movie/${movie_id}?api_key=${this.apikey}`;
//     return this.http.get(newPath);
//   }

//   getReviews(movie_id: number) {
//     let newPath = this.baseurl + `movie/${movie_id}/reviews?api_key=${this.apikey}`;
//     return this.http.get(newPath);
//   }

//   getSearchMovie(query: string) {
//     let newPath = this.baseurl + `search/movie?api_key=${this.apikey}&query=${query}`;
//     return this.http.get(newPath);
//   }
// }