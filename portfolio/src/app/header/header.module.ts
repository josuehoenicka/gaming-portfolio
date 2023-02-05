import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './pages/header/header.component';
import { NavComponent } from './pages/nav/nav.component';
import { HeaderRoutingModule } from './header-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    HeaderRoutingModule
  ],
  exports: [
    HeaderComponent,
    NavComponent
  ]
})
export class HeaderModule { }
