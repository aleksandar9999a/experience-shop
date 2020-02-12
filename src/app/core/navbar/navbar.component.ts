import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
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
    private fireBaseAuth: AngularFireAuth,
    private userService: UserService,
    private router: Router,
    private zone: NgZone
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

  openShoppingCard() {
    this.router.navigate([{ outlets: { formsOutlet: 'shopping_card' } }]);
  }

  openAnnForm() {
    this.router.navigate([{ outlets: { formsOutlet: 'create_announcement' } }]);
  }

  openAuthForm() {
    this.router.navigate([{ outlets: { formsOutlet: 'authentication' } }]);
  }

  ngOnInit() {
    this.fireBaseAuth.auth.onAuthStateChanged(user => this.zone.run(() => this.isHere = !!user));
  }

}
