import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private apiUrl = 'http://localhost:8080/api/mascotas';

  constructor(private http: HttpClient) { }

  getMascotas(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
