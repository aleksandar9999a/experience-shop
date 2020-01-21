import { Component, OnInit, NgZone } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  isHere: boolean;
  
  constructor(
    private userService: UserService,
    private zone: NgZone
  ) { }

  setIsHere(currState: boolean){
    this.zone.run(() => {
      this.isHere = currState;
    });
  }

  ngOnInit() {
    this.userService.checkIsHere();
    this.userService.isUserLogged.subscribe(this.setIsHere.bind(this));
  }
}
