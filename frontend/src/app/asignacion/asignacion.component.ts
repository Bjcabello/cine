import { Component, OnInit } from '@angular/core';
import { AsignacionService, Asignacion } from '../services/asignacion.service';
import { PeliculaService, Pelicula } from '../services/pelicula.service';
import { SalaService, Sala } from '../services/sala.service';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-asignacion',
  imports: [FormsModule, NgFor],
  templateUrl: './asignacion.component.html',
  styleUrls: ['./asignacion.component.css']
})
export class AsignacionComponent implements OnInit {
  asignaciones: Asignacion[] = [];
  peliculas: Pelicula[] = [];
  salas: Sala[] = [];

  nuevaAsignacion: Partial<Asignacion> = {};

  constructor(
    private asignacionService: AsignacionService,
    private peliculaService: PeliculaService,
    private salaService: SalaService
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos(): void {
    this.asignacionService.getAsignaciones().subscribe(data => this.asignaciones = data);
    this.peliculaService.getPeliculas().subscribe(data => this.peliculas = data);
    this.salaService.getSalas().subscribe(data => this.salas = data);
  }

  asignar(): void {
    if (
      this.nuevaAsignacion.id_pelicula &&
      this.nuevaAsignacion.id_sala_cine &&
      this.nuevaAsignacion.fecha_publicacion &&
      this.nuevaAsignacion.fecha_fin
    ) {
      this.asignacionService.createAsignacion(this.nuevaAsignacion).subscribe(() => {
        this.nuevaAsignacion = {};
        this.cargarDatos();
      });
    }
  }

  eliminar(id: number): void {
    this.asignacionService.deleteAsignacion(id).subscribe(() => {
      this.cargarDatos();
    });
  }
}
