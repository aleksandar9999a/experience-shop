import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { UserService } from '../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Profile } from '../interfaces/profile.interface';
import { UserDataEditService } from '../services/user-data-edit.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myItems: Array<Item>;
  info: Profile;
  profileImg: string = './../../assets/images/unkItem.svg';

  constructor(
    private fireStore: AngularFirestore,
    private userService: UserService,
    private userDataEditService: UserDataEditService
  ) { }

  private createItemsElements(item: any) {
    let newItem = item.data();
    newItem.id = item.id;
    this.myItems.push(newItem);
  }

  private setItems(shots: any) {
    this.myItems = [];
    shots.forEach(this.createItemsElements.bind(this));
  }

  private setInfo(shot: any){
    this.info = shot.data();
    if (this.info.profileImg) {
      this.profileImg = this.info.profileImg;
    }
  }

  openEditForm(){
    this.userDataEditService.toggle(this.info);
  }

  ngOnInit() {
    const uid = this.userService.getCurrentUid();
    if (uid) {
      this.fireStore
            .collection('userdata')
            .doc(uid)
            .collection('userdata')
            .doc('info')
            .get()
            .subscribe(this.setInfo.bind(this));

      this.fireStore
        .collection('allItems', ref => ref.where('creatorUid', '==', uid))
        .get()
        .subscribe(this.setItems.bind(this));
    }

  }

}
