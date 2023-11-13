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

  
  getSearchMovie(data:any):Observable<any>{
    console.log(data,'movie#');
    return this.http.get(`${this.baseurl}/search/movie?api_key=${this.apikey}&query=${data.movieName}`)
  }

  getMovieDetails(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}?api_key=${this.apikey}`)
  }

  trendingMovieApiData():Observable<any>{
    return this.http.get(`${this.baseurl}/trending/movie/day?api_key=${this.apikey}`);
  }

  getNowPlayingData(page: number): Observable<any> {
    console.log(page, 'nowplaying');
    return this.http.get(`${this.baseurl}/movie/now_playing?api_key=${this.apikey}`);
  }

  upComingData(page: number): Observable<any> {
    console.log(page, 'upcoming');
    return this.http.get(`${this.baseurl}/movie/upcoming?api_key=${this.apikey}`);
  }

  topRatedData(page: number): Observable<any> {
    console.log('top rated ');                
   return this.http.get(`${this.baseurl}/movie/top_rated?api_key=${this.apikey}`);
  }

  popularData(page: number): Observable<any> {
    console.log(page, 'popular');
    return this.http.get(`${this.baseurl}/movie/popular?api_key=${this.apikey}`);
  }

 

  getMovieReviews(movieId: string): Observable<any> {
    return this.http.get(`${this.baseurl}/movie/${movieId}/reviews?api_key=${this.apikey}`);
  }

 
  
  getMovieCast(data:any):Observable<any>{
    return this.http.get(`${this.baseurl}/movie/${data}/credits?api_key=${this.apikey}`)
  }
}



