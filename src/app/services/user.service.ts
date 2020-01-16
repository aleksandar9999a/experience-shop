import { Injectable, Output, EventEmitter } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable()
export class UserService {

    constructor(
        private fireBaseAuth: AngularFireAuth
    ) { }
    
    @Output() isUserLogged = new EventEmitter<boolean>();

    setIsHere(res, userIsHere) {
        this.isUserLogged.emit(userIsHere);
        return res;
    }

    logIn(email, password) {
        return this.fireBaseAuth.auth
            .signInWithEmailAndPassword(email, password)
            .then(res => this.setIsHere(res, true));
    }

    createUser(email, password) {
        return this.fireBaseAuth.auth
            .createUserWithEmailAndPassword(email, password)
            .then(res => this.setIsHere(res, true));
    }

    logOut() {
        return this.fireBaseAuth.auth
            .signOut()
            .then(res => this.setIsHere(res, false));
    }

    getCurrentUid(){
        if (this.fireBaseAuth.auth.currentUser) {
            return this.fireBaseAuth.auth.currentUser.uid
        }
        return null;
    }

    checkIsHere() {
        this.fireBaseAuth.auth
            .onAuthStateChanged(user => {
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