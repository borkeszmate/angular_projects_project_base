import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../../services/projects.service';
import { Project } from '../../Models/Projects/ProjectsModel';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {

  project: Project  ={
    name:'',
    body:'',
    picture:''
  };
  
  constructor(private ProjectsService: ProjectsService) { }

  ngOnInit() {
    this.ProjectsService.subject.subscribe((project)=>{
      this.project = project;
      console.log(this.project);
    });
  }

}
