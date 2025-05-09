import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

interface Sala {
  id: number;
  nombre: string;
  estado: 'disponible' | 'ocupada';
}

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  imports: [FormsModule, NgFor], // Aquí puedes agregar los módulos que necesites importar
})
export class SalasComponent {
  salas: Sala[] = [];
  sala: Partial<Sala> = {};
  siguienteId: number = 1;

  guardarSala() {
    if (this.sala.id != null) {
      const index = this.salas.findIndex(s => s.id === this.sala.id);
      if (index !== -1) {
        this.salas[index] = this.sala as Sala;
      }
    } else {
      this.sala.id = this.siguienteId++;
      this.salas.push(this.sala as Sala);
    }
    this.cancelar();
  }

  editar(s: Sala) {
    this.sala = { ...s };
  }

  cancelar() {
    this.sala = {};
  }
}
