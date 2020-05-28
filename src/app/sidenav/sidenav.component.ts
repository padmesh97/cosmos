import { Component, OnInit } from '@angular/core';
import * as M from 'materialize-css';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor() { }

  ngOnInit()
  {
  	var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, "");
  }

}
