import { Component, OnInit } from '@angular/core';
import { MascotaService } from '../../services/mascota.service';
import { TipoAtencionService } from '../../services/tipo-atencion.service';
import {FormsModule} from "@angular/forms";
import {NgForOf} from "@angular/common";
import * as http from "node:http";
import {AtencionService} from "../../services/atencion.service";
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro-atencion',
  templateUrl: './registro-atencion.component.html',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf,
  ],
  styleUrls: ['./registro-atencion.component.css']
})
export class RegistroAtencionComponent implements OnInit {
  mascotas: any[] = [];
  tiposAtencion: any[] = [];
  selectedMascota: string = '';
  selectedTipoAtencion: string = '';
  fechaAtencion: Date | null = null;
  horaAtencion: string = '';

  constructor(
    private mascotaService: MascotaService,
    private tipoAtencionService: TipoAtencionService,
    private atencionService: AtencionService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.mascotaService.getMascotas().subscribe(data => {
      this.mascotas = data;
    });

    this.tipoAtencionService.getTiposAtencion().subscribe(data => {
      this.tiposAtencion = data;
    });
  }

  onSubmit(): void {
    const registro = {
      codigoMascota: this.selectedMascota,
      tipoAtencion: this.selectedTipoAtencion,
      fechaAtencion: this.fechaAtencion,
      hora: this.horaAtencion,
      estado: 'pendiente'
    };
    const ans = this.atencionService.crearAtencion(registro);
    console.log('Registro enviado:', registro);
    console.log('Fecha seleccionada:', this.fechaAtencion);
    console.log('Respuesta:', ans.subscribe(data => console.log(data)));
  }
  onConsultar(): void {
    this.router.navigate(['/listar']);
  }
}
