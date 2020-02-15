export class OptionsRestrinctions {
    restriction = {
        allItems: {
            category: ['', 'all', 'pc', 'laptops', 'tablets', 'phone', 'accForPC', 'accForPhone', 'audio', 'photo', 'nav', 'tv', 'other'],
            position: ['firstPage', 'endBefore', 'startAfter', 'currentPage'],
            pageLimit: { min: 0, max: 100 },
            sortBy: ['allItems', 'myItems']
        },
        orders: {
            category: [''],
            position: ['firstPage', 'endBefore', 'startAfter', 'currentPage'],
            pageLimit: { min: 0, max: 100 },
            sortBy: ['sender', 'receiver']
        },
        userdata: {
            category: [''],
            position: ['firstPage', 'endBefore', 'startAfter', 'currentPage'],
            pageLimit: { min: 0, max: 100 },
            sortBy: ['userdata']
        }
    };

    getRestrictions() {
        return this.restriction;
    }
}
