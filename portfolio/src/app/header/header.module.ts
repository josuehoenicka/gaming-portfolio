import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './pages/header/header.component';
import { NavComponent } from './pages/nav/nav.component';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class HeaderModule { }
