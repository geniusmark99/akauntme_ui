import { Injectable, effect, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DarkModeService {

  // private readonly DARK_MODE_KEY = 'darkMode';

  constructor() { }

  toggleDarkMode(): void {
    const darkMode = localStorage.getItem('dark');
    if (darkMode === 'true') {
      localStorage.setItem('dark', 'false');
      document.body.classList.remove('dark');
    } else {
      localStorage.setItem('dark', 'true');
      document.body.classList.add('dark');
    }
  }

  // Check if dark mode is enabled
  isDarkMode(): boolean {
    return localStorage.getItem('dark') === 'true';
  }



  // darkModeSignal = signal<string>('null'); 


  // darkModeSignal = signal<string>(
  //   JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'null')
  // );



  // updateDarkMode() {
  //   this.darkModeSignal.update((value) => (value === "dark" ? "null" : "dark"));
  // }






  // constructor() {
  //   effect(() => {
  //     window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()));
  //   })
  // }



}
