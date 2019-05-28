import { trigger, state, style, transition, animate, group } from "@angular/animations";

export const SlideInOutAnimation =  [
    trigger('slideInOut', [
        state('expanded', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('hidden', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('expanded => hidden', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('hidden => expanded', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ])
]