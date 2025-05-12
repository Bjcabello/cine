// src/app/services/sala.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Sala {
  id_sala: number;
  nombre: string;
  estado: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class SalaService {
  private apiUrl = 'http://localhost:3000/api/salas'; // cambia si tu backend está en otro puerto o URL

  constructor(private http: HttpClient) {}

  getSalas(): Observable<Sala[]> {
    return this.http.get<Sala[]>(this.apiUrl);
  }

  crearSala(sala: Sala): Observable<Sala> {
    return this.http.post<Sala>(this.apiUrl, sala);
  }

  actualizarSala(id: number, sala: Sala): Observable<Sala> {
    return this.http.put<Sala>(`${this.apiUrl}/${id}`, sala);
  }

  eliminarSala(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
