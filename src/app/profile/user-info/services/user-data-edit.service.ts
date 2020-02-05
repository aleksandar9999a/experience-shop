import { Injectable, Output, EventEmitter } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Injectable()
export class UserDataEditService {
  isOpen = false;

  constructor( ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeInfo: EventEmitter<IProfile> = new EventEmitter();

  toggle(data?: IProfile) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);

    if (data) {
      this.changeInfo.emit(data);
    }
  }

}
