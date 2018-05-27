import { Injectable } from '@angular/core';
import { Project} from '../Models/Projects/ProjectsModel';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ProjectsService {

  subject: Subject<any> = new Subject;
  projects: Project[] = [
    {
    name: 'Az első projektem',
    body: 'Az első projektem hosszabb leírása',
    picture: 'https://codecondo.com/wp-content/uploads/2015/05/15-Directives-to-Extend-Your-Angular.js-Apps.jpg'
  },
    {
      name: 'Az második projektek',
      body: 'Az harmadik projektem hosszabb leírása',
      picture: 'https://pbs.twimg.com/profile_images/68979870/php_400x400.png'
    }
];
  constructor() { 

  }

  

}
