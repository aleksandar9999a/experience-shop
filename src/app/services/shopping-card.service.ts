import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShoppingCardService {

  isOpen = false;

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeDataState: BehaviorSubject<Object> = new BehaviorSubject({});

  toggle(data) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    this.changeDataState.next(data);
  }

}