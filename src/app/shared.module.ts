import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { BaseChartDirective } from 'ng2-charts';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatSelectModule,  // Import and export MatSelectModule
    MatOptionModule,  // Import and export MatOptionModule
    RouterModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule { }
