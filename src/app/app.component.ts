import { Component,OnInit, AfterViewInit } from '@angular/core';
import { Router, RoutesRecognized } from '@angular/router';
import { PostCardComponent } from './current/posts/post-card/post-card.component';
import { NavTilesComponent } from './current/nav-tiles/nav-tiles.component';
import { filter } from "rxjs/internal/operators";
declare var snowStorm;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  postCardComponent:any;
  isPostCardComponentActivated:boolean=false;
  navTileComponent:any=null;

  constructor(private router: Router) {
   router.events
   .pipe(filter(event => event instanceof RoutesRecognized))
   .subscribe((event) => {
     if(event['url']=='/current/blogs')
       this.isPostCardComponentActivated=true;
    else
      this.isPostCardComponentActivated=false;
   });
  }

  ngOnInit(){
    //this.coloredSnowFall();
  }

  coloredSnowFall(){
    snowStorm.snowColor = '#a8fffb';   // blue-ish snow!?
    snowStorm.flakesMaxActive = 20;    // show more snow on screen at once
    snowStorm.useTwinkleEffect = true; // let the snow flicker in and out of view
  }

  onNavActivate(componentRef){
    this.navTileComponent=componentRef;
  } 

  onScroll(){
    if(this.isPostCardComponentActivated){
      this.postCardComponent=this.navTileComponent.fetchCurrentComponentRef();
      this.postCardComponent.loadNextPosts();
    }
  }

}