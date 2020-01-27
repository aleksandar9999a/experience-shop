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
  createFormState = 'close';
  defaultImage = '../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;
  rows = 4;

  createForm: FormGroup;

  constructor(
    private createFormService: CreateFormService,
    private readonly notifier: NotifierService,
    private announcementsService: AnnouncementsService
  ) { }

  async createAdv() {
    if (this.createForm.valid) {
      const { name, desc, price, category } = this.createForm.value;
      await this.announcementsService.createAdv(name, desc, this.localImage, price, category);
      this.createFormService.toggle();
    } else {
      this.notifier.notify('warning', 'Form data is incorrect!');
    }
  }

  previewImg(e) {
    if (e.target.files[0]) {
      this.localImage = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.localImage);
      reader.onload = () => {
        this.localImageUrl = reader.result;
      };
    }
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
      this.createForm.reset();
    }
  }

  ngOnInit() {
    this.createFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
    this.createForm = new FormGroup({
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
    });
  }

  get name() { return this.createForm.get('name'); }
  get desc() { return this.createForm.get('desc'); }
  get image() { return this.createForm.get('image'); }
  get price() { return this.createForm.get('price'); }
  get category() { return this.createForm.get('category'); }

}
