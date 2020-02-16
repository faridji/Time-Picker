import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,

    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule
  ],
  exports: [
    FlexLayoutModule,

    MatButtonModule,
    MatInputModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatDividerModule,
    MatIconModule
  ]
})
export class MaterialModule { }
