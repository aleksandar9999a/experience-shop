import { Injectable, Output, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class EditFormService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() changeData: BehaviorSubject<any> = new BehaviorSubject({})

  toggle(data?) {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.changeData.next(data || {});
  }

}