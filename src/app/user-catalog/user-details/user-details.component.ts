import { Component, OnInit } from '@angular/core';
import { detailsFormAnimations } from 'src/app/shared/item-details/item-details.animations';
import { UserDetailsService } from '../services/user-details.service';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
  animations: detailsFormAnimations
})
export class UserDetailsComponent implements OnInit {
  detailsFormState = 'close';
  user: IProfile;

  constructor(
    private userDetailsService: UserDetailsService
  ) { }

  close() {
    this.userDetailsService.toggle();
  }

  changeFormState(isOpen: boolean) {
    isOpen
    ?
    this.detailsFormState = 'open'
    :
    this.detailsFormState = 'close';
  }

  setData(data: IProfile) {
    this.user = data;
  }

  ngOnInit() {
    this.userDetailsService.changeFormState.subscribe(this.changeFormState.bind(this));
    this.userDetailsService.changeData.subscribe(this.setData.bind(this));
  }

}
