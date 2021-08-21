import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {PublishComponent} from './publish/publish.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ReleasesComponent} from './releases/releases.component';
import {SearchResultsComponent} from './search-results/search-results.component';
import {TermsAndPrivacyComponent} from './terms-and-privacy/terms-and-privacy.component';

const routes: Routes = [
{
	path: '', redirectTo: 'current',pathMatch:'full'
},
{
	path:'publish',component:PublishComponent
},
{
	path:'about',component:AboutComponent
},
{
	path:'contact',component:ContactComponent
},
{
	path:'releases',component:ReleasesComponent
},
{
	path:'search_result/:filter/:uuid',component:SearchResultsComponent
},
{
	path:'terms-and-privacy',component:TermsAndPrivacyComponent
},
// {
// 	path: '**', component: PageNotFoundComponent
// }
];


@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
