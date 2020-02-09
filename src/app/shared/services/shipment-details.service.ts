import { Injectable, Output, EventEmitter } from '@angular/core';
import { IShipment } from 'src/app/interfaces/shipment.interface';
import { IItem } from 'src/app/interfaces/item.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { IProfile } from 'src/app/interfaces/profile.interface';
import { UserService } from 'src/app/services/user.service';
import { NotifierService } from 'angular-notifier';
import { IRecipientInformation } from 'src/app/interfaces/recipientInformation.interface';

@Injectable()
export class ShipmentDetailsService {
  private data: IShipment;

  items: Array<IItem>;
  title: string;
  receiver: Observable<IProfile>;
  sender: Observable<IProfile>;
  status: string;
  isSender: boolean;
  recInfo: IRecipientInformation;

  btnStatus: any;

  get uid() { return this.userService.uid; }

  constructor(
    private readonly notifier: NotifierService,
    private afs: AngularFirestore,
    private userService: UserService
  ) { }

  loadData(id: string) {
    const shipmentDoc = this.afs.doc<IProfile>(`orders/${id}`);
    shipmentDoc.valueChanges().forEach(this.setShipment.bind(this));
  }

  private setShipment(data: IShipment) {
    this.data = data;
    this.loadTitle();
    this.loadRecInfo();
    this.loadStatus(this.data.status);
    this.loadItems();
    this.loadReceiver();
    this.loadSender();
    this.checkUserStatus();
    this.updateBtnStatus();
  }

  private checkUserStatus() {
    if (this.uid === this.data.sender) {
      this.isSender = true;
    } else {
      this.isSender = false;
    }
  }

  private loadTitle() {
    this.title = this.data.shipmentId;
  }

  private loadRecInfo() {
    this.recInfo = this.data.recInfo;
  }

  private loadStatus(status: string) {
    this.status = status;
  }

  private loadItems() {
    this.items = [];
    this.data.listOfItems.forEach(item => {
      this.afs.doc<IItem>(`allItems/${item}`).valueChanges().forEach(i => this.items.push(i));
    });
  }

  private loadReceiver() {
    const profileDoc = this.afs.doc<IProfile>(`userdata/${this.data.receiver}`);
    this.receiver = profileDoc.valueChanges();
  }

  private loadSender() {
    const profileDoc = this.afs.doc<IProfile>(`userdata/${this.data.sender}`);
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

  private updateBtnStatus() {
    const between = this.status === 'Delivered' || this.status === 'Denied';
    const sendBtn = this.status === 'Sended' || between;
    const deniedBtn = this.status === 'Confirmed' || sendBtn;
    const confirmedBtn = deniedBtn;
    const isSended = this.status !== 'Sended' || between;

    this.btnStatus = { sendBtn, deniedBtn, confirmedBtn, isSended };
  }
}
