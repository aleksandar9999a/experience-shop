import { trigger, transition, style, animate, state } from '@angular/animations';

export const fader = trigger('itemState', [
    state('void', style({
        transform: 'translateX(-25%)',
        opacity: 0
    })),
    transition('void => *', animate('700ms ease-out'))
]);
