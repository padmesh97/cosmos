import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PicsRoutingModule } from './pics-routing.module';
import { PicsCardComponent } from './pics-card/pics-card.component';


@NgModule({
  declarations: [PicsCardComponent],
  imports: [
    CommonModule,
    PicsRoutingModule
  ]
})
export class PicsModule { }
