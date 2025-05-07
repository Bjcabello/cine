import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  totalSalas: number = 5;
  salasDisponibles: number = 3;
  totalPeliculas: number = 10;

  constructor() {}

  ngOnInit(): void {
   
  }
}
