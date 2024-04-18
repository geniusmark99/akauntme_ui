import { Component } from '@angular/core';
import { NavbarWidget } from '../../components/navbar-widget';


@Component({
  selector: 'app-sales',
  standalone: true,
  imports: [NavbarWidget],
  templateUrl: './sales.component.html',
  styleUrl: './sales.component.css'
})
export class SalesComponent {

}
