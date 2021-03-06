import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ExperienceComponent } from './Components/experience/experience.component';
import { HamburgerComponent } from './Components/hamburger/hamburger.component';
import { RoutingModule } from './routing.module';
import { MainPicComponent } from './Components/main-pic/main-pic.component';
import { BackComponent } from './Components/back/back.component';
import { ProjectsComponent } from './Components/projects/projects.component';

import { NgxUsefulSwiperModule } from 'ngx-useful-swiper';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SkillsComponent,
    ExperienceComponent,
    HamburgerComponent,
    MainPicComponent,
    BackComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    NgxUsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
