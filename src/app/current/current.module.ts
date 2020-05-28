import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CurrentRoutingModule } from './current-routing.module';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';

import { NewsModule} from './news/news.module';
import { PostsModule} from './posts/posts.module';


@NgModule({
  declarations: [NavTilesComponent], 
  imports: [
    CommonModule,
    CurrentRoutingModule,
  ],
  exports: [
  NewsModule,
  PostsModule
  ]
})
export class CurrentModule { }
