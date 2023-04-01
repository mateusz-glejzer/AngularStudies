import { Component } from '@angular/core';

@Component({
  selector: 'app-formatting-table',
  templateUrl: './formatting-table.component.html',
  styleUrls: ['./formatting-table.component.scss']
})
export class FormattingTableComponent {
  textColor!: string;
  border!: string;
  backgroundColor!: string;
  shadow!: string;
}
