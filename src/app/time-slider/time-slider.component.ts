import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-time-slider',
  standalone: true,
  imports: [],
  template: `
    <input type="range" [min]="min" [max]="max" (input)="onSliderChange($event)" />`
  
})
export class TimeSliderComponent {
  
  @Input() min = 0;
  @Input() max = 23;
  @Output() valueChange = new EventEmitter<number>();

  onSliderChange(event: any) {
    const newVal = +event.target.value;
    this.valueChange.emit(newVal);
  }
}
