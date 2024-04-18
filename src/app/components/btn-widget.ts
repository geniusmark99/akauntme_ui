import { Component, Input } from "@angular/core";

@Component({
    standalone: true,
    selector: 'btn-widget',
    templateUrl: './btn-widget.html'
})

export class BtnWidget {

    @Input() btnContent: string = 'Click me';
}


