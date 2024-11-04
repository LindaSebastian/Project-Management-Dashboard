import { Component } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { Project } from '../models/project-interface';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { SharedModule } from '../shared.module';
@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './project-list.component.html',
  styleUrl: './project-list.component.scss'
})
export class ProjectListComponent {
  projects: Project[] = [];
  filteredProjects: Project[] = [];
  selectedStatus: string = 'All';
  selected = 'All';
  constructor(private projectService : ProjectService){
  }

  ngOnInit(){
    this.projects = this.projectService.getProjects();
    this.filteredProjects = this.projects;
  }

  filterByStatus(event:any) {
    this.selected = event;
    if(event == 'All') {
      this.filteredProjects = this.projects;
    } else {
      this.filteredProjects = this.projects.filter((ele)=>ele.status == event);
    }
  }

  getAltText(imageLabel : string | undefined) {
    return imageLabel ? imageLabel.split('.')[0] : 'Project'
  }

  get imageP() {
    return "j";
  }
}
