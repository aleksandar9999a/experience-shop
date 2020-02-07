import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationFormService } from 'src/app/authentication/services/authentication-form.service';
import { AnnouncementsFormService } from 'src/app/shared/services/announcements-form.service';
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
    private authenticationFormService: AuthenticationFormService,
    private userService: UserService,
    private shoppingCardService: ShoppingCardService,
    private announcementsFormService: AnnouncementsFormService
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

  openSignForm() {
    this.authenticationFormService.toggle();
  }

  openCreateForm() {
    this.announcementsFormService.toggle();
  }

  openShoppingCard() {
    this.shoppingCardService.toggle();
  }

  ngOnInit() { }

}
