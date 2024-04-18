import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import data from '../assets/data.json';
import { BtnWidget } from './components/btn-widget';
import { FooterWidget } from './components/footer-widget';
import { SidebarWidget } from './components/sidebar-widget';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [BtnWidget, FooterWidget, SidebarWidget, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule]
})


export class AppComponent {
  title = 'app';
  isAdmin = false;
  numbers: any[] = data;

  showAdmin() {
    this.isAdmin = !this.isAdmin;
  }

}
