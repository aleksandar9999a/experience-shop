import { trigger, transition, style, animate, state } from '@angular/animations';

export const formFader = trigger('formState', [
    state('void', style({
        transform: 'translateY(0%)',
        opacity: 0
    })),
    transition('void => *', animate('700ms ease-out'))
]);
