import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class DetailsFormService {

  isOpen = false;

  constructor() { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeDataState: BehaviorSubject<any> = new BehaviorSubject({});

  toggle(data?: Item) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    this.changeDataState.next(data || {});
  }

}
