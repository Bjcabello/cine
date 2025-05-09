import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  totalSalas: number = 0;
  salasDisponibles: number = 0;
  totalPeliculas: number = 0;

  constructor() {}

  ngOnInit(): void {
    // Simulación de datos por ahora
    this.totalSalas = 10;
    this.salasDisponibles = 6;
    this.totalPeliculas = 15;
  }
}
