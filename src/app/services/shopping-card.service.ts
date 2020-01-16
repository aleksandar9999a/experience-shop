import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingCardService {

  isOpen = false;

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();

  toggle(data) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
  }

}