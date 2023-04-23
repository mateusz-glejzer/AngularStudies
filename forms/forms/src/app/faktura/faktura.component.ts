import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaymentMethod } from './models/paymentMethod';

@Component({
  selector: 'app-faktura',
  templateUrl: './faktura.component.html',
  styleUrls: ['./faktura.component.scss']
})
export class FakturaComponent implements OnInit {

  invoice!: FormGroup;
  paymentMethodEnum = Object.values(PaymentMethod);

  constructor(private readonly formBuilder: FormBuilder) { }
  currentDate = Date.now();

  ngOnInit(): void {
    this.invoice = this.formBuilder.group({
      invoiceId: this.formBuilder.nonNullable.control(0),
      issuer: this.formBuilder.group({
        address: this.formBuilder.nonNullable.control(''),
        bankNumber: this.formBuilder.nonNullable.control(0),
        city: this.formBuilder.nonNullable.control(''),
        name: this.formBuilder.nonNullable.control(''),
        nip: this.formBuilder.nonNullable.control(''),
        postCode: this.formBuilder.nonNullable.control(''),
      }),
      issueDate: this.formBuilder.control(new Date(this.currentDate)),
      paymentDate: this.formBuilder.control(new Date(this.currentDate)),
      paymentMethod: this.formBuilder.group({
        paymentValue: [PaymentMethod.Card]
      }),
      saleDate: this.formBuilder.control(new Date(this.currentDate)),
      items: this.formBuilder.array([])
    });
  }


}
