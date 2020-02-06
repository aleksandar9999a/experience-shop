import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class ShipmentDetailsService {
  isOpen = false;

  constructor() { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();

  toggle() {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
  }

}
