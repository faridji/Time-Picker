import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimePickerComponent } from './picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';


@NgModule({
    imports: [
        FormsModule,
        ReactiveFormsModule,
        CommonModule,

        MaterialModule,
    ],
    declarations: [
        TimePickerComponent
    ],
    exports: [
        TimePickerComponent
    ]
})
export class TimePickerModule { }