import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Asignacion {
  id_pelicula_sala: number;
  id_pelicula: number;
  id_sala_cine: number;
  fecha_publicacion: string;
  fecha_fin: string;
}

@Injectable({
  providedIn: 'root'
})
export class AsignacionService {
  private apiUrl = 'http://localhost:3000/api/asignaciones';

  constructor(private http: HttpClient) {}

  getAsignaciones(): Observable<Asignacion[]> {
    return this.http.get<Asignacion[]>(this.apiUrl);
  }

  createAsignacion(asignacion: Partial<Asignacion>): Observable<any> {
    return this.http.post(this.apiUrl, asignacion);
  }

  deleteAsignacion(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
