import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';


interface Sala {
  id_sala: number;
  nombre: string;
  estado: boolean;
}

@Component({
  selector: 'app-sala',
  imports: [FormsModule, NgFor],
  templateUrl: './sala.component.html',
})
export class SalaComponent implements OnInit {
  salas: Sala[] = [];
  salaForm: Sala = { id_sala: 0, nombre: '', estado: true };
  isEditando = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.obtenerSalas();
  }

  obtenerSalas(): void {
    this.http.get<Sala[]>('http://localhost:3000/api/salas').subscribe({
      next: (data) => this.salas = data,
      error: (error) => console.error('Error al obtener salas:', error)
    });
  }

  guardarSala(): void {
    const { id_sala, nombre, estado } = this.salaForm;
    if (!nombre.trim()) {
      alert('El nombre es requerido');
      return;
    }

    if (this.isEditando) {
      this.http.put(`http://localhost:3000/api/salas/${id_sala}`, { nombre, estado }).subscribe({
        next: () => {
          this.obtenerSalas();
          this.cancelarFormulario();
          alert('Sala actualizada correctamente');
        },
        error: (error) => console.error('Error al actualizar sala:', error)
      });
    } else {
      this.http.post('http://localhost:3000/api/salas', { nombre, estado }).subscribe({
        next: () => {
          this.obtenerSalas();
          this.cancelarFormulario();
          alert('Sala creada correctamente');
        },
        error: (error) => console.error('Error al crear sala:', error)
      });
    }
  }

  seleccionarSala(sala: Sala): void {
    this.salaForm = { ...sala };
    this.isEditando = true;
  }

  cancelarFormulario(): void {
    this.salaForm = { id_sala: 0, nombre: '', estado: true };
    this.isEditando = false;
  }
}
