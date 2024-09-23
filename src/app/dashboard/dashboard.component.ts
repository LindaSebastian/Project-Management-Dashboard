import { Component } from '@angular/core';
import { ProjectDetailsComponent } from '../project-details/project-details.component';
import { ProjectListComponent } from '../project-list/project-list.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { routes } from '../app.routes';
import { BaseChartDirective } from 'ng2-charts';
import { ArcElement, ChartData, ChartOptions, Legend, Tooltip } from 'chart.js';
import Chart from 'chart.js';
import { ProjectService } from '../services/project.service';
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports:[
    RouterModule,
    CommonModule,
    ProjectDetailsComponent,
    ProjectListComponent,
    BaseChartDirective
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [
      {
        data: [30, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'], 
      },
    ],
  };
  pieChartOptions: ChartOptions<'pie'> = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
      },
      title: {
        display: true,
        text: 'Project Chart', 
        font: {
          size: 18, 
        },
      },
    }
  };

  constructor(private projectService : ProjectService){
    this.pieChartData.labels = this.projectService.getProjectNames();
  }
  }