import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../services/user-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  get profile() { return this.userInfoService.profile; }

  constructor(
    private userInfoService: UserInfoService,
    private router: Router
  ) { }

  openEditForm() {
    this.router.navigate([{ outlets: { formsOutlet: 'userdata_edit' } }]);
  }

  ngOnInit() {
    this.userInfoService.refreshUserInfo();
  }

}
