import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  get isHere() { return this.userService.isHere; }

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() { }
}
