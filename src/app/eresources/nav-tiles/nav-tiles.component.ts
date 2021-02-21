import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nav-tiles',
  templateUrl: './nav-tiles.component.html',
  styleUrls: ['./nav-tiles.component.css']
})
export class NavTilesComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
  	let currentURL=this.router.url.split('?');
      if(currentURL[0] === '/eresources')
        this.router.navigate(['ebooks'], {relativeTo: this.activatedRoute});
  }

}
