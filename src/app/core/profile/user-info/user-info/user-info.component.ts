import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../services/user-info.service';
import { Router } from '@angular/router';
<<<<<<< HEAD
import { Links } from 'src/app/config/links';
=======
>>>>>>> parent of 6249ca2... Deploy project

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  get profile() { return this.userInfoService.profile; }
<<<<<<< HEAD
  get spinner() { return this.links.progresbar; }

  constructor(
    private userInfoService: UserInfoService,
    private router: Router,
    private links: Links
=======

  constructor(
    private userInfoService: UserInfoService,
    private router: Router
>>>>>>> parent of 6249ca2... Deploy project
  ) { }

  openEditForm() {
    this.router.navigate([{ outlets: { formsOutlet: 'userdata_edit' } }]);
  }

  ngOnInit() {
    this.userInfoService.refreshUserInfo();
  }

}
