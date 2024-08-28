import { Component } from '@angular/core';
import { AtencionService } from '../../services/atencion.service';
import {NgForOf, NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-consulta-atencion',
  templateUrl: './consulta-atencion.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    FormsModule
  ],
  styleUrls: ['./consulta-atencion.component.css']
})
export class ConsultaAtencionComponent {
  fechaAtencion: string = '';
  atenciones: any[] = [];

  constructor(private atencionService: AtencionService) { }

  consultarAtenciones(): void {
    if (this.fechaAtencion) {
      this.atencionService.getAtencionesPorFecha(this.fechaAtencion).subscribe(data => {
        this.atenciones = data;
      });
    }
  }

  eliminarAtencion(codigo: string): void {
    this.atencionService.eliminarAtencion(codigo).subscribe(() => {
      this.atenciones = this.atenciones.filter(atencion => atencion.codigo !== codigo);
    });
  }
}
