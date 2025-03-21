import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../components/card-form.component';
import { CustomFieldComponent } from '../../../components/custom-field.component';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-add-product',
  imports: [CardComponent, CustomFieldComponent, ReactiveFormsModule],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  private fb = inject(NonNullableFormBuilder);

  ngOnInit(): void {
    this.currencyForm.controls.balance.valueChanges.subscribe((balance) => {
      const newValue = balance != 0 ? 1 / balance : 0;
      // if (balance !== null && balance != 0) {
      this.currencyForm.controls.eq.setValue(newValue, { emitEvent: false });
      // }
    });

    this.currencyForm.controls.eq.valueChanges.subscribe((eq) => {
      if (eq !== null && eq != 0) {
        this.currencyForm.controls.balance.setValue(1 / eq, {
          emitEvent: false,
        });
      }
    });
  }

  currencyForm = this.fb.group({
    code: ['', [Validators.required]],
    name: ['', [Validators.required]],
    balance: [1, [Validators.required, Validators.min(0)]],
    eq: [1, [Validators.required, Validators.min(0)]],
    partName: [''],
    value: ['', [Validators.required, Validators.min(0)]],
  });

  onSubmit() {
    alert(this.currencyForm.valid);
  }
}
