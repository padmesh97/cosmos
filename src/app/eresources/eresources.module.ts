import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EresourcesRoutingModule } from './eresources-routing.module';
import { NavTilesComponent } from './nav-tiles/nav-tiles.component';

import {BooksModule} from './books/books.module';

@NgModule({
  declarations: [NavTilesComponent],
  imports: [
    CommonModule,
    EresourcesRoutingModule,
    BooksModule
  ]
})
export class EresourcesModule { }
