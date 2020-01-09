import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import fire from '../config/firebase.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isHere: boolean;

  constructor(private routerService: Router) { }

  ngOnInit() {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        this.isHere = true;
      }
    })
  }

}
