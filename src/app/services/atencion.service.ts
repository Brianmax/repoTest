import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AtencionService {

  private apiUrl = 'http://127.0.0.1:8080/api/atenciones';

  constructor(private http: HttpClient) { }

  getAtencionesPorFecha(fecha: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/fecha?fecha=${fecha}`);
  }

  eliminarAtencion(codigo: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${codigo}`);
  }
  crearAtencion(atencion: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}`, atencion, { headers });
  }
}
