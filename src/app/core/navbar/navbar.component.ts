import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from 'src/app/services/user.service';
import { ShoppingCardService } from 'src/app/services/shopping-card.service';
import { CreateFormService } from 'src/app/shared/services/createForm.service';
import { AuthenticationFormService } from 'src/app/authentication/services/authentication-form.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHere: boolean;
  navBarIsOpen = 'hide';

  constructor(
    private authenticationFormService: AuthenticationFormService,
    private userService: UserService,
    private createFormService: CreateFormService,
    private shoppingCardService: ShoppingCardService,
    private fireBaseAuth: AngularFireAuth
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

  ngOnInit() {
    this.fireBaseAuth.auth
      .onAuthStateChanged(user => {
        if (user) {
          this.isHere = true;
        } else {
          this.isHere = false;
        }
      });
  }

}
