import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { UserItemsListService } from '../services/user-items-list.service';

@Component({
  selector: 'app-user-items-list',
  templateUrl: './user-items-list.component.html',
  styleUrls: ['./user-items-list.component.css']
})
export class UserItemsListComponent implements OnInit {
  @Input() user: IProfile;
  get items() { return this.userItemsListService.items; }
  constructor(
    private userItemsListService: UserItemsListService
  ) { }

  ngOnInit() {
    this.userItemsListService.searchByUserUID(this.user.id);
  }

}
