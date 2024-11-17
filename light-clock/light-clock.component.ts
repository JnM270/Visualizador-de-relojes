import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-light-clock',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './light-clock.component.html',
  styleUrl: './light-clock.component.css'
})
export class LightClockComponent {

  segundos: boolean[] = new Array(60).fill(false);
  minutos: boolean[] = new Array(60).fill(false);
  horas: boolean[] = new Array(24).fill(false);
  clockInterval: any;

  constructor() { }

  ngOnInit() {
    this.updateBubbles();
    this.clockInterval = setInterval(() => {
      this.updateBubbles();
    }, 1000);
  }

  ngOnDestroy() {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
    }
  }

  updateBubbles() {
    const now = new Date();

    this.segundos.fill(false);
    this.segundos[now.getSeconds()] = true;

    this.minutos.fill(false);
    this.minutos[now.getMinutes()] = true;

    let horaB = now.getHours();
    if (horaB > 24) horaB -= 24;
    this.horas.fill(false);
    this.horas[horaB] = true;
      }
    }
  


