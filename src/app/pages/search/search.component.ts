import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MovieApiServiceService } from 'src/app/service/movie-api-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  constructor(private service:MovieApiServiceService) {}

  ngOnInit(): void {
  }

  searchResult: any;
  searchForm = new FormGroup({
    movieName: new FormControl(null),
  });
  errorMessage: string = '';

  submitForm(){
    console.log(this.searchForm.value,'searchform#');
    this.service.getSearchMovie(this.searchForm.value).subscribe((result)=>{
      console.log(result,'searchmovie##');
      this.searchResult = result.results;
    
    if (this.searchResult.length === 0) {
      this.errorMessage = 'We Are Sorry, We Can Not Find The Movie :(';
    } else {
      this.errorMessage = '';
    }
  });
  }
}
