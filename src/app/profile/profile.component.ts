import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item.interface';
import { Profile } from '../interfaces/profile.interface';
import { UserDataEditService } from '../services/user-data-edit.service';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  myItems: Array<Item>;
  info: Profile;
  isLoadingUserdata: boolean;
  isLoadingItems: boolean;
  profileImg: string = './../../assets/images/unkItem.svg';

  constructor(
    private userDataEditService: UserDataEditService,
    private profileService: ProfileService
  ) { }


  private setInfo(shot: any) {
    this.info = shot;
    if (this.info.profileImg) {
      this.profileImg = this.info.profileImg;
    }
    this.isLoadingUserdata = false;
  }

  private setItems(items: Array<Item>){
    this.myItems = items;
    this.isLoadingItems = false;
  }

  openEditForm() {
    this.userDataEditService.toggle(this.info);
  }

  ngOnInit() {
    this.profileService.loadUserdata();
    this.isLoadingItems = true;
    this.isLoadingUserdata = true;
    this.profileService.getUserdata.subscribe(this.setInfo.bind(this))
    this.profileService.getUserItems.subscribe(this.setItems.bind(this));
  }

}
