import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const routes: Routes = [
  { path: '', component: LandingComponent }
];

@NgModule({
  declarations: [
    LandingComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class LandingModule { }
