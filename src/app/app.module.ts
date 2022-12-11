import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { MainComponent } from './components/main/main.component';
import { HttpClientModule } from "@angular/common/http";
import { ConfigProfileComponent } from './components/config-profile/config-profile.component';
import { ConfigSkillsComponent } from './components/config-skills/config-skills.component';
import { ConfigProjectsComponent } from './components/config-projects/config-projects.component';
import { ConfigSocialComponent } from './components/config-social/config-social.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    MainComponent,
    FooterComponent,
    ConfigProfileComponent,
    ConfigSkillsComponent,
    ConfigProjectsComponent,
    ConfigSocialComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
