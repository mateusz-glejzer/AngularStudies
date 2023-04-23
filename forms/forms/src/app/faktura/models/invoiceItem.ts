import { FormControl } from "@angular/forms";

export interface InvoiceItem {
    name: FormControl<string>;
    quantity: FormControl<number>;
    nettoPrice: FormControl<number>;
    vat: FormControl<string>;
}