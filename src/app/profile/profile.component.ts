import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { UserService } from '../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myItems: Array<Item>;

  constructor(
    private fireStore: AngularFirestore,
    private userService: UserService
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

  ngOnInit() {
    const uid = this.userService.getCurrentUid();
    if (uid) {
      this.fireStore
        .collection('allItems', ref => ref.where('creatorUid', '==', uid))
        .get()
        .subscribe(this.setItems.bind(this));
    }

  }

}
