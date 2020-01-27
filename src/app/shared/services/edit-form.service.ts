import { Injectable, Output, EventEmitter } from '@angular/core';
import { Item } from 'src/app/interfaces/item.interface';

@Injectable()
export class EditFormService {
  isOpen = false;

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeData: EventEmitter<Item> = new EventEmitter();

  toggle(data?: Item) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    if (data) {
      this.changeData.emit(data);
    }
  }
}
