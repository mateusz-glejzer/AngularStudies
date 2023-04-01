import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormattingTableComponent } from './formatting-table/formatting-table.component';
import { FormattingPreviewComponent } from './formatting-preview/formatting-preview.component';
import { GeneratedCssBoardComponent } from './generated-css-board/generated-css-board.component';

@NgModule({
  declarations: [
    AppComponent,
    FormattingTableComponent,
    FormattingPreviewComponent,
    GeneratedCssBoardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
