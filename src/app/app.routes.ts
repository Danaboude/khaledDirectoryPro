import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { SearchComponent } from './pages/search/search';
import { BusinessDetailComponent } from './pages/business-detail/business-detail';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { PrivacyComponent } from './pages/legal/privacy';
import { TermsComponent } from './pages/legal/terms';
import { CookiesComponent } from './pages/legal/cookies';
import { AboutComponent } from './pages/about/about';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search', component: SearchComponent },
  { path: 'business/:id', component: BusinessDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'privacy', component: PrivacyComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'cookies', component: CookiesComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];
