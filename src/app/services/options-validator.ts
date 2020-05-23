import { ICollectionOptions } from '../interfaces/coll-options.interface';
import { NotifierService } from 'angular-notifier';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { OptionsRestrinctions } from '../config/collections-restrinctions';


@Injectable()
export class OptionsValidatior {
    get uid() { return this.userService.uid; }
    restrictions: any;

    constructor(
        private readonly notifier: NotifierService,
        private userService: UserService,
        private optionsRestriction: OptionsRestrinctions
    ) {
        this.restrictions = optionsRestriction.getRestrictions();
    }

    searchErrors(options: ICollectionOptions) {
        if ((options.collection === 'orders' || options.collection === 'userdata') && !this.uid) {
            this.notifier.notify('warning', 'You are not authorized!');
            return true;
        }

        if (this.restrictions[options.collection] === undefined) {
            this.notifier.notify('warning', 'Collection does not exist!');
            return true;
        }

        if (!this.restrictions[options.collection].category.includes(options.category)) {
            this.notifier.notify('warning', 'Category does not exist!');
            return true;
        }

        if (!this.restrictions[options.collection].position.includes(options.position)) {
            this.notifier.notify('warning', 'Position does not exist!');
            return true;
        }

        if (this.restrictions[options.collection].pageLimit.min > options.pageLimit) {
            this.notifier.notify('warning', 'Page limit is under minimum!');
            return true;
        }

        if (this.restrictions[options.collection].pageLimit.max < options.pageLimit) {
            this.notifier.notify('warning', 'Page limit is more than maximum!');
            return true;
        }

        if (!this.restrictions[options.collection].sortBy.includes(options.sortBy)) {
            this.notifier.notify('warning', 'Page can not be sort by choosen option!');
            return true;
        }

        return false;
    }
}
