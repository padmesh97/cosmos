import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NavTilesComponent} from './nav-tiles/nav-tiles.component';
import {BooksCardComponent} from './books/books-card/books-card.component';
import {PaperCardComponent} from './paper/paper-card/paper-card.component';

const routes: Routes = [
{
	path:'eresources',component:NavTilesComponent,
	children: [
      {
        path: 'ebooks', // child route path
        component: BooksCardComponent, // child route component that the router renders
      },
      {
        path: 'papers', // child route path
        component: PaperCardComponent, // child route component that the router renders
      }
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EresourcesRoutingModule { }
