import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApiRoutingModule } from './api-routing.module';
import { ApiCardComponent } from './api-card/api-card.component';


@NgModule({
  declarations: [ApiCardComponent],
  imports: [
    CommonModule,
    ApiRoutingModule
  ]
})
export class ApiModule { }
