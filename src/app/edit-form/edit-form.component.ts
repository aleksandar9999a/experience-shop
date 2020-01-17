import { Component, OnInit } from '@angular/core';
import { editFormAnimations } from './edit-form.animations';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EditFormService } from '../services/edit-form.service';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
  animations: editFormAnimations
})
export class EditFormComponent implements OnInit {
  editFormState: string = 'close';
  currentData: Item;
  defaultImage = '';
  localImageUrl = null;
  localImage = null;

  editForm = new FormGroup({
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
    price: new FormControl(null, Validators.required),
    type: new FormControl(null, Validators.required)
  })

  constructor(
    private editFormService: EditFormService
  ) { }

  handleChange(e) {
    this.localImage = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(this.localImage);
    reader.onload = () => {
      this.localImageUrl = reader.result;
    }
  }

  editItem(){

  }

  loadData(data){
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

  ngOnInit() {
    this.editFormService.change.subscribe(isOpen => isOpen ? this.editFormState = 'open' : this.editFormState = 'close');
    this.editFormService.changeData.subscribe(this.loadData.bind(this));
  }

}
