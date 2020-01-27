import { Injectable, Output, EventEmitter } from '@angular/core';
import { IItem } from 'src/app/interfaces/item.interface';

@Injectable()
export class DetailsFormService {

  isOpen = false;

  constructor() { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeDataState: EventEmitter<IItem> = new EventEmitter();

  toggle(data?: IItem) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    if (data) {
      this.changeDataState.emit(data);
    }
  }

}
