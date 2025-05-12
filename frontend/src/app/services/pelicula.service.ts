import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Pelicula {
  id_pelicula: number;
  nombre: string;
  duracion: number;
}

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'http://localhost:3000/peliculas';

  constructor(private http: HttpClient) {}

  getPeliculas(): Observable<Pelicula[]> {
    return this.http.get<Pelicula[]>(this.apiUrl);
  }

  createPelicula(pelicula: Partial<Pelicula>): Observable<any> {
    return this.http.post(this.apiUrl, pelicula);
  }

  updatePelicula(id: number, pelicula: Partial<Pelicula>): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, pelicula);
  }

  deletePelicula(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
