import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Item } from '../interfaces/item.interface';

@Injectable()
export class EditFormService {
  isOpen = false;

  constructor() { }

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() changeData: BehaviorSubject<any> = new BehaviorSubject({});

  toggle(data?: Item) {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.changeData.next(data || {});
  }
}
