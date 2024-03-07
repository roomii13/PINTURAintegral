import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-carrusel',
  standalone: true,
  imports: [ CarouselModule],
  templateUrl: './carrusel.component.html',
  styleUrl: './carrusel.component.css'
})

export class CarruselComponent {
  title = 'GFG';

    images: any[] = [
        {
            previewImageSrc: 'assets/uno.jpg',
            thumbnailImageSrc: 'assets/uno.jpg',
            alt: 'trabajos',
            title: 'Pintura Integral'
        },
        {
          previewImageSrc: 'assets/dos.jpg',
          thumbnailImageSrc: 'assets/dos.jpg',
          alt: 'trabajos',
          title: 'Pintura Integral'
      },
      {
        previewImageSrc: 'assets/tres.jpg',
        thumbnailImageSrc: 'assets/tres.jpg',
        alt: 'trabajos',
        title: 'Pintura Integral'
    },
  {
    previewImageSrc: 'assets/cinco.jpg',
    thumbnailImageSrc: 'assets/cinco.jpg',
    alt: 'trabajos',
    title: 'Pintura Integral'
},
{
  previewImageSrc: 'assets/seis.jpg',
  thumbnailImageSrc: 'assets/seis.jpg',
  alt: 'trabajos',
  title: 'Pintura Integral'
},
{
  previewImageSrc: 'assets/siete.jpg',
  thumbnailImageSrc: 'assets/siete.jpg',
  alt: 'trabajos',
  title: 'Pintura Integral'
},

{
  previewImageSrc: 'assets/diez.jpg',
  thumbnailImageSrc: 'assets/diez.jpg',
  alt: 'trabajos',
  title: 'Pintura Integral'
},



    ];
    responsiveOptions: any[] = [
        {
            breakpoint: '768px',
            numVisible: 2,
            numScroll: 2
        }
    ]

}
