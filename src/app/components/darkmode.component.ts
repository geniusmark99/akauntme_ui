import { Component, OnInit, inject } from '@angular/core';
import { DarkModeService } from '../services/dark-mode.service';


Component({
  selector: 'darkmode-component',
  templateUrl: './dark-mode-widget.html',
  standalone: true,

})


export class DarkModeComponent implements OnInit {
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

}