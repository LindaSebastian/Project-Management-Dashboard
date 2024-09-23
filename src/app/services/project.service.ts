import { Injectable } from '@angular/core';
import { PROJECTS } from '../models/project-constants';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }

  getProjects() {
    return PROJECTS;
  }

  getProjectNames() {
    let projectNames: any[] = [];
    PROJECTS.forEach((project)=> {
      projectNames.push(project.name)
    });
    return projectNames;
  }

  getProjectDetails(id:number) {
    return PROJECTS.find((project)=> project.id == id)
  }
}
