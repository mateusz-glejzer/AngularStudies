import { FormControl } from "@angular/forms";

export interface Issuer {
    name: FormControl<string>;
    city: FormControl<string>;
    address: FormControl<string>;
    postCode: FormControl<string>;
    nip: FormControl<string>;
    bankNumber: FormControl<number>;
}