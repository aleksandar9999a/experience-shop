import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { UserService } from 'src/app/services/user.service';
import { UserDataEditService } from '../services/user-data-edit.service';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  profileDoc: AngularFirestoreDocument<IProfile>;
  profile: IProfile;
  isUnknown: boolean;
  isLoading: boolean;

  get uid() { return this.userService.uid; }

  constructor(
    private afs: AngularFirestore,
    private userService: UserService,
    private userDataEditService: UserDataEditService
  ) {
    this.isLoading = true;
    this.profileDoc = afs.doc<IProfile>(`userdata/${this.uid}`);
    const data = this.profileDoc.valueChanges();
    data.subscribe(this.setData.bind(this));
  }

  setData(shot: IProfile) {
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
