import { Component } from '@angular/core';
import { NavbarWidget } from '../../components/navbar-widget';


@Component({
  selector: 'app-stocks',
  standalone: true,
  imports: [NavbarWidget],
  templateUrl: './stocks.component.html',
  styleUrl: './stocks.component.css'
})
export class StocksComponent {

}
