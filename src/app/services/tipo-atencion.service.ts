import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoAtencionService {

  private apiUrl = 'http://localhost:8080/api/tipoA';

  constructor(private http: HttpClient) { }

  getTiposAtencion(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
