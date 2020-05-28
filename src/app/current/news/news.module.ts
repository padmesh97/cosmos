import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsCardComponent } from './news-card/news-card.component';


@NgModule({
  declarations: [NewsCardComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  exports:[
  	NewsCardComponent
  ]
})
export class NewsModule { }
