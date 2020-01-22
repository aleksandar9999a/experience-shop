import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Item } from '../interfaces/item.interface';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-my-items',
  templateUrl: './my-items.component.html',
  styleUrls: ['./my-items.component.css']
})
export class MyItemsComponent implements OnInit {
  private itemsCollection: AngularFirestoreCollection<Item>;
  items: Array<Item>;
  isItems: boolean = false;
  isLoading: boolean = true;
  
  constructor(
    private afs: AngularFirestore,
    private userService: UserService
  ) { 
    this.isLoading = true;
    const uid = this.userService.getCurrentUid();
    this.itemsCollection = this.afs.collection<Item>('allItems', (ref:any) => ref.where('creatorUid', '==', uid));
    const newItems = this.itemsCollection.valueChanges();
    newItems.forEach(this.setItems.bind(this));
  }

  setItems(shots: Array<Item>) {
    this.items = shots;
    this.items.length > 0 ? this.isItems = true : this.isItems = false;
    this.isLoading = false;
  }

  ngOnInit() {
  }

}
