import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor(private service:MovieApiServiceService){}

  bannerResult:any=[];
  trendingMovieResult:any=[];
  selectedCategory: string = 'nowPlaying'; // Varsayılan kategori
  nowPlayingMovies: any[] = [];
  upcomingMovies: any[] = [];
  topRatedMovies: any[] = [];
  popularMovies: any[] = [];

  ngOnInit(): void {
      this.bannerData();
      this.trendingData();
      this.getNowPlayingMovies();
      this.getUpcomingMovies();
      this.getTopRatedMovies();
      this.getPopularMovies();
  }


  bannerData(){
    this.service.bannerApiData().subscribe((result)=>{
      console.log(result,'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData(){
    this.service.trendingMovieApiData().subscribe((result)=>{
      console.log(result,'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getNowPlayingMovies() {
    this.service.getNowPlayingData(1) 
      .subscribe((data) => {
        this.nowPlayingMovies = data.results;
      });
  }

  getUpcomingMovies() {
    this.service.upComingData(1) 
      .subscribe((data) => {
        this.upcomingMovies = data.results;
      });
  }

  getTopRatedMovies() {
    this.service.topRatedData(1) 
      .subscribe((data) => {
        this.topRatedMovies = data.results;
      });
  }

  getPopularMovies() {
    this.service.popularData(1) 
      .subscribe((data) => {
        this.popularMovies = data.results;
      });
  }
}



