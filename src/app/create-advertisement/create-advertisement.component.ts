import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { createAdvAnimations } from './create-advertisement.animations';
import { CreateFormService } from '../services/createForm.service';
import { NotifierService } from 'angular-notifier';
import { AnnouncementsService } from '../services/announcements.service';

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
  rows: number = 4;
  isDisabled: boolean = true;

  createForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    desc: new FormControl(null, [
      Validators.minLength(6),
      Validators.maxLength(1000),
      Validators.required
    ]),
    image: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required)
  })

  constructor(
    private createFormService: CreateFormService,
    private readonly notifier: NotifierService,
    private announcementsService: AnnouncementsService
  ) { }

  async createAdv() {
    if (this.createForm.valid) {
      let { name, desc, price, category } = this.createForm.value;
      this.isDisabled = true;
      await this.announcementsService.createAdv(name, desc, this.localImage, price, category);
      this.createFormService.toggle();
      this.isDisabled = false;
    } else {
      this.notifier.notify('warning', 'Form data is incorrect!')
    }
  }

  previewImg(e) {
    if (e.target.files[0]) {
      this.localImage = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.localImage);
      reader.onload = () => {
        this.localImageUrl = reader.result;
      }
    }
  }

  handleChange(){
    if (this.createForm.invalid) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
    }
  }

  cleanForm(){
    this.createForm.patchValue({
      name: null,
      desc: null,
      price: null,
      category: null
    });
    this.localImageUrl = '';
  }

  close() {
    this.createFormService.toggle();
  }

  setTextAreaRow(e) {
    const key = e.key;
    const ctrl = e.ctrlKey;

    if (key === 'ArrowUp' && ctrl) {
      this.rows++;
    } else if (key === 'ArrowDown' && ctrl) {
      this.rows--;
    }
  }

  private setIsOpen(currState: boolean) {
    if (currState) {
      this.createFormState = 'open';
    } else {
      this.createFormState = 'close';
      this.cleanForm();
    }
  }

  ngOnInit() {
    this.createFormService.change.subscribe(this.setIsOpen.bind(this));
  }

}
