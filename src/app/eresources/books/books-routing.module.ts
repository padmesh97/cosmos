import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BooksCardComponent} from './books-card/books-card.component';

const routes: Routes = [
{
	path:'eresources',component:BooksCardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
