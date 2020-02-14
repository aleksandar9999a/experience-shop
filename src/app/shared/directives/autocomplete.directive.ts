import { Directive, ElementRef, HostListener } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { NgControl } from '@angular/forms';

@Directive({
    selector: '[appAutocomplete]'
})
export class AutocompleteDirective {
    autocomplete: google.maps.places.Autocomplete;
    options = { types: ['address'], componentRestrictions: { country: 'bg' } };

    constructor(
        private el: ElementRef,
        private mapsAPILoader: MapsAPILoader,
        private control: NgControl
    ) {
        mapsAPILoader.load().then(() => {
            this.autocomplete = new google.maps.places.Autocomplete(this.el.nativeElement, this.options);
        });
    }

    @HostListener('keypress') onKeyPress() {
        this.autocomplete.addListener('place_changed', this.setNewPlace.bind(this));
    }

    private setNewPlace() {
        const place = this.autocomplete.getPlace();
        this.control.control.setValue(place.formatted_address);
    }

}
