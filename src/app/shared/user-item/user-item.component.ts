import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() profile: IProfile;

  constructor(
    private router: Router
  ) { }

  openUserDetails() {
    this.router.navigate([{ outlets: { formsOutlet: ['user_details', this.profile.id] } }]);
  }

  ngOnInit() {
  }

}
