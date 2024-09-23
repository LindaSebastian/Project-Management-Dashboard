import { Component } from '@angular/core';
import { SharedModule } from '../shared.module';
import { ProjectService } from '../services/project.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Project } from '../models/project-interface';
import { PROJECTS } from '../models/project-constants';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './project-details.component.html',
  styleUrl: './project-details.component.scss'
})
export class ProjectDetailsComponent {
  projectId ?: number;
  projectDetails ?: Project;
  constructor(
    private projectService : ProjectService,
    private activatedRoute : ActivatedRoute
  ) {
  }
  
  ngOnInit(){
    this.projectId = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.projectDetails = PROJECTS.find((project)=> project.id == this.projectId);
  }
}
