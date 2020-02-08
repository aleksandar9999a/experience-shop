import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

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
    private router: Router
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
    this.router.navigate([{ outlets: { formsOutlet: 'shopping_card' } }]);
  }

  ngOnInit() { }

}
