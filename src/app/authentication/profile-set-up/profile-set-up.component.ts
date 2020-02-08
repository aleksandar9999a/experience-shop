import { Component, OnInit } from '@angular/core';
import { ProfileSetUpAnimations } from './profile-set-up.animations';
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
    this.router.navigate([{ outlets: { formsOutlet: [] } }]);
  }

  ngOnInit() {
  }

}
