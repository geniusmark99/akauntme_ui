import { Component } from '@angular/core';
import { NavbarWidget } from '../../components/navbar-widget';


@Component({
  selector: 'app-debts',
  standalone: true,
  imports: [NavbarWidget],
  templateUrl: './debts.component.html',
  styleUrl: './debts.component.css'
})
export class DebtsComponent {

}
