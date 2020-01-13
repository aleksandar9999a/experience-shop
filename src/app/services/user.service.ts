import { Injectable, Output, EventEmitter } from '@angular/core';

import { fire } from './../config/firebase';

@Injectable()
export class UserService {
    @Output() isUserLogged: EventEmitter<boolean> = new EventEmitter();

    setIsHere(res, userIsHere) {
        this.isUserLogged.emit(userIsHere);
        return res;
    }

    logIn(email, password) {
        return fire.auth()
            .signInWithEmailAndPassword(email, password)
            .then(res => this.setIsHere(res, true));
    }

    createUser(email, password) {
        return fire.auth()
            .createUserWithEmailAndPassword(email, password)
            .then(res => this.setIsHere(res, true));
    }

    logOut() {
        return fire.auth().signOut().then(res => this.setIsHere(res, false));
    }

    checkIsHere() {
        fire.auth().onAuthStateChanged(user => {
            let isHere;
            if (user) {
                isHere = true;
            } else {
                isHere = false;
            }
            this.isUserLogged.emit(isHere);
        });
    }
}