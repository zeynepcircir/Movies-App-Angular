// home.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  bannerResult: any[] = [];
  trendingMovieResult: any[] = [];
  selectedCategory: string = 'nowPlaying'; 
  nowPlayingMovies: any[] = [];
  upcomingMovies: any[] = [];
  topRatedMovies: any[] = [];
  popularMovies: any[] = [];

  movieCategories = [
    { label: 'Now Playing' , category: 'nowPlaying' }, 
    { label: 'Upcoming', category: 'upcoming' },
    { label: 'Top Rated', category: 'topRated' },
    { label: 'Popular', category: 'popular' }
  ];

selectedMovies: any;

  constructor(private service: MovieApiServiceService) {}

  ngOnInit(): void {
    this.bannerData();
    this.trendingData();
    this.selectCategoryData();
  }

  bannerData() {
    this.service.bannerApiData().subscribe((result) => {
      console.log(result, 'bannerresult#');
      this.bannerResult = result.results;
    });
  }

  trendingData() {
    this.service.trendingMovieApiData().subscribe((result) => {
      console.log(result, 'trendingresult#');
      this.trendingMovieResult = result.results;
    });
  }


  getNowPlayingMovies() {
    this.service.getNowPlayingData(1).subscribe((data) => {
      this.nowPlayingMovies = data.results;
    });
  }

  getUpcomingMovies() {
    this.service.upComingData(1).subscribe((data) => {
      this.upcomingMovies = data.results;
    });
  }

  getTopRatedMovies() {
    this.service.topRatedData(1).subscribe((data) => {
      this.topRatedMovies = data.results;
    });
  }

  getPopularMovies() {
    this.service.popularData(1).subscribe((data) => {
      this.popularMovies = data.results;
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
    this.selectCategoryData(); 
  }

  selectCategoryData() {
    switch (this.selectedCategory) {
      case 'nowPlaying':
        this.getNowPlayingMovies();
        break;
      case 'upcoming':
        this.getUpcomingMovies();
        break;
      case 'topRated':
        this.getTopRatedMovies();
        break;
      case 'popular':
        this.getPopularMovies();
        break;
    }
  }

  getMoviesByCategory(category: string): any[] {
    switch (category) {
      case 'nowPlaying':
        return this.nowPlayingMovies;
      case 'upcoming':
        return this.upcomingMovies;
      case 'topRated':
        return this.topRatedMovies;
      case 'popular':
        return this.popularMovies;
      default:
        return [];
    }
  }

  
}
