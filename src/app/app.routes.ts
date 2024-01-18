import { Routes } from '@angular/router';
import {HomeComponent} from "./features/components/home/home.component";
import {WeatherDashboardComponent} from "./features/components/weather-dashboard/weather-dashboard.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'dashboard', component: WeatherDashboardComponent},
];
