import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/services/user.service';
import { NotifierService } from 'angular-notifier';
import { IShipment } from 'src/app/interfaces/shipment.interface';

@Injectable()
export class OrdersService {
    private ordersCollection: AngularFirestoreCollection<IShipment>;
    orders: Observable<IShipment[]>;
    private currPage;
    private pageLimit = 5;
    private position = 'firstPage';
    private firstOrders: IShipment;
    private lastOrders: IShipment;
    private firstOrdersFromFirstPage: IShipment;

    get uid() { return this.userService.uid; }

    constructor(
        private afs: AngularFirestore,
        private userService: UserService,
        private readonly notifier: NotifierService
    ) { }

    refresh(position?: string) {
        this.setPositions(position);
        const currSearchFn = this.searchFn()[this.position];
        this.ordersCollection = this.afs.collection<IShipment>(`userdata/${this.uid}/orders`, currSearchFn);
        this.orders = this.ordersCollection.valueChanges();
    }

    private setPositions(position?: string) {
        if (position) {
            this.position = position;
        }
    }

    private searchFn() {
        const startAfter = (ref: any) => {
            this.currPage = ref.startAfter(this.lastOrders).limit(this.pageLimit);
            return this.currPage;
        };

        const endBefore = (ref: any) => {
            this.currPage = ref.endBefore(this.firstOrders).limit(this.pageLimit);
            return this.currPage;
        };

        const firstPage = (ref: any) => {
            this.currPage = ref.limit(this.pageLimit);
            this.currPage.get().then(this.setFirstOrdersFromFirstPage.bind(this));
            return this.currPage;
        };


        return { startAfter, endBefore, firstPage };
    }

    private setFirstOrdersFromFirstPage(shot) {
        this.firstOrdersFromFirstPage = shot.docs[0];
    }

    private setFirstAndLastOrderInCurrPage(shot) {
        this.firstOrders = shot.docs[0];
        this.lastOrders = shot.docs[shot.docs.length - 1];
    }

    loadNextPage() {
        this.currPage.get().then(shot => {
            if (shot.docs.length === this.pageLimit) {
                this.setFirstAndLastOrderInCurrPage(shot);
                this.refresh('startAfter');
            } else {
                this.notifier.notify('info', 'You do not have more shipments.');
            }
        });
    }

    loadBackPage() {
        this.currPage.get().then(shot => {
            if (shot.docs[0]) {
                if (shot.docs[0].shipmentId === this.firstOrdersFromFirstPage.shipmentId) {
                    this.notifier.notify('info', 'This is first page!');
                } else {
                    this.setFirstAndLastOrderInCurrPage(shot);
                    this.refresh('endBefore');
                }
            } else {
                this.notifier.notify('info', 'This is first page!');
            }
        });
    }

}
