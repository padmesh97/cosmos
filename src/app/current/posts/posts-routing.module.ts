import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostCardComponent} from './post-card/post-card.component';


const routes: Routes = [
{
	path:'posts',component:PostCardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostsRoutingModule { }
