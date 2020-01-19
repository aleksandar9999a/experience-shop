import { Component, OnInit } from '@angular/core';
import { editFormAnimations } from './edit-form.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';
import { Item } from '../interfaces/item.interface';
import { CatalogService } from '../services/catalog.service';

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
    type: new FormControl(null, Validators.required)
  })

  constructor(
    private editFormService: EditFormService,
    private catalogService: CatalogService
  ) { }

  handleChange(e) {
    this.localImage = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.localImage);
    reader.onload = () => {
      this.localImageUrl = reader.result;
    }
  }

  editItem() {
    const { name, desc, price, type } = this.editForm.value;
    const image = this.localImage || this.defaultImage;
    this.editFormService.edit(this.currentData.id, name, desc, image, price, type);
    this.editFormService.toggle();
    this.catalogService.getAllItems();
  }

  private loadData(data: Item) {
    this.currentData = data;
    this.defaultImage = data.image;
    this.editForm.patchValue({
      name: data.name,
      desc: data.desc,
      price: data.price,
      type: data.type
    });
  }

  close() {
    this.editFormService.toggle();
  }

  private setIsOpen(currState: boolean){
    if (currState) {
      this.editFormState = 'open';
    }else{
      this.editFormState = 'close';
    }
  }

  ngOnInit() {
    this.editFormService.change.subscribe(this.setIsOpen.bind(this));
    this.editFormService.changeData.subscribe(this.loadData.bind(this));
  }

}
