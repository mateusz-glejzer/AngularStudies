import { Component, Input } from '@angular/core';

export interface CardComponentProps {
  amount: number;
  title: string;
  icon: string;
  color: string;
}
@Component({
  selector: 'app-amount-card',
  templateUrl: './amount-card.component.html', styleUrls: ['./amount-card.component.scss']
})
export class AmountCardComponent {
  @Input() props!: CardComponentProps;
}

