import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Injectable()
export class UserInfoService {
    profileDoc: AngularFirestoreDocument<IProfile>;
    profile: Observable<IProfile>;

    get uid() { return this.userService.uid; }

    constructor(
        private afs: AngularFirestore,
        private userService: UserService
    ) {
        this.profileDoc = afs.doc<IProfile>(`userdata/${this.uid}`);
        this.profile = this.profileDoc.valueChanges();
    }

    refreshUserInfo() {
        this.profileDoc = this.afs.doc<IProfile>(`userdata/${this.uid}`);
        this.profile = this.profileDoc.valueChanges();
    }

}
