import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bubble-clock',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './bubble-clock.component.html',
  styleUrl: './bubble-clock.component.css'
})
export class BubbleClockComponent implements OnInit {
  
  segundos: boolean[] = new Array(60).fill(true);
  minutos: boolean[] = new Array(60).fill(true);
  horas: boolean[] = new Array(24).fill(true);
  
  ngOnInit() {
    this.updateBubbles();
    setInterval(() => {
      this.updateBubbles();
    }, 1000);
  }

  updateBubbles() {
    const now = new Date();

    const segundo = now.getSeconds();
    this.segundos = this.segundos.map((_, index) => index > segundo);

    const minuto = now.getMinutes();
    this.minutos = this.minutos.map((_, index) => index > minuto);

    const hora = now.getHours();
    this.horas = this.horas.map((_, index) => index > hora);
   }
}
