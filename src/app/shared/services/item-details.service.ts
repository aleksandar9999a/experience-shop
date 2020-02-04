import { Injectable, Output, EventEmitter } from '@angular/core';
import { IItem } from 'src/app/interfaces/item.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { Observable } from 'rxjs';

@Injectable()
export class DetailsFormService {
  profileDoc: AngularFirestoreDocument<IProfile>;
  profile: Observable<IProfile>;

  isOpen = false;

  constructor(private afs: AngularFirestore) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();
  @Output() changeDataState: EventEmitter<IItem> = new EventEmitter();

  toggle(data?: IItem) {
    this.isOpen = !this.isOpen;
    this.changeFormState.emit(this.isOpen);
    if (data) {
      this.changeDataState.emit(data);
    }
  }

  getItemCreatorData(uid: string) {
    this.profileDoc = this.afs.doc<IProfile>(`userdata/${uid}`);
    this.profile = this.profileDoc.valueChanges();
}

}
