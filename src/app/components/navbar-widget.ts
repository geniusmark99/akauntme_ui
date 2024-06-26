import { Component, Input, Output, EventEmitter, OnInit } from "@angular/core";
import { FormControl, FormControlDirective } from '@angular/forms';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { RouterLink } from "@angular/router";

@Component({
    standalone: true,
    selector: 'navbar-widget',
    templateUrl: './navbar-widget.html',
    imports: [RouterLink],
    animations: [
        trigger('dropdownAnimation', [
            transition(':enter', [style({ opacity: 0 }), animate('100ms', style({ opacity: 1 }))]),
            transition(':leave', [animate('100ms', style({ opacity: 0 }))]),
            transition('* <=> *', [animate('200ms ease-in-out')]),
        ]),
        trigger('fadeInOut', [
            state('hidden', style({
                opacity: 0,
                display: 'none'
            })),
            state('visible', style({
                opacity: 1,
                display: 'block'
            })),
            transition('hidden => visible', [
                animate('0.3s')
            ]),
            transition('visible => hidden', [
                animate('0.3s')
            ])
        ])
    ]
})

export class NavbarWidget implements OnInit {
    filterSearchControl = new FormControl('');

    modalOpen: boolean = false;
    // modalOpen: boolean = true;


    openModal() {
        this.modalOpen = !this.modalOpen;

    }

    closeModal() {
        this.modalOpen = false;
    }


    @Input() options: string[] = []; // Array of filter options
    @Input() selectedOption: string = ''; // Currently selected option
    @Output() optionSelected = new EventEmitter<string>();

    isOpen = false; // Flag to track dropdown visibility

    constructor() { }
    searchQuery: string = '';
    showDropdown: boolean = false;

    ngOnInit() { }

    toggleDropdown() {
        this.isOpen = !this.isOpen;
    }

    onSearch(event: any) {
        this.searchQuery = event.target.value;
        if (this.searchQuery) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

    openDropdown() {
        this.isOpen = true;
    }

}