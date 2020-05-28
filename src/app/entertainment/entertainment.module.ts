import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentRoutingModule } from './entertainment-routing.module';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';

import { MoviesModule} from './movies/movies.module';

@NgModule({
  declarations: [NavTilesComponent],
  imports: [
    CommonModule,
    EntertainmentRoutingModule,
    MoviesModule
  ]
})
export class EntertainmentModule { }
