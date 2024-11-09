import { NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-analog-clock',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './analog-clock.component.html',
  styleUrl: './analog-clock.component.css'
})
export class AnalogClockComponent implements OnInit, OnDestroy {

    hora: number;
    min: number;
    seg: number;
    clockInterval: any;

  constructor() {
    this.hora = 0;
    this.min = 0;
    this.seg = 0;
  }

  ngOnInit() {
    this.updateClock();
    this.clockInterval = setInterval(() => this.updateClock(), 1000);
  }

  ngOnDestroy() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }

  updateClock() {
    const now = new Date();
    this.hora = now.getHours() % 12;
    this.min = now.getMinutes();
    this.seg = now.getSeconds();
  }
}
