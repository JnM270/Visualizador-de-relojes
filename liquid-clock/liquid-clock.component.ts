import { NgStyle } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-liquid-clock',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './liquid-clock.component.html',
  styleUrl: './liquid-clock.component.css'
})
export class LiquidClockComponent implements OnInit, OnDestroy {
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

    // Actualizar el llenado de los envases
    this.segundos = (now.getSeconds() / 60) * 100;
    this.minutos = (now.getMinutes() / 60) * 100;
    this.horas = (now.getHours() / 24) * 100;
  }
}