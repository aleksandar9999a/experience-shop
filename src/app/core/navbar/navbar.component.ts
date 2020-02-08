import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { ShoppingCardService } from 'src/app/shopping-card/services/shopping-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  get isHere() { return this.userService.isHere; }
  navBarIsOpen = 'hide';

  constructor(
    private userService: UserService,
    private shoppingCardService: ShoppingCardService
  ) { }

  logOut() {
    this.userService.logOut();
  }

  changeNavbarState() {
    if (this.navBarIsOpen === 'show') {
      this.navBarIsOpen = 'hide';
    } else {
      this.navBarIsOpen = 'show';
    }
  }

  openShoppingCard() {
    this.shoppingCardService.toggle();
  }

  ngOnInit() { }

}
