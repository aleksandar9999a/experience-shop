import { trigger, state, style, transition, animate } from '@angular/animations';

const ProfileSetUpAnimations = [
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
    ])
];

export { ProfileSetUpAnimations };
