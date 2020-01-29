import { Injectable, Output, EventEmitter } from '@angular/core';
import { IProfile } from 'src/app/interfaces/profile.interface';

@Injectable()
export class UserDetailsService {
    isOpen: boolean;

    @Output() changeFormState = new EventEmitter<boolean>();
    @Output() changeData = new EventEmitter<IProfile>();

    toggle(data?: IProfile) {
        this.isOpen = !this.isOpen;
        this.changeFormState.emit(this.isOpen);
        if (data) {
            this.changeData.emit(data);
        }
    }
}
