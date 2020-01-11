import { Component, OnInit, HostListener } from '@angular/core';
import { NotifierService } from "angular-notifier";
import { Router } from '@angular/router';
import { SignFormService } from '../services/signForm.service';

import fire from '../config/firebase.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isHere: boolean;
  signFormState = 'close';
  
  constructor(private readonly notifier: NotifierService, private routerService: Router, private signFormService: SignFormService) { }

  logOut() {
    fire.auth()
      .signOut()
      .then(res => {
        this.notifier.notify('success', 'Successful!');
        this.routerService.navigate(['/']);
        location.reload();
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  openSignForm() {
    this.signFormService.toggle();
  }

  ngOnInit() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.isHere = true;
      }
    })
  }

}
