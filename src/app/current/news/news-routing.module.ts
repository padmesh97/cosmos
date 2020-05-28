import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import  {NewsCardComponent} from './news-card/news-card.component';


const routes: Routes = [
{path:'current/news',component:NewsCardComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
