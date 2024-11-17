import { Component } from '@angular/core';

@Component({
  selector: 'app-chameleon-clock',
  standalone: true,
  imports: [],
  templateUrl: './chameleon-clock.component.html',
  styleUrl: './chameleon-clock.component.css'
})
export class ChameleonClockComponent {
  img: string[] = [
    'img/camaleon/cml1.jpg', 'img/camaleon/cml2.jpg', 'img/camaleon/cml3.jpg',
    'img/camaleon/cml4.jpg', 'img/camaleon/cml5.jpg', 'img/camaleon/cml6.jpg',
    'img/camaleon/cml7.jpg', 'img/camaleon/cml8.jpg', 'img/camaleon/cml9.jpg',
    'img/camaleon/cml10.jpg', 'img/camaleon/cml11.jpg', 'img/camaleon/cml12.jpg',
    'img/camaleon/cml13.jpg', 'img/camaleon/cml14.jpg', 'img/camaleon/cml15.jpg',
    'img/camaleon/cml16.jpg', 'img/camaleon/cml17.jpg', 'img/camaleon/cml18.jpg',
    'img/camaleon/cml19.jpg', 'img/camaleon/cml20.jpg', 'img/camaleon/cml21.jpg',
    'img/camaleon/cml22.jpg', 'img/camaleon/cml23.jpg', 'img/camaleon/cml24.jpg',
    'img/camaleon/cml25.jpg', 'img/camaleon/cml26.jpg', 'img/camaleon/cml27.jpg',
    'img/camaleon/cml28.jpg', 'img/camaleon/cml29.jpg', 'img/camaleon/cml30.jpg',
  ];

  segundoImg: string = this.img[0];
  minutoImg: string = this.img[0];
  horaImg: string = this.img[0];

  selecHora: number = 0;
  selecMin: number = 0;

  ngOnInit() {
    this.updateImages();
    setInterval(() => this.updateImages(), 1000); // Actualiza cada segundo
  }

  updateImages() {
    const now = new Date();
    this.segundoImg = this.img[now.getSeconds() % 30];
    this.minutoImg = this.img[now.getMinutes() % 30];
    this.horaImg = this.img[now.getHours() % 30];
  }
}

