import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotifierService } from 'angular-notifier';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-shopping-card-details',
  templateUrl: './shopping-card-details.component.html',
  styleUrls: ['./shopping-card-details.component.css']
})
export class ShoppingCardDetailsComponent implements OnInit {
  orderDataForm: FormGroup;

  constructor(
    private readonly notifier: NotifierService,
    private fb: FormBuilder,
    private shoppingCardService: ShoppingCardService
  ) {
    this.orderDataForm = fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      requirements: [''],
      location: ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  get firstName() { return this.orderDataForm.get('firstName'); }
  get lastName() { return this.orderDataForm.get('lastName'); }
  get requirements() { return this.orderDataForm.get('requirements'); }
  get location() { return this.orderDataForm.get('location'); }

  backToList() {
    this.shoppingCardService.changeComponentState();
  }

  handleSubmit() {
    if (this.orderDataForm.valid) {
      const recInfo = {
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        requirements: this.requirements.value,
        location: this.location.value
      };

      this.shoppingCardService.buyAllProducts(recInfo);
    } else {
      this.notifier.notify('warning', 'Please do not play with the developer toolbar.');
    }
  }

  ngOnInit() {
  }

}
