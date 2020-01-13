import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { createAdvAnimations } from './create-advertisement.animations';
import { CreateFormAnimations } from '../services/createFormAnimations.service';
import { NotifierService } from 'angular-notifier';

import { AdvertisementsService } from '../services/advertisements.service';

@Component({
  selector: 'app-create-advertisement',
  templateUrl: './create-advertisement.component.html',
  styleUrls: ['./create-advertisement.component.css'],
  animations: createAdvAnimations
})
export class CreateAdvertisementComponent implements OnInit {
  createFormState: string = 'close';
  defaultImage = '../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;

  createForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    desc: new FormControl(null, [
      Validators.minLength(8),
      Validators.maxLength(30),
      Validators.required
    ]),
    image: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required)
  })

  constructor(
    private createFormAnimationsService: CreateFormAnimations,
    private readonly notifier: NotifierService,
    private advertisementsService: AdvertisementsService
  ) { }

  async createAdv() {
    if (this.createForm.valid) {
      let { name, desc, price } = this.createForm.value;

      this.advertisementsService.createAdv(name, desc, this.localImage, price)
        .then(_ => {
          this.notifier.notify('success', 'Successful created!');
          this.createFormAnimationsService.toggle();
        });
    } else {
      this.notifier.notify('warning', 'Form data is incorrect!')
    }
  }

  handleChange(e) {
    this.localImage = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.localImage);
    reader.onload = () => {
      this.localImageUrl = reader.result;
    }
  }

  close() {
    this.createFormAnimationsService.toggle();
    this.createForm.value.name = null;
    this.createForm.value.desc = null;
    this.createForm.value.image = null;
    this.localImage = null;
  }

  ngOnInit() {
    this.createFormAnimationsService.change.subscribe(isOpen => isOpen ? this.createFormState = 'open' : this.createFormState = 'close');
  }

}
