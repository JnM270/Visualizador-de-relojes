import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { LbarClockComponent } from "../lbar-clock/lbar-clock.component";
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { TvClockComponent } from '../tv-clock/tv-clock.component';

@Component({
  selector: 'app-clock-selector',
  standalone: true,
  imports: [CommonModule, AnalogClockComponent, DigitalClockComponent, TvClockComponent, LbarClockComponent],
  template: `
    <select (change)="onClockChange($event)">
      <option *ngFor="let clock of clocks" [value]="clock">{{ clock }}</option>
    </select>
    <ng-container [ngSwitch]="selectedClock"> <!--Relojes agregados en el selector-->
      <app-digital-clock *ngSwitchCase="'Digital'"></app-digital-clock>
      <app-lbar-clock *ngSwitchCase="'Barra de carga'"></app-lbar-clock>
      <app-analog-clock *ngSwitchCase="'Analógico'"></app-analog-clock>
      <app-tv-clock *ngSwitchCase="'Televisión'"></app-tv-clock>
      
    </ng-container>`
  
})
export class ClockSelectorComponent {
  clocks = ['Digital', 'Barra de carga', 'Analógico', 'Televisión']; // Relojes disponibles
  selectedClock = 'Digital'; 

  onClockChange(event: any) {
    this.selectedClock = event.target.value;
  }
}
