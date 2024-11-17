import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lbar-circular-clock',
  standalone: true,
  imports: [],
  templateUrl: './lbar-circular-clock.component.html',
  styleUrl: './lbar-circular-clock.component.css'
})
export class LbarCircularClockComponent implements OnInit {
 
  segundos = 0;
  minutos = 0;
  horas = 0;

  ngOnInit() {
    this.updateTime();
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime() {
    const now = new Date();
    this.segundos = (now.getSeconds() / 60) * 100;
    this.minutos = (now.getMinutes() / 60) * 100;
    this.horas = ((now.getHours()) / 24) * 100;
  }
}