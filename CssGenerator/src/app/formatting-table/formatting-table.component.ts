import { Component, EventEmitter, Output } from '@angular/core';

export interface FormattingTableComponentProps {
  textColor: string;
  border: string;
  backgroundColor: string;
  shadow: string;
}

@Component({
  selector: 'app-formatting-table',
  templateUrl: './formatting-table.component.html',
  styleUrls: ['./formatting-table.component.scss']
})
export class FormattingTableComponent {
  props: FormattingTableComponentProps = { textColor: '', backgroundColor: '', border: '', shadow: '' };
  @Output() formattingPropsChanged = new EventEmitter<FormattingTableComponentProps>

  propsChanged() {
    this.formattingPropsChanged.emit(this.props);
    console.log(this.props);
  }

}
