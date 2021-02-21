import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-movies-card',
  templateUrl: './movies-card.component.html',
  styleUrls: ['./movies-card.component.css']
})
export class MoviesCardComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

  onPosterLoad(event){
  	let posterHeight=event.target.clientHeight;
  	event.target.parentNode.parentNode.style.height=(posterHeight-0.3)+'px';
  }

}
