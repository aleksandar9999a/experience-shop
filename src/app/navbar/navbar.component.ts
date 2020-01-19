import { Component, OnInit } from '@angular/core';

import { SignFormService } from '../services/signForm.service';
import { UserService } from '../services/user.service';
import { CreateFormService } from '../services/createForm.service';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHere: boolean;

  constructor(
    private signFormService: SignFormService,
    private userService: UserService,
    private createFormService: CreateFormService,
    private shoppingCardService: ShoppingCardService
  ) { }

  logOut() {
    this.userService.logOut();
  }

  openSignForm() {
    this.signFormService.toggle();
  }

  openCreateForm() {
    this.createFormService.toggle();
  }

  openShoppingCard(){
    this.shoppingCardService.toggle();
  }

  ngOnInit() {
    this.userService.isUserLogged.subscribe(isHere => this.isHere = isHere);
  }

}
