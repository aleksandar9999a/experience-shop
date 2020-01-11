import { Component, OnInit } from '@angular/core';
import { NotifierService } from "angular-notifier";
import { Router } from '@angular/router';
import { trigger, state, style, transition, animate } from '@angular/animations';

import fire from '../config/firebase.js';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  animations: [
    trigger('signState', [
      state('hide', style({
        display: 'none',
        opacity: 0
      })),
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      transition('hide <=> show', animate('0.5s'))
    ])
  ]
})
export class NavbarComponent implements OnInit {
  isHere: boolean;
  signFormState = 'hide';
  constructor(private readonly notifier: NotifierService, private routerService: Router) { }

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

  toggle() {
    this.signFormState === 'show' ? this.signFormState = 'hide' : this.signFormState = 'show';
  }

  ngOnInit() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.isHere = true;
      }
      
    })
  }

}
