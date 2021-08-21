import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentRoutingModule } from './entertainment-routing.module';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';

import { MoviesModule} from './movies/movies.module';
import { MusicModule} from './music/music.module';
import { PicsModule} from './pics/pics.module';

@NgModule({
  declarations: [NavTilesComponent],
  imports: [
    CommonModule,
    EntertainmentRoutingModule,
    MoviesModule,
    MusicModule,
    PicsModule
  ],
  exports: [
  MoviesModule,
  MusicModule,
  PicsModule
  ]
})
export class EntertainmentModule { }
