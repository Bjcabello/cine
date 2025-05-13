import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalSalas: number = 0;
  salasDisponibles: number = 0;
  totalPeliculas: number = 0;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerIndicadores();
  }

  obtenerIndicadores(): void {
    this.http.get<any>('http://localhost:3000/dashboard/indicadores')
      .subscribe(data => {
        this.totalSalas = data.totalSalas;
        this.salasDisponibles = data.salasDisponibles;
        this.totalPeliculas = data.totalPeliculas;
      });
  }
}
