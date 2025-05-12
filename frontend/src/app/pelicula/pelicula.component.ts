import { Component, OnInit } from '@angular/core';
import { PeliculaService, Pelicula } from '../services/pelicula.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pelicula',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {
  peliculas: Pelicula[] = [];
  nuevaPelicula: Partial<Pelicula> = {};
  editando: Pelicula | null = null;

  constructor(private peliculaService: PeliculaService) {}

  ngOnInit(): void {
    this.cargarPeliculas();
  }

  cargarPeliculas(): void {
    this.peliculaService.getPeliculas().subscribe(data => {
      this.peliculas = data;
    });
  }

  guardarPelicula(): void {
    if (this.editando) {
      this.peliculaService.updatePelicula(this.editando.id_pelicula, this.nuevaPelicula).subscribe(() => {
        this.editando = null;
        this.nuevaPelicula = {};
        this.cargarPeliculas();
      });
    } else {
      this.peliculaService.createPelicula(this.nuevaPelicula).subscribe(() => {
        this.nuevaPelicula = {};
        this.cargarPeliculas();
      });
    }
  }

  editarPelicula(pelicula: Pelicula): void {
    this.editando = pelicula;
    this.nuevaPelicula = { ...pelicula };
  }

  eliminarPelicula(id: number): void {
    this.peliculaService.deletePelicula(id).subscribe(() => {
      this.cargarPeliculas();
    });
  }

  cancelar(): void {
    this.editando = null;
    this.nuevaPelicula = {};
  }
}
