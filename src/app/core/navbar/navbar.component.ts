import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { CreateFormService } from 'src/app/shared/services/createForm.service';
import { AuthenticationFormService } from 'src/app/authentication/services/authentication-form.service';
import { ShoppingCardService } from 'src/app/shared/services/shopping-card.service';

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
    private createFormService: CreateFormService,
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

  openSignForm() {
    this.authenticationFormService.toggle();
  }

  openCreateForm() {
    this.createFormService.toggle();
  }

  openShoppingCard() {
    this.shoppingCardService.toggle();
  }

  ngOnInit() { }

}
