import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { TimeSliderComponent } from './time-slider/time-slider.component';
import {ClockSelectorComponent} from './clock-selector/clock-selector.component';
import { CommonModule } from '@angular/common';
import { LbarClockComponent } from './lbar-clock/lbar-clock.component';
import { AnalogClockComponent } from './analog-clock/analog-clock.component';
import { TvClockComponent } from './tv-clock/tv-clock.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ RouterOutlet, DigitalClockComponent, AnalogClockComponent, TvClockComponent, TimeSliderComponent, ClockSelectorComponent, CommonModule, LbarClockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyReloj';
}
