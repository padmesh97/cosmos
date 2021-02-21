import { Component,OnInit, AfterViewInit } from '@angular/core';
import { PostCardComponent } from './current/posts/post-card/post-card.component';
import { NavTilesComponent } from './current/nav-tiles/nav-tiles.component';
declare var snowStorm;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  postCardComponent:any;
  navTileComponent:any;
  constructor(){};

  ngOnInit(){
    snowStorm.snowColor = '#a8fffb';   // blue-ish snow!?
    snowStorm.flakesMaxActive = 20;    // show more snow on screen at once
    snowStorm.useTwinkleEffect = true; // let the snow flicker in and out of view
  }

  onNavActivate(componentRef){
    this.navTileComponent=componentRef;
    return;
  } 

  onScroll(){
    if(this.navTileComponent.fetchCurrentComponentRef() instanceof PostCardComponent){
      this.postCardComponent=this.navTileComponent.fetchCurrentComponentRef();
      this.postCardComponent.loadNextPosts();
    }
  }
}