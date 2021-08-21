import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {GamesCardComponent} from './games-card/games-card.component';

const routes: Routes = [
{
	path:'coming-soon',component:GamesCardComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GamesRoutingModule { }
