import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

    constructor(
        private fireBaseAuth: AngularFireAuth,
        private readonly notifier: NotifierService,
        private routerService: Router
    ) { }

    @Output() isUserLogged: EventEmitter<boolean> = new EventEmitter();

    private setIsHere(res, userIsHere: boolean) {
        this.isUserLogged.emit(userIsHere);
        return res;
    }

    logIn(email: string, password: string) {
        this.fireBaseAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(res => this.setIsHere(res, true))
            .then(_ => {
                this.notifier.notify('success', 'Successful!');
                this.routerService.navigate(['/catalog'])
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    createUser(email: string, password: string) {
        this.fireBaseAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(res => this.setIsHere(res, true))
            .then(_ => {
                this.notifier.notify('success', 'Successful!');
                this.routerService.navigate(['/catalog'])
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    logOut() {
        this.fireBaseAuth.auth
            .signOut()
            .then(res => this.setIsHere(res, false))
            .then(_ => {
                this.notifier.notify('success', 'Successful!');
                this.routerService.navigate(['/']);
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    getCurrentUid() {
        if (this.fireBaseAuth.auth.currentUser) {
            return this.fireBaseAuth.auth.currentUser.uid;
        }
        return null;
    }

    checkIsHere() {
        this.fireBaseAuth.auth
            .onAuthStateChanged(user => {
                if (user) {
                    this.isUserLogged.emit(true);
                } else {
                    this.isUserLogged.emit(false);
                }
            });
    }
}