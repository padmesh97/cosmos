import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesCardComponent } from './movies-card/movies-card.component';
import { JsonparsePipe } from './movies-card/jsonparse.pipe';


@NgModule({
  declarations: [MoviesCardComponent, JsonparsePipe],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  exports:[
  	MoviesCardComponent
  ]
})
export class MoviesModule { }
