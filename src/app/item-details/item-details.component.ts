import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { NotifierService } from 'angular-notifier';
import { Item } from '../interfaces/item.interface';
import { detailsFormAnimations } from './item-details.animations';
import { DetailsFormService } from '../services/item-details.service';
import { CatalogService } from '../services/catalog.service';

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
    private detailsFormService: DetailsFormService,
    private readonly notifier: NotifierService,
    private userService: UserService,
    private fireStore: AngularFirestore,
    private catalogService: CatalogService
  ) { }

  close() {
    this.detailsFormService.toggle();
  }

  deleteItem() {
    this.detailsFormService.delete(this.detailsData.id)
      .then(_ => {
        this.notifier.notify('success', 'Successful delete your announcement!');
        this.close();
        this.catalogService.getAllItems();
      })
      .catch(err => this.notifier.notify('warning', err.message))
  }

  isCreator() {
    let currentUid = this.userService.getCurrentUid();
    return currentUid === this.detailsData.creatorUid;
  }

  addToShoppingCard() {
    this.detailsFormService.addItemToShoppingCard(this.detailsData)
      .then(_ => {
        this.notifier.notify('success', 'Successful!');
        this.close();
      })
      .catch(err => this.notifier.notify('warning', err.message));
  }

  ngOnInit() {
    this.detailsFormService.changeFormState.subscribe(isOpen => isOpen ? this.detailsFormState = 'open' : this.detailsFormState = 'close');
    this.detailsFormService.changeDataState.subscribe(data => this.detailsData = data);
    this.userService.isUserLogged.subscribe(isHere => this.isHere = isHere);
  }

}
