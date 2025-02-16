import { Routes } from '@angular/router';
import { SalesDatePredictionComponent } from './sales-date-prediction/sales-date-prediction.component';
import { GraphingComponent } from './graphing/graphing.component';

export const routes: Routes = [
    { path: '', redirectTo: '/sales-date-prediction', pathMatch: 'full' },
    { path: 'sales-date-prediction', component: SalesDatePredictionComponent },
    { path: 'graphing', component: GraphingComponent }
];
