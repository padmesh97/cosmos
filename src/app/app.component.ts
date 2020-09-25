import { Component } from '@angular/core';
import { PostCardComponent } from './current/posts/post-card/post-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
  postCardComponent:any;
  constructor(){};

  onActivate(componentRef){
    if(componentRef instanceof PostCardComponent){
      this.postCardComponent=componentRef;
      return;
    }
  } 

  onScroll(){
      this.postCardComponent.loadNextPosts();
  }
}