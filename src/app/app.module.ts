import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropMenuComponent } from './drop-menu/drop-menu.component';
import { HeaderComponent } from './header/header.component';
 
import { CurrentModule} from './current/current.module';
import { EntertainmentModule} from './entertainment/entertainment.module';
import { EresourcesModule} from './eresources/eresources.module';
import { FunModule} from './fun/fun.module';
import { PublishComponent } from './publish/publish.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ReleasesComponent } from './releases/releases.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { TermsAndPrivacyComponent } from './terms-and-privacy/terms-and-privacy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavTilesComponent,
    SidenavComponent,
    PageNotFoundComponent,
    DropMenuComponent,
    HeaderComponent,
    PublishComponent,
    AboutComponent,
    ContactComponent,
    ReleasesComponent,
    SearchComponent,
    SearchResultsComponent,
    TermsAndPrivacyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CurrentModule,
    EntertainmentModule,
    EresourcesModule,
    FunModule,
    ReactiveFormsModule,
    HttpClientModule,
    InfiniteScrollModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
