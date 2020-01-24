import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHere: boolean;

  constructor(
    private fireBaseAuth: AngularFireAuth
  ) { }

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
