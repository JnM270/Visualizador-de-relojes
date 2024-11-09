import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lbar-clock',
  standalone: true,
  imports: [],
  templateUrl: './lbar-clock.component.html',
  styleUrl: './lbar-clock.component.css'
})
export class LbarClockComponent implements OnInit {

  public segundos: number = 0;
  public minutos: number = 0;
  public horas: number = 0;

  constructor() { }

  ngOnInit() {
    this.updateTime();
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  updateTime() {
    const now = new Date();
    this.segundos = now.getSeconds();
    this.minutos = now.getMinutes();
    this.horas = now.getHours();
  }
}