import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
import { Router } from '@angular/router';

import { SignFormService } from '../services/signForm.service';
import { UserService } from '../services/user.service';
import { CreateFormAnimations } from '../services/createFormAnimations.service';
import { ShoppingCardService } from '../services/shopping-card.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHere: boolean = false;

  constructor(
    private readonly notifier: NotifierService,
    private routerService: Router,
    private signFormService: SignFormService,
    private userService: UserService,
    private createFormAnimationsService: CreateFormAnimations,
    private shoppingCardService: ShoppingCardService
  ) { }

  logOut() {
    this.userService.logOut()
      .then(_ => {
        this.notifier.notify('success', 'Successful!');
        this.routerService.navigate(['/']);
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  openSignForm() {
    this.signFormService.toggle();
  }

  openCreateForm() {
    this.createFormAnimationsService.toggle();
  }

  openShoppingCard(){
    this.shoppingCardService.toggle();
  }

  ngOnInit() {
    this.userService.isUserLogged.subscribe(isHere => this.isHere = isHere);
  }

}
