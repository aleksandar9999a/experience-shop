import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { AngularFireAuth } from '@angular/fire/auth';
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
