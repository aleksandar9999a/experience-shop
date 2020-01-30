import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ShoppingCardService {
  isOpen: boolean;

  constructor(
  ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
  }

}
