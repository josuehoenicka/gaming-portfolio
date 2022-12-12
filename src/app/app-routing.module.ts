import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConfigProfileComponent } from './components/config-profile/config-profile.component';
import { ConfigProjectsComponent } from './components/config-projects/config-projects.component';
import { ConfigSkillsComponent } from './components/config-skills/config-skills.component';
import { ConfigSocialComponent } from './components/config-social/config-social.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
