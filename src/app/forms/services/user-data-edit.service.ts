import { Injectable } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { UserService } from 'src/app/services/user.service';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable()
export class UserDataEditService {
  get uid() { return this.userService.uid; }
  userdata: Observable<IProfile>;
  profileDoc: AngularFirestoreDocument<IProfile>;

  constructor(
    private userService: UserService,
    private afs: AngularFirestore
   ) { }

  loadUserdata() {
    this.profileDoc = this.afs.doc<IProfile>(`userdata/${this.uid}`);
    this.userdata = this.profileDoc.valueChanges();
  }

}
