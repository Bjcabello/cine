import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Asignacion {
  pelicula: string;
  sala: string;
  fecha: string;
}

@Component({
  selector: 'app-asignacion',
  templateUrl: './asignacion.component.html',
  imports: [NgFor, FormsModule],
})
export class AsignacionComponent {
  peliculas = ['Titanic', 'Avengers', 'Avatar'];
  salas = ['Sala 1', 'Sala 2', 'Sala 3'];

  asignacion: Partial<Asignacion> = {};
  asignaciones: Asignacion[] = [];

  asignar() {
    if (this.asignacion.pelicula && this.asignacion.sala && this.asignacion.fecha) {
      this.asignaciones.push(this.asignacion as Asignacion);
      this.cancelar();
    }
  }

  cancelar() {
    this.asignacion = {};
  }
}
