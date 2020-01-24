import { Component, OnInit } from '@angular/core';

import { SignFormService } from '../services/signForm.service';
import { UserService } from '../services/user.service';
import { CreateFormService } from '../services/createForm.service';
import { ShoppingCardService } from '../services/shopping-card.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHere: boolean;
  navBarIsOpen = 'hide';


  constructor(
    private signFormService: SignFormService,
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
    this.signFormService.toggle();
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
