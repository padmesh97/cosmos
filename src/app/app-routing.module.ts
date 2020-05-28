import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PublishComponent} from './publish/publish.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ReleasesComponent} from './releases/releases.component';
import {PostCardComponent} from './current/posts/post-card/post-card.component';


const routes: Routes = [
{
	path:'',component:PostCardComponent,pathMatch:'full'
},
{
	path:'publish',component:PublishComponent,outlet:'publishArea'
},
{
	path:'about',component:AboutComponent
},
{
	path:'contact',component:ContactComponent
},
{
	path:'releases',component:ReleasesComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
