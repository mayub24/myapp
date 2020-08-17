import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Importing routing module
import { RouterModule, Routes } from '@angular/router';

// Importing Components
import { ExperienceComponent } from './Components/experience/experience.component';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { SkillsComponent } from './Components/skills/skills.component';
import { ProjectsComponent } from './Components/projects/projects.component';

// Creating routes array of objects that define the path and component
const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'Projects', component: ProjectsComponent }
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class RoutingModule { }
