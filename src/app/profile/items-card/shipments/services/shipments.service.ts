import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { NotifierService } from 'angular-notifier';
import { IShipment } from 'src/app/interfaces/shipment.interface';

@Injectable()
export class ShipmentsService {
    private shipmentsCollection: AngularFirestoreCollection<IShipment>;
    shipments: Observable<IShipment[]>;
    private currPage;
    private pageLimit = 5;
    private position = 'firstPage';
    private firstShipment: IShipment;
    private lastShipment: IShipment;
    private firstShipmentFromFirstPage: IShipment;

    get uid() { return this.userService.uid; }

    constructor(
        private afs: AngularFirestore,
        private userService: UserService,
        private readonly notifier: NotifierService
    ) { }

    refresh(position?: string) {
        this.setPositions(position);
        const currSearchFn = this.searchFn()[this.position];
        this.shipmentsCollection = this.afs.collection<IShipment>(`orders`, currSearchFn);
        this.shipments = this.shipmentsCollection.valueChanges();
    }

    private setPositions(position?: string) {
        if (position) {
            this.position = position;
        }
    }

    private searchFn() {
        const startAfter = (ref: any) => {
            this.currPage = ref.where('receiver', '==', this.uid).startAfter(this.lastShipment).limit(this.pageLimit);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = ref.where('receiver', '==', this.uid).endBefore(this.firstShipment).limit(this.pageLimit);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = ref.where('receiver', '==', this.uid).limit(this.pageLimit);
            this.currPage.get().then(this.setFirstShipmentFromFirstPage.bind(this));
            return this.currPage;
        };


        return { startAfter, endBefore, firstPage };
    }

    private setFirstShipmentFromFirstPage(shot) {
        this.firstShipmentFromFirstPage = shot.docs[0];
    }

    private setFirstAndLastShipmentInCurrPage(shot) {
        this.firstShipment = shot.docs[0];
        this.lastShipment = shot.docs[shot.docs.length - 1];
    }

    loadNextPage() {
        this.currPage.get().then(shot => {
            if (shot.docs.length === this.pageLimit) {
                this.setFirstAndLastShipmentInCurrPage(shot);
                this.refresh('startAfter');
            } else {
                this.notifier.notify('info', 'You do not have more shipments.');
            }
        });
    }

    loadBackPage() {
        this.currPage.get().then(shot => {
            if (shot.docs[0]) {
                if (shot.docs[0].id === this.firstShipmentFromFirstPage.id) {
                    this.notifier.notify('info', 'This is first page!');
                } else {
                    this.setFirstAndLastShipmentInCurrPage(shot);
                    this.refresh('endBefore');
                }
            } else {
                this.notifier.notify('info', 'This is first page!');
            }
        });
    }

}
