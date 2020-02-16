import { Component, Input, ViewChild, ElementRef, OnInit, Output, EventEmitter, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
    selector: 'time-picker',
    templateUrl: './picker.html',
    styleUrls: ['./picker.scss'],
    
})
export class TimePickerComponent
{
    @ViewChild('hoursField', {static: true}) hoursField: ElementRef<MatInput>
    @ViewChild('minutesField') minutesField: ElementRef<MatInput>
    
    @Input() time: number = null;
    @Output() selected = new EventEmitter();
    
    timeFormat: '12hr' | '24hr';
    hours: number;
    minutes: number;

    // Validation of Time
    checkingKeyDown: boolean;
    regex: RegExp = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
    specialKeys: Array<string> = ['Backspace', 'Tab'];

    constructor(private dialog: MatDialogRef<TimePickerComponent>)
    {
        this.timeFormat = '12hr';
        this.hours = 12;
        this.minutes = 45; 

        this.checkingKeyDown = false;
    }

    onTimeFormatChange(event: any)
    {
        this.timeFormat = event.value;
    }

    onResetTime()
    {
       console.log('Clearing Time') 
    }

    incraseTime(type: string)
    {
        this.checkingKeyDown = false;
        if (type === 'hours')
        {
            this.hours += 1;
        }
        else
        {
            this.minutes += 1;
        }
    }

    decreaseTime(type: string)
    {
        this.checkingKeyDown = false;
        if (type === 'hours')
        {
            this.hours -= 1;
        }
        else
        {
            this.minutes -= 1;
        }
    }

    onFocus(event: any)
    {
        event.target.select();
        this.checkingKeyDown = false;
    }

    onTimeSelect(event: any) 
    {
        this.checkingKeyDown = false;
    }

    validateTime(event: KeyboardEvent, value: any, type: string)
    {
        let next: any = event.key;

        if (this.checkingKeyDown)
        {
            next = value.concat(event.key);
        }

        this.checkingKeyDown = true;

        // Restrict anything other than number;
        if (this.specialKeys.indexOf(event.key) !== -1)
        {
            return;
        }

        if (next && String(next).match(this.regex))
        {   
            if (type === 'hours')
            {
                if (next > 12)
                { 
                    event.preventDefault();
                    return;
                }
            }
            else 
            {
                if (next > 59)
                {
                    event.preventDefault();
                    return;
                } 
            }
        }
        else {
            event.preventDefault();
            return;
        }
    }

    
    toggleAMPM()
    {
        console.log('toggle am or pm')
    }

    onCancel()
    {
        this.dialog.close();
    }

    onSetTime()
    {
        const data = {
            hours: this.hours,
            minutes: this.minutes
        }
        this.selected.emit(data);
        this.dialog.close();
    }
}