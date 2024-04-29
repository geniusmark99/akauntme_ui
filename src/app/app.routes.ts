import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { HistoryComponent } from './pages/history/history.component';
import { DebtsComponent } from './pages/debts/debts.component';
import { SalesComponent } from './pages/sales/sales.component';
import { ServicesComponent } from './pages/services/services.component';
import { StocksComponent } from './pages/stocks/stocks.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { ProfileComponent } from './pages/profile/profile.component';


export const routes: Routes = [

    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'Akauntme Dashboard',
        component: HomeComponent,
        data: { animation: 'openClosePage' },
    },
    {
        path: 'settings',
        title: 'Akauntme Settings',
        component: SettingsComponent,
        data: { animation: 'openClosePage' },
    }, {
        path: 'reports',
        title: 'Akauntme Reports',
        component: ReportsComponent
    },
    {
        path: 'history',
        title: 'Akauntme History',
        component: HistoryComponent
    },
    {
        path: 'expenses',
        title: 'Akauntme Expenses',
        component: ExpensesComponent
    },
    {
        path: 'sales',
        title: 'Akauntme Sales',
        component: SalesComponent
    },

    {
        path: 'services',
        title: 'Akauntme Services',
        component: ServicesComponent
    },

    {
        path: 'stocks',
        title: 'Akauntme Stocks',
        component: StocksComponent
    },
    {
        path: 'debts',
        title: 'Akauntme Debts',
        component: DebtsComponent
    },
    {
        path: 'profile',
        title: 'Akauntme Profile',
        component: ProfileComponent
    },
    {
        path: '**',
        title: 'Page Not Found',
        component: PagenotfoundComponent
    },



];
