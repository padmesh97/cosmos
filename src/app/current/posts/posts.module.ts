import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { EmojiPipe } from './post-card/emoji.pipe';


@NgModule({
  declarations: [PostCardComponent, EmojiPipe],
  imports: [
    CommonModule,
    PostsRoutingModule
  ],
  exports:[
  	PostCardComponent
  ]
})
export class PostsModule { }
