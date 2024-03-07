import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BarraSuperiorComponent } from './barra-superior/barra-superior.component';
import {SeccionUnoComponent} from './seccion-uno/seccion-uno.component';
import {SeccionDosComponent} from './seccion-dos/seccion-dos.component';
import {CarruselComponent}   from './carrusel/carrusel.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BarraSuperiorComponent, SeccionUnoComponent, SeccionDosComponent,CarruselComponent,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PinturaIntegral';
}
