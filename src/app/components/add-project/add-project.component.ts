import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  addProjectShow:boolean= false;
  defaultSelect:string="teacher"
  constructor() { }

  ngOnInit() {
  }

  addNewProjectBtn(){
    this.addProjectShow = !this.addProjectShow;
  }

  onAddNewProjectSubmit(form){
    console.log(form);
  }

}
