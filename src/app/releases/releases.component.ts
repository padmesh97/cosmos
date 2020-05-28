import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.css']
})
export class ReleasesComponent implements OnInit {

  constructor(private titleService:Title) 
  {
  	this.titleService.setTitle("RELEASES | Cosmos");
  }

  ngOnInit(): void {
  }

}
