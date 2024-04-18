import { Component } from '@angular/core';
import { trigger, animate, style, transition } from '@angular/animations';
import { NavbarWidget } from '../../components/navbar-widget';
import { GreetingWidget } from '../../components/greeting-widget';
import { ChartWidget } from '../../components/chart-widget';
import { NotificationWidget } from '../../components/notification-widget';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarWidget, GreetingWidget, NotificationWidget, ChartWidget],
  templateUrl: './home.component.html',
  animations: [
    trigger('insertRemoveTrigger', [
      transition(':enter', [style({ opacity: 0, transform: '' }), animate('100ms', style({ opacity: 1 }))]),
      transition(':leave', [animate('100ms', style({ opacit: 0 }))]),
    ])
  ]


})



export class HomeComponent {
  isShown: boolean = true;
  dashboardLists = [{
    id: 1,
    name: 'Debts',
    amounts: [3000, 4000, 6000, 8000, 9000, 7000],
    height: [12, 20, 40, 40, 10, 12],
    days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
    amountDays: ['mon:3000']
  },

  {
    id: 2,
    name: 'Sales',
    amounts: [10000, 4000, 2000, 8000, 9000, 7000],
    height: [10, 20, 40, 40, 10, 12],
    days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],

  }, {
    id: 3,
    name: 'Expenses',
    amounts: [3000, 4000, 6000, 8000, 9000, 7000],
    height: [10, 20, 40, 40, 10, 12],
    days: ['Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  },

  ]

}
