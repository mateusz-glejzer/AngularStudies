import { Component, Input } from '@angular/core';
import { FormattingTableComponentProps } from '../formatting-table/formatting-table.component';


@Component({
  selector: 'app-formatting-preview',
  templateUrl: './formatting-preview.component.html',
  styleUrls: ['./formatting-preview.component.scss']
})
export class FormattingPreviewComponent {
 @Input() formattingStyles!: { [klass: string]: any; };
}
