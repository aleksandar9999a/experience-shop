import { Component, OnInit } from '@angular/core';
import { detailsFormAnimations } from './item-details.animations';
import { DetailsFormAnimations } from '../services/item-details.animations.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  animations: detailsFormAnimations
})
export class ItemDetailsComponent implements OnInit {
  detailsFormState: string = 'close';
  detailsData;
  isHere = false;

  constructor(
    private detailsAnimationsService: DetailsFormAnimations,
    private userService: UserService
  ) { }

  close() {
    this.detailsAnimationsService.toggle({});
  }

  isCreator(){
    let currentUid = this.userService.getCurrentUid();
    return currentUid === this.detailsData.creatorUid;
  }

  ngOnInit() {
    this.detailsAnimationsService.changeFormState.subscribe(isOpen => isOpen ? this.detailsFormState = 'open' : this.detailsFormState = 'close');
    this.detailsAnimationsService.changeDataState.subscribe(data => this.detailsData = data);
    this.userService.isUserLogged.subscribe(isHere => this.isHere = isHere);
  }

}
