import { Injectable, Output, EventEmitter } from '@angular/core';
import { IShipment } from 'src/app/interfaces/shipment.interface';
import { IItem } from 'src/app/interfaces/item.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { UserService } from 'src/app/services/user.service';
import { NotifierService } from 'angular-notifier';

@Injectable()
export class ShipmentDetailsService {
  private isOpen = false;
  private data: IShipment;

  items: Array<IItem>;
  title: string;
  receiver: Observable<IProfile>;
  sender: Observable<IProfile>;
  status: string;
  isSender: boolean;

  get uid() { return this.userService.uid; }

  constructor(
    private readonly notifier: NotifierService,
    private afs: AngularFirestore,
    private userService: UserService
  ) { }

  @Output() changeFormState: EventEmitter<boolean> = new EventEmitter();

  toggle(data?: IShipment) {
    this.isOpen = !this.isOpen;
    if (data) {
      this.loadData(data);
    }
    this.changeFormState.emit(this.isOpen);
  }

  private loadData(data: IShipment) {
    this.data = data;
    this.loadTitle(data.shipmentId);
    this.loadStatus(data.status);
    this.loadItems(data.listOfItems);
    this.loadReceiver(data.receiver);
    this.loadSender(data.sender);
    this.checkUserStatus(data.sender);
  }

  private checkUserStatus(senderUid: string) {
    if (this.uid === senderUid) {
      this.isSender = true;
    } else {
      this.isSender = false;
    }
  }

  private loadTitle(shipmentId: string) {
    this.title = shipmentId;
  }

  private loadStatus(status: string) {
    this.status = status;
  }

  private loadItems(listOfItems: Array<string>) {
    this.items = [];
    listOfItems.forEach(item => {
      this.afs.doc<IItem>(`allItems/${item}`).valueChanges().forEach(i => this.items.push(i));
    });
  }

  private loadReceiver(receiverUid: string) {
    const profileDoc = this.afs.doc<IProfile>(`userdata/${receiverUid}`);
    this.receiver = profileDoc.valueChanges();
  }

  private loadSender(senderUid: string) {
    const profileDoc = this.afs.doc<IProfile>(`userdata/${senderUid}`);
    this.sender = profileDoc.valueChanges();
  }

  private setNewStatus(status: string) {
    this.data.status = status;
    this.loadStatus(status);
  }

  private updateCollectionsStatus(status: string) {
    this.afs.doc(`/orders/${this.data.shipmentId}`)
      .update({ status })
      .then(_ => this.notifier.notify('success', 'Successful updated status!'))
      .catch(err => this.notifier.notify('warning', err.message));
  }

  changeStatus(newStatus: string) {
    this.setNewStatus(newStatus);
    this.updateCollectionsStatus(newStatus);
  }
}
