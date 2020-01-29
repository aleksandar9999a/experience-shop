import { Component, OnInit, Input } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {
  @Input() profile: IProfile;

  constructor() { }

  ngOnInit() {
  }

}
