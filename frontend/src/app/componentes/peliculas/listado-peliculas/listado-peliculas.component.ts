import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-peliculas',
  imports: [NgFor],
  templateUrl: './listado-peliculas.component.html',
  styleUrl: './listado-peliculas.component.css',
})
export class ListadoPeliculasComponent {
  peliculas = [
    { nombre: 'Titanic', fecha_publicacion: '1997-12-19' },
    { nombre: 'Avatar', fecha_publicacion: '2009-12-18' },
    { nombre: 'El Padrino', fecha_publicacion: '1972-03-24' },
  ];
}
