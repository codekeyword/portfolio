import { Routes } from '@angular/router';
import { AppComponent } from './app.component';

export const routes: Routes = [{ path: '', loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) }

,{ path: '**', redirectTo: '/' }];
