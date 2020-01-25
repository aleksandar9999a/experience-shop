import { Injectable, Output, EventEmitter } from '@angular/core';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class DetailsFormService {

  isOpen = false;

  constructor() { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeDataState: EventEmitter<Item> = new EventEmitter();

  toggle(data?: Item) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    if (data) {
      this.changeDataState.emit(data);
    }
  }

}
