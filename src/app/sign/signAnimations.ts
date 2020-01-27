import { trigger, state, style, transition, animate } from '@angular/animations';

const signAnimations = [
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
    trigger('switch', [
        state('show', style({
            display: 'block',
            opacity: 1,
            transform: 'translateX(0%)'
        })),
        state('hide', style({
            display: 'none',
            opacity: 0,
            transform: 'translateX(-20%)'
        })),
        transition('show <=> hide', animate('0.2s'))
    ])
];

export { signAnimations };
