import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-gauge-clock',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './gauge-clock.component.html',
  styleUrl: './gauge-clock.component.css'
})
export class GaugeClockComponent {

  segundos: number = 0;
  minutos: number = 0;
  horas: number = 0;
  clockInterval: any;

  constructor() { }

  ngOnInit() {
    this.updateClock();
    this.clockInterval = setInterval(() => {
      this.updateClock();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }

  updateClock() {
    const now = new Date();
    this.segundos = now.getSeconds();
    this.minutos = now.getMinutes();
    this.horas = now.getHours();
  }

  convertToDegrees(val: number, max: number): number {
    return (val / max) * 180;
  }
}