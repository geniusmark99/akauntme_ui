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

  toggleDarkMode(): void {
    this.darkModeService.toggleDarkMode();
  }

  isDarkMode(): boolean {
    return this.darkModeService.isDarkMode();
  }


  title = 'app';
  isAdmin = false;
  numbers: any[] = data;

  showAdmin() {
    this.isAdmin = !this.isAdmin;
  }


  sidebar_contents = [
    {
      name: "Dashboard",
      link: "/home",
      icon: "#desktop-dashboard-logo"
    },
    {
      name: "Sales",
      link: "/sales",
      icon: "#desktop-sales-logo"
    },
    {
      name: "Debts",
      link: "/debts",
      icon: "#desktop-debts-logo"
    },

    {
      name: "Stocks",
      link: "/stocks",
      icon: "#desktop-stocks-logo"
    },
    {
      name: "Services",
      link: "/services",
      icon: "#desktop-services-logo"
    },
    {
      name: "Expenses",
      link: "/expenses",
      icon: "#desktop-expenses-logo"
    },
    {
      name: "Reports",
      link: "/reports",
      icon: "#desktop-reports-logo"
    },
    {
      name: "Histories",
      link: "/history",
      icon: "#desktop-histories-logo"
    },
    {
      name: "Settings",
      link: "/settings",
      icon: "#desktop-settings-logo"
    }
  ];




}
