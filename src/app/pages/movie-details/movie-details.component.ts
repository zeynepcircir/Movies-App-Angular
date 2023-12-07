import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit{
  @Output() addToWatchListEvent = new EventEmitter<any>();

  selectedTab: string = 'about-movie';
  castData: any; 
  constructor(private service:MovieApiServiceService, private router:ActivatedRoute){
    
  }
  getMovieDetailResult:any;
  reviewsData: any;
  
  
  
  ngOnInit(): void {
    let getParamId = this.router.snapshot.paramMap.get('id');
    console.log(getParamId,'getparamid#');
    
    
    this.getMovie(getParamId);
    this.displayWatchList();
  }

  getMovie(id: any) {
    
    this.service.getMovieDetails(id).subscribe((result) => {
      console.log(result, 'getmoviedetails#');
      this.getMovieDetailResult = result;
      });

      this.service.getMovieReviews(id).subscribe((reviewsResult) => {
        console.log(reviewsResult, 'getmoviereviews#');
        this.reviewsData = reviewsResult;
      });
  
      this.service.getMovieCast(id).subscribe((castResult) => {
        console.log(castResult, 'getmoviecast#');
        // Kontrol burada ekleniyor
        if (castResult && castResult.cast) {
          this.castData = castResult.cast;
        }
      });
   
  }
  

  addToWatchList() {
    var movieDetails = {
      backdrop_path: this.getMovieDetailResult.backdrop_path,
      poster_path: this.getMovieDetailResult.poster_path,
      original_title: this.getMovieDetailResult.original_title,
      overview: this.getMovieDetailResult.overview,
    };
    this.addToWatchListEvent.emit(movieDetails);

    var watchList = this.getWatchListFromLocalStorage();

    // Check if the movie already exists in the watch list
    var movieExists = watchList.some(function (movie: any) {
      return movie.original_title === movieDetails.original_title;
    });

    if (movieExists) {
      alert('Bu film zaten izleme listenizde');
      return;
    }

    watchList.push(movieDetails);
    this.saveWatchListToLocalStorage(watchList);
    this.displayWatchList();
  }

  getWatchListFromLocalStorage(): any[] {
    var watchListString = localStorage.getItem('watchList');

    if (watchListString) {
      return JSON.parse(watchListString);
    } else {
      return [];
    }
  }

  saveWatchListToLocalStorage(watchList: any[]) {
    localStorage.setItem('watchList', JSON.stringify(watchList));
  }

  displayWatchList() {
    var watchList = this.getWatchListFromLocalStorage();
    var watchListElement = document.getElementById('watchList');
    if (watchListElement) {
      watchListElement.innerHTML = '';

      for (var i = 0; i < watchList.length; i++) {
        var movieItem = document.createElement('li');
        movieItem.textContent = watchList[i].original_title;
        watchListElement.appendChild(movieItem);
      }
    }
  
  }

  tabChange(tabName: string) {
    this.selectedTab = tabName;
  }

  
  
  
}

