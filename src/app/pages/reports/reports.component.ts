import { Component } from '@angular/core';
import { NavbarWidget } from '../../components/navbar-widget';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [NavbarWidget],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {

}
