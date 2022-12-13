import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUserComponent } from './components/about-user/about-user.component';
import { AboutComponent } from './components/about/about.component';
import { BuildingComponent } from './components/building/building.component';
import { ConfigProfileComponent } from './components/config-profile/config-profile.component';
import { ConfigProjectsComponent } from './components/config-projects/config-projects.component';
import { ConfigSkillsComponent } from './components/config-skills/config-skills.component';
import { ConfigSocialComponent } from './components/config-social/config-social.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProjectsUserComponent } from './components/projects-user/projects-user.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { RegisterComponent } from './components/register/register.component';
import { SkillsUserComponent } from './components/skills-user/skills-user.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SocialUserComponent } from './components/social-user/social-user.component';
import { SocialComponent } from './components/social/social.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'home',
    component: HomeUserComponent
  },
  {
    path: 'home/user/about',
    component: AboutUserComponent
  },
  {
    path: 'home/user/skills',
    component: SkillsUserComponent
  },
  {
    path: 'home/user/projects',
    component: ProjectsUserComponent
  },
  {
    path: 'home/user/social',
    component: SocialUserComponent
  },
  {
    path: 'home/about',
    component: AboutComponent
  },
  {
    path: 'home/skills',
    component: SkillsComponent
  },
  {
    path: 'home/projects',
    component: ProjectsComponent
  },
  {
    path: 'home/social',
    component: SocialComponent
  },
  {
    path: 'configure/profile',
    component: ConfigProfileComponent
  },
  {
    path: 'configure/projects',
    component: ConfigProjectsComponent
  },
  {
    path: 'configure/skills',
    component: ConfigSkillsComponent
  },
  {
    path: 'configure/social',
    component: ConfigSocialComponent
  },
  {
    path: 'building',
    component: BuildingComponent
  },
  {
    path: '**',
    component: BuildingComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
