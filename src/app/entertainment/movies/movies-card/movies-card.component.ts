import { Component, OnInit, Input} from '@angular/core';
import { DomSanitizer,Title } from '@angular/platform-browser';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
	API_URL= environment.API_URL;

	moviesList:any;
	moviesListStatus='loading';

  @Input() childMessageMovies: any={};

	constructor(private http: HttpClient,public sanitizer: DomSanitizer,private titleService:Title){
		this.titleService.setTitle("Movies | Cosmos");
	}

	ngOnInit(): void {
    if(Object.keys(this.childMessageMovies).length == 0)
      this.moviesFetch();
    else{
      this.moviesList=this.childMessageMovies;
      this.moviesListStatus='success';
    }
		
	}

	onPosterLoad(event){
		let posterHeight=event.target.clientHeight;
		event.target.parentNode.parentNode.style.height=(posterHeight-0.3)+'px';
	}

  moviesFetch(){
  	const url=this.API_URL+'index.php/entertainment/movie/all';
  	this.http.get(url).subscribe(data => {
        this.moviesList = data;
        this.moviesListStatus='success';
      },
      error =>
      {
      	this.moviesListStatus='error';
      }
     );
  }

}
