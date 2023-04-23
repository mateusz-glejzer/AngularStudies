import { FormArray, FormControl, FormGroup } from "@angular/forms"
import { InvoiceItem } from "./invoiceItem"
import { Issuer } from "./issuerData"
import { PaymentMethod } from "./paymentMethod"

export type InvoiceForm = {
    issuer: FormGroup<Issuer>,
    invoiceId: FormControl<number>,
    issueDate: FormControl<Date | null>,
    saleDate: FormControl<Date | null>,
    paymentDate: FormControl<Date | null>,
    paymentMethod: FormControl<PaymentMethod | null>,
    items: FormArray<FormGroup<InvoiceItem>> | null
}