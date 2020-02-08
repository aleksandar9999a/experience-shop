import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';

@Component({
  selector: 'app-user-details-list-navigation',
  templateUrl: './user-details-list-navigation.component.html',
  styleUrls: ['./user-details-list-navigation.component.css']
})
export class UserDetailsListNavigationComponent implements OnInit {
  get items() { return this.userDetailsService.items; }

  constructor(
    private userDetailsService: UserDetailsService
  ) { }

  nextPage() {
    this.userDetailsService.loadNextPage();
  }

  backPage() {
    this.userDetailsService.loadBackPage();
  }

  ngOnInit() {
  }

}
