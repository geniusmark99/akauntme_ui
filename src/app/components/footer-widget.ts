import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from '@angular/router';
import { trigger, state, style, animate, transition } from "@angular/animations";

@Component({
    selector: 'footer-widget',
    standalone: true,
    templateUrl: './footer-widget.html',
    imports: [RouterLink, RouterLinkActive],
    animations: [

        trigger('openClose', [
            state('open', style({
                opacity: 1,
                transform: 'translateY(0)',

            }),),
            state('closed', style({
                opacity: 1,
                transform: 'translateX(70px) translateY(40px)'
            }),),
            transition('open => closed', [animate('0.5s')]),
            transition('closed => open', [animate('0.75s')]),
        ]),

        trigger('openClose2', [
            state('open', style({
                opacity: 1,
                transform: 'translateY(0)',

            }),),
            state('closed', style({
                opacity: 1,
                transform: 'translateX(5px) translateY(60px)'
            }),),
            transition('open => closed', [animate('0.5s')]),
            transition('closed => open', [animate('0.75s')]),
        ]),


        trigger('openClose3', [
            state('open', style({
                opacity: 1,
                transform: 'translateY(0)',
            }),),
            state('closed', style({
                opacity: 1,
                transform: 'translateX(-60px) translateY(40px)'
            }),),
            transition('open => closed', [animate('0.5s')]),
            transition('closed => open', [animate('0.75s')]),
        ]),



    ]
})

export class FooterWidget {
    show: boolean = false;


    ShowMenu() {
        this.show = !this.show;
    }



}

