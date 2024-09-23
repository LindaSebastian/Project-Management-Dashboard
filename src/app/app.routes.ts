import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';

export const routes: Routes = [
    {path:'dashboard',component: DashboardComponent},
    {path:'dashboard/project-list',component: ProjectListComponent},
    {path:'dashboard/details/:id',component: ProjectDetailsComponent},
    {path:'',redirectTo: 'dashboard', pathMatch: 'full'},
    {path: '**', redirectTo: '/dashboard' },
];
