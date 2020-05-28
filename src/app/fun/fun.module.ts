import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FunRoutingModule } from './fun-routing.module';

import {GamesModule} from './games/games.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FunRoutingModule,
    GamesModule
  ]
})
export class FunModule { }
