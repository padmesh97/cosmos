import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { PostCardComponent } from '../posts/post-card/post-card.component';

@Component({
  selector: 'app-nav-tiles',
  templateUrl: './nav-tiles.component.html',
  styleUrls: ['./nav-tiles.component.css']
})
export class NavTilesComponent implements OnInit {

  constructor(private router:Router,private activatedRoute:ActivatedRoute) { }
  currComponentRef:any;

  ngOnInit(): void {
      let currentURL=this.router.url.split('?');
      if(currentURL[0] === '/current')
        this.router.navigate(['live'], {relativeTo: this.activatedRoute});
  }

  onActivate(componentRef){
  	this.currComponentRef=componentRef;
    return;
  } 

  fetchCurrentComponentRef(){
  	return this.currComponentRef;
  }

}
