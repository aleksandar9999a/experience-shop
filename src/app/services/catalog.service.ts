import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable()
export class CatalogService {

    @Output() getItemsFunction = new EventEmitter();

    loadCategory(name: string, category: string) {
        name = name.toLocaleLowerCase();

        const searchByName = (ref: any) => ref.where('name', '>=', name);
        const searchByNameAndCategoty = (ref: any) => ref.where('category', '==', category).where('name', '>=', name);

        if (category === 'all') {
            this.getItemsFunction.emit(searchByName);
        } else {
            this.getItemsFunction.emit(searchByNameAndCategoty);
        }
    }

}
