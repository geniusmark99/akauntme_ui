import { Component, ViewChild, ElementRef, OnInit } from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations';
import { NavbarWidget } from '../../components/navbar-widget';
import { GreetingWidget } from '../../components/greeting-widget';
import { ChartWidget } from '../../components/chart-widget';
import { NotificationWidget } from '../../components/notification-widget';
import { DashboardwidgetComponent } from '../../widget/dashboardwidget/dashboardwidget.component';
import { GetstartedwidgetComponent } from '../../widget/getstartedwidget/getstartedwidget.component';
import { RecentupdatewidgetComponent } from '../../widget/recentupdatewidget/recentupdatewidget.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarWidget, GreetingWidget, NotificationWidget, ChartWidget, DashboardwidgetComponent, GetstartedwidgetComponent, RecentupdatewidgetComponent],
  templateUrl: './home.component.html',
  animations: [
    trigger('insertRemoveTrigger', [
      transition(':enter', [style({ opacity: 0, transform: '' }), animate('100ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('100ms', style({ opacit: 0 }))]),
    ])
  ]


})



export class HomeComponent implements OnInit {
  activeTab: string = 'tab1';

  @ViewChild('scrollContainer', { static: true }) scrollContainer!: ElementRef;
  isDragging = false;
  startX!: number;
  scrollLeft: number = 0;

  ngOnInit() { }


  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.startX = event.clientX;
    alert(this.startX);
  }

  onMouseMove(event: MouseEvent) {
    if (!this.isDragging) {
      return;
    }

    const movement = event.clientX - this.startX;
    this.scrollLeft = Math.max(0, this.scrollLeft - movement);
    this.scrollContainer.nativeElement.scrollLeft = this.scrollLeft;
  }

  onMouseUp() {
    this.isDragging = false;
  }

  isShown: boolean = true;
  dashboardLists = [{
    id: 1,
    name: 'Debts',
    amounts: [3000, 4000, 6000, 8000, 9000, 7000],
    height: [10, 14, 40, 40, 10, 12],
    days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    amountDays: ['mon:3000']
  },

  {
    id: 2,
    name: 'Sales',
    amounts: [10000, 4000, 2000, 8000, 9000, 7000],
    height: [10, 20, 30, 20, 10, 12],
    days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],

  }, {
    id: 3,
    name: 'Expenses',
    amounts: [3000, 4000, 6000, 8000, 9000, 7000],
    height: [10, 20, 40, 40, 10, 12],
    days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  },

  ];



  firstTarget = ''
  secondTarget = ''; // Initially empty to avoid applying class on component load
  thirdTarget = ''; // Initially empty to avoid applying class on component load

  firstSlide(className: string) {
    this.firstTarget = className;
    this.secondTarget = '';
    this.thirdTarget = ''
  }

  secondSlide(className: string) {
    this.secondTarget = className; // Update the class name for binding
    this.firstTarget = '';
    this.thirdTarget = '';
  }

  thirdSlide(ClassName: string) {
    this.thirdTarget = ClassName; // Update the class name for binding
    this.secondTarget = ''; // Update the class name for binding
    this.firstTarget = '';
  }


  addClassToFirstSlide(event: MouseEvent) {
    const activeButtons = document.querySelectorAll('button.active');
    activeButtons.forEach(button => button.classList.remove('active'));

    const clickedButton = event.target as HTMLButtonElement; // Get the clicked button
    clickedButton.classList.add('active'); // Add 'active' class to the button

    // Optionally call secondSlide to manage other classes:
    this.firstSlide('first'); // Replace with your desired class
  }

  addClassToSecondSlide(event: MouseEvent) {

    const activeButtons = document.querySelectorAll('button.active');
    activeButtons.forEach(button => button.classList.remove('active'));

    const clickedButton = event.target as HTMLButtonElement; // Get the clicked button
    clickedButton.classList.add('active'); // Add 'active' class to the button

    // Optionally call secondSlide to manage other classes:
    this.secondSlide('second'); // Replace with your desired class
  }


  addClassToThirdSlide(event: MouseEvent) {
    const activeButtons = document.querySelectorAll('button.active');
    activeButtons.forEach(button => button.classList.remove('active'));

    const clickedButton = event.target as HTMLButtonElement; // Get the clicked button
    clickedButton.classList.add('active'); // Add 'active' class to the button

    // Optionally call secondSlide to manage other classes:
    this.thirdSlide('third'); // Replace with your desired class
  }



}




