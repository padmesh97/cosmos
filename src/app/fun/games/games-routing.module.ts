import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesCardComponent} from './games-card/games-card.component';

const routes: Routes = [
{
	path:'fun',component:GamesCardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
