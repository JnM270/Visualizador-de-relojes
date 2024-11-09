import { Component } from '@angular/core';

@Component({
  selector: 'app-tv-clock',
  standalone: true,
  imports: [],
  templateUrl: './tv-clock.component.html',
  styleUrl: './tv-clock.component.css'
})
export class TvClockComponent {
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
    this.hora = now.getHours();
    this.min = now.getMinutes();
    this.seg = now.getSeconds();
  }

  formatNumber(num: number): string {
    return num < 10 ? '0' + num : num.toString();
  }
}

