import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuComponent } from './pages/menu/menu.component';
import { ExitComponent } from './pages/exit/exit.component';
import { AsideRoutingModule } from './aside-routing.module';


@NgModule({
  declarations: [
    MenuComponent,
    ExitComponent
  ],
  imports: [
    CommonModule,
    AsideRoutingModule
  ],
  exports: [
    MenuComponent,
    ExitComponent
  ]
})
export class AsideModule { }
