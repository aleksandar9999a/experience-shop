import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Item } from '../interfaces/item.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myItems: Array<Item>;

  constructor(
    private profileService: ProfileService
  ) { }

  setItems(newItems: Array<Item>){
    this.myItems = newItems;
  }

  ngOnInit() {
    this.profileService.searchMyItems();
    this.profileService.getItems.subscribe(this.setItems.bind(this));
  }

}
