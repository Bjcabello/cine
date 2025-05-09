import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Pelicula {
  id: number;
  nombre: string;
  duracion: number;
}

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  imports: [FormsModule, NgFor], // Aquí puedes agregar los módulos que necesites importar
})
export class PeliculasComponent {
  peliculas: Pelicula[] = [];
  pelicula: Partial<Pelicula> = {};
  siguienteId: number = 1;

  guardarPelicula() {
    if (this.pelicula.id != null) {
      // Editar película
      const index = this.peliculas.findIndex(p => p.id === this.pelicula.id);
      if (index !== -1) {
        this.peliculas[index] = this.pelicula as Pelicula;
      }
    } else {
      // Agregar nueva película
      this.pelicula.id = this.siguienteId++;
      this.peliculas.push(this.pelicula as Pelicula);
    }
    this.cancelar();
  }

  editar(p: Pelicula) {
    this.pelicula = { ...p };
  }

  cancelar() {
    this.pelicula = {};
  }
}
