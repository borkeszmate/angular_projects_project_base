import { Component, OnInit } from '@angular/core';
import {  ProjectsService } from '../../services/projects.service'; 


import { Project} from '../../Models/Projects/ProjectsModel';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects:Project[];
  clickedProject:Project={
    name:'',
    body:'',
    picture:''
  }
  
  constructor(private ProjectsService: ProjectsService) { }

  ngOnInit() {

    this.projects= this.ProjectsService.projects;

  }

  onProjectClick(project){
    
    this.clickedProject= this.projects[project];
    console.log(this.clickedProject);

    this.ProjectsService.subject.next(this.clickedProject);
  }

}
