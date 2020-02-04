import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { UserDetailsService } from 'src/app/user-catalog/services/user-details.service';
import { UserItemsListService } from 'src/app/user-catalog/services/user-items-list.service';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() profile: IProfile;

  constructor(
    private userDetailsService: UserDetailsService,
    private userItemsListService: UserItemsListService
  ) { }

  openUserDetails() {
    this.userDetailsService.toggle(this.profile);
    this.userItemsListService.searchByUserUID(this.profile.id);
  }

  ngOnInit() {
  }

}
