import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.interface';
import { UserService } from '../services/user.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Observable<Item[]>;
  isItems = false;
  isLoading = true;

  constructor(
    private afs: AngularFirestore,
    private userService: UserService
  ) {
    this.isLoading = true;
    const uid = this.userService.getCurrentUid();
    this.itemsCollection = this.afs.collection<Item>('allItems', (ref: any) => ref.where('creatorUid', '==', uid));
    this.items = this.itemsCollection.valueChanges();
    this.items.subscribe(this.setItems.bind(this));
  }

  setItems(shots: Array<Item>) {
    shots.length > 0 ? this.isItems = true : this.isItems = false;
    this.isLoading = false;
  }

  ngOnInit() {
  }

}
