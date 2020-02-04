import { Component, OnInit } from '@angular/core';
import { UserDataEditService } from '../services/user-data-edit.service';
import { UserInfoService } from '../services/user-info.service';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  get profile() { return this.userInfoService.profile; }

  constructor(
    private userInfoService: UserInfoService,
    private userDataEditService: UserDataEditService
  ) { }

  openEditForm(data: IProfile) {
    this.userDataEditService.toggle(data);
  }

  ngOnInit() {
    this.userInfoService.refreshUserInfo();
  }

}
