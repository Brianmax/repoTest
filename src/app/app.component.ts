import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {RegistroAtencionComponent} from "./components/registro-atencion/registro-atencion.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RegistroAtencionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'registro-mascotas';
}
