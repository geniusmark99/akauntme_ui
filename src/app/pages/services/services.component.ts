import { Component } from '@angular/core';
import { NavbarWidget } from '../../components/navbar-widget';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [NavbarWidget],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
