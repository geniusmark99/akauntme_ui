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
                transform: 'translateX(60px) translateY(50px)'
            }),),
            transition('open => closed', [animate('0.5s')]),
            transition('closed => open', [animate('500ms')]),
        ]),

        trigger('openClose2', [
            state('open', style({
                opacity: 1,
                transform: 'translateY(-10px)',

            }),),
            state('closed', style({
                opacity: 1,
                transform: 'translateX(-5px) translateY(70px)'
            }),),
            transition('open => closed', [animate('0.5s')]),
            transition('closed => open', [animate('500ms')]),
        ]),


        trigger('openClose3', [
            state('open', style({
                opacity: 1,
                transform: 'translateY(0)',
            }),),
            state('closed', style({
                opacity: 1,
                transform: 'translateX(-72px) translateY(55px)'
            }),),
            transition('open => closed', [animate('0.5s')]),
            transition('closed => open', [animate('500ms')]),
        ]),



    ]
})

export class FooterWidget {
    show: boolean = false;


    ShowMenu() {
        this.show = !this.show;
    }



}

