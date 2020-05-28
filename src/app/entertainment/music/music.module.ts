import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicCardComponent } from './music-card/music-card.component';


@NgModule({
  declarations: [MusicCardComponent],
  imports: [
    CommonModule,
    MusicRoutingModule
  ]
})
export class MusicModule { }
