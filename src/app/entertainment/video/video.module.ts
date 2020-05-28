import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoRoutingModule } from './video-routing.module';
import { VidCardComponent } from './vid-card/vid-card.component';
import { VideoCardComponent } from './video-card/video-card.component';


@NgModule({
  declarations: [VidCardComponent, VideoCardComponent],
  imports: [
    CommonModule,
    VideoRoutingModule
  ]
})
export class VideoModule { }
