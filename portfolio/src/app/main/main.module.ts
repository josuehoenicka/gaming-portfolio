import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComponent } from './pages/skills/skills.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AsideModule } from '../aside/aside.module';
import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    AsideModule,
    HeaderModule
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    ExperienceComponent,
    ContactComponent
  ]
})
export class MainModule { }
