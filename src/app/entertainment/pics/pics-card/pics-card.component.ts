import { Component, OnInit} from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-pics-card',
  templateUrl: './pics-card.component.html',
  styleUrls: ['./pics-card.component.css']
})
export class PicsCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  	let elems = document.querySelectorAll('.materialboxed');
    let instances = M.Materialbox.init(elems, {});
  }

}
