import { Component } from '@angular/core';
import { FormattingTableComponentProps } from './formatting-table/formatting-table.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CssGenerator';
  formattingTableComponentProps!: FormattingTableComponentProps;

  styles: { [klass: string]: any; } = [];

  addStyles(props: FormattingTableComponentProps) {
    // Initialize formattingTableComponentProps with default values
    this.formattingTableComponentProps = {
      textColor: 'black',
      backgroundColor: 'white',
      border: 'none',
      shadow: 'none'
    };

    // Update formattingTableComponentProps with values from props, if provided
    if (props) {
      this.formattingTableComponentProps = {
        ...this.formattingTableComponentProps,
        ...props
      };
    }

    // Set styles based on values in formattingTableComponentProps
    this.styles = {
      color: this.formattingTableComponentProps.textColor,
      backgroundColor: this.formattingTableComponentProps.backgroundColor,
      border: this.formattingTableComponentProps.border,
      'text-shadow': this.formattingTableComponentProps.shadow
    };
  }
}
