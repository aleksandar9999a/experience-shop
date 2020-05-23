import { Injectable } from '@angular/core';
import { IItem } from 'src/app/interfaces/item.interface';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { Observable } from 'rxjs';

@Injectable()
export class DetailsFormService {
  private profileDoc: AngularFirestoreDocument<IProfile>;
  profile: Observable<IProfile>;

  private itemDoc: AngularFirestoreDocument<IItem>;
  item: Observable<IItem>;

  constructor(private afs: AngularFirestore) { }

  loadCreatorData(uid: string) {
    this.profileDoc = this.afs.doc<IProfile>(`userdata/${uid}`);
    this.profile = this.profileDoc.valueChanges();
  }

  loadItemData(id: string) {
    this.itemDoc = this.afs.doc<IItem>(`allItems/${id}`);
    this.item = this.itemDoc.valueChanges();
  }

  loadDetailsData(id: string, uid: string) {
    this.loadItemData(id);
    this.loadCreatorData(uid);
  }

}
