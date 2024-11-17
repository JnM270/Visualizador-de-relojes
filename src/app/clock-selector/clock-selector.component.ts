import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
import { DigitalClockComponent } from '../digital-clock/digital-clock.component';
import { LbarClockComponent } from "../lbar-clock/lbar-clock.component";
import { AnalogClockComponent } from '../analog-clock/analog-clock.component';
import { TvClockComponent } from '../tv-clock/tv-clock.component';
import { BubbleClockComponent } from "../bubble-clock/bubble-clock.component";
import { LightClockComponent } from '../light-clock/light-clock.component';
import { LiquidClockComponent } from '../liquid-clock/liquid-clock.component';
import { GaugeClockComponent } from '../gauge-clock/gauge-clock.component';
import { LbarCircularClockComponent } from '../lbar-circular-clock/lbar-circular-clock.component';
import { ChameleonClockComponent } from '../chameleon-clock/chameleon-clock.component';



@Component({
  selector: 'app-clock-selector',
  standalone: true,
  imports: [CommonModule, AnalogClockComponent, LbarCircularClockComponent, ChameleonClockComponent, GaugeClockComponent, DigitalClockComponent, LiquidClockComponent, LightClockComponent,TvClockComponent, LbarClockComponent, BubbleClockComponent],
  template: `
    <select (change)="onClockChange($event)">
      <option *ngFor="let clock of clocks" [value]="clock">{{ clock }}</option>
    </select>
    <ng-container [ngSwitch]="selectedClock"> <!--Relojes agregados en el selector-->
      <app-digital-clock *ngSwitchCase="'Digital'"></app-digital-clock>
      <app-lbar-clock *ngSwitchCase="'Barra de carga'"></app-lbar-clock>
      <app-analog-clock *ngSwitchCase="'Analógico'"></app-analog-clock>
      <app-tv-clock *ngSwitchCase="'Televisión'"></app-tv-clock>
      <app-bubble-clock *ngSwitchCase="'Burbujas'"></app-bubble-clock>
      <app-light-clock *ngSwitchCase="'Bombillas'"></app-light-clock>
      <app-liquid-clock *ngSwitchCase="'Envases'"></app-liquid-clock>
      <app-gauge-clock *ngSwitchCase="'Gauge'"></app-gauge-clock>
      <app-lbar-circular-clock *ngSwitchCase="'Barra de carga circular'"></app-lbar-circular-clock>
      <app-chameleon-clock *ngSwitchCase="'Camaleón'"></app-chameleon-clock>
    </ng-container>`
  
})
export class ClockSelectorComponent {
  clocks = ['Digital', 'Analógico','Barra de carga', 'Barra de carga circular', 'Televisión', 'Burbujas', 'Bombillas', 'Envases', 'Gauge', 'Camaleón' ]; // Relojes disponibles
  selectedClock = 'Digital'; 

  onClockChange(event: any) {
    this.selectedClock = event.target.value;
  }
}
