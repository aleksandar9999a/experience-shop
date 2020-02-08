import { Component, OnInit } from '@angular/core';
import { ProfileSetUpAnimations } from './profile-set-up.animations';
import { ProfileSetUpFormService } from './../services/profile-set-up.service';
import { UserDataEditService } from 'src/app/profile/user-info/services/user-data-edit.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile-set-up',
  templateUrl: './profile-set-up.component.html',
  styleUrls: ['./profile-set-up.component.css'],
  animations: ProfileSetUpAnimations
})
export class ProfileSetUpComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  loadUserEditForm() {
    this.router.navigate([{ outlets: { formsOutlet: 'userdata_edit' } }]);
  }

  close() {

  }

  ngOnInit() {
  }

}
