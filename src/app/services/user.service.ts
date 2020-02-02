import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NotifierService } from 'angular-notifier';
import { Router } from '@angular/router';
import { AuthenticationFormService } from '../authentication/services/authentication-form.service';
import { ProfileSetUpFormService } from '../authentication/services/profile-set-up.service';

@Injectable()
export class UserService {
    isHere: boolean;

    constructor(
        private fireBaseAuth: AngularFireAuth,
        private readonly notifier: NotifierService,
        private routerService: Router,
        private authenticationFormService: AuthenticationFormService,
        private profileSetUpFormService: ProfileSetUpFormService
    ) {
        this.fireBaseAuth.auth
            .onAuthStateChanged(user => {
                if (user) {
                    this.isHere = true;
                } else {
                    this.isHere = false;
                }
            });
    }

    logIn(email: string, password: string) {
        this.fireBaseAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(_ => {
                this.notifier.notify('success', 'Successful Log In!');
                this.routerService.navigate(['/catalog']);
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    createUser(email: string, password: string) {
        this.fireBaseAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(_ => {
                this.notifier.notify('success', 'Successful create new account!');
                this.authenticationFormService.toggle();
                this.profileSetUpFormService.toggle();
            })
            .catch(err => this.notifier.notify('warning', err.message));
    }

    logOut() {
        this.fireBaseAuth.auth
            .signOut()
            .then(_ => {
                this.notifier.notify('success', 'Successful Log Out!');
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

}
