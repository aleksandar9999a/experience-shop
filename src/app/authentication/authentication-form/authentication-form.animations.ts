import { trigger, state, style, transition, animate } from '@angular/animations';

const AuthenticationFormAnimations = [
    trigger('formState', [
        state('open', style({
            display: 'block',
            opacity: 1
        })),
        state('close', style({
            display: 'none',
            opacity: 0
        })),
        transition('open <=> close', animate('0.5s'))
    ]),
    trigger('moveToLeft', [
        state('open', style({
            display: 'block',
            opacity: 1,
            transform: 'translateX(0%)'
        })),
        state('close', style({
            display: 'none',
            opacity: 0,
            transform: 'translateX(-40%)'
        })),
        transition('open <=> close', animate('0.5s'))
    ]),
    trigger('moveToRight', [
        state('open', style({
            display: 'block',
            opacity: 1,
            transform: 'translateX(0%)'
        })),
        state('close', style({
            display: 'none',
            opacity: 0,
            transform: 'translateX(40%)'
        })),
        transition('open <=> close', animate('0.5s'))
    ])
];

export { AuthenticationFormAnimations };
