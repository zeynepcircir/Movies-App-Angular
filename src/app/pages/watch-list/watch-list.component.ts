import { Component,OnInit } from '@angular/core';

interface Movie {
  id: number;
  original_title: string;
  poster_path: string;
  vote_average: number;
  release_date: string;
}

@Component({
  selector: 'app-watch-list',
  templateUrl: './watch-list.component.html',
  styleUrls: ['./watch-list.component.css']
})
export class WatchListComponent implements OnInit{
  watchList: any[] = [];
  
  constructor() {}

  ngOnInit(): void {
      this.loadWatchList();
  }
  loadWatchList() {
    var watchListString = localStorage.getItem('watchList');
    if (watchListString) {
      this.watchList = JSON.parse(watchListString);
    }
  }

  

  removeFromWatchList(movie: any) {
    var index = this.watchList.findIndex(
      (item) => item.original_title === movie.original_title
    );
    if (index !== -1) {
      this.watchList.splice(index, 1);
      localStorage.setItem('watchList', JSON.stringify(this.watchList));
    }
  }
}
