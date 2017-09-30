import { NgModule } from '@angular/core';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatToolbarModule,
  MatMenuModule,
  MatListModule,
  MatTooltipModule,
  MatSidenavModule,
  MatIconModule,
  MatInputModule,
  MatCardModule
} from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatMenuModule,
    MatListModule,
    MatTooltipModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatCardModule
  ]
})
export class MateriaDesignModule { }
