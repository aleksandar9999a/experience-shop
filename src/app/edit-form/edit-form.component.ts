import { Component, OnInit } from '@angular/core';
import { editFormAnimations } from './edit-form.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';
import { Item } from '../interfaces/item.interface';
import { AnnouncementsService } from '../services/announcements.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  animations: editFormAnimations
})
export class EditFormComponent implements OnInit {
  editFormState = 'close';
  currentData: Item;
  defaultImage = '../../assets/images/unkItem.svg';
  localImageUrl = null;
  localImage = null;
  rows = 4;

  editForm = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(4)
    ]),
    desc: new FormControl(null, [
      Validators.minLength(6),
      Validators.maxLength(1000),
      Validators.required
    ]),
    image: new FormControl(null),
    price: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required)
  });

  constructor(
    private editFormService: EditFormService,
    private announcementsService: AnnouncementsService,
    private readonly notifier: NotifierService
  ) { }

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

  async editItem() {
    if (this.editForm.valid) {
      const { name, desc, price, category } = this.editForm.value;
      const image = this.localImage || this.defaultImage;
      this.announcementsService.edit(this.currentData.id, name, desc, image, price, category);
      this.editFormService.toggle();
    } else {
      this.notifier.notify('warning', 'Form data is incorrect!');
    }
  }

  private loadData(data: Item) {
    this.currentData = data;
    this.defaultImage = data.image;
    this.editForm.patchValue({
      name: data.name,
      desc: data.desc,
      price: data.price,
      category: data.category
    });
  }

  close() {
    this.editFormService.toggle();
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
      this.editFormState = 'open';
    } else {
      this.editFormState = 'close';
      this.editForm.reset();
    }
  }

  ngOnInit() {
    this.editFormService.changeFormState.subscribe(this.setIsOpen.bind(this));
    this.editFormService.changeData.subscribe(this.loadData.bind(this));
  }

  get name() { return this.editForm.get('name'); }
  get desc() { return this.editForm.get('desc'); }
  get image() { return this.editForm.get('image'); }
  get price() { return this.editForm.get('price'); }
  get category() { return this.editForm.get('category'); }

}
