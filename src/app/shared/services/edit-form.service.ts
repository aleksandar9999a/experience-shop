import { Injectable, Output, EventEmitter } from '@angular/core';
import { IItem } from 'src/app/interfaces/item.interface';

@Injectable()
export class EditFormService {
  isOpen = false;

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeData: EventEmitter<IItem> = new EventEmitter();

  toggle(data?: IItem) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    if (data) {
      this.changeData.emit(data);
    }
  }
}
