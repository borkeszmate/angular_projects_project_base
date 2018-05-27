import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { AboutComponent } from './components/about/about.component';
import { HomepageComponent } from './components/homepage/homepage.component';

import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import { ProjectsService } from './services/projects.service';
import { Authguard } from './auth-guard.service';
import { AuthService } from './auth.service';
import { FormsModule } from '@angular/forms';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'about', component: AboutComponent, canActivate: [Authguard] }
];



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    NavbarComponent,
    ProjectDetailsComponent,
    AddProjectComponent,
    AboutComponent,
    HomepageComponent
     
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
    


  ],
  providers: [
    ProjectsService,
    Authguard,
    AuthService
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
