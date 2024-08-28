import { Routes } from '@angular/router';
import {RegistroAtencionComponent} from "./components/registro-atencion/registro-atencion.component";
import {ConsultaAtencionComponent} from "./components/consulta-atencion/consulta-atencion.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: RegistroAtencionComponent},
  { path: 'listar', component: ConsultaAtencionComponent }
];
