import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksCardComponent } from './books-card/books-card.component';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  declarations: [BooksCardComponent],
  imports: [
    CommonModule,
    BooksRoutingModule,
    PdfViewerModule
  ]
})
export class BooksModule { }
