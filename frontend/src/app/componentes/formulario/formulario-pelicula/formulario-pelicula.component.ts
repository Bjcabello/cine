import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-formulario-pelicula',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './formulario-pelicula.component.html',
  styleUrl: './formulario-pelicula.component.css'
})
export class FormularioPeliculaComponent {

  movieForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.movieForm = this.fb.group({
      name: ['', Validators.required],
      duration: [null, [Validators.required, Validators.min(1)]],

    });
  }

  onSubmit(): void {
    if (this.movieForm.valid) {
      console.log('Datos del formulario:', this.movieForm.value);
      alert('Película registrada correctamente.');
      this.movieForm.reset(); 
    } else {
      this.movieForm.markAllAsTouched();
    }
  }


}
