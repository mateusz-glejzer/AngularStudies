import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generated-css-board',
  templateUrl: './generated-css-board.component.html',
  styleUrls: ['./generated-css-board.component.scss']
})
export class GeneratedCssBoardComponent {
  @Input() formattingStyles!: { [klass: string]: any; };
}
