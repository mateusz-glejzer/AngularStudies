import { Component } from '@angular/core';

@Component({
  selector: 'app-formatting-preview',
  templateUrl: './formatting-preview.component.html',
  styleUrls: ['./formatting-preview.component.scss']
})
export class FormattingPreviewComponent {
  textField!: string;
  buttonText!: string;
  blockElementHtml!: string;
}
