import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import {trigger,state,style,animate,transition} from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger('openClose', [
      state('start', style({
        transform: 'translateX(30px)',
        opacity: 0.6
      })),
      state('end', style({
        transform: 'translateX(0)',
        opacity: 1
      })),
      transition('start => end', [
        animate('1s')
      ])
    ])
  ]
})
export class AboutComponent implements OnInit {

  constructor(private titleService:Title) 
  {
  	this.titleService.setTitle("ABOUT | Cosmos");
  }

  ngOnInit(): void {
  }

}
