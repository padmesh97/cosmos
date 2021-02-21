import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaperRoutingModule } from './paper-routing.module';
import { PaperCardComponent } from './paper-card/paper-card.component';


@NgModule({
  declarations: [PaperCardComponent],
  imports: [
    CommonModule,
    PaperRoutingModule
  ]
})
export class PaperModule { }
