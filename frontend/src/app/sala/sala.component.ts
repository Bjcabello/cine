import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Sala, SalaService } from '../services/sala.service';

@Component({
  selector: 'app-sala',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sala.component.html',
  styleUrls: ['./sala.component.css']
})
export class SalaComponent implements OnInit {
  salas: Sala[] = [];

  constructor(private salaService: SalaService) {}

  ngOnInit(): void {
    this.obtenerSalas();
  }

  obtenerSalas(): void {
    this.salaService.getSalas().subscribe(data => {
      this.salas = data;
    });
  }
}
