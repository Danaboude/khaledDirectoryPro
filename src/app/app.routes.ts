import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SearchComponent } from './pages/search/search';
import { BusinessDetailComponent } from './pages/business-detail/business-detail';
import { DashboardComponent } from './pages/dashboard/dashboard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'business/:id', component: BusinessDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '**', redirectTo: '' }
];
