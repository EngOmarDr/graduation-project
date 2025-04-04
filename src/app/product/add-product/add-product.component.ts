import { Component, inject } from '@angular/core';
import { CardComponent } from '../../../components/card-form.component';
import { CustomFieldComponent } from '../../../components/custom-field.component';
import { NonNullableFormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-add-product',
  imports: [
    CardComponent,
    CustomFieldComponent,
    ReactiveFormsModule,
    CommonModule,
  ],
  templateUrl: './add-product.component.html',
})
export class AddProductComponent {
  private fb = inject(NonNullableFormBuilder);

  form = this.fb.group({
    name: ['', [Validators.required]],
    phone: [''],
    address: [''],
    note: [''],
  });

  onSubmit() {
    alert(this.form.valid);
  }
}
