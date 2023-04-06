import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormattingTableComponent } from './formatting-table/formatting-table.component';
import { FormattingPreviewComponent } from './formatting-preview/formatting-preview.component';
import { GeneratedCssBoardComponent } from './generated-css-board/generated-css-board.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormattingTableComponent,
    FormattingPreviewComponent,
    GeneratedCssBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
