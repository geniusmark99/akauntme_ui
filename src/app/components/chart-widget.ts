import { Component, Input, ViewChild } from "@angular/core";
import { RouterLink } from "@angular/router";





@Component({
    standalone: true,
    selector: 'chart-widget',
    imports: [RouterLink],
    templateUrl: './chart-widget.html',

})


export class ChartWidget {


    @Input() chartName = '';
    @Input() chartDays!: string[]
    @Input() chartDaysTotalAmounts!: number[]
    @Input() chartAmountHeights!: any

    get Heights() {
        return Object.values(this.chartAmountHeights.height);
    }




}