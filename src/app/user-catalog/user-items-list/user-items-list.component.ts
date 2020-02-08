import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-user-items-list',
  templateUrl: './user-items-list.component.html',
  styleUrls: ['./user-items-list.component.css']
})
export class UserItemsListComponent implements OnInit {
  get items() { return this.userDetailsService.items; }
  constructor(
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit() {
  }

}
