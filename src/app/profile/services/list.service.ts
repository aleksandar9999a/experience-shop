import { Injectable, EventEmitter, Output } from '@angular/core';

@Injectable()
export class ListService {

    @Output() listType = new EventEmitter();

    changeListType(type: string) {
        this.listType.emit(type);
    }
}
