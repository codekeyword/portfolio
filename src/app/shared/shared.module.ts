import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './components/logo/logo.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LogoComponent
  ],
  exports:[
    LogoComponent
  ]
})
export class SharedModule { }
