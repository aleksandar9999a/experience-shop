import { Component, OnInit, NgZone } from '@angular/core';

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
    private shoppingCardService: ShoppingCardService,
    private zone: NgZone
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

  setIsHere(currState: boolean){
    this.zone.run(() => {
      this.isHere = currState;
    });
  }

  ngOnInit() {
    this.userService.checkIsHere()
    this.userService.isUserLogged.subscribe(this.setIsHere.bind(this));
  }

}
