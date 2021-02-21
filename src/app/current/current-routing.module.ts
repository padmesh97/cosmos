import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavTilesComponent} from './nav-tiles/nav-tiles.component';
import {PostCardComponent} from './posts/post-card/post-card.component';
import {NewsCardComponent} from './news/news-card/news-card.component';


const routes: Routes = [
{
	path:'current',component:NavTilesComponent,
	children: [
      {
        path: 'blogs', // child route path
        component: PostCardComponent, // child route component that the router renders
      },
      {
        path: 'live', // child route path
        component: NewsCardComponent, // child route component that the router renders
      },
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentRoutingModule { }
