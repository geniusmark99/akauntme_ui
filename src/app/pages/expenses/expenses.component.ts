import { Component } from '@angular/core';
import { NavbarWidget } from '../../components/navbar-widget';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [NavbarWidget],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent {

}
