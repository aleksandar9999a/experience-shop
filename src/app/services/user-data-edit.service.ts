import { Injectable, Output, EventEmitter } from '@angular/core';
import { Profile } from '../interfaces/profile.interface';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserDataEditService {

  isOpen = false;

  @Output() change: EventEmitter<boolean> = new EventEmitter();
  @Output() changeInfo: BehaviorSubject<Object> = new BehaviorSubject({});

  toggle(data?: Profile) {
    this.isOpen = !this.isOpen;
    this.change.emit(this.isOpen);
    this.changeInfo.next(data || {});
  }

}