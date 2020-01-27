import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Profile } from 'src/app/interfaces/profile.interface';
import { UserService } from 'src/app/services/user.service';
import { UserDataEditService } from 'src/app/services/user-data-edit.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  profileDoc: AngularFirestoreDocument<Profile>;
  profile: Profile;
  isUnknown: boolean;
  isLoading: boolean;

  constructor(
    private afs: AngularFirestore,
    private userService: UserService,
    private userDataEditService: UserDataEditService
  ) {
    const uid = this.userService.getCurrentUid();
    this.isLoading = true;
    this.profileDoc = afs.doc<Profile>(`userdata/${uid}/userdata/info`);
    const data = this.profileDoc.valueChanges();
    data.subscribe(this.setData.bind(this));
  }

  setData(shot: Profile) {
    if (shot !== undefined) {
      this.profile = shot;
      this.isUnknown = false;
    } else {
      this.isUnknown = true;
    }
    this.isLoading = false;
  }

  openEditForm() {
    this.userDataEditService.toggle(this.profile);
  }

  ngOnInit() {
  }

}
