import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavTilesComponent} from './nav-tiles/nav-tiles.component';
import {MoviesCardComponent} from './movies/movies-card/movies-card.component'
import {MusicCardComponent} from './music/music-card/music-card.component';
import {PicsCardComponent} from './pics/pics-card/pics-card.component'

const routes: Routes = [
{
	path:'entertainment',component:NavTilesComponent,
	children: [
      {
        path: 'movies', // child route path
        component: MoviesCardComponent, // child route component that the router renders
      },
      {
        path: 'music', // child route path
        component: MusicCardComponent, // child route component that the router renders
      },
      {
        path: 'gallery', // child route path
        component: PicsCardComponent, // child route component that the router renders
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntertainmentRoutingModule { }
