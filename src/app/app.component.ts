import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import data from '../assets/data.json';
import { BtnWidget } from './components/btn-widget';
import { FooterWidget } from './components/footer-widget';
import { SidebarWidget } from './components/sidebar-widget';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DarkModeService } from './services/dark-mode.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [BtnWidget, FooterWidget, SidebarWidget, RouterOutlet, RouterLink, RouterLinkActive, ReactiveFormsModule, CommonModule]
})


export class AppComponent implements OnInit {


  constructor(private darkModeService: DarkModeService) { }

  ngOnInit(): void {
    if (this.darkModeService.isDarkMode()) {
      document.body.classList.add('dark');
    }
  }

  // Toggle dark mode
  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  isDarkMode(): boolean {
    return this.darkModeService.isDarkMode();
  }
  // isDarkMode = false; 
  // darkModeService: DarkModeService = inject(DarkModeService);

  // toggleDarkMode() {
  //   this.darkModeService.updateDarkMode();
  // }


  // ngOnInit(): void {
  //   this.isDarkMode = this.darkModeService?.isDarkMode() || false; // Optional: Use service state or initial state
  //   !!document.body.classList.toggle('dark', this.isDarkMode); // Apply dark class based on state
  // }

  // toggleTheme(): void {
  //   this.isDarkMode = !this.isDarkMode;
  //   document.body.classList.toggle('dark');
  //   this.darkModeService?.toggleDarkMode(); // Optional: Persist state in service
  // }


  title = 'app';
  isAdmin = false;
  numbers: any[] = data;

  showAdmin() {
    this.isAdmin = !this.isAdmin;
  }




}
