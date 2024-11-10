import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import { TimeSliderComponent } from '../time-slider/time-slider.component';
 
@Component({
  selector: 'app-digital-clock',
  standalone: true,
 // imports: [TimeSliderComponent],
  templateUrl: './digital-clock.component.html',
  styleUrl: './digital-clock.component.css'
})
export class DigitalClockComponent implements OnInit{
  
    private dato = Date();
    public hora: any;
    public min: string;
    public seg: string;
    public ampm: string;
   
    constructor() { 

      this.hora = '';
      this.min = '';
      this.seg = '';
      this.ampm = '';
    }
    
    ngOnInit() {
      setInterval(( ) => {
        const dato = new Date();

        this.updateDate(dato);
      }, 1000);
    }
     
    private updateDate(dato: Date) {
    const horas = dato.getHours();
    this.ampm = horas >= 12? 'PM' : 'AM';
    this.hora = horas % 12;
    this.hora = this.hora ? this.hora: 12;
    this.hora = this.hora < 10 ? '0' + this.hora: this.hora;
  
    const minutos = dato.getMinutes();
    this.min = minutos < 10 ? '0' + minutos: minutos.toString();

    const segundos = dato.getSeconds();
    this.seg = segundos < 10 ? '0' + segundos: segundos.toString();
     }
    }

@Component({
  selector: 'app-time-slider',
  template: `<input>type, "range": min = "0", max = "23"(input) = "onSliderChange($event)" / >`

})
export class TimeSliderComponent {
  @Output() hourChange = new EventEmitter<number>();

  onSliderChange(event: any) {
    const newValue = +event.target.value;
    this.hourChange.emit(newValue);
  }
}


