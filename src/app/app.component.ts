import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TimePickerComponent } from './time-picker/picker';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'time-picker';

  constructor(private dialog: MatDialog)
  {

  }

  openTimePicker()
  {
    this.dialog.open(TimePickerComponent, {
      backdropClass: 'none',
      panelClass: 'custom-dialog-no-padding'
    });
  }
}
