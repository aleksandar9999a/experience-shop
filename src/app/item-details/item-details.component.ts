import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { Item } from '../interfaces/item.interface';
import { detailsFormAnimations } from './item-details.animations';
import { DetailsFormService } from '../services/item-details.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css'],
  animations: detailsFormAnimations
})
export class ItemDetailsComponent implements OnInit {
  detailsFormState: string = 'close';
  detailsData: Item;
  isHere = false;

  constructor(
    private detailsAnimationsService: DetailsFormService,
    private readonly notifier: NotifierService, 
    private userService: UserService,
    private fireStore: AngularFirestore
  ) { }

  close() {
    this.detailsAnimationsService.toggle();
  }

  isCreator() {
    let currentUid = this.userService.getCurrentUid();
    return currentUid === this.detailsData.creatorUid;
  }

  addToShoppingCard() {
    let currentUid = this.userService.getCurrentUid();

    this.fireStore
      .collection('userdata')
      .doc(currentUid)
      .collection('shoppingCard')
      .add(this.detailsData)
      .then(_ => {
        this.notifier.notify('success', 'Successful!');
        this.close();
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  ngOnInit() {
    this.detailsAnimationsService.changeFormState.subscribe(isOpen => isOpen ? this.detailsFormState = 'open' : this.detailsFormState = 'close');
    this.detailsAnimationsService.changeDataState.subscribe(data => this.detailsData = data);
    this.userService.isUserLogged.subscribe(isHere => this.isHere = isHere);
  }

}
