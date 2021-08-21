import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicCardComponent } from './music-card/music-card.component';
import { JsonparsePipe } from './music-card/jsonparse.pipe';


@NgModule({
  declarations: [MusicCardComponent, JsonparsePipe],
  imports: [
    CommonModule,
    MusicRoutingModule
  ],
  exports:[
  	MusicCardComponent
  ]
})
export class MusicModule { }
