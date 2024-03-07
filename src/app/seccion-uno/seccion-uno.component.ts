import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-bootstrap/carousel';


@Component({
  selector: 'app-seccion-uno',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './seccion-uno.component.html',
  styleUrls: ['./seccion-uno.component.css'],
})
export class SeccionUnoComponent {
  images: string[] = [ 
    '../assets/uno.jpg',
    '../assets/dos.jpg',
    '../assets/tres.jpg',
    '../assets/cuatro.jpg',
    '../assets/cinco.jpg',
    '../assets/seis.jpg',
    '../assets/siete.jpg',
    '../assets/ocho.jpg',
    '../assets/nuevo.jpg',
    '../assets/diez.jpg',
    '../assets/once.jpg',
    '../assets/doce.jpg',
    '../assets/trece.jpg',
    '../assets/catorce.jpg',
    '../assets/quince.jpg',
    '../assets/16.jpg',
    '../assets/17.jpg',
    '../assets/18.jpg',
    '../assets/19.jpg',
    '../assets/20.jpg',
    '../assets/21.jpg'  ];

}
