import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-music-card',
  templateUrl: './music-card.component.html',
  styleUrls: ['./music-card.component.css']
})
export class MusicCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	let elems = document.querySelectorAll('.collapsible');
    let instances = M.Collapsible.init(elems,{});
  }

}
