import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostCardComponent } from './post-card/post-card.component';
import { EmojiPipe } from './post-card/emoji.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { JsonparsePipe } from './post-card/jsonparse.pipe';


@NgModule({
  declarations: [PostCardComponent, EmojiPipe, JsonparsePipe],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxSpinnerModule
  ],
  exports:[
  	PostCardComponent
  ]
})
export class PostsModule { }
