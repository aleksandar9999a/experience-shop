import { Component, OnInit } from '@angular/core';
import { editFormAnimations } from './edit-form.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';
import { Item } from '../interfaces/item.interface';
import { AnnouncementsService } from '../services/announcements.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  animations: editFormAnimations
})
export class EditFormComponent implements OnInit {
  editFormState: string = 'close';
  currentData: Item;
  defaultImage = null;
  localImageUrl = null;
  localImage = null;
  rows: number = 4;
  isDisabled: boolean = false;

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
    image: new FormControl(null, Validators.required),
    price: new FormControl(null, Validators.required),
    category: new FormControl(null, Validators.required)
  })

  constructor(
    private editFormService: EditFormService,
    private announcementsService: AnnouncementsService
  ) { }

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

  async editItem() {
    const { name, desc, price, category } = this.editForm.value;
    const image = this.localImage || this.defaultImage;
    this.isDisabled = true;
    await this.announcementsService.edit(this.currentData.id, name, desc, image, price, category);
    this.editFormService.toggle();
    this.isDisabled = false;
  }

  handleChange(){
    if (this.editForm.invalid) {
      this.isDisabled = true;
    }else{
      this.isDisabled = false;
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
    }
  }

  ngOnInit() {
    this.editFormService.change.subscribe(this.setIsOpen.bind(this));
    this.editFormService.changeData.subscribe(this.loadData.bind(this));
  }

}
