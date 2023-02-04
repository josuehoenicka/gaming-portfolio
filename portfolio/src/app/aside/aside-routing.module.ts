import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../main/pages/about/about.component';
import { ContactComponent } from '../main/pages/contact/contact.component';
import { ExperienceComponent } from '../main/pages/experience/experience.component';
import { HomeComponent } from '../main/pages/home/home.component';
import { SkillsComponent } from '../main/pages/skills/skills.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsideRoutingModule { }
